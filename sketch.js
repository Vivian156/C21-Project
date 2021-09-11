

var astronaut;
var bg;
var sleep,brush,gym,eat,move;
//brush = up arrow
//gym =  down arrow
//eat = left arrow
//bathe = right arrow
//m key = move

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  move = loadAnimation("images/move.png","images/move1.png");
}


function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(100,80,30,20);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(220);
   if (keyDown(UP_ARROW)) {
     astronaut.addAnimation("brushing",brush);
     astronaut.changeAnimation("brushing");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
   }
   if (keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("bathing",bathe);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(m)) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}