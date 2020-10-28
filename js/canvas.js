const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();

    game.obstacleArray.forEach(obstacle => {
        obstacle.update();
    });

    if (!player.hasCollision) {
        requestAnimationFrame(updateCanvas);
    }
}