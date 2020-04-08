import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";

export default class PlayerMovementBehavior extends Base.Behavior{
    canvas = document.getElementById('canv');
    speed = 5;
    temp;

    start(){
        this.gameObject.x = this.canvas.scrollWidth/2;
        this.gameObject.y = this.canvas.scrollHeight/2;
    }

    update(){
        this.temp = new Base.Point(this.gameObject.x, this.gameObject.y);

        if(Input.keys['w']){
            this.gameObject.y -= this.speed;
        }
        else if(Input.keys['s']){
            this.gameObject.y += this.speed;
        }

        if(Input.keys['a']){
            this.gameObject.x -= this.speed;
        }
        else if(Input.keys['d']){
            this.gameObject.x += this.speed;
        }
    }

    onCollisionStay(collsionObject){
        this.gameObject.x = this.temp.x;
        this.gameObject.y = this.temp.y;
    }
}