class Rope{
	constructor(body1,body2, offsetX, offsetY){
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		this.Rope = Constraint.create(options)
		World.add(world,this.Rope)
	}
    display(){
 
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;

        var rootAX = pointA.x;
        var rootAY = pointA.y;

        var rootX = pointB.x + this.offsetX;
        var rootY = pointB.y + this.offsetY;

		fill("black");
        strokeWeight(4);
        line(rootAX,rootAY,rootX,rootY);
    }
}
