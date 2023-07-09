import React from "react";

export default function Input(props) {
    const { value} = props

    return <input
        value={value}
        type="text"
        name="inputTodo"
        required
        className="form__input"/>

}
