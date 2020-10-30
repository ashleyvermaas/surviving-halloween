class Game {
    constructor() {
        this.score = 0;
        this.obstacleArray = [];
        this.player = new Player(0, 400, 100, 100, "/images/4.png");
        this.update = () => {
            this.player.update();
            this.obstacleArray.forEach(obstacle => {
                obstacle.update();
            });
        };
        this.intervalId = null;
        this.setScore = null;
        this.obstacleInterval = 1000;

    }

    startGame() {
        updateCanvas();
        this.intervalId = setInterval(this.makeObstacles, this.obstacleInterval);
        this.setScore = setInterval(game.addScore, 1000);
    }

    endGame() {
        clearInterval(this.intervalId);
        setTimeout(swapToEndScreen, 500);
    }

    winGame() {
        clearInterval(this.intervalId);
        clearInterval(this.setScore);
        swapToWinScreen();
    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let obstacleImages =["/images/5.png","/images/9.png","/images/10.png","/images/29.png","/images/30.png","/images/31.png","/images/33.png","/images/34.png","/images/36.png","/images/38.png"];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];
        let src = obstacleImages[Math.floor(Math.random()* obstacleImages.length)];

        obstacle = new Obstacle(canvas.width, y, 100, 100, src);
        game.obstacleArray.push(obstacle);

    }

    addScore() {
        game.score++;
    }

    levelUp() {
        // level 1
        if (this.score < 10) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 3;
                game.obstacleInterval = 1000;
            });
        }
        // level 2
        if (this.score >= 10 && this.score < 20) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 4;
            });
        }

        // // level 3
        if (this.score >= 20 && this.score < 30) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 5;
            });
        }

        // level 4
        if (this.score >= 30 && this.score < 40) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 6;
            });
        }

        // level 5
        if (this.score >= 40 && this.score < 50) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 7;
            });
        }

        // level 6
        if (this.score >= 50 && this.score < 60) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 8;
            });
        }

        // level 7
        if (this.score >= 60 && this.score < 70) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 9;
            });
        }

        // level 8
        if (this.score >= 70 && this.score < 80) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 10;
            });
        }

        // level 9
        if (this.score >= 80 && this.score < 90) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 11;
            });
        }

        // level 10
        if (this.score >= 90 && this.score < 100) {
            game.obstacleArray.forEach(obstacle => {
                obstacle.speedX = 12;
            });
        }

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

// How to increment setInterval time with levels?