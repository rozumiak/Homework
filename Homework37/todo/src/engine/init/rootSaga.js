import {all, call} from "redux-saga/effects"
import {todosWatcher} from "../core/todos/saga/watcher";
export function* rootSaga(){
    yield all([
        call(todosWatcher)
    ])
}