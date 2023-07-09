import {showMessage} from "./alert";
import "../style/index.scss";
showMessage();
console.log("Hello world");

function Tasks(_formInput, _todosWrapper) {
    this.todosWrapper = document.querySelector(_todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        this.input = event.target.querySelector(_formInput);
        this.todosWrapper.insertAdjacentHTML("beforeend", this.createElement(this.input.value));
        this.input.value = "";
        this.input.focus();
        document.querySelectorAll(".js--delete").forEach(item => {
            item.addEventListener("click", this.delete)
        })
        document.querySelectorAll(".js--done").forEach(check => {
            check.addEventListener("click", this.doneItem)
        })

    }

    this.delete = function (event) {
        event.target.closest(".js--todo-item").remove();
    }
    this.doneItem = (event) => {
        let _todoItem = event.target.closest(".js--description");

        if (event.target.checked) {
            _todoItem.style.textDecoration = "line-through";
        } else {
            _todoItem.style.textDecoration = "none";
        }


    }
    this.createElement = function (description) {
        return `
        <div class="todo-item js--todo-item">
            <div class="todo-item__description js--description">${description}
            <input type="checkbox" class="js--done" style="margin-left: 10px"></div>
            <button class="todo-item__delete js--delete">Видалити</button>
        </div>`
    }

}

const task = new Tasks(".js--form__input", ".js--todos-wrapper");

document.querySelector(".js--form").addEventListener("submit", task.addItem)
