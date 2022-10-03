let gameBoard = document.querySelector('.gameBoard');
let block = document.querySelectorAll('#block');
let clearBtn = document.querySelector('#clear');
let value = 16; // For default 16x16 grid size
let resize = document.querySelector('.resize');

//Create grid
for (let i = 0; i < value * value; i++) {
    const block = document.createElement('div');
    block.id = 'block';
    gameBoard.appendChild(block);
}

//Resize the grid
resize.addEventListener('click', () => {
    let value = prompt('Enter desired size: ');
    console.log(value);
})


//When pointer hovers over a block, fill in with color black
let colorBlack = document.querySelectorAll('#block');
for (let color of colorBlack) {
    color.addEventListener('mouseover', () => {
        color.style.backgroundColor = 'black';
    });
}

//Clear button to remove all div element colors
let clearColor = document.querySelectorAll('#block');
for (let color of clearColor) {
    clearBtn.addEventListener('click', () => {
        color.style.backgroundColor = '';
    });
}