const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor(posX, posY, radius) {
        this.x = posX;
        this.y = posY;
        this.radius = radius;
    }

    createPlayer() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 100, 100);
    }
}


class Obstacle {
    constructor(posX, posY, radius) {
        this.x = posX;
        this.y = posY;
        this.radius = radius;
    }

    createObstacle() {
        ctx.fillStyle = 'red';
        ctx.fillRect(300, 0, 100, 100);
    }
}

class Target {
    constructor(posX, posY, radius) {
        this.x = posX;
        this.y = posY;
        this.radius = radius;
    }

    createTarget() {
        ctx.fillStyle = 'green';
        ctx.fillRect(600, 0, 100, 100);
    }
}

// Show player, obstacle and target on canvas
let player = new Player();
let obstacle = new Obstacle();
let target = new Target();

player.createPlayer();
obstacle.createObstacle();
target.createTarget();