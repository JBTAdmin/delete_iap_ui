import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {useState} from "react";
import {axiosPost} from "../utils/axios.ts";
import Grid from '@mui/material/Grid';

export default function AatCategory() {

    const [categories, setCategories] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        categories.join(",");
        axiosPost("http://localhost:5173", {categories: categories.join(",")})
            .then(r => console.log(r))

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setCategories([...categories, e.target.name])
        } else {
            setCategories(categories.filter(t => t !== e.target.name))
        }
        console.log("Categories = " + categories);
    };

    return (

        // <Grid container rowSpacing={1} columnSpacing={{xs: 4, sm: 8, md: 12}}>
        //     <Grid xs={6}>
        //     </Grid>
        //     <Grid xs={6}>

        <form onSubmit={handleSubmit}>
            <FormGroup onChange={handleChange}>
                <FormControlLabel name="Equity" control={<Checkbox defaultChecked/>} label="Equity"/>
                <FormControlLabel name="Mutual Fund" control={<Checkbox/>} label="Mutual Fund"/>
                <FormControlLabel name="Solution Package" control={<Checkbox/>} label="Solution Package"/>
            </FormGroup>
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>

        //     </Grid>
        //     <Grid xs={6}>
        //     </Grid>
        // </Grid>
    )
}
