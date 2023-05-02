import * as React from 'react';
import Header from './MainPage/Header'
import BannerComponent from './MainPage/Banner';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

            </div>
            <footer className=' w-full bg-black bottom-0'>

                <div className='flex flex-col py-5'>
                    <div className='flex justify-evenly items-center h-full w-2/3 lg:w-1/3 m-auto'>
                        <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href='https://m.facebook.com/SJscoregoals/?ref=bookmarks'>
                            <FacebookIcon fontSize="large" />
                        </button>
                        <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href="https://www.linkedin.com/in/score-goals-football-academy-48970215b/">
                            <InstagramIcon fontSize="large" />
                        </button>
                        <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href="https://www.linkedin.com/in/score-goals-football-academy-48970215b/">
                            <LinkedInIcon fontSize="large" />
                        </button>
                    </div>
                    <div className='text-white flex justify-center text-sm mt-3 text-center'>
                        © Photo, Inc. 2023. All rights remain with scoregoals.co.in
                    </div>
                </div>

            </footer>
        </>
    )
}

export default WhyUs