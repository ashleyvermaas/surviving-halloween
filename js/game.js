class Game {
    constructor() {
        this.score = 0;
        this.obstacleArray = [];

    }

    init() {

    }

    startGame() {


    }

    endGame() {
        console.log('GAME OVER');
    }

    makeObstacles() {
        let obstacleYPositions = [0, 100, 200, 300, 400];
        let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];

        game.obstacleArray.push(new Obstacle(1000, y, 100, 100, 4, 'white'));

        // setInterval(() => {
        //     makeObstacles();
        // }, 1000);
    }

}



// Put classes in variables
const game = new Game();
const player = new Player(0, 400, 100, 100, 100, 100, 'black');