import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (source) => {
    return (
        <ul>
            {source.map(({ id, alt_description, urls, likes, tags }) => (
                <li key={id}>
                    <ImageCard description={alt_description} urls={urls} likes={likes} tags={tags} />
                </li>
            ))
            }
        </ul>
    );
};


export default ImageGallery;