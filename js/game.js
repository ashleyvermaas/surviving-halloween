class Game {
    constructor() {
        this.score = 0;
        this.endScore = this.score;
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
    }

    startGame() {
        updateCanvas();
        this.intervalId = setInterval(this.makeObstacles, 500);
        // put 500 in variable

        this.levelUp();

        this.setScore = setInterval(game.addScore, 1000);
        // if (this.player.hasCollision) {
        //     clearInterval(scoreInterval);
        // }
        console.log(this.setScore)
    }



    endGame() {
        clearInterval(this.intervalId);
        setTimeout(swapToEndScreen, 500);
        console.log(game.score);
        

        // end game should show score
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
        console.log('obstacles running')
    }

    addScore() {
        game.score++;
    }

    levelUp() {
        console.log(obstacle)
        switch (game.score) {
            case 5:
                obstacle.speedX = 0;
                console.log(obstacle.speedX);
                break;
        }
        
        //level up obstacle speed & interval
    }

}


// const obstacle = new Obstacle();
var obstacle;
//console.log(obstacle)


// QUESTIONS
// How to prevent obstacles from lining up on Y-axis or in stairs thus blocking player?


// Where put the setInterval? 
// Where put clearInterval for score? Can't find out how to stop score from incrementing after game over.
// How to increment setInterval time with levels?
// How to increment obstacle speedX with levels?
// How to make game / canvas restart with try again button?