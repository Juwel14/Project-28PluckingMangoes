const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function preload()
{
  boyimage = loadImage("boy.png");
}

function setup() 
{
	createCanvas(1600, 600);

	engine = Engine.create();
  world = engine.world;
  
  boy = createSprite(160, 510);
  boy.addImage(boyimage);
  boy.scale = 0.125;

	stone = new Stone(100, 460, 60);
	mango1 = new Mango(1025, 130, 80);
	mango2 = new Mango(930, 160, 80);
	mango3 = new Mango(1080, 180, 80);
  mango4 = new Mango(1160, 190, 80);
  mango5 = new Mango(1000, 220, 80);
  mango6 = new Mango(880, 240, 80);
  mango7 = new Mango(800, 270, 80);
  mango8 = new Mango(1075, 270, 80);
  mango9 = new Mango(1190, 275, 80);
  mango10 = new Mango(930, 280, 80);
  tree = new Tree(1000, 600);
  ground = new Ground(100, 630, 3000, 20);
  Launcher = new Chain(stone.body, {x: 95, y: 450});
  
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("skyblue");

  fill("green");
  textSize(30);
  text("Press space key for 2nd chance", 50, 50);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  Launcher.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    Launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:100, y:460});
    Launcher.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}