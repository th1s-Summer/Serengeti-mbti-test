const something = document.getElementById("something");

function clickEvent() {
    const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    something.style.color = randomColor;
    console.log("something was clicked!");
}

function mouseEvent() {
    something.innerText = "boooooo! mouse is here!";
}

function mouseLeave() {
    something.innerText = "bye bye- mouse is gone!";
}

something.addEventListener("click", clickEvent);
something.addEventListener("mouseenter", mouseEvent);
something.addEventListener("mouseleave", mouseLeave);
