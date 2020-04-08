import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";
import SM from "../SceneManager.js";
import GameObject from "../GameObjects.js";
import Point from "../../engine/base/Point.js";

export default class PlayerShootingBehavior extends Base.Behavior{
    color = ["", "Red", "Green", "Blue"];
    colorValue = [0, 0, 0];


    pCount = 0;
    tColor = [];
    multiShoot = 1;
    shoot = 0;

    start(){
        this.backToBaseColor();
    }

    update(){
        if(Input.up[' '] && this.pCount > 0){
            this.backToBaseColor();
            this.pCount = 0;
        }
        else if(this.pCount < 3)
        {
            if(Input.up['1']){
                this.gameObject.getComponent("PlayerModel").powerColor[this.pCount] = this.color[1]
                this.pCount++;
            }
            else if(Input.up['2']){
                this.gameObject.getComponent("PlayerModel").powerColor[this.pCount] = this.color[2]
                this.pCount++;
            }
            else if(Input.up['3']){
                this.gameObject.getComponent("PlayerModel").powerColor[this.pCount] = this.color[3]
                this.pCount++;
            }
        }
        
        if(this.shoot % 2 == 0 && this.shoot > 0){
            this.shoot--;
            this.colorValue = this.getColorValue(this.gameObject.getComponent("PlayerModel").powerColor);
            if(this.colorValue[2] > 0){
                let more = 0;
                
                if(this.colorValue[2] == 3){
                    more++;
                }
                else {
                    more = 0;
                }

                for(let i = 0; i < this.colorValue[2] + 1 + more; i++){
                    SM.instantiate(GameObject.Bullet, new Base.Point(this.gameObject.x, this.gameObject.y), 0);
                }
 
                let bullet = SM.currentScene.children.filter(i => i.name === "Bullet").filter(i => i.x === this.gameObject.x);

                this.shift(this.colorValue[2], bullet);
            }
            else{
                SM.instantiate(GameObject.Bullet, new Base.Point(this.gameObject.x, this.gameObject.y), 0);
            }
        }
        else if (this.shoot > 0){
            this.shoot--;
        }
        
        if(Input.mouseButtonsUp[0]){
            this.shoot = 2 * this.multiShoot;
        } 
    }

    backToBaseColor(){
        this.color[0] = this.gameObject.getComponent("PlayerModel").baseColor;
        this.gameObject.getComponent("PlayerModel").powerColor[0] = this.color[0];
        this.gameObject.getComponent("PlayerModel").powerColor[1] = this.color[0];
        this.gameObject.getComponent("PlayerModel").powerColor[2] = this.color[0];
    }

    getColorValue(array){ 
        let temp = [0, 0, 0];

        for(let i = 0; i < 3; i++){
            if(array[i] == "Red"){
                temp[0]++;
            }
            else if(array[i] == "Green"){
                temp[1]++;
            }
            else if(array[i] == "Blue"){
                temp[2]++;
            }
            else{
                break;
            }
        }

        return temp;
    }

    shift(level, bullets){
        if(level == 1){
            bullets[0].getComponent("BulletBehavior").angle -= (5 * Math.PI / 180);
            bullets[1].getComponent("BulletBehavior").angle += (5 * Math.PI / 180);
        }
        else{
            bullets[0].getComponent("BulletBehavior").angle -= (7 * Math.PI / 180);
            bullets[2].getComponent("BulletBehavior").angle += (7 * Math.PI / 180);
        }

        if(level == 3){
            bullets[3].getComponent("BulletBehavior").angle -= (14 * Math.PI / 180);
            bullets[4].getComponent("BulletBehavior").angle += (14 * Math.PI / 180);
        }
    }
} 