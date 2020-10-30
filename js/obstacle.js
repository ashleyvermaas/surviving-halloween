class Obstacle extends Component {
    constructor(x, y, w, h, src) {
        super(x, y, w, h, src);
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