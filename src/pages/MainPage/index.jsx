import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header'
import BannerComponent from './Banner';
import Heading from '../../components/heading'
import Testimonials from './Testimonials'
import Programs from './Programs';
import Centres from './Centers';
import { Button } from '@mui/material';
import { Typography, } from '@mui/material';
import Gallery from './imgsGallery';
import ContactUsForm from './ContactUs'
import { whatsapp } from '../../assets'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function DrawerAppBar(props) {

  return (
    <>
      <div className='pb-10'>

        {/* header */}
        <Header />

        {/* banner */}
        <BannerComponent />

        {/* <Toolbar /> */}
        <div className='mx-9 lg:mx-40 my-10 lg:my-20'>

          {/* About us */}
          <div className='lg:flex justify-between items-center'>
            <div className='lg:w-[90rem] flex-1 '>
              <img src="https://picsum.photos/600/450" width='100%' alt="about-us" />
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
          </div>

        </div>

        {/* PROGRAMS */}
        <div className='lg:my-20' id="#programs">
          <Programs />
        </div>

        {/* whatsapp */}
        <button className='fixed bottom-5 right-7 cursor-pointer z-50'>
          <div className='w-16 h-16 rounded-full  border-white border-4'>
            <a
              href="https://wa.me/7738540352"
              class="whatsapp_scoregoals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </button>


        {/* centers */}
        <div className='mx-9 lg:mx-40 my-10 md:my-40' id="#centers">
          <Centres />
        </div>

        {/* Tsetimonials */}
        <div id="#testimonials" className='my-30'>
          <Testimonials />
        </div>


        {/* Join now */}
        <div class="lg:flex pb-40 bg-cheer bg-center bg-contain  bg-no-repeat lg:bg-repeat h-[500px] space-x-8 justify-around items-center text-center lg:text-left mt-10 lg:mt-0">
          <div className='text-2xl font-bold uppercase'>
            It is never too late!  <span className='ml-2 uppercase'>Register yourselves today</span>
          </div>
          <div className='mt-10 m-auto lg:m-0'>
            <Button variant="contained" size='large' color="success" href='https://forms.gle/P9LirarxF2NjjAAYA'>Join Now</Button>
          </div>
        </div>


        {/* Gallery */}
        <div className='flex flex-col justify-center items-center lg:my-36 ' id="#gallery">
          <Gallery />
        </div>


        {/* contact us */}
        <div id="#contact" className='mb-20'>
          <ContactUsForm />
        </div>

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
  );
}
