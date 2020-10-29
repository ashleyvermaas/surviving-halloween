class Obstacle extends Component {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.speedX = 4;
        this.update = () => {
            this.drawComponent();
            this.moveObstacle();
        };
    }

    moveObstacle() {
        this.x -= this.speedX;
    }
}