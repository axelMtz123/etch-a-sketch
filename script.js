let gridSlider = document.querySelector("#grid-slider")
let gridSize = document.querySelector("#grid-size")
let gridSize2 = document.querySelector("#grid-size-2")

gridSlider.addEventListener("input", (event) => {
    gridSize.textContent = gridSlider.value;
    gridSize2.textContent = gridSlider.value;

    totalsquares = gridSlider.value * gridSlider.value

    let sketchBox = document.querySelector(".sketch-box")
    divGrid.setAttribute("style", 'grid-template-columns:repeat (${gridSlider.value}, 1fr); grid-template-rows:repeat(${gridSlider.value}, 1fr);')

    for(i = 0; i < totalsquares; i++) {
        let divGrid = document.createElement("div")
        divGrid.classList.add("divGrid")
        divGrid.setAttribute ("style", "border: 2px solid black") 

        sketchBox.appendChild(divGrid)
    }
})

