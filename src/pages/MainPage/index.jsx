import * as React from 'react';
import Header from './Header'
import BannerComponent from './Banner';
import Testimonials from './Testimonials'
import Programs from './Programs';
import Centres from './Centers';
import { Button } from '@mui/material';
import Gallery from './imgsGallery';
import ContactUsForm from './ContactUs'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AboutUsPage from './About'
import { useEffect } from 'react';
import { getReviews } from '../../pages/services/getReviews'
import { useState } from 'react';
import FooterComponent from '../../components/footer';
import WhatsappComponent from './Whatsapp';


export default function DrawerAppBar(props) {
  const [reviewsList, setReviewList] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await getReviews();
      setLoading(true)
      setReviewList(response)
      setLoading(false)
    }
    fetchData();

  }, [])

  const bannerItems = [
    {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683015445/bannerImages/b4.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683015445/bannerImages/b4.jpg'
    },

    {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683014667/bannerImages/b2.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683014667/bannerImages/b2.jpg'

    },
    {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683017841/bannerImages/b1.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683017841/bannerImages/b1.jpg'
    },
    {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683014980/bannerImages/b3.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683014980/bannerImages/b3.jpg'
    },

    {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683015619/bannerImages/b5.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683015619/bannerImages/b5.jpg'
    }, {
      imageUrl: 'https://res.cloudinary.com/dhj3dggog/image/upload/v1683016705/bannerImages/b6.jpg',
      mobileImg: 'https://res.cloudinary.com/dhj3dggog/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1683016705/bannerImages/b6.jpg'
    }
  ]
  const navItems = [{
    menu: 'About',
    link: '#about'
  },
  {
    menu: 'Programs',
    link: '#programs'
  },
  {
    menu: 'Centers',
    link: '#centers'
  },
  {
    menu: 'Testimonials',
    link: '#testimonials'
  },
  {
    menu: 'Gallery',
    link: '#gallery'
  },
  {
    menu: 'Contact Us',
    link: '#contactUsForm'
  },

  ];

  return (
    <>
      <div className='pb-10'>

        {/* header */}
        <Header navItems={navItems} />

        {/* banner */}
        <BannerComponent images={bannerItems} />

        {/* <Toolbar /> */}
        <div className='px-9 lg:mx-0 lg:px-40 py-10 lg:my-20 bg-lime-200'>

          {/* About us */}
          <AboutUsPage />

        </div>

        {/* PROGRAMS */}
        <div className='my-8 lg:my-20' id="#programs">
          <Programs />
        </div>

        <WhatsappComponent/>

        {/* centers */}
        <div className='mx-9 lg:mx-40 my-10 md:my-40' id="#centers">
          <Centres />
        </div>

        {/* Tsetimonials */}
        <div id="#testimonials" className='my-24'>
          {loading ? <div className='text-center'>Loading ...</div> : <Testimonials list={reviewsList} />}
        </div>


        {/* Join now */}
        <div class="lg:flex pb-40 bg-crowd bg-center bg-contain  bg-no-repeat lg:bg-repeat h-[500px] space-x-8 justify-around items-center text-center lg:text-left mt-10 lg:mt-0">
          <div className='text-2xl font-bold uppercase'>
            It is never too late!  <span className='ml-2 uppercase'>Register yourselves today</span>
          </div>
          <div className='mt-10 m-auto lg:m-0'>
            <Button variant="contained" size='large' color="success" target="_blank" href='https://forms.gle/dxuAhwdiebbZtTbX7'>Join Now</Button>
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
      <FooterComponent />
    </>
  );
}
