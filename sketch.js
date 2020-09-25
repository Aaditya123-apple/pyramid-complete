const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box10, box11,box12,box13,box14,box15,box16,box17,box18
var ground,ground2,ground3;

function preload(){
   
 polygon = loadImage("polygon.png")

}
  
  function setup() {
  createCanvas(800,700);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon1 = Bodies.circle(50,200,20);
  World.add(world,polygon1);
  slingshot = new SlingShot(this.polygon1,{x:100,y:200});
   

ground = new Ground(400,680,800,20)
ground2 = new Ground(390,250,200,20)
ground3 = new Ground(678,550,200,20)
 box1 = new Box(330,235,30,40);
 box2 = new Box(360,235,30,40);
 box3 = new Box(390,235,30,40);
 box4 = new Box(420,235,30,40);
 box5 = new Box(450,235,30,40);
 box6 = new Box(360,135,30,40);
 box7 = new Box(390,135,30,40);
 box8 = new Box(420,135,30,40);
 box9 = new Box(390,155,30,40);
 box10 = new Box(640,175,30,40); 
 box11 = new Box(670,175,30,40); 
 box12 = new Box(700,175,30,40); 
 box13 = new Box(730,175,30,40); 
 box14 = new Box(760,175,30,40); 
 box15 = new Box(670,135,30,40); 
 box16 = new Box(700,135,30,40); 
 box17 = new Box(730,135,30,40); 
 box18 = new Box(700,95,30,40); 
}

function draw() {
  background(0);  
 
  ground.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  slingshot.display();


 
imageMode(CENTER)
image(polygon,polygon1.position.x,polygon1.position.y,40,40)

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon1, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly(0);
}

function keyPressed() {
  if (keyCode === 32){
      slingshot.attach(this.polygon1);
  }
}