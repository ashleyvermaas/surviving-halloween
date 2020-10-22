const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor() {
        this.x = 0;
        this.y = 400;
        this.width = 100;
        this.height = 100;
        this.color = 'black';
        this.speedX = this.width;
        this.speedY = this.height;
    }

    createPlayer() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    jump() {
        if (this.y === 0 || this.y - this.height === 0) {
            this.y = 0;
        } else {
            this.y -= this.speedY * 2;
        }
    }

    moveUp() {
        if (this.y === 0) {
            this.y = 0;
        } else {
            this.y -= this.speedY;
        }
    }

    moveDown() {
        if (this.y === canvas.height - this.height) {
            this.y = canvas.height - this.height;
        } else {
            this.y += this.speedY;
        }
    }

    moveLeft() {
        if (this.x === 0) {
            this.x = 0;
        } else {
            this.x -= this.speedX;
        }
    }

    moveRight() {
        if (this.x === canvas.width - this.width) {
            this.x = canvas.width - this.width;
        } else {
            this.x += this.speedX;
        }
    }

    detectCollision() {
        if (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y) {
            this.color = 'orange';
        }

        if (this.x < target.x + target.width &&
            this.x + this.width > target.x &&
            this.y < target.y + target.height &&
            this.y + this.height > target.y) {
            this.color = 'pink';
        }
    }
}

class Obstacle {
    constructor() {
        this.x = 900;
        this.y = 400;
        this.width = 100;
        this.height = 100;
        this.color = 'red';
        this.speedX = 2;
    }

    createObstacle() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveObstacle() {
        this.x -= this.speedX;
        // if (this.x < -200) {
        //      this.x = 1000;
        // }
    }
}

class Target {
    constructor() {
        this.x = 900;
        this.y = 300;
        this.width = 100;
        this.height = 100;
        this.color = 'green';
        this.speedX = 5;
    }

    createTarget() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveTarget() {
        this.x -= this.speedX;
        //  if (this.x < -200) {
        //     this.x = 1000;
        //   }
    }
}

// Put classes in variables
const player = new Player();
const obstacle = new Obstacle();
const target = new Target();