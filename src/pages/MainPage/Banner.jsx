import Carousel from 'react-material-ui-carousel'


function BannerComponent() {

    var items = [
        {
            imageUrl: 'https://picsum.photos/1300/300'
        },
        {
            imageUrl: 'https://picsum.photos/seed/picsum/1300/300'
        },
        {
            imageUrl: 'https://picsum.photos/seed/picsum/1300/300'
        },
        {
            imageUrl: 'https://picsum.photos/seed/picsum/1300/300'
        }
    ]


    return (

        <div>
            {/* Main content */}

            <Carousel
                swipe
                indicators
                autoPlay={true}
                stopAutoPlayOnHover={true}

                cycleNavigation={true}
                duration={500}
                animation="slide"
                navButtonsAlwaysVisible
            >
                {
                    items.map((item, index) => {
                        return (
                            <div style={{ padding: '20px 0px', height: '700px' }} key={index}>
                                <img src={item.imageUrl} className="w-full h-full" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default BannerComponent;