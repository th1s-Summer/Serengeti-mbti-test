const title = document.querySelector("h1");

function titleEvent() {
    // const defaultClass = "active";
    // if (title.classList.contains(defaultClass)) {
    //     title.classList.remove(defaultClass)
    // } else {
    //     title.classList.add(defaultClass)
    // }
    title.classList.toggle("active");
}

title.addEventListener("click", titleEvent);
