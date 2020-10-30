const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateCanvas() {
    clear();
    game.update();
    showCurrentScore();
    game.levelUp();

    if (!game.player.hasCollision) {
        requestAnimationFrame(updateCanvas);
    } else {
        game.endGame();
    }
}