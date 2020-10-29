class Player extends Component {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.speedX = 100;
        this.speedY = 100;
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
            }
        });
    }
}