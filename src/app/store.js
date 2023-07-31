import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { moviesApi } from "../services/moviesApi";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesApi.middleware]),
});

export default store;
