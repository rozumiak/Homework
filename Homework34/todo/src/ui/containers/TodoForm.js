import React, {useEffect} from "react";
import '../../main.css';
// Components
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
//Core
import {useDispatch, useSelector} from "react-redux";
//Engine
import {todosActions, todosSelectors} from "../../engine/core/todos/todoSlice";
import {Footer} from "../components/Footer";

function TodoForm() {
    const items = useSelector(todosSelectors.items);
    const dispatch = useDispatch();

    useEffect(
        () => {
            const fetchItems = JSON.parse(localStorage.getItem("items")) || [];
            dispatch(todosActions.addItems(fetchItems));
        },
        []
    );
    const handleAdd = (event) => {
        event.preventDefault();
        const input = event.target.inputTodo;
        const text = input.value;
        const newItems = [...items, {id: Math.floor(Math.random()*1000), text}];
        dispatch(todosActions.addItems(newItems));
        localStorage.setItem("items", JSON.stringify(newItems));
        input.value = "";

    }

    return (
        <div className="container">
            <Header/>
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input />
                <Button className="form__btn" text={"Добавить"}/>
            </form>
            <div>
                {items.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                    />
                ))}
            </div>
            <Footer/>
        </div>

    );

}

export default TodoForm;
