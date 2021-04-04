var car, wall;
var speed, velocity;
var def;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  velocity = random(400,1500);
 car = createSprite(50,200,35,35);
 car.velocityX = speed;
 wall = createSprite(1500,20060,height/2);
}

function draw() {
  background(255,255,255);  

if ( wall.x-car.x < (car.width+wall.width)/2 ){
     car.velocityX = 0;
     def = 0.5*speed*speed/22500;

     if(def>180){
      car.shapeColor = 0,255,0;
    }
     if(def<180 && def>100){
      car.shapeColor = 230,230,0;
     }
     if(def<100){
      car.shapeColor = 25,0,0;
     }
  }  
  drawSprites();
}