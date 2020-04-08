let myCanvas = document.getElementById('canv');

let width = myCanvas.scrollWidth;
let height = 10;

export default {
    name:"TestObject",
    components:[
        {
            type:"RectangleComponent",
            values:[
                {
                    key:"width",
                    value:width
                },
                {
                    key:"height",
                    value:height
                },
                {
                    key:"fill",
                    value:"White"
                },
                {
                    key:"stroke",
                    value:"Black"
                }
            ]
        },
        {
            type:"AABBCollider",
            values:[
                {
                    key:"width",
                    value:width
                },
                {
                    key:"height",
                    value:height
                },
            ]
        }
    ]

}