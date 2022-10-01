let gameBoard = document.querySelector('.gameBoard');
// let block = document.querySelector('div');

//16x16 board 
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    gameBoard.appendChild(div);
}