// store.ts

import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetailsReducer";

const store = configureStore({
  reducer: {
    user: userDetailsReducer, // Add userReducer to store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
