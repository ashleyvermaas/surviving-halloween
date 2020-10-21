const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor() {
        this.x = 0;
        this.y = 400;
    }

    createPlayer() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    jump() {
        this.y -= 100;
    }

    moveUp() {
        this.y -= 10;
    }

    moveDown() {
        this.y += 10;
    }

    moveLeft() {
        this.x -= 10;
    }

    moveRight() {
        this.x += 10;
    }


}


class Obstacle {
    constructor() {
        this.x = 900;
        this.y = 400;
    }

    createObstacle() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    animate() {
        requestAnimationFrame(obstacle.animate);
        this.x -= 100;
    }

}

class Target {
    constructor() {
        this.x = 900;
        this.y = 300;
    }

    createTarget() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, 100, 100);
    }

    animate() {
        requestAnimationFrame(target.animate);
        this.x -= 50;
    }
}

// Show player, obstacle and target on canvas
const player = new Player();
const obstacle = new Obstacle();
const target = new Target();

player.createPlayer();
obstacle.createObstacle();
target.createTarget();
obstacle.animate();