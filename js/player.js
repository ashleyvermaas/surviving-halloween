class Player extends Component {
    constructor( x, y, w, h, speedX) {
        super( x, y, w, h, speedX);
        this.x = 0;
        this.y = 400;
        this.width = 100;
        this.height = 100;
        this.color = 'black';
        this.speedX = this.width;
        this.speedY = this.height;
        this.hasCollision = false;
    }

    drawPlayer() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    detectCollision() {
        obstacleArray.forEach(obstacle => {
            if (this.x < obstacle.x + obstacle.width &&
                this.x + this.width > obstacle.x &&
                this.y < obstacle.y + obstacle.height &&
                this.y + this.height > obstacle.y) {

                this.color = 'orange';
                this.hasCollision = true;

                game.endGame();
            }
        });

        // Optional Target Class
        // if (this.x < target.x + target.width &&
        //     this.x + this.width > target.x &&
        //     this.y < target.y + target.height &&
        //     this.y + this.height > target.y) {

        //     this.color = 'pink';
        //     game.score++;
        // }

    }
}