const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1 , ball2 , ball3 , ball4, ball5 ;
var ground , roof;
var rope1 , rope2 , rope3 , rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball2 = new Ball(735,900);
	ball3 = new Ball(770,900);
	ball4 = new Ball(805,900);
	ball5 = new Ball(840,900);
	ball1 = new Ball(700,900);
	ground = new Roof(800,1350,1600,20);
	roof = new Roof(750,500,600,40);
	rope1 = new Rope(ball1.body,roof.body,-160, 0);
	rope2 = new Rope(ball2.body,roof.body,-80,0);
	rope3 = new Rope(ball3.body,roof.body,0,0);
	rope4 = new Rope(ball4.body,roof.body,80,0);
	rope5 = new Rope(ball5.body,roof.body,160,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("white");
  textSize(30);
  text("Newton's Cradle aptly demonstrates the principle of the conservation of momentum (mass times speed).This principle",10,220);
  text("states that when two objects collide,the total momentum of the objects before the collision is equal to the total momentu",10,260);
  text("-m of the objects after the collision.When the first ball of Newton's Cradle collides with the second, the first ball stops,",10,300);
  text("but its momentum isn't lost, just transferred to the second ball, then the third, then the fourth, until it reaches the very ",10,340);
  text("last ball.You witness this conservation of momentum as the last ball swings into the air with nearly the same momentum ",10,380);
  text("as the first ball.hus, if two balls are lifted into the air on one end of the device and released, then two balls on the",10,420);
  text("opposite end will swing in response.",10,460);
  fill("white");
  stroke("black");
  strokeWeight(20);
  textSize(100);
  text("Newton's Cradle",400,150);
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:200,y:200});
	}
}



