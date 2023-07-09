// Cors
import React from "react";
//
import {useState, useEffect} from "react";
import styles from '../../main.module.css';
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../container/TodoForm";
import { Form} from "react-final-form";


export default function Main() {
    const [todo, setTodo] = useState([]);

    useEffect(
        () => {
            setTodo(JSON.parse(localStorage.getItem("todo")) || [])
        },
        []
    );

    const handleAdd = () => {
        const input = document.getElementsByClassName(styles.form__input)[0];
        const text = input.value;
        const newItem = [...todo, {text, id: Math.floor(Math.random() * 1000)}];
        if(text.length > 4){
            setTodo(newItem)
            localStorage.setItem("todo", JSON.stringify(newItem));
            input.value = '';

        }
    }

    const handleDelete = (id) => {
        const newItem = todo.filter(item => item.id !== id);
        localStorage.setItem("todo", JSON.stringify(newItem));
        setTodo(newItem)
    }

    return (
        <div className={styles.container}>
            <Header/>
            <Form
                onSubmit={handleAdd}
                render={TodoForm}>
            </Form>
            <div>
                {todo.map(item =>
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        handleDelete={handleDelete}
                    />
                )}
            </div>

        </div>
    );
}
