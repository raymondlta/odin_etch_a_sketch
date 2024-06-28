const container = document.querySelector(".container");
container.setAttribute("style", "border: solid; border-color: black;");

function createGrid() {
    const range = 16;

    for (let i = 0; i < range; i++) {
        const mini_container = document.createElement("div");
        mini_container.setAttribute("style", "border: solid; border-color: blue;");
        container.appendChild(mini_container);
        for (let j = 0; j < range; j++) {
            const box = document.createElement("div");
            box.setAttribute("style", "border: solid; border-color: red; margin: 2px;");
            mini_container.appendChild(box);
        }
    }
}

/*
testing how to add classes from css
const val = document.createElement("div");
val.classList.add("val");
container.appendChild(val);
*/