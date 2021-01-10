export const SET_BREEDS_DATA = "SET_BREEDS_DATA";
export const ADD_LIKE_TO_BREED = "ADD_LIKE_TO_BREED";

export const setBreedsData = (data) => {
  return {
    type: SET_BREEDS_DATA,
    data: { data },
  };
};

export const addLikeToBreed = (breed) => {
  return {
    type: ADD_LIKE_TO_BREED,
    data: { breed },
  };
};
