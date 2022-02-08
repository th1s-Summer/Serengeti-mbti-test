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

function windowResize() {
    document.body.style.backgroundColor = "tomato";
}

function widowOffline() {
    alert("Wher are you? Are you no-WIFI zone? :( ");
}

function windowOnline() {
    alert("Yes! We can do everything! :p ");
}

something.addEventListener("click", clickEvent);
something.addEventListener("mouseenter", mouseEvent);
something.addEventListener("mouseleave", mouseLeave);
window.addEventListener("resize", windowResize);
window.addEventListener("offline", widowOffline);
window.addEventListener("online", windowOnline);