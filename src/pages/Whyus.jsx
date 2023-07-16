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

    const navItems = [{
        menu: 'Tournaments',
        link: '#tournaments'
    }]

    return (
        <>
            <div className='pb-10'>
                {/* header */}
                <Header navItems={navItems} />


                {/* banner */}
                <BannerComponent images={bannerItems} />

                <div className='flex-col md:flex mt-8 px-40 py-14' id="#tournaments">

                    <div className='py-14 flex flex-col'>   
                        <div className='flex justify-center'> 
                            <Heading title="Why Us" />
                        </div>
                        <div className='text-center'>
                        <Typography>
                        SCOREGOALS believes that many players just need to be given the platform to show their abilities and talents at the higher level. Our academy offers coaching and training designed for our young aspiring, passionate soccer players between the ages of 3 and 16 looking to take their game to the next level. We at SCOREGOALS help in fulfilling a child’s dreams to come true by offering a structured all year-round programme that aims at developing skills and maximising each individual’s development.
                        </Typography>
                            <Typography>About coaches
                        At SCOREGOALS coaches are professional football players playing at Mumbai District Association and also qualified licence holders.</Typography>
                        </div>
                    </div>


                    <div className='py-14 flex flex-col'>     
                        <div className='flex justify-center flex-col'> 
                        <div className='self-center'>
                            <Heading title="TOURNAMENTS" />
                        </div>
                            <p className='self-center'>Register for the tournament you are willing to participate</p>
                       </div> 
                            <div className='flex-col md:flex  justify-center items-center mt-6'>
                                <Typography className='flex justify-center'>
                                    <a className='px-5 py-3 mb-5 bg-green-500 rounded-md' target="_blank" href='https://forms.gle/xKyMm44dcAz5QJrw9' type="button" rel="noreferrer">
                                        <span className='font-bold text-xl text-white'>InHouse Tournaments</span>
                                    </a>
                                </Typography>

                                <Typography className='flex justify-center'>
                                    <a className='px-5 py-3 bg-green-500 rounded-md' target="_blank" href='https://forms.gle/Hb2naxkB8yUckfQR8' type="button" rel="noreferrer">
                                        <span className='font-bold text-xl text-white'>Other Private Tournaments</span>
                                    </a>
                                </Typography>
                            </div>
                        </div>

                </div>

                <FooterComponent />
            </div>

        </>
    )
}

export default WhyUs