import React from "react";
// Parts
import Button from "../form/Button";

// Helpers
import "./style.css";


export default class TodoItem extends React.Component {
    render() {
        const {text,handleDelete, id, handleEditing } = this.props;
        const onClick = () => {
            handleDelete(id);
        }
        const onEdit = () => {
            handleEditing(id);
        }
        return (
            <div className="todo-item">
                <div className="todo-item__description">
                    {text}
                </div>
                <Button handle={onEdit} text={"Editing"}/>
                <Button handle={onClick} text={"Удалить"} classBtnDelete="todo-item__delete"/>
            </div>
        )
    }
}
