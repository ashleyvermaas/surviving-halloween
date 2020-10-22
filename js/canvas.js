const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Player {
    constructor() {
        this.x = 0;
        this.y = 400;
        this.width = 100;
        this.height = 100;
        this.color = 'black';
    }

    createPlayer() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    jump() {
        if (this.y === 0) {
            this.y = 0;
        } else {
            this.y -= 200;
        }
    }

    moveUp() {
        if (this.y === 0) {
            this.y = 0;
        } else {
            this.y -= this.height;
        }
    }

    moveDown() {
        if (this.y === canvas.height - this.height) {
            this.y = canvas.height - this.height;
        } else {
            this.y += this.height;
        }
    }

    moveLeft() {
        if (this.x === 0) {
            this.x = 0;
        } else {
            this.x -= this.width;
        }
    }

    moveRight() {
        if (this.x === canvas.width - this.width) {
            this.x = canvas.width - this.width;
        } else {
            this.x += this.width;
        }
    }

    detectCollision() {
        if (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y) {
                this.color = 'purple';
            }

            if (this.x < target.x + target.width &&
                this.x + this.width > target.x &&
                this.y < target.y + target.height &&
                this.y + this.height > target.y) {
                    this.color = 'yellow';
                }
    }
}

class Obstacle {
    constructor() {
        this.x = 900;
        this.y = 400;
        this.width = 100;
        this.height = 100;
    }

    createObstacle() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveObstacle() {
        requestAnimationFrame(obstacle.moveObstacle);
        this.x -= 50;
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
    }

    createTarget() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveTarget() {
        requestAnimationFrame(target.moveTarget);
        this.x -= 50;
        //  if (this.x < -200) {
        //     this.x = 1000;
        //  }
    }
}

// Put classes in variables
const player = new Player();
const obstacle = new Obstacle();
const target = new Target();