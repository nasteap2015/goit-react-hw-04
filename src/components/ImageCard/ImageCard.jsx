const ImageCard = ({ description, urls, likes, tags }) => {
    const imageTags = tags.map(tag => tag.title);
    return (
        <div>
            <img src={urls.small} alt={description} />
            <p>Likes: {likes}</p>
            <p>Tags: {imageTags}</p>
        </div>
    );
};

export default ImageCard;