import React from "react";
import cx from "classnames";
import styles from "../../../main.module.css"


export default function Button(props) {
    const {text, classBtnDelete, handle} = props;
    const className = cx(
        styles.form__btn,
        classBtnDelete
    );
    return (
        <button onClick={handle} className={className}>{text}</button>
    )

}
