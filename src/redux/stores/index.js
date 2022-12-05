import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobReducer from "../reducers/jobReducer";

const bigReducer = combineReducers({
    jobs: jobReducer,
    favourites: mainReducer,

})


const store = configureStore({
    reducer: bigReducer,
})

export default store