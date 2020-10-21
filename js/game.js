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
    }
    updateCanvas();
});

function updateCanvas() {
    ctx.clearRect(0, 0, 1000, 500);
    player.createPlayer();
    obstacle.createObstacle();
    target.createTarget();
}