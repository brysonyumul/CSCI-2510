let myCanvas = document.getElementById('canv');

let center = myCanvas.scrollWidth/2;

export default {
    name: "TestScreen",
    objects: [
        {
            name:"Player",
            location: {x:100, y:100},
            type:"Player"
        },
        {
            name:"CircleCollideTest",
            location: {x:400, y:400},
            type:"CircleCollideTest"
        },
        {
            name:"TestObject",
            location: {x:center, y:50},
            type:"TestObject"
        },
        {
            name:"TestObject",
            location: {x:center-100, y:500},
            type:"TestObject"
        },
        {
            name:"EMPTY",
            location: {x:0, y:0},
            type:"EmptyGameObject"
        },
    ]
}