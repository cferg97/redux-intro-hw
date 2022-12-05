export const ADD_TO_FAVES = "ADD_TO_FAVES";
export const REMOVE_FROM_FAVES = "REMOVE_FROM_FAVES";
export const GET_JOBS = "GET_JOBS";

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
      let response = await fetch(endPoint);
      if (response.ok) {
        let fetchedJobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs.data,
        });
      } else {
        console.log("Error fetching");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
