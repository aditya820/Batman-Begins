class Drops {

    constructor(x,y){
        var options ={
            restitution : 1,
            friction : 0.1,
            isStatic : false
        }
        this.body = Bodies.circle(x,y,this.r,options);
        this.r = 10;
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,480), y:-5});
        }
    }

    display(){
        var pos = this.body.position;
        var maxDrops = 100;
        noStroke();
        fill(color(0,0,255));
        ellipseMode(RADIUS);
        for(var i = 0; i < maxDrops; i++){
        ellipse(pos.x, pos.y, this.r, this.r);
        }
    }
}