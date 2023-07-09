import React from "react";
import cx from "classnames";

export default function Button(props) {
    const {text, classBtnDelete, handle} = props;
    const className = cx(
        "form__btn",
        classBtnDelete
    );
    return (
        <button onClick={handle} className={className}>{text}</button>
    )

}
