class Obstacle {
    constructor(y) {
        this.x = 1000;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.color = 'white';
        this.speedX = 4;
        this.update = () => {
            this.drawObstacle();
            this.moveObstacle();
        };
    }

    drawObstacle() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveObstacle() {
        this.x -= this.speedX;
    }
}