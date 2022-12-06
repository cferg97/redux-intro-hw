import { GET_JOBS, LOADING, ERROR } from "../actions";

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ERROR:
      return{
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default jobReducer;
