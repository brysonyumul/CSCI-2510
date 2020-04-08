import Base from "../../engine/Base.js";
import SM from "../SceneManager.js";
import Point from "../../engine/base/Point.js";
import Input from "../../engine/base/Input.js";
import GameBehaviors from "../GameBehaviors.js";

export default class BulletBehavior extends Base.Behavior{
    color = [0,0,0];
    
    origin;
    angle = 0;
    range = 400;
    speed = 10;

    start(){
        this.color = SM.currentScene.children.filter(i => i.name === "Player")[0].components.filter(i => i instanceof GameBehaviors.PlayerShootingBehavior)[0].colorValue;

        let tRGB = [255,255,255];

        for(let i = 0; i < 3; i++){
            if((this.color[0] + this.color[1] + this.color[2]) == 0){
                break;
            }
            else if(this.color[i] == 3){
                tRGB = [0,0,0];
                tRGB[i] = 255;
                break;
            }
            else{
                tRGB[0] -= 255 * this.color[i] / 3;
                tRGB[1] -= 255 * this.color[i] / 3;
                tRGB[2] -= 255 * this.color[i]/ 3;
                tRGB[i] += 255* this.color[i] / 3;
            }
        }

        this.gameObject.getComponent("TriangleComponent").fill = "rgb(" + tRGB + ")";
        this.origin = new Point(this.gameObject.x, this.gameObject.y);
        let directionPoint = new Point(Input.mouseX - this.origin.x, Input.mouseY - this.origin.y);
        this.angle = Math.atan2(directionPoint.y, directionPoint.x);
        this.gameObject.rotation = this.angle - (270 * Math.PI / 180)

        this.gameObject.getComponent("TriangleComponent").base *= 1 + (0.2 * this.color[0]);
        this.gameObject.getComponent("TriangleComponent").height *= 1 + (0.2 * this.color[0]);
        this.speed *= 1 + (0.5 * this.color[1]);
    }

    update(){
        let distance = this.gameObject.location.distanceSquared(this.origin);
        let sRange = Math.pow(this.range, 2);
        
        if(sRange - distance < 0){
            SM.currentScene.destroy(this.gameObject);
        }
        else{
            this.gameObject.x += this.speed * Math.cos(this.angle);
            this.gameObject.y += this.speed * Math.sin(this.angle); 
        }
    }

    onCollisionStay(collisionObject){
        //console.log(collisionObject.gameObject)
        if(!collisionObject.gameObject.hasComponent("PlayerModel")){
            if(!(collisionObject.gameObject.name == "Bullet")){
                console.log("BULLET HIT")
                SM.currentScene.destroy(this.gameObject);
            }
        }
    }
}