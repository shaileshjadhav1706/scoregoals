
import { Typography, } from '@mui/material';
import Heading from '../../components/heading'
import Toolbar from '@mui/material/Toolbar';
import useBreakpoint from '../../hooks/useBreakpoint'

const AboutUsPage = () => {
    const { isMobile } = useBreakpoint()

    return (
        <div className='lg:flex justify-between items-center '>
            <div className='lg:w-[90rem] flex-1 '>
                {!isMobile && <img src="https://res.cloudinary.com/dhj3dggog/image/upload/v1683016310/AboutUs/a1.jpg" className="w-full h-full" alt="bannerImg" />}
                {isMobile && <img src="https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683016310/AboutUs/a1.jpg" className="w-full h-full" alt="bannerImg" />}

            </div>


            <div className='lg:ml-14 mt-6 lg:mt-0  flex-1' id="#about">
                <Heading title="ABOUT US" />

                <Typography>It might seem easy to just kick the ball, everyone can do it but not everyone can become a professional
                    footballer unless coached by the right personnel. When we watch football players on TV playing football they make the game look very simple. However no one knows the rigorous training and hard work put in by their coaches. Also there are various aspects of football that can only be taught and the same can be witnessed at our academy.
                </Typography>
                <Toolbar />
                <Typography>We at Scoregoals aim to develop and create perfect football environment to enhance your skills through strenuous training and mentoring. We believe in providing top class professional football coaching to passionate footballers and bringing the best out of them.Our professional and licensed coaches will not only make football fun but also create pathways to enter professional football clubs.
                </Typography>
                <Toolbar />
                <Typography>If you are an ardent football lover and an insatiable learner you definitely are on the right page. Just give us an opportunity to assist you with your goal. I am sure we can help you win the match.</Typography>
            </div>
        </div >
    )
}

export default AboutUsPage