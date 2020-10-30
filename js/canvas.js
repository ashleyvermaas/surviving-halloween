const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// function drawScore() {
//     ctx.fillStyle = 'black';
//     ctx.font = '20px monospace';
//     ctx.fillText(`Score: ${game.score}`, 0, 40);
//     //console.log(game.score)
// }

function updateCanvas() {
    clear();
    game.update();
    showCurrentScore();

    if (!game.player.hasCollision) {
        requestAnimationFrame(updateCanvas);
    } else {
        game.endGame();
    }
}
