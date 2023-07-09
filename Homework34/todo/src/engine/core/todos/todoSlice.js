import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],

    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload;
        },
    }
})
//selectors
export const todosSelectors = {
    items: (state) => state.todos.items,
    length: (state) => state.todos.items.length,
}

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
