var floorImage
var edges
var trex ,trex_running;
var floor
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
floorImage = loadImage("ground2.png")
}


function setup(){
  createCanvas(600,200)
  floor = createSprite(200,180,400,20)
  floor.addImage(floorImage)
  //crie um sprite de trex
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.8
  edges = createEdgeSprites()

}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10
  
  }
  if(floor.x < 0){
    floor.x = floor.width/2
  }
  floor.velocityX = -2
  trex.velocityY = trex.velocityY + 0.5
  trex.collide(floor)
  drawSprites();

}