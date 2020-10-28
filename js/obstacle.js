class Obstacle extends Component {
    constructor(x, y, w, h, speedX, color) {
        super(x, y, w, h, speedX, color);
        this.update = () => {
            this.drawComponent();
            this.moveObstacle();
        };
    }

    moveObstacle() {
        this.x -= this.speedX;
    }
}