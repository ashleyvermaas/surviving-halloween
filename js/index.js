// File for for DOM & on load & event handlers (index.js) 

let game;
let startButton = document.getElementById('start-button');
let startScreen = document.getElementById('start-screen');
let endScreen = document.getElementById('end-screen');
let winScreen = document.getElementById('win-screen');
let tryAgainButton = document.getElementById('try-again-button');
let body = document.querySelector('body');
let currentScore;
//let endScore;
let scoreDisplay = document.getElementById('score-display');
let backgroundMusic = new Audio('./audio/game-music.mp3');
let laughAudio = new Audio('./audio/laugh-audio.mp3');
let winAudio = new Audio('./audio/victory-audio.mp3');

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
    winScreen.remove();
    scoreDisplay.remove();
});

startButton.addEventListener('click', event => {
    swapToCanvas();
    game = new Game();
    game.startGame();
    backgroundMusic.play();
});

tryAgainButton.addEventListener('click', event => {
    swapToCanvas();
    game = new Game();
    game.startGame();
    backgroundMusic.play();
});

function swapToCanvas() {
    startScreen.remove();
    endScreen.remove();
    body.appendChild(canvas);
    body.appendChild(scoreDisplay);
}

function swapToEndScreen() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    laughAudio.play();
    canvas.remove();
    body.appendChild(endScreen);
    //showEndScore();

}

function swapToWinScreen() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    winAudio.play();
    game = new Game();
    canvas.remove();
    scoreDisplay.remove();
    body.appendChild(winScreen);
    currentScore.innerHTML = 100;
}

function showCurrentScore() {
    currentScore = document.getElementById('score');
    currentScore.innerHTML = game.score;
}


// function showEndScore() {
//     endScore = document.getElementById('end-score');
//     endScore.innerHTML = currentScore.innerHTML;
// }


// NEEDS REFACTORING!