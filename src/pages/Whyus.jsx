import * as React from 'react';
import Header from './MainPage/Header'
import BannerComponent from './MainPage/Banner';
import FooterComponent from '../components/footer';
import Typography from '@mui/material/Typography';
import Heading from '../components/heading'

const WhyUs = () => {
    const bannerItems = [
        {
            imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683023248/WhyUS/IMG_1424_smf7ee__2_ea5ofg.jpg',
            mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683023248/WhyUS/IMG_1424_smf7ee__2_ea5ofg.jpg'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683023564/WhyUS/IMG_2553_1_nfwxpg.jpg',
            mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683023564/WhyUS/IMG_2553_1_nfwxpg.jpg'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683021910/WhyUS/IMG_3291_ayl9s7.jpg',
            mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683021910/WhyUS/IMG_3291_ayl9s7.jpg'
        }

    ]
    return (
        <>
            <div className='pb-10'>
                {/* header */}
                <Header />

                {/* banner */}
                <BannerComponent images={bannerItems} />

                <div className='flex flex-col items-center mt-6'>
                    <Heading title="TOURNAMENTS" />

                    <p>Register for the tournament you are willing to participate</p>
                    <div className='flex'>
                        <Typography>
                            <a className='px-5 py-3 mr-10 bg-green-500 rounded-md my-8' target="_blank" href='https://forms.gle/xKyMm44dcAz5QJrw9' type="button" rel="noreferrer">
                                <span>InHouse</span>
                            </a>
                        </Typography>

                        <Typography>
                            <a className='px-5 py-3 bg-green-500 rounded-md my-8' target="_blank" href='https://forms.gle/Hb2naxkB8yUckfQR8' type="button" rel="noreferrer">
                                <span>Other Private tournaments</span>
                            </a>
                        </Typography>
                    </div>

                </div>

                <FooterComponent />
            </div>

        </>
    )
}

export default WhyUs