import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
// Engine
import todosReducer from '../core/todos/slice';
import {rootSaga} from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: [
        sagaMiddleware
    ]
})
sagaMiddleware.run(rootSaga);