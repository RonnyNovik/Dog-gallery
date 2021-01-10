import React from "react";
import "./dog-picture.scss";
const DogPicture = ({ clickHandler, imgURL, likes, breed }) => {
  return (
    <div onClick={clickHandler} className={`dog-pic-wrapper`}>
      <img className={`dog-pic`} src={imgURL} alt={breed} />
      <div className={`text-overlay`}>
        <span className={`breed-name`}>{breed}</span>
        <span className={`breed-likes`}>Likes:{likes}</span>
      </div>
    </div>
  );
};

export default DogPicture;
