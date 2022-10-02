let gameBoard = document.querySelector('.gameBoard');
let clear = document.querySelector('#clear');

//16x16 board 
for (let i = 0; i < 256; i++) {
    const block = document.createElement('div');
    block.id = 'block';
    gameBoard.appendChild(block);
}

//When pointer hovers over a block, fill in with color black
let colorBlack = document.querySelectorAll('#block');
for (const color of colorBlack) {
    color.addEventListener('mouseover', () => {
        color.style.backgroundColor = 'black';
    });
}

//Clear button to remove all div element colors

