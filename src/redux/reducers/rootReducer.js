const initialState = {
  dogBreeds: {},
};

//Usually we will combine modular reducer into the root reducer but since our store is small i chose to implement the logic in the root
const rootReducer = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case "SET_BREEDS_DATA":
      return {
        ...state,
        dogBreeds: { ...data.data },
      };
    case "ADD_LIKE_TO_BREED":
      console.log(data.breed);
      return {
        ...state,
        dogBreeds: {
          ...state.dogBreeds,
          [data.breed]: {
            ...state.dogBreeds[data.breed],
            likes: state.dogBreeds[data.breed].likes + 1,
          },
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
