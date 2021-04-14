class Ball{
    constructor(x,y){
        this.body = Bodies.circle(x,y,40,{restitution:1,density:0.5,friction:0,isStatic:false});
        World.add(world,this.body);
        this.radius = 40;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        stroke("black");
        strokeWeight(5);
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}