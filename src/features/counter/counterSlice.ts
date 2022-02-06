import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", // name of the slice
  initialState, // initial state
  reducers: {
    incremented(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decremented(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
  }, // reducers
});

export const { incremented, decremented } = counterSlice.actions;

export default counterSlice.reducer;
