//Create class Element --> Player and Obstacle can inherit

class Component {
    constructor(game, x, y, speedX) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.speedX = speedX;
        this.img = new Image();
    }

}

