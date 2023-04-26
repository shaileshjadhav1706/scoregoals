

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Heading from '../../components/heading'
import locationMap from '../../assets/centers.png'


const Centres = () => {

    const handleMap = (address) => {
        // const address = "1600 Amphitheatre Parkway, Mountain View, CA 94043";
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

        window.open(mapsUrl, "_blank");

    }


    const address1 = 'KURLA TURF PARK :- Kohinoor City Rd, Ali Yavar Jung, Christian Gaon, Kurla, Mumbai, Maharashtra 400070'
    const address2 = 'ACRES CLUB :- 411-B, Hemu Kalani Marg, Sindhi Society, Chembur, Mumbai, Maharashtra 400071'
    const address3 = 'LODHA PARK : Pandurang Budhkar Marg Next to Shree Simandhar Swami Jain Temple, Worli, Mumbai, Maharashtra 400018'

    return (
        <div className='lg:flex justify-between'>
            <div className='lg:mr-14'>

                <Heading title="OUR CENTRES" />


                <Typography>{address1}</Typography>
                <button onClick={() => handleMap(address1)}><a className='text-sky-600 underline'>Google Map</a></button>
                <Toolbar />

                <Typography>{address2}
                </Typography>
                <button onClick={() => handleMap(address2)}><a className='text-sky-600 underline'>Google Map</a></button>
                <Toolbar />

                <Typography>{address3}
                </Typography>
                <button onClick={() => handleMap(address3)}><a className='text-sky-600 underline'>Google Map</a></button>

            </div>

            <div className='lg:w-[60rem] my-10 lg:my-0'>
                <img src={locationMap} width='100%' />
            </div>


        </div>


    )
}

export default Centres
