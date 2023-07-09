import React from "react";
import cx from "classnames";

export default class Button extends React.Component {
    render() {
        const {text, classBtnDelete, handle} = this.props;
        const className = cx(
            "form__btn",
            classBtnDelete
        );
        return (
            <button onClick={handle} className={className}>{text}</button>
        )
    }
}
