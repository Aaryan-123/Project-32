const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var onSling;
var gameState = "onSling";
var score = 0;
function preload()
{
   
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(width / 2, height - 50, width, 10);
	// ground2 = new Ground()
	box1 = new Box(630, 235, 30, 40);
	box2 = new Box(660, 235, 30, 40);
	box3 = new Box(690, 235, 30, 40);
	box4 = new Box(720, 235, 30, 40);
	box5 = new Box(750, 235, 30, 40);
	box6 = new Box(660, 195, 30, 40);
	box7 = new Box(690, 195, 30, 40);
	box8 = new Box(720, 195, 30, 40);
	box9 = new Box(690, 155, 30, 40);

	box10 = new Box(330, 235, 30, 40);
	box11 = new Box(360, 235, 30, 40);
	box12 = new Box(390, 235, 30, 40);
	box13 = new Box(420, 235, 30, 40);
	box14 = new Box(450, 235, 30, 40);
	box15 = new Box(360, 195, 30, 40);
	box16 = new Box(390, 195, 30, 40);
	box17 = new Box(420, 195, 30, 40);
	box18 = new Box(390, 155, 30, 40);

    polygon = new Polygon(200,400,40);
	slingshot = new SlingShot(polygon.body,{x : 200, y : 50});

	base1 = new Ground(390, 237, 250, 10);
    base2 = new Ground(690, 237, 250, 10);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  textSize(35);
  text("Score:" + score,650,40);

  ground.display();
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

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

  polygon.display();
  slingshot.display();

  base1.display();
  base2.display();

  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        polygon.trajectory = [];
       slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >= 06 && hour <= 19){
        background = "black";
    } else {
        background = "white";
    }
}