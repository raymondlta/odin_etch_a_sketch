const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const miniContainer = document.createElement("div");
        miniContainer.classList.add("miniContainer");
        container.appendChild(miniContainer);
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.classList.add("pixel");
            miniContainer.appendChild(box);
            box.addEventListener("mouseover", function () {
                box.style["background-color"] = "black";
            });
        }
    }
}

function clearGrid() {
    const range = container.children.length;
    for (let i = 0; i < range; i++) {
        container.removeChild(container.lastChild);
    }
}

resetBtn.addEventListener("click", function () {
    const size = parseInt(prompt("Enter an integer from 0 to 100: "));

    if (size < 0 || size > 100 || !size) {
        if (container.lastChild.className !== "error") {
            const error = document.createElement("div");
            error.classList.add("error");
            error.textContent = "That is not a valid input, try again...";
            container.appendChild(error);
        }
    }
    else {
        clearGrid();
        createGrid(size);
    }
});

createGrid(16);