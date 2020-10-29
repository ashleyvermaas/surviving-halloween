const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function updateCanvas() {
    game.clear();
    game.player.update();
    game.obstacleArray.forEach(obstacle => {
        obstacle.update();
    });

    if (!game.player.hasCollision) {
        requestAnimationFrame(updateCanvas);
    }
}