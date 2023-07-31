import { combineReducers } from "@reduxjs/toolkit";
import { moviesApi } from "../../services/moviesApi";

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
});
