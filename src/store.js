import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: {
      reducer: state => state + 1,
      prepare: () => ({
        payload: undefined
      })
    },
    decrement: {
      reducer: state => state - 1,
      prepare: () => ({
        payload: undefined
      })
    }
  }
});

export const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
