import {useEffect, useState} from 'react';
import {axiosGet, axiosPost} from "../utils/axios.ts"
import {
    GridRowsProp,
    GridColDef,
} from '@mui/x-data-grid';
import {
    randomTraderName,
    randomId,
} from '@mui/x-data-grid-generator';
import TableCrud from "./TableCrud.tsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AutoComplete from "../utils/AutoComplete.tsx";
import * as React from "react";
import Button from "@mui/material/Button";

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
    },
];

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 180,
        editable: true
    },
    {
        field: 'id',
        headerName: 'Advisor Id',
        width: 300,
        align: 'left',
        headerAlign: 'left',
        editable: true
    }
];

export default function SpecialHandlingUser() {

    const [advisorId, setAdvisorId] = useState("");
    // const [testData, setTestData] = useState(initialRows);

    // let testData = [{label: 'The Shawshank Redemption', id: "g91796"}];

    console.log(advisorId)

    // useEffect(() => {
    //
    //     if (advisorId) {
    //         console.log("Inside useEffect");
    //         axiosGet(`localhost:8080/id=${advisorId}`)
    //             .then(response => {
    //                 console.log("Value of the response = " + response)
    //                 setTestData([{label: 'The Vivekanand Gautam', id: "g91796"}])
    //                 // setTestData(response)
    //             })
    //     }
    // }, [advisorId]);

    function handleIdChange(e) {
        if (e.target.value.length > 4) {
            setAdvisorId(e.target.value);
            console.log("Advisor id=" + advisorId)
        }
    }

    interface PlaceType {
        name: string;
        id: string
        // structured_formatting: StructuredFormatting;
    }

    const [value, setValue] = useState<PlaceType | null>(null);

    function handleSave(e) {
        e.preventDefault();
        axiosPost("http://localhost:8080", {...value})
            .then(response => {
                console.log(response)
                setRows(response)
            })
    }

    const [rows, setRows] = useState(initialRows);

    useEffect(() => {
        console.log("Rows Updated");
    }, [rows]);

    function handleClick() {
        console.log("value=" + value);
    }


    return (
        <>
            <form onSubmit={handleSave}>
                <AutoComplete url={"url"} value={value} setValue={setValue}/>

                <Button variant="contained" type="submit" onClick={handleClick}>
                    Save
                </Button>
            </form>

            <TableCrud columns1={columns} rows={rows} setRows={setRows}>
            </TableCrud>
        </>
    );
}

