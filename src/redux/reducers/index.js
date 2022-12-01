const initialState = {
  favourites: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: [...state.favourites.list, action.payload],
        },
      };

    case "REMOVE_FROM_FAVES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter((job, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
