import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId : "65eaaf4302a893de28f4f963"
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;