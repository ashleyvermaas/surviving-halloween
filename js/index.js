// File for for DOM & on load & event handlers (index.js) 

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 38:
            if (player.y === 0) {
                player.y = 0;
            } else {
                player.y -= player.speedY;
            }
            break;
        case 40:
            if (player.y === canvas.height - player.height) {
                player.y = canvas.height - player.height;
            } else {
                player.y += player.speedY;
            }
            break;
        case 37:
            if (player.x === 0) {
                player.x = 0;
            } else {
                player.x -= player.speedX;
            }
            break;
        case 39:
            if (player.x === canvas.width - player.width) {
                player.x = canvas.width - player.width;
            } else {
                player.x += player.speedX;
            }
            break;
    }
});

window.addEventListener("load", function () {
    updateCanvas();

    // put in function start game
    setInterval(game.makeObstacles, 500);
});