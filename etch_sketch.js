const container = document.querySelector(".container");
//container.setAttribute("style", "border: solid; border-color: black;");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const miniContainer = document.createElement("div");
        //miniContainer.setAttribute("style", "border: solid; border-color: blue; flex: 1;");
        miniContainer.classList.add("miniContainer");
        container.appendChild(miniContainer);
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            //box.setAttribute("style", "border: solid; border-color: red;");
            box.classList.add("pixel");
            miniContainer.appendChild(box);
        }
    }
}

createGrid(16);

const pixels = document.querySelectorAll(".pixel");

for (let i = 0; i < pixels.length; ++i) {
    const pixel = pixels[i];
    pixel.addEventListener("mouseover", function (e) {
        pixel.style["background-color"] = "black";
    });
}