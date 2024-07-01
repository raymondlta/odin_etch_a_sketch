const body = document.querySelector("body");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".resetBtn");

function setOpacity(node) {
    const lastClassIndex = node.classList.length - 1;
    const className = node.classList[lastClassIndex];

    if (className === "zeroPercent") {
        node.classList.add("tenPercent");
    }
    else if (className === "tenPercent") {
        node.classList.add("twentyPercent");
    }
    else if (className === "twentyPercent") {
        node.classList.add("thirtyPercent");
    }
    else if (className === "thirtyPercent") {
        node.classList.add("fortyPercent");
    }
    else if (className === "fortyPercent") {
        node.classList.add("fiftyPercent");
    }
    else if (className === "fiftyPercent") {
        node.classList.add("sixtyPercent");
    }
    else if (className === "sixtyPercent") {
        node.classList.add("seventyPercent");
    }
    else if (className === "seventyPercent") {
        node.classList.add("eightyPercent");
    }
    else if (className === "eightyPercent") {
        node.classList.add("ninetyPercent");
    }
    else if (className === "ninetyPercent") {
        node.classList.add("hundredPercent");
    }
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const miniContainer = document.createElement("div");
        miniContainer.classList.add("miniContainer");
        container.appendChild(miniContainer);
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.classList.add("pixel", "zeroPercent");
            miniContainer.appendChild(box);
            box.addEventListener("mouseover", function () {
                setOpacity(box);
            });
        }
    }
}

function createError() {
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = "That is not a valid input, try again...";
    body.insertBefore(error, body.firstChild);
}

function clearError() {
    if (body.firstChild.className === "error") {
        body.removeChild(body.firstChild);
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
        if (body.firstChild.className !== "error") {
            createError()
        }
    }
    else {
        clearError();
        clearGrid();
        createGrid(size);
    }
});

createGrid(16);