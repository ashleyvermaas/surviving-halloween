// File for for DOM & on load & event handlers (index.js) 

let startButton = document.getElementById('start-button');
let startScreen = document.getElementById('start-screen');
let endScreen = document.getElementById('end-screen');
let tryAgainButton = document.getElementById('try-again-button');
let body = document.querySelector('body');

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 38:
            if (game.player.y === 0) {
                game.player.y = 0;
            } else {
                game.player.y -= game.player.speedY;
            }
            break;
        case 40:
            if (game.player.y === canvas.height - game.player.height) {
                game.player.y = canvas.height - game.player.height;
            } else {
                game.player.y += game.player.speedY;
            }
            break;
        case 37:
            if (game.player.x === 0) {
                game.player.x = 0;
            } else {
                game.player.x -= game.player.speedX;
            }
            break;
        case 39:
            if (game.player.x === canvas.width - game.player.width) {
                game.player.x = canvas.width - game.player.width;
            } else {
                game.player.x += game.player.speedX;
            }
            break;
    }
});

window.addEventListener("load", function () {
    canvas.remove();
    endScreen.remove();
});

startButton.addEventListener('click', event => {
    swapToCanvas();
    game.startGame();
});

tryAgainButton.addEventListener('click', event => {
    swapToCanvas();
    game.startGame();

});

function swapToCanvas() {
    startScreen.remove();
    endScreen.remove();
    body.appendChild(canvas);
}

function swapToEndScreen() {
    canvas.remove();
    body.appendChild(endScreen);
}