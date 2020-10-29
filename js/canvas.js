const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function updateCanvas() {
   game.update();
    if (!game.player.hasCollision) {
        requestAnimationFrame(updateCanvas);
    } else {
        game.loseGame();
    }
}