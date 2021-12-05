import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";


export const rootReducer = combineReducers({
    main: mainSlice,
});


export const store = configureStore({
    reducer: rootReducer,
})
