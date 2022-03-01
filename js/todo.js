const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function addTodoList(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = value;
    todoList.appendChild(li);
}

function todoListHandle(evt) {
    evt.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    addTodoList(newTodo);
}

todoForm.addEventListener("submit", todoListHandle);
