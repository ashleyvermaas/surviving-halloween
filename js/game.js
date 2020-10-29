class Game {
    constructor() {
        this.score = 0;
        this.obstacleArray = [];
        this.player = new Player(0, 400, 100, 100, 'black');
        this.update = () => {
            this.clear();
            this.drawScore();
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

        setTimeout(this.swapToEndScreen, 500);
        clearInterval(scoreInterval);
        console.log(game.score);
    }

    winGame() {

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


    // Move to canvas.js or index.js ?
    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    swapToCanvas() {
        startScreen.remove();
        endScreen.remove();
        body.appendChild(canvas);
    }

    swapToEndScreen() {
        canvas.remove();
        body.appendChild(endScreen);
    }

    drawScore() {
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${this.score}`, 0, 40);
    }

    addScore() {
        game.score++;
        //setInterval(this.addScore, 1000);
    }

    // changeLevel(){
    //     if (this.score > ){

    // } else {
    //     setInterval(obstacle.speedX++, 5000)
    // }

}


// QUESTIONS
// Prevent obstacles from lining up on Y-axis or in stairs, blocking player
// Where put the setInterval? How to increment setInterval time with levels?
// How to make game / canvas restart? 