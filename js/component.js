
class Component {
    constructor(x, y, w, h, src) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        // this.color = color;
        this.componentImg = new Image();
        this.src = src;
    }

    // drawComponent() {
    //     ctx.fillStyle = this.color;
    //     ctx.fillRect(this.x, this.y, this.width, this.height);
    // }

    drawComponent(){
        ctx.drawImage(this.componentImg, this.x, this.y, this.width, this.height);
        this.componentImg.src = this.src;
    }
}