class Game {
    constructor() {
        this.score = 0;
        this.obstacleArray = [];
        this.player = new Player(0, 400, 100, 100, 'black');
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
        if (game.score === 100) {
            console.log('You won!');
        }
        //swapToWinScreen
    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];
        obstacle = new Obstacle(canvas.width, y, 100, 100, 'white');
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


// Where put the setInterval? 
// Where put clearInterval for score? Can't find out how to stop score from incrementing after game over.
// How to increment setInterval time with levels?
// How to increment obstacle speedX with levels?
// How to make game / canvas restart with try again button?