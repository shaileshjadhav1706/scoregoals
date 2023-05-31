import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function FooterComponent() {
    return (
        <footer className=' w-full bg-black bottom-0'>

            <div className='flex flex-col py-5'>
                <div className='flex justify-evenly items-center h-full w-2/3 lg:w-1/3 m-auto'>
                    <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href='https://m.facebook.com/SJscoregoals/?ref=bookmarks'>
                        <FacebookIcon fontSize="large" />
                    </button>
                    {/* <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href="https://www.linkedin.com/in/score-goals-football-academy-48970215b/">
                        <InstagramIcon fontSize="large" />
                    </button>
                    <button className='h-10 w-10 lg:mr-10  rounded-full bg-lime-500' href="https://www.linkedin.com/in/score-goals-football-academy-48970215b/">
                        <LinkedInIcon fontSize="large" />
                    </button> */}
                </div>
                <div className='text-white flex justify-center text-sm mt-3 text-center'>
                    © Photo, Inc. 2023. All rights remain with scoregoals.co.in
                </div>
            </div>

        </footer>
    );
}

export default FooterComponent;