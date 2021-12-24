import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "publish",
  initialState: {
    isPublish: false,
  },

  reducers: {
    show: (state) => {
      return {...state, isPublish: true};
    },
    hide: (state) => {
      return {...state, isPublish: false};
    },
  },
});

export const { show, hide } = slice.actions;

export const selectIsPublish = (state) => state.isPublish;

export default slice.reducer;
