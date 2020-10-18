class Umbrella {

    constructor(x,y){
        options = {
            restitution : 1,
            friction : 0.1,
            isStatic : true
        }

        this.body = Bodies.circle(x,y,this.r,options);
        this.r = 100;
        this.animation = loadAnimation("walking_1.png","walking_2.png","walkin_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        World.add(world, this.body);
    }

    display(){
        pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}