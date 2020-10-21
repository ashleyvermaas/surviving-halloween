const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor(/*posX, posY, radius*/) {
        /*this.x = posX;
        this.y = posY;
        this.radius = radius;*/

        this.x = 0;
        this.y = 400;
    }

    createPlayer() {
        ctx.fillStyle = 'black';
        //ctx.fillRect(0, 400, 100, 100);
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    jump(){
        this.y -= 100;
}

    moveUp(){
        this.y -= 10;
    }

    moveDown(){
        this.y += 10;
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
        ctx.fillRect(300, 400, 100, 100);
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
        ctx.fillRect(0, 0, 100, 100);
    }
}

// Show player, obstacle and target on canvas
const player = new Player();
const obstacle = new Obstacle();
const target = new Target();

player.createPlayer();
obstacle.createObstacle();
target.createTarget();

