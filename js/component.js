//Create class Element --> Player and Obstacle can inherit

class Component {
    constructor(x, y, w, h, speedX, color) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speedX = speedX;
        this.color = color;
    }

    drawComponent(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

