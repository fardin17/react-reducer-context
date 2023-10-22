import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import { apiSlice } from "./apiSlice";

export const store2 = configureStore({
  reducer: {
    count: countSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
});
