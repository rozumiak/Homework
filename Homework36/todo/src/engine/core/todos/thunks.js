import {todosActions} from "./slice";

export const handleAddTodo = (event) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        event.preventDefault();
        const input = event.target.value;
        const text = input.value;
        const newItems = [
            ...items,
            {id: Math.random(), text}
        ];
        dispatch(todosActions.addItems(newItems, { delayMS: 200 }));
        localStorage.setItem('items', JSON.stringify(newItems));
        input.value = ''
    }
}
