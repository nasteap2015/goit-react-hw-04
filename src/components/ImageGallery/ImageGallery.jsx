import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={image.id} className={css.galleryItem}>
                    <ImageCard description={image.alt_description} urls={image.urls} likes={image.likes} tags={image.tags} />
                </li>
            ))
            }
        </ul>
    );
};


export default ImageGallery;