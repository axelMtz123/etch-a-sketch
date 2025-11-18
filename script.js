
let gridSlider = document.querySelector("#grid-slider");
let gridSize = document.querySelector("#grid-size");
let gridSize2 = document.querySelector("#grid-size-2");

let colorBtn = document.querySelector(".color-btn");
let eraseBtn = document.querySelector(".erase-btn");
let rainbowBtn = document.querySelector(".rainbow-btn");
let resetBtn = document.querySelector(".reset-btn");


let currentMode = "color";
let mouseDown = false;
let gridList;


function changeMode(newMode) {
    currentMode = newMode;
}

colorBtn.addEventListener("click", () => changeMode("color"));
eraseBtn.addEventListener("click", () => changeMode("erase"));
rainbowBtn.addEventListener("click", () => changeMode("rainbow"));


document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);


function randomIndex() {
    return Math.floor(Math.random() * 256);
}

function rgb() {
    const r = randomIndex();
    const g = randomIndex();
    const b = randomIndex();
    return `rgb(${r}, ${g}, ${b})`;
}


function createGrid(size) {
    let sketchBox = document.querySelector(".sketch-box");
    let totalSquares = size * size;

    
    sketchBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    sketchBox.style.display = "grid";

   
    sketchBox.innerHTML = "";

    
    for (let i = 0; i < totalSquares; i++) {
        let divGrid = document.createElement("div");
        divGrid.classList.add("divGrid");
        divGrid.style.border = "1px solid black";
        divGrid.style.backgroundColor = "purple"; 
        sketchBox.appendChild(divGrid);
    }

    gridList = document.querySelectorAll(".divGrid");

   
    gridList.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (!mouseDown) return;

            if (currentMode === "color") {
                square.style.backgroundColor = "black";
            } else if (currentMode === "erase") {
                square.style.backgroundColor = "purple";
            } else if (currentMode === "rainbow") {
                square.style.backgroundColor = rgb();
            }
        });
    });
}


gridSlider.addEventListener("input", () => {
    gridSize.textContent = gridSlider.value;
    gridSize2.textContent = gridSlider.value;
    createGrid(gridSlider.value);
});


resetBtn.addEventListener("click", () => {
    if (!gridList) return;
    gridList.forEach(square => {
        square.style.backgroundColor = "purple";
    });
});


createGrid(gridSlider.value);
