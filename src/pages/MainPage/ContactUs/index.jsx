import React, { useRef, useEffect, useState } from "react";
import { TextField, Button, Typography } from '@mui/material';
import Heading from '../../../components/heading'
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import "./style.css";

const required = (value) =>
    value && value.trim() !== "" ? undefined : "Required";

export default function App() {
    const [showAlert, setShowAlert] = useState(false);

    const [isSuccess, setSuccess] = React.useState(false);
    const [isError, setError] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')

    const form = useRef();

    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }, [showAlert]);

    const handleSubmit = (e) => {

        const templateParams = {
            from_name: fullName,
            message: query,
            reply_to: email,
            to_name: "shaileshjadhav1706@gmail.com"
        };
        e.preventDefault();
        // emailjs.send('service_id', 'template_id', templateParams, PUBLIC_key)

        emailjs.send('service_xmznt29', 'template_k2rqotc', templateParams, 'SvsoPCyGjtbUxaalc')
            .then((result) => {
                debugger
                if (result.status == 200) {
                    setShowAlert(true)
                    setSuccess(true)
                    setError(false)
                }
            }, () => {
                setShowAlert(true)
                setError(true)
                setSuccess(false)
            })
            .finally(() => {
                // reset fields
                setFullName('')
                setEmail('')
                setQuery('')
            });

    }

    return (
        <div>
            <div className="text-center">
                <Heading title="CONTACT US" />
            </div>

            <div className="mx-9 lg:mx-32 lg:flex text-center mt-10">
                <form onChange={(state) => console.log(state)} className='flex flex-1 ' ref={form}>
                    <div className="MaterialUI lg:w-11/12 w-full" id="#contactUsForm" >
                        <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} id="standard-basic" label="Full Name" variant="standard" validators={[required]} />
                        <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" validators={[required]} />
                        <TextField value={query} onChange={(e) => setQuery(e.target.value)} id="standard-basic" label="Query" variant="standard" validators={[required]} />

                        <div className="mr-auto mt-60">
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                        </div>

                        {isSuccess && showAlert &&
                            <Alert severity="success">
                                {/* <AlertTitle>Success</AlertTitle> */}
                                Your message has been sent successfully!
                            </Alert>}

                        {isError && showAlert &&
                            <Alert severity="error">
                                {/* <AlertTitle>Error</AlertTitle> */}
                                Your message could not be sent. Try again later!
                            </Alert>}
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


