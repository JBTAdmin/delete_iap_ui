import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//TODO need to see what is the use of it
import parse from 'autosuggest-highlight/parse';
import {debounce} from '@mui/material/utils';
import {axiosGet} from "./axios.ts";
import {useState} from "react";

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE';

function loadScript(src: string, position: HTMLElement | null, id: string) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = {current: null};

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}

interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}

interface PlaceType {
    name: string;
    id: string
    // structured_formatting: StructuredFormatting;
}

export default function AutoComplete({url, value, setValue}) {
    // const [value, setValue] = useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
    const loaded = React.useRef(false);

    if (typeof window !== 'undefined' && !loaded.current) {
        console.log("HERE with the data");
        if (!document.querySelector('#google-maps')) {
            axiosGet("http://localhost")
                .then(response => console.log("Response Recieve- " + response))
        }

        loaded.current = true;
    }

    // const fetch = React.useMemo(
    //     () =>
    //         debounce(
    //             (
    //                 request: { input: string },
    //                 callback: (results?: readonly PlaceType[]) => void,
    //             ) => {
    //                 (autocompleteService.current as any).getPlacePredictions(
    //                     request,
    //                     callback,
    //                 );
    //             },
    //             400,
    //         ),
    //     [],
    // );

    React.useEffect(() => {

        let active = true;

        // if (!autocompleteService.current && (window as any).google) {
        //     autocompleteService.current = new (
        //         window as any
        //     ).google.maps.places.AutocompleteService();
        // }


        // if (!autocompleteService.current) {
        //     return undefined;
        // }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        axiosGet(url, {value: inputValue})
            .then(response => {
                console.log("Her ein axios resposn")
                setOptions(response);
            })


        // fetch({input: inputValue}, (results?: readonly PlaceType[]) => {
        //     if (active) {
        //         let newOptions: readonly PlaceType[] = [];
        //
        //         if (value) {
        //             newOptions = [value];
        //         }
        //
        //         if (results) {
        //             newOptions = [...newOptions, ...results];
        //         }
        //
        //         setOptions(newOptions);
        //     }
        // });

        return () => {
            active = false;
        };
    }, [inputValue]);

    return (
        <Autocomplete
            id="google-map-demo"
            sx={{width: 300}}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.name
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No Advisor Id"
            onChange={(event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label="Add a Advisor Id" fullWidth/>
            )}
            // renderOption={(props, option) => {
            //     const matches =
            //         options || [];
            //
            //     const parts = parse(
            //         options[0].name,
            //         matches.map((match: any) => [match.offset, match.offset + match.length]),
            //     );
            //
            //     return (
            //         <li {...props}>
            //             <Grid container alignItems="center">
            //                 <Grid item sx={{display: 'flex', width: 44}}>
            //                     <LocationOnIcon sx={{color: 'text.secondary'}}/>
            //                 </Grid>
            //                 <Grid item sx={{width: 'calc(100% - 44px)', wordWrap: 'break-word'}}>
            //                     {parts.map((part, index) => (
            //                         <Box
            //                             key={index}
            //                             component="span"
            //                             sx={{fontWeight: part.highlight ? 'bold' : 'regular'}}
            //                         >
            //                             {part.text}
            //                         </Box>
            //                     ))}
            //                     <Typography variant="body2" color="text.secondary">
            //                         {option}
            //                     </Typography>
            //                 </Grid>
            //             </Grid>
            //         </li>
            //     );
            // }}
        />
    );
}
