let ground;
let ball;
let pin
var ball_img;
var bg_img;
var pin_img
var score=0


function preload()
{
  ball_img = loadImage("Ball.png");
  bg_img = loadImage("bg.png");
  pin_img = loadImage("pins.png");
  fall = loadImage("fall.png")
  fall1=loadImage('tilt.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  ball = createSprite(width/2,height-30,30,30);
  ball.addImage(ball_img);
  ball.scale=0.1
  ball.setCollider('circle',0,0,250)
  
  pingroup=new Group()


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(0);
  image(bg_img,0,0,windowWidth,windowHeight);
 if (keyDown("UP_ARROW")){
ball.velocityY=-10
ball.scale=0.1
 }
 if (keyDown("LEFT_ARROW")){
  ball.x=ball.x-3
  ball.scale=0.1
   }
   if (keyDown("RIGHT_ARROW")){
    ball.x= ball.x+3
    ball.scale=0.1
     }
     if (keyDown ("space")&&ball.y<100){
    
      ball.y=height-30
      ball.velocityY=0
      ball.x=width/2

     
    
    }
    for (var i = 0; i < pingroup.length; i++) { 
      if (pingroup.get(i).isTouching(ball)) { pingroup.get(i).addImage(fall); 
      score=score+5} }
   
showpin()

  drawSprites();
  text("SCORE: "+score,100,100)
}


function showpin(){
  if(frameCount%70===0){
     
  pin1 = createSprite(width,Math.round(random(50,height-100)),50,30);
  pin1.addImage(pin_img);
  pin1.velocityX=-2
  //pin1.addImage(fall)
  pin1.scale=0.2
  pin1.setCollider('rectangle',0,0,20,100)
pingroup.add(pin1)
  }
}
