export default{
    name:"Player",
    components:[
        {
            type:"PlayerModel",
            values:[
                {
                    key:"radius",
                    value:"20"
                },
                {
                    key:"baseColor",
                    value:"White"
                },
                {
                    key:"stroke",
                    value:"Black"
                }
            ]
        },
        {
            type:"PlayerMovementBehavior"
        },
        {
            type:"PlayerShootingBehavior"
        },
        {
            type:"CircleCollider",
            values:[
                {
                    key:"radius",
                    value:"20"
                }
            ]
        }
    ]
}