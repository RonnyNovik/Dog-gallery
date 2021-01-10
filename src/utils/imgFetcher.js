import dogService from "../services/dogService";

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const imgFetcher = async (breeds, maxCount) => {
  const dataObj = {};
  let imgsLeft = maxCount;
  while (imgsLeft) {
    const breed = breeds[randomInteger(0, breeds.length)];
    const amountToFetch = randomInteger(1, imgsLeft);
    imgsLeft -= amountToFetch;
    const {
      data: { message },
    } = await dogService.getDogImages(breed, amountToFetch);
    dataObj[breed] = { imgs: [...message], likes: 0 };
  }

  return dataObj;
};

export default imgFetcher;
