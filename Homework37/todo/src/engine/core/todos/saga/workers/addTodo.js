import {put, select, call} from "redux-saga/effects";
import {todosActions} from "../../slice";



export function* callAddTodosWorker(action) {
    action.payload.preventDefault();
    //select: Дозволяє отримати доступ до поточного стану Redux Store та отримати дані зі стану.
    const items = yield select((state) => state.todos.items);
    const input = action.payload.target.value;
    const text = input.value;
    const newItems = [...items, {id: Math.random(), text}];
    //put: Відправляє дію до Redux Store, спричиняючи виконання відповідного редуктора.
    yield put(todosActions.addItems(newItems));
    //call: Викликає функцію із заданими аргументами. Часто використовується для виклику асинхронних операцій.
    yield call(() => localStorage.setItem('items', JSON.stringify(newItems)));
    input.value = '';
}
