import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    }
});
//selectors
export const value = state => state.counter.value;
//action
export const {increment, decrement} = counterSlice.actions;
//reducer
export default counterSlice.reducer;
