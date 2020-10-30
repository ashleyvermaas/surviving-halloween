class Obstacle extends Component {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color);
        this.speedX = 0;
        this.update = () => {
            this.drawComponent();
            this.moveObstacle();
        };
    }

    moveObstacle() {
        this.x -= this.speedX;
    }
}