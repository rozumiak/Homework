import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {todosAsyncAction} from "../../engine/core/todos/saga/asyncAction";
import {useDispatch} from "react-redux";


function TodoForm() {
    const dispatch = useDispatch();

    const handleAdd = (event) => dispatch(todosAsyncAction.addTodoAsync(event));


    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input/>
            <Button text="Отправить"/>
        </form>
    );
}

export default TodoForm;
