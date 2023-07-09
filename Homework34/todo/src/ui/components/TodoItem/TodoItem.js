import React from "react";
// Helpers
import "./style.css";

export default function TodoItem(props) {

    const {text} = props;

    return (
        <div className="todo-item">
            {text}
        </div>
    )
}

