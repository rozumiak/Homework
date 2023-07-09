import {todosActions} from "../../slice";
import {put, call} from "redux-saga/effects"

export function* callGetTodosWorker() {
    //call: Викликає функцію із заданими аргументами. Часто використовується для виклику асинхронних операцій.
    const response = yield call(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    })
    //put: Відправляє дію до Redux Store, спричиняючи виконання відповідного редуктора.
    yield put(todosActions.addItems(response));

}