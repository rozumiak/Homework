import React from "react";

export default function Input(props) {
    const {text} = props;
    return <input defaultValue={text} type="text" name="value" required className="form__input"/>

}
