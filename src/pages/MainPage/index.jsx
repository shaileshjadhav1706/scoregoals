import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header'
import BannerComponent from './Banner';
import Testimonials from './Testimonials'
import Programs from './Programs';
import Centres from './Centers';
import { Button } from '@mui/material';
import Gallery from './imgsGallery';
import ContactUsForm from './ContactUs'
import { whatsapp } from '../../assets'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AboutUsPage from './About'

export default function DrawerAppBar(props) {

  return (
    <>
      <div className='pb-10'>

        {/* header */}
        <Header />

        {/* banner */}
        <BannerComponent />

        {/* <Toolbar /> */}
        <div className='px-9 lg:mx-0 lg:px-40 py-10 lg:my-20 bg-lime-200'>

          {/* About us */}
          <AboutUsPage />

        </div>

        {/* PROGRAMS */}
        <div className='my-4 lg:my-20' id="#programs">
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
        <div class="lg:flex pb-40 bg-crowd bg-center bg-contain  bg-no-repeat lg:bg-repeat h-[500px] space-x-8 justify-around items-center text-center lg:text-left mt-10 lg:mt-0">
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
