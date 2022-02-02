const something = document.getElementById("something");

function clickEvent() {
    something.style.color = "blue";
    console.log("something was clicked!")
}
something.addEventListener("click", clickEvent);
