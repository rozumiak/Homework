function UserTable({form, content, addButton,}) {
    this.init = function () {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.addUser(form.elements.name.value, form.elements.phone.value, form.elements.age.value);
        })

        addButton.addEventListener("click", function () {
            form.reset();
            form.classList.add("open");

        })
        this.loadUsers();
    }


    this.addUser = function (name, phone, age) {

        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age
        }
        this.userTemplate(user);
        form.classList.remove("open");
        const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
        currentUsers.push(user);
        localStorage.setItem("users", JSON.stringify(currentUsers));
    }

    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            users.forEach(user => this.userTemplate(user));
        }
    }

    this.deleteUser = function () {
        const currentItem = this.closest(".js--item");
        const currentUsers = JSON.parse(localStorage.getItem("users"));
        const currentUsersWithoutItem = currentUsers.filter(item => {
            return item.id !== +currentItem.dataset.id
        });
        currentItem.remove();
        localStorage.setItem("users", JSON.stringify(currentUsersWithoutItem));
    }

    this.userTemplate = function (user) {
        const newItem = document.createElement("tr");
        newItem.classList.add("js--item");
        newItem.dataset.id = user.id;
        newItem.insertAdjacentHTML("beforeend", (
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn-view">View</button> <button class="btn-edit">Edit</button> <button class="js--btn-del">Delete</button></td>`
        ))
        newItem.querySelector(".js--btn-del").addEventListener("click", this.deleteUser)
        content.appendChild(newItem);
    }

}

(new UserTable(
    {
        form: document.querySelector(".js--form"),
        content: document.querySelector(".js--content"),
        addButton: document.querySelector(".js--add"),
        userInfo: document.querySelector(".js--user")
    })).init();