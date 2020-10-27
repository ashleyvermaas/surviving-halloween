class Player {
    constructor() {
        this.x = 0;
        this.y = 400;
        this.width = 100;
        this.height = 100;
        this.color = 'black';
        this.speedX = this.width;
        this.speedY = this.height;
        this.hasCollision = false;
    }

    drawPlayer() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
        obstacleArray.forEach(obstacle => {
            if (this.x < obstacle.x + obstacle.width &&
                this.x + this.width > obstacle.x &&
                this.y < obstacle.y + obstacle.height &&
                this.y + this.height > obstacle.y) {

                this.color = 'orange';
                this.hasCollision = true;

                game.endGame();
            }
        });

        // Optional Target Class
        // if (this.x < target.x + target.width &&
        //     this.x + this.width > target.x &&
        //     this.y < target.y + target.height &&
        //     this.y + this.height > target.y) {

        //     this.color = 'pink';
        //     game.score++;
        // }

    }
}