let clearBtn = document.querySelector('.clear');
let resize = document.querySelector('.resize');
let value = 16; // For default 16x16 grid size

//Create grid
function createGrid(size = value) {
    grid.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
    grid.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.id = 'block';
        grid.appendChild(block);
    }
    grid.addEventListener("mouseover", colorBlack);
    resize.addEventListener("click", resizeGrid);
    clearBtn.addEventListener("click", clearGrid);
}

//Resize the grid
function resizeGrid() {
    const newSize = parseInt(prompt("New Size: ", 16));
    grid.innerHTML = '';
    resize.removeEventListener("click", resizeGrid);
    grid.removeEventListener("mouseover", colorBlack);
    createGrid(newSize);
}

//Fill in background color of black
function colorBlack(e) {
    if (e.target.className !== "block") return false;
    e.target.style.backgroundColor = 'black';
}

//Clear background color from grid
function clearGrid() {
    grid.innerHTML = '';
    resizeGrid();
}

createGrid();