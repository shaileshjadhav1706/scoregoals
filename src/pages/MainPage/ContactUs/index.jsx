import React from "react";
import { TextField, Button, Typography } from '@mui/material';
import Heading from '../../../components/heading'


import "./style.css";

const required = (value) =>
    value && value.trim() !== "" ? undefined : "Required";

export default function App() {
    return (
        <div>
            <div className="text-center">
                <Heading title="CONTACT US" />
            </div>

            <div className="mx-9 lg:mx-32 lg:flex text-center mt-10">
                <form onChange={(state) => console.log(state)} className='flex flex-1 '>
                    <div className="MaterialUI lg:w-11/12 w-full" id="#contactUsForm" >
                        <TextField id="standard-basic" label="Full Name" variant="standard" validators={[required]} />

                        <TextField id="standard-basic" label="Email" variant="standard" validators={[required]} />
                        <TextField id="standard-basic" label="Query" variant="standard" validators={[required]} />

                        <div className="mr-auto mt-60">
                            <Button variant="contained" >Submit</Button>
                        </div>

                    </div>
                </form>
                <div className="flex flex-col justify-start flex-1 mt-10">
                    <h6 className="font-bold text-xl">Coaching Address</h6>
                    <div className="mt-10">
                        <Typography>
                            ACRES CLUB :- 411-B, Hemu Kalani Marg, Sindhi Society, Chembur, Mumbai, Maharashtra 400071
                        </Typography>
                        <p>
                            Reach us at <a href="tel:123-456-7890" className="text-sky-600 underline">8286925969</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


