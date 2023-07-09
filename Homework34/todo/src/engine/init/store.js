import {configureStore} from "@reduxjs/toolkit";
//Core
import counter from "../core/counter/counterSlice";
import todosReducer from "../core/todos/todoSlice";

export const store = configureStore({
    reducer: {
        counter,
        todos: todosReducer,
    },
})