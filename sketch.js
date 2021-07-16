const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher;
var computerArcher;
var playerArrow, computerArrow;
var playerArcherAngle = playerArcher.angle;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle= -PI / 4;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Computer Base Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  //Create AI/Computer-Controlled Entity
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    computer.body.position.x-30,
    computerBase.body.position.y - 138,
    120,
    120,
    angle
  );
  //Creating Player-Controlled Entity
  playerArcher = new PlayerArcher(
    player.body.position.x+30,
    playerBase.body.position.y-150,
    120,
    120,
    angle
  );
  
  //Create an arrow Object
  playerArrow = new PlayerArrow(
  player.body.position.x+60, 
  player.body.position.y,
  50,
  20
  );
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    playerArrow.display();

  }
}




