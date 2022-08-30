import React from "react";
import "./styles/imageCard.css";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="imgContainer">
      <a href={image.largeImageURL} target="_blank">
        <img src={image.webformatURL} alt="" className="image" />
      </a>
      <div className="info">
        <div className="owner">Photo by {image.user}</div>
        <ul className="insights">
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
        </ul>
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="tags">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
