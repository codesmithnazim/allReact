import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cunter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log("Incrementing button is clicked successfully", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      console.log("Decrementing button is clicked successfully", state.value);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
console.log("The body of couterSlice.reducer ", counterSlice.reducer);
export default counterSlice.reducer;