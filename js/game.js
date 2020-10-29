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
    }

    loseGame() {
        setTimeout(swapToEndScreen, 500);
        clearInterval(scoreInterval);
        console.log(game.score);
    }

    winGame() {
        console.log('You won!');

    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];

        game.obstacleArray.push(new Obstacle(canvas.width, y, 100, 100, 'white'));

    }

    addScore() {
        game.score++;
    }

    // changeLevel() {
    //     if (game.score === ..) {
    //         winGame()
    //     } else {}
    // }

}

const game = new Game();
let scoreInterval = setInterval(game.addScore, 1000);


// QUESTIONS
// Prevent obstacles from lining up on Y-axis or in stairs, blocking player
// Where put the setInterval? How to increment setInterval time with levels?
// How to make game / canvas restart? 