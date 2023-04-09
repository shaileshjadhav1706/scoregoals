

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Heading from '../../components/heading'
import locationMap from '../../assets/centers.png'


const Centres = () => {

    return (
        <div className='lg:flex justify-between'>
            <div className='lg:mr-14'>

                <Heading title="OUR CENTRES" />

                <Typography>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quia, soluta facilis corporis laborum dolor eius saepe inventore consectetur ipsa,
                </Typography>
                <Toolbar />
                <Typography>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quia, soluta facilis corporis laborum dolor eius saepe inventore consectetur ipsa,
                </Typography>
                <Toolbar />

                <Typography>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quia, soluta facilis corporis laborum dolor eius saepe inventore consectetur ipsa,
                </Typography>
            </div>

            <div className='lg:w-[60rem] my-10 lg:my-0'>
                <img src={locationMap} width='100%' />
            </div>


        </div>


    )
}

export default Centres
