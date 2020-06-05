import { configureStore, createSlice } from "@reduxjs/toolkit";
import { actionCreatorIgnoresArguments } from "@/util/store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: actionCreatorIgnoresArguments((state) => state + 1),
    decrement: actionCreatorIgnoresArguments((state) => state - 1),
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
