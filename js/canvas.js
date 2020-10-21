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
        this.y -= 200;
    }

    moveUp() {
        if (this.y === 0) {
            this.y = 0;
        } else {
            this.y -= 100;
        }
    }

    moveDown() {
        if (this.y === canvas.height - 100) {
            this.y = canvas.height - 100;
        } else {
            this.y += 100;
        }
    }

    moveLeft() {
        if (this.x === 0) {
            this.x = 0;
        } else {
            this.x -= 100;
        }
    }

    moveRight() {
        if (this.x === canvas.width - 100) {
            this.x = canvas.width - 100;
        } else {
            this.x += 100;
        }
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

    moveObstacle() {
        requestAnimationFrame(obstacle.moveObstacle);
        this.x -= 50;
        // if (this.x < -200) {
        //     this.x = 1000;
        // }
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

    moveTarget() {
        requestAnimationFrame(target.moveTarget);
        this.x -= 50;
        // if (this.x < -200) {
        //     this.x = 1000;
        // }
    }
}

// Put classes in variables
const player = new Player();
const obstacle = new Obstacle();
const target = new Target();