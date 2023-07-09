import React from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

export default function TodoItem(props) {

    const {text, handleDelete, id} = props;
    const onClick = () => {
        handleDelete(id);
    }
    return (
        <div className="todo-item">
            {text}
            <div className="todo-item__description"></div>
            <Button handle={onClick} text={"Удалить"} classBtnDelete="todo-item__delete"/>
        </div>
    )
}

