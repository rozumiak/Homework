import {takeEvery} from "redux-saga/effects"
import {todosAsyncAction} from "./asyncAction";
import {callGetTodosWorker} from "./workers/getTodos";
import {callAddTodosWorker} from "./workers/addTodo";
export function* todosWatcher(){
    //takeEvery: Створює спостерігача, який слідкує за кожним викликом певної дії і запускає відповідну робочу функцію.
    yield takeEvery(todosAsyncAction.getTodosAsync.type, callGetTodosWorker);
    yield takeEvery(todosAsyncAction.addTodoAsync.type, callAddTodosWorker);
}