import Carousel from 'react-material-ui-carousel'
import useBreakpoint from '../../hooks/useBreakpoint'


function BannerComponent({ images }) {
    const { isMobile } = useBreakpoint()

    console.log("imageskk--", images);

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
                autoPlay={false}
                stopAutoPlayOnHover={true}

                cycleNavigation={true}
                duration={500}
                animation="slide"
                navButtonsAlwaysVisible
            >
                {
                    images.map((item, index) => {
                        return (
                            <div style={{ height: getHeight() }} key={index}>
                                {!isMobile && <img src={item.imageUrl} className="w-full h-full" alt="bannerImg" />}
                                {isMobile && <img src={item.mobileImg} className="w-full h-full" alt="bannerImg" />}
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default BannerComponent;