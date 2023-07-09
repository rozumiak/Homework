import React from "react";
import {Field} from 'react-final-form'
import styles from '../../main.module.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";

function TodoForm(props) {
    const {handleSubmit} = props;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field
                component={Input}
                placeholder="Введіть мінімум 5 символів"
                name="value"
                type="text"
                className={styles.form__input}
                required
            />
            <Button className={styles.form__btn} text={"Добавить"}/>
        </form>
    )
}

export default TodoForm;
