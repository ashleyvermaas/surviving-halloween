class Game {
    constructor() {
        this.score = 0;
        this.obstacleArray = [];
        this.player = new Player(0, 400, 100, 100, "./images/player-img.png");
        this.update = () => {
            this.player.update();
            this.obstacleArray.forEach(obstacle => {
                obstacle.update();
            });
        };
        this.obstacleInterval = 3000;
        //  this.intervalId = null;
        this.timeoutId = null;
        this.setScore = null;


    }

    startGame() {
        updateCanvas();
        // this.intervalId = setInterval(this.makeObstacles, this.obstacleInterval);
        this.makeObstacles();
        //console.log("Intervalo", this.obstacleInterval);
        this.setScore = setInterval(() => {
            this.addScore();
        }, 1000);
    }

    endGame() {
        // clearInterval(this.intervalId);
        setTimeout(swapToEndScreen, 500);
    }

    winGame() {
        // clearInterval(this.intervalId);
        clearInterval(this.setScore);
        swapToWinScreen();
    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let obstacleImages = [
            "./images/5.png",
            "./images/9.png",
            "./images/10.png",
            "./images/29.png",
            "./images/30.png",
            "./images/31.png",
            "./images/33.png",
            "./images/34.png",
            "./images/36.png",
            "./images/38.png"
        ];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];
        let src = obstacleImages[Math.floor(Math.random() * obstacleImages.length)];

        obstacle = new Obstacle(canvas.width, y, 100, 100, src);
        this.obstacleArray.push(obstacle);

        this.timeoutId = setTimeout(() => {
            this.makeObstacles();
        }, this.obstacleInterval);
    }

    addScore() {
        this.score++;
    }

    levelUp() {
        // level 1
        if (this.score < 10) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 3;
                this.obstacleInterval = 2000;
            });
        }
        // level 2
        if (this.score >= 10 && this.score < 20) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 4;
                this.obstacleInterval = 1000;
            });
        }

        // // level 3
        if (this.score >= 20 && this.score < 30) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 5;
                this.obstacleInterval = 600;
            });
        }

        // level 4
        if (this.score >= 30 && this.score < 50) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 6;
                this.obstacleInterval = 500;
            });
        }

        // // level 5
        // if (this.score >= 40 && this.score < 50) {
        //     this.obstacleArray.forEach((obstacle) => {
        //         obstacle.speedX = 6;
        //         this.obstacleInterval = 500;
        //     });
        // }

        // level 6
        if (this.score >= 50 && this.score < 60) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 7;
                this.obstacleInterval = 400;
            });
        }

        // level 7
        if (this.score >= 60 && this.score < 70) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 8;
                this.obstacleInterval = 300;
            });
        }

        // level 8
        if (this.score >= 70 && this.score < 80) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 9;
                this.obstacleInterval = 300;
            });
        }

        // level 9
        if (this.score >= 80 && this.score < 100) {
            this.obstacleArray.forEach((obstacle) => {
                obstacle.speedX = 10;
                this.obstacleInterval = 200;
            });
        }

        // level 10
        // if (this.score >= 90 && this.score < 100) {
        //     this.obstacleArray.forEach((obstacle) => {
        //         obstacle.speedX = 10;
        //         this.obstacleInterval = 200;
        //     });
        // }

        // winGame
        if (this.score === 100) {
            this.winGame();
        }
    }
}

let obstacle;
let speedX;




// QUESTIONS
// How to prevent obstacles from lining up on Y-axis or in stairs thus blocking player?

