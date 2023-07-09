import React from "react";
// Parts
import Button from "../form/Button";
// Helpers
import styles from "./style.module.css";

export default function TodoItem(props) {

    const {text, handleDelete, id} = props;
    const onClick = () => {
        handleDelete(id);
    }
    return (
        <div className={styles.todo_item}>
            {text}
            <div className={styles.todo_item__description}></div>
            <Button handle={onClick} text={"Удалить"} classBtnDelete={styles.todo_item__delete}/>
        </div>
    )
}

