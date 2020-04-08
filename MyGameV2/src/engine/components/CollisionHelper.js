import PointCollider from "./PointCollider.js";
import CircleCollider from "./CircleCollider.js";
import AABBCollider from "./AABBCollider.js";
import TriangleCollider from "./TriangleCollider.js";
import ConvexCollider from "./ConvexCollider.js";
import ConcaveCollider from "./ConcaveCollider.js";

class CollisionHelper {

    static inCollision(one, two) {
        //
        if (one.collider instanceof PointCollider && two.collider instanceof PointCollider){
            let distance = one.gameObject.location.diff(two.gameObject.location)
            if((distance.x + distance.y) == 0){
                return true;
            }
            else{
                return false;
            }
        }
        else if (one.collider instanceof PointCollider && two.collider instanceof CircleCollider){
            let distance = one.gameObject.location.distanceSquared(two.gameObject.location);
            let rad2 = two.collider.radius * two.collider.radius;
            if((distance - rad2) < 0){
                return true;
            }
            else{
                return false;
            }
        }
        else if(one.collider instanceof PointCollider && two.collider instanceof AABBCollider){
            let diff = one.gameObject.location.diff(two.gameObject.location);
            if(Math.abs(diff.x) < two.collider.width / 2 && Math.abs(diff.y) < two.collider.height / 2){
                return true;
            }
            else{
                return false;
            }
        }
        else if(one.collider instanceof CircleCollider && two.collider instanceof PointCollider){
            return this.inCollision(two, one);
        }
        else if(one.collider instanceof CircleCollider && two.collider instanceof CircleCollider){
            let distance = one.gameObject.location.distanceSquared(two.gameObject.location);
            let rad = parseInt(one.collider.radius) + parseInt(two.collider.radius);
            rad *= rad;
            if((distance - rad) < 0){
                return true;
            }
            else{
                return false;
            }
        }
        else if(one.collider instanceof CircleCollider && two.collider instanceof AABBCollider){
            let diff = one.gameObject.location.diff(two.gameObject.location);
            diff.x = Math.abs(diff.x) - one.collider.radius;
            diff.y = Math.abs(diff.y) - one.collider.radius;
            if(diff.x < two.collider.width / 2 && diff.y < two.collider.height / 2){
                return true;
            }
            else{
                return false;
            }
        }
        else if(one.collider instanceof AABBCollider && two.collider instanceof PointCollider){
            return this.inCollision(two, one);
        }
        else if(one.collider instanceof AABBCollider && two.collider instanceof CircleCollider){
            return this.inCollision(two, one);
        }
        else if(one.collider instanceof AABBCollider && two.collider instanceof AABBCollider){
            let diff = one.gameObject.location.diff(two.gameObject.location);
            diff.x = Math.abs(diff.x) - (one.collider.width + two.collider.width) / 2;
            diff.y = Math.abs(diff.y) - (one.collider.height + two.collider.height) / 2;
            if(diff.x < 0 && diff.y < 0){
                return true;
            }
            else{
                return false;
            }
        }
    }

}

export default CollisionHelper;