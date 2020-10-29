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
    }

    startGame() {
        updateCanvas();
        setInterval(this.makeObstacles, 1000);
        let scoreInterval = setInterval(game.addScore, 1000);
        // if (this.player.hasCollision) {
        //     clearInterval(scoreInterval);
        // }
    }

    loseGame() {
        setTimeout(swapToEndScreen, 500);
        console.log(game.score);
    }

    winGame() {
        if (game.score === 100) {
            console.log('You won!');
        }

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
        switch (this.score) {
            case 10:
                this.obstacleArray.speedX = 0;  
                console.log(obstacle.speedX);
                break;
        }

        //level up obstacle speed & interval
    }

}

const game = new Game();
// const obstacle = new Obstacle();
let obstacle;


// QUESTIONS
// How to prevent obstacles from lining up on Y-axis or in stairs thus blocking player?
// Where put the setInterval? 
// Where put clearInterval for score? Can't find out how to stop score from incrementing after game over.
// How to increment setInterval time with levels?
// How to increment obstacle speedX with levels?
// How to make game / canvas restart with try again button?