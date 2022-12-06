export const ADD_TO_FAVES = "ADD_TO_FAVES";
export const REMOVE_FROM_FAVES = "REMOVE_FROM_FAVES";
export const GET_JOBS = "GET_JOBS";
export const LOADING = "LOADING_JOBS";
export const ERROR = "ERROR_JOBS";

export const addToFavesAction = (i) => {
  return {
    type: ADD_TO_FAVES,
    payload: i,
  };
};

export const removeFromFavesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVES,
    payload: i,
  };
};

export const getJobsAction = (endPoint) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      let response = await fetch(endPoint);
      let fetchedJobs = await response.json();
      if (response.ok) {
        dispatch({
          type: ERROR,
          payload: false,
        });
        setTimeout(() => {
          dispatch({
            type: GET_JOBS,
            payload: fetchedJobs.data,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });
        }, 1000);
      } else {
        console.log("Error fetching");
        dispatch({
          type: ERROR,
          payload: true,
        });
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        dispatch({
          type: ERROR,
          payload: true,
        });
      }, 1000);
    }
  };
};
