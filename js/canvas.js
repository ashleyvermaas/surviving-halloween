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

            game.endGame();
        }

        if (this.x < target.x + target.width &&
            this.x + this.width > target.x &&
            this.y < target.y + target.height &&
            this.y + this.height > target.y) {
            this.color = 'pink';
            game.score++;
        }
    }
}

class Obstacle {
    constructor(x, y, width, height, color /*, speedX*/ ) {
        // this.x = 900;
        // this.y = 400;
        // this.width = 100;
        // this.height = 100;
        // this.color = 'red';
        // this.speedX = 2;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        // this.speedX = speedX;
        this.update = () => {
            this.createObstacle();
        };
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

// UTILITY FUNCTIONS 
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}



// CREATE MULTIPLE OBSTACLES
let obstacleArray;
let obstaclePositions;

function makeObstacles() {
    obstacleArray = [];
    obstacleYPositions = [200, 300, 400];
    obstacleXPositions = [400, 500, 600, 700, 800, 900];

    for (i = 0; i < 3; i++) {

        let x = obstacleXPositions[Math.floor(Math.random()* obstacleXPositions.length)];
        let y = obstacleYPositions[Math.floor(Math.random()* obstacleYPositions.length)];
        let width = 100;
        let height = 100;
        let color = 'purple';

        if (i !== 0) {
            for (j = 0; j < obstacleArray.length; j++) {
                if (distance(x, y, obstacleArray[j].x, obstacleArray[j].y) - height < 0) {
                     x = obstacleXPositions[Math.floor(Math.random()* obstacleXPositions.length)];
                     y = obstacleYPositions[Math.floor(Math.random()* obstacleYPositions.length)];

                     j = -1;
                }

            }
        }

        obstacleArray.push(new Obstacle(x, y, width, height, color));
    }
}

makeObstacles();


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