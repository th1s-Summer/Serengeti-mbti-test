const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function loginBtnEvent() {
    const value = loginInput.value;
    if (value === "") {
        alert("Please write your name")
    }
}
loginBtn.addEventListener("click", loginBtnEvent);
