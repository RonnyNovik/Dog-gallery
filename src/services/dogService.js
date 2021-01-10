import axios from "axios";
const dogSerivce = {
  getDogBreeds: () => axios.get(`/breeds/list/all`),
  getDogImages: (breed, count) =>
    axios.get(`/breed/${breed}/images/random/${count}`),
};
export default dogSerivce;
