let blackBtn = document.querySelector('#black');
let rainbowBtn = document.querySelector('#rainbow');
let eraseBtn = document.querySelector('#eraser');
let resetBtn = document.querySelector('#reset');
let resize = document.querySelector('.resize');
let value = 16; // For default 16x16 grid size

//Create grid
function createGrid(size = value) {
    grid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
    grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        grid.appendChild(block);
    }
}

function addListeners() {
    grid.addEventListener("mouseover", colorBlack);
    resize.addEventListener("click", resizeGrid);
    resetBtn.addEventListener("click", clearGrid);
    eraseBtn.addEventListener("click", eraseColor);
    blackBtn.addEventListener("click", blackPaint);
    rainbowBtn.addEventListener("click", rainbow);
}

//Resize the grid
function resizeGrid() {
    const newSize = parseInt(prompt("New Size: ", 16));
    grid.innerHTML = '';
    createGrid(newSize);
    blackPaint();
}

//Fill in background color of black
function colorBlack(e) {
    if (e.target.className !== "block") return false;
    e.target.style.backgroundColor = 'black';
}

//Fill in background color of white
function colorWhite(e) {
    if (e.target.className !== "block") return false;
    e.target.style.backgroundColor = 'white';
}

//Fill in background color with randomly generated rgb
function randomColor(e) {
    if (e.target.className !== "block") return false;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`
}

//Clear background color from grid
function clearGrid(size, newSize) {
    grid.innerHTML = '';
    createGrid();
    blackPaint();
}

//Colors divs black after clicking 'Color Black'
function blackPaint(e) {
    grid.removeEventListener("mouseover", colorWhite);
    grid.addEventListener("mouseover", colorBlack);
}

//color with randomly generated color
function rainbow(e) {
    grid.removeEventListener("mouseover", colorWhite);
    grid.removeEventListener("mouseover", colorBlack);
    grid.addEventListener("mouseover", randomColor);
}

//Colors over black divs with white to 'erase' it
function eraseColor(e) {
    grid.removeEventListener("mouseover", colorBlack);
    grid.addEventListener("mouseover", colorWhite);
}

createGrid();
addListeners();


