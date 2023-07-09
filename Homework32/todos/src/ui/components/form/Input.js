import React from "react";

export default function Input(props) {
    const {value, onChange} = props;
    return <input onChange={onChange} placeholder={"Необхідно ввести більше 3 символів"} value={value} type="text" name="value" required className="form__input"/>

}
