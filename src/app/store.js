import { configureStore } from "@reduxjs/toolkit";
import isPublishReducer from "../features/isPublishSlice";
import userReducer from "../features/userSlice"

export const store = configureStore({
  reducer: {
    isPublish: isPublishReducer,
    user: userReducer 
  },
});
