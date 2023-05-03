import { Typography } from '@mui/material'
import Heading from '../../components/heading'
import Carousel from '../../components/carosuel'
import useBreakpoint from '../../hooks/useBreakpoint'
import star from '../../assets/star.svg'

const Testimonials = ({ list }) => {
    const { isMobile } = useBreakpoint()


    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <div className='mx-9 lg:text-center'>
                    <div>
                        <Heading title="TESTIMONIALS" />
                    </div>
                    <div>
                        <Typography variant="h6">They have taken the plunge & had the fun. Are you ready ?</Typography>
                    </div>
                </div>



                <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                    <Carousel
                        show={isMobile ? 1 : 3}
                    >
                        {list.length && list?.map((item) => {
                            const starList = Array.from(Array(item.rating).keys())
                            return (
                                <div className='p-5 mx-5  rounded-md bg-slate-100'>
                                    <div className='flex'>
                                        <div className='h-8 w-8 flex items-center'>
                                            <img className='w-full' alt="img" src={item.reviewer_picture_url} />
                                        </div>
                                        <div className='capitalize ml-4'>
                                            {item.reviewer_name}
                                        </div>

                                    </div>

                                    {/* stars */}
                                    <div className='flex mt-5'>
                                        {starList.map(() => {
                                            return (

                                                <div className='w-5 h-5 mr-1'>
                                                    <img src={star} alt="star" />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='mt-5 line-clamp-6'>
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })}

                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Testimonials