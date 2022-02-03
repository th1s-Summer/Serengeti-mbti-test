const something = document.getElementById("something");

function clickEvent() {
    const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    something.style.color = randomColor;
    console.log("something was clicked!");
}
something.addEventListener("click", clickEvent);

function getRandom() {
    return Math.round(Math.random() * 0xffffff).toString(16);
}
console.log(getRandom());
