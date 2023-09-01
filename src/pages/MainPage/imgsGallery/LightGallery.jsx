
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageGallery = ({ images, style }) => {

    const [index, setIndex] = useState(-1);
    const currentImage = images[index] || '';
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <>
        <div className="mx-auto">
            <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
            />
            </div>

            {!!currentImage && (
              <Lightbox
                    mainSrc={currentImage.src}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.src}
                    nextSrc={nextImage.src}
                    nextSrcThumbnail={nextImage.src}
                    prevSrc={prevImage.src}
                    prevSrcThumbnail={prevImage.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                    onImageLoadError={() => currentImage.src}
                />
            )}
        </>
    );
}



export default ImageGallery