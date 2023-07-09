import React from "react";
import '../../main.css';
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../container/TodoForm";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            editTodo: null,
            editText: ""

        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
    }

    componentDidMount() {
        this.setState({
                todo: JSON.parse(localStorage.getItem("todo")) || []
            }
        )
    }

    handleAdd(event) {
        event.preventDefault();
        const input = document.getElementsByClassName("form__input")[0];
        const text = input.value;
        const newItem = [...this.state.todo, {text, id: Math.floor(Math.random() * 1000)}];
        this.setState({
            todo: newItem
        })
        localStorage.setItem("todo", JSON.stringify(newItem));
        input.value = '';
    }

    handleDelete(id) {
        this.setState((state) => {
            const prevState = state.todo;
            const newItem = prevState.filter(item => item.id !== id);
            localStorage.setItem("todo", JSON.stringify(newItem));
            return {
                todo: newItem
            }
        })
    }

    handleEditing = (id) => {
        const todoItem = this.state.todo.find(item => item.id === id);
        this.setState({
            editTodo: todoItem,
            editText: todoItem.text
        });
    }


    handleUpdate = (event) => {
        event.preventDefault();
        const updatedTodo = {
            ...this.state.editTodo,
            text: this.state.editText
        };
        const updatedTodoList = this.state.todo.map(item => {
            if (item.id === updatedTodo.id) {
                return updatedTodo;
            }
            return item;
        });
        this.setState({
            todo: updatedTodoList,
            editTodo: null,
            editText: ""
        });
        localStorage.setItem("todo", JSON.stringify(updatedTodoList));
    }



    render() {
        const {todo, editTodo, editText} = this.state;
        return (
            <div className="container">
                <Header/>
                <TodoForm handleAdd={this.handleAdd}/>
                <div>
                    {todo.map(item =>
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            handleDelete={this.handleDelete}
                            handleEditing={this.handleEditing}
                        />
                    )}
                </div>
                {editTodo &&
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={editText}
                            onChange={event => this.setState({editText: event.target.value})}
                        />
                        <button type="submit">Save</button>
                    </form>
                }
            </div>
        );
    }
}
