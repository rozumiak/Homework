import React from "react";
import {useState, useEffect} from "react";
import '../../main.css';
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../container/TodoForm";

export default function Main() {
    const [todo, setTodo] = useState([])

    useEffect(
        () => {
            setTodo(JSON.parse(localStorage.getItem("todo")) || [])
        },
        []
    );

    const handleAdd = (event) => {
        event.preventDefault();
        const input = document.getElementsByClassName("form__input")[0];
        const text = input.value;
        const newItem = [...todo, {text, id: Math.floor(Math.random() * 1000)}];
        setTodo(newItem)
        localStorage.setItem("todo", JSON.stringify(newItem));
        input.value = '';
    }

    const handleDelete = (id) => {
        const newItem = todo.filter(item => item.id !== id);
        localStorage.setItem("todo", JSON.stringify(newItem));
        setTodo(newItem)
    }

    return (
        <div className="container">
            <Header/>
            <TodoForm handleAdd={handleAdd}/>
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
