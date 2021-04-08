
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=1;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.150;

  ground=createSprite(390,400,800,20)
  ground.velocityX=-4;
  ground.shapeColor="brown";
  
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
}


function draw() {
  background("lightGreen");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>=343.95){
    monkey.velocityY=-10
     }
  console.log(monkey.y);
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  obstacles();
  bananas();
  
  stroke("white");
  textSize=20;
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize=20;
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  

  drawSprites();
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(800,360)
obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.150
    obstacle.collide(ground);
  }
}

function bananas(){
  if(frameCount%100===0){
    banana=createSprite(800,300);
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.collide(ground);
  }
}


