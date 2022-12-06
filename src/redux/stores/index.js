import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobReducer from "../reducers/jobReducer";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
    key: "root",
    storage: localStorage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY
        })
    ]

}

const bigReducer = combineReducers({
    jobs: jobReducer,
    favourites: mainReducer,

})

const persistedReducer = persistReducer(persistConfig, bigReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)
