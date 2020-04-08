import Base from "../Base.js";

class TriangleComponent extends Base.Component{
    stroke;
    fill;
    base;
    height;

    pointTop;
    pointLeft;
    pointRight;

    constructor(){
        super();
    }

    draw(ctx){
        this.pointTop = new Base.Point(this.gameObject.x, this.gameObject.y - (this.height/2));
        this.pointLeft = new Base.Point(this.gameObject.x - this.base / 2, this.gameObject.y - this.height / 2);
        this.pointRight = new Base.Point(this.gameObject.x + this. base / 2, this.gameObject.y + this.height / 2);
        
        ctx.save();
        
        ctx.rotate(this.rotation);
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;

        ctx.beginPath();
        ctx.moveTo(0, -this.height/2);
        ctx.lineTo(-this.base/2, this.height/2);
        ctx.lineTo(this.base/2, this.height/2);
        ctx.closePath();
        ctx.fill()
        ctx.stroke();    

        ctx.restore();
    }
    update(){
    }
}

export default TriangleComponent;