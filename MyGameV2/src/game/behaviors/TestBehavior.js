import Base from "../../engine/Base.js";
import SM from "../SceneManager.js";
import GameObject from "../GameObjects.js";

export default class TestBehavior extends Base.Behavior{
    HP = 10;
    
    start(){
    }
    update(){

    }

    onCollisionStay(collisiontObject){a
        if(collisiontObject.gameObject.name == "Bullet"){
            this.HP--;
        }

        if(this.HP == 0){
            SM.destroy(this.gameObject);
            SM.instantiate(GameObject.CircleCollideTest, new Base.Point(Math.random() * 600, Math.random() * 600), 0);
        }
    }
}