import css from './ImageCard.module.css'

const ImageCard = ({ description, urls, likes, tags }) => {
    const imageTags = tags.map(tag => tag.title);
    return (
        <div className={css.imageContainer}>
            <img src={urls.small} alt={description} className={css.image}/>
            <p><span className={css.descriptionCategory}>Likes:</span> {likes}</p>
            <p><span className={css.descriptionCategory}>Tags:</span> {imageTags.join(",")}</p>
        </div>
    );
};

export default ImageCard;