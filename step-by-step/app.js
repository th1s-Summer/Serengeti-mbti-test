const h1 = document.querySelector("h1");

function changeColor() {
    const currentColor = h1.style.color;
    let setterColor;

    if (currentColor === "green") {
        setterColor = "blue";
    } else {
        setterColor = "green";
    }
    h1.style.color = setterColor;
}
h1.addEventListener("click", changeColor);