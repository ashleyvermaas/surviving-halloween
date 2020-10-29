class Game {
    constructor() {
        this.score = 0;
        this.timer = 0;
        this.obstacleArray = [];
        this.player = new Player(0, 400, 100, 100, 'black');

    }

    init() {

    }

    startGame() {
        this.swapToCanvas();
        updateCanvas();
        setInterval(this.makeObstacles, 1000);
    }

    endGame() {
        console.log('GAME OVER');
    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];
        // Compare the Y positions to prevent all are the same
        game.obstacleArray.push(new Obstacle(canvas.width, y, 100, 100, 'white'));

        // setInterval(() => {
        //     makeObstacles;
        // }, 1000);
    }

    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    swapToCanvas() {
        startScreen.remove();
        body.appendChild(canvas);
    }


}


// QUESTIONS
// Where to put the class variables?
// Prevent obstacles from lining up on Y-axis or in stairs, blocking player
// Where put the setInterval? How to increment setInterval time with levels?