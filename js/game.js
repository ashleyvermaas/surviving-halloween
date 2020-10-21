class Game {

}



document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 16:
            player.jump();
            console.log('jump', player);
            break;
        case 38:
            player.moveUp();
            console.log('up', player);
            break;
        case 40:
            player.moveDown();
            console.log('down', player);
            break;
        case 37:
            player.moveLeft();
            console.log('left', player);
            break;
        case 39:
            player.moveRight();
            console.log('right', player);
            break;
    }
    updateCanvas();
});

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.createPlayer();
    obstacle.createObstacle();
    target.createTarget();
    obstacle.animate();
    target.animate();
}

setInterval(updateCanvas, 200);