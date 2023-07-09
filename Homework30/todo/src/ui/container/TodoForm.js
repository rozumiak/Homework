import React from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
    const {handleAdd} = props;
    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input/>
            <Button text={"Добавить"}/>
        </form>
    );

}

export default TodoForm;
