const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // console.log(todoInput.value);
    todoInput.value = "";
}
todoForm.addEventListener("submit", handleTodo);