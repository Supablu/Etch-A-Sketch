let gameBoard = document.querySelector('.gameBoard');

//16x16 board 
for (let i = 0; i < 256; i++) {
    const block = document.createElement('div');
    gameBoard.appendChild(block);
}