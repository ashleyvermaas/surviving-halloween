class Player extends Component {
    constructor(x, y, w, h, speedX, speedY, color) {
        super(x, y, w, h, speedX, color);
        this.speedY = speedY;
        this.hasCollision = false;
        this.update = () => {
            this.drawComponent();
            this.detectCollision();
        };
    }

    detectCollision() {
        game.obstacleArray.forEach(obstacle => {
            if (this.x < obstacle.x + obstacle.width &&
                this.x + this.width > obstacle.x &&
                this.y < obstacle.y + obstacle.height &&
                this.y + this.height > obstacle.y) {

                this.hasCollision = true;

                game.endGame();
            }
        });
    }
}