class Game {

}

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 16:
            player.jump();
            break;
        case 38:
            player.moveUp();
            break;
        case 40:
            player.moveDown();
            break;
        case 37:
            player.moveLeft();
            break;
        case 39:
            player.moveRight();
            break;
    }
});


function updateCanvas() {
    requestAnimationFrame(updateCanvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.createPlayer();
    obstacle.createObstacle();
    target.createTarget();
    obstacle.moveObstacle();
    target.moveTarget();
    player.detectCollision();
}

window.addEventListener("load", function () {
    updateCanvas();
});