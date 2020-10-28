class Game {
    constructor() {
        this.score = 0;

    }

    startGame() {


    }

    endGame() {
        console.log('GAME OVER');
    }

}



// Create multiple obstacles
let obstacleArray = [];
let obstacleYPositions;

function makeObstacles() {
    obstacleYPositions = [0, 100, 200, 300, 400];
    let y = obstacleYPositions[Math.floor(Math.random() * obstacleYPositions.length)];

    obstacleArray.push(new Obstacle(1000, y, 100, 100, 4, 'white'));

}
setInterval(makeObstacles, 500);


// Put classes in variables
const game = new Game();
const player = new Player();

