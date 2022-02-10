const title = document.querySelector("h1");

function titleEvent() {
    const defaultClass = "";
    if (title.className === defaultClass) {
        title.className = "active";
    } else {
        title.className = defaultClass;
    }
}

title.addEventListener("click", titleEvent);
