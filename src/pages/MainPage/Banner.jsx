import Carousel from 'react-material-ui-carousel'
import useBreakpoint from '../../hooks/useBreakpoint'
import './style.css'

function BannerComponent({ images }) {
    const { isMobile } = useBreakpoint()

    const getHeight = () => {
        if (!isMobile) {
            return '750px'
        }

        return '600px'
    }


    return (

        <div id="#carouselContainer">
            {/* Main content */}

            <Carousel
                swipe
                indicators
                autoPlay= {false}
                stopAutoPlayOnHover={true}

                cycleNavigation={true}
                duration={2}
                animation="slide"
                navButtonsAlwaysVisible
            >
                {
                    images.map((item, index) => {
                        return (
                            <>
                                <div class="background-filter" key={`i_${index}`} style={{
                                    height: getHeight() ,
                                    backgroundSize: 'cover',

                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${((isMobile && item.mobileImg )||( !isMobile && item.imageUrl ))})`

                                }}>
                                    {/* <div class="u-non-blurred" style={{
                                        height: getHeight() ,

                                    }}>
                                    
                                        {!isMobile && <img src={item.imageUrl} className="m-auto" alt="bannerImg" />}
                                        {isMobile && <img src={item.mobileImg} className="m-auto" alt="bannerImg" />}
                                    </div> */}
                                </div>
                            </>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default BannerComponent;