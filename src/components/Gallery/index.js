import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreedsData, addLikeToBreed } from "../../redux/actions/DogActions";
import dogService from "../../services/dogService";
import imgFetcher from "../../utils/imgFetcher";
import DogPicture from "../DogPicture";
import "./gallery.scss";
const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const breeds = useSelector((store) => store.dogBreeds);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { message },
      } = await dogService.getDogBreeds();

      const data = await imgFetcher(Object.keys(message), 100);
      dispatch(setBreedsData(data));
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  return !loading ? (
    <div className={`gallery-wrapper`}>
      {Object.keys(breeds).map((key) => {
        const { likes, imgs } = breeds[key];
        console.log(breeds)
        return imgs.map((img) => (
          <DogPicture
            key={img}
            imgURL={img}
            likes={likes}
            breed={key}
            clickHandler={() => dispatch(addLikeToBreed(key))}
          />
        ));
      })}
    </div>
  ) : (
    <h1>loading images..</h1>
  );
};

export default Gallery;
