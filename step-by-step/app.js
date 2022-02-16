const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const title = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    title.classList.remove(HIDDEN_CLASSNAME);
    title.innerHTML = `hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);
