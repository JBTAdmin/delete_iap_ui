import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {useState} from "react";
import {axiosPost} from "../utils/axios.ts";


export default function AatCategory() {

    const [categories, setCategories] = useState<string[]>([]);

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    return <form onSubmit={handleSubmit}>
        <FormGroup onChange={handleChange}>
            <FormControlLabel name="Viveka" control={<Checkbox defaultChecked/>} label="Label"/>
            <FormControlLabel name="gautam" required control={<Checkbox/>} label="Required"/>
            <FormControlLabel name="haha" disabled control={<Checkbox/>} label="Disabled"/>
        </FormGroup>
        <Button variant="contained" type="submit">
            Submit
        </Button>
    </form>
}
