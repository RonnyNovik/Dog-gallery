import React from "react";
import { useSelector } from "react-redux";
import "./summary.scss";
const Summary = () => {
  const breeds = useSelector((store) => store.dogBreeds);
  return (
    <div className={`summary-wrapper`}>
      {Object.keys(breeds).map((key, index) => {
        const { likes, imgs } = breeds[key];
        return (
          <div className={`breed-summary-block`} key={index}>
            <h1 className={`breed-name`}>{key}</h1>
            <span className={`breed-img-count`}>
              # of images: {imgs.length}
            </span>
            <span className={`breed-like-count`}>likes: {likes}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
