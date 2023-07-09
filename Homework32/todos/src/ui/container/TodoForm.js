import React from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
    const {handleAdd, value, onChange, isDisabled} = props;
    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input value={value} onChange={onChange}/>
            <Button isDisabled={isDisabled} text={"Добавить"}/>
        </form>
    );

}

export default TodoForm;
