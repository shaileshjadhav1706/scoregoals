import { Typography } from '@mui/material'
import Heading from '../../components/heading'
import Carousel from '../../components/carosuel'
import useBreakpoint from '../../hooks/useBreakpoint'


const Testimonials = () => {
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
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ padding: 8 }}>
                                <img src="https://via.placeholder.com/150x100" alt="placeholder" style={{ width: '100%' }} />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default Testimonials