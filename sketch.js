var back,monkey,ground,obstacles,obstaclesimage,obstaclegroup,banana,bananaimage

var gamestate,PLAY,END

var count

function preload(){
  
  backGround = loadImage('jungle.jpg')
  
    monkey_walking = loadAnimation("Monkey_01.png","Monkey_02.png",
                                  "Monkey_03.png","Monkey_04.png","Monkey_05.png",
                                  "Monkey_06.png",'Monkey_07.png','Monkey_08.png','Monkey_09.png','Monkey_10.png')
  
  obstaclesimage = loadImage('stone.png')
  bananaimage = loadImage('banana.png')
  
  
  
}











function setup() {
  createCanvas(400, 400);
  
  back = createSprite(200,200,800,400)
  back.addImage('jungle',backGround)
   back.velocityX= -6
  
  
  ground = createSprite(200,370,400,5)
 
  ground.visible = false
  
  monkey = createSprite(100,350,20,20)
 monkey.setCollider("circle",0,0,200)
  monkey.scale = 0.08
  monkey.addAnimation('monkeywalking',monkey_walking)
  
  count = 0
 
  
  PLAY = 1
  END = 0
  gamestate = 1
  
  obstaclegroup = new Group()
  bananagroup = new Group()
}

function draw() {
  background(255);
  console.log(gamestate)
    monkey.collide(ground)
  
 
  
if (gamestate ===PLAY)
{
  if(back.x<0){
    back.x = back.width/2
  }
  
  if(keyDown("space") && monkey.y>=343){
    monkey.velocityY = -15
  }

  monkey.velocityY = monkey.velocityY+0.8
  
  if(bananagroup.isTouching(monkey))
    {
      bananagroup.destroyEach()
      count = count+2
    }
  
  //var rand = Math.round(random(1,6))
  
  switch(count) {
      
    case 10 : monkey.scale = 0.085
      break;
      case 20 : monkey.scale = 0.090
      break;
      case 30 : monkey.scale = 0.095
      break;
      case 40 : monkey.scale = 0.1
    default : break;
      
  
      
     }
  

  makeobstacles()
  makebanana()
  
  

  
  
  if( obstaclegroup.isTouching(monkey)){
    monkey.scale  = 0.08
    count = 0
    //gamestate = END
 // back.velocityX  = 0
 // obstaclegroup.setVelocityXEach(0)
 // obstaclegroup.setLifetimeEach(-1)
}
  
}  
  
  
  
  
  drawSprites()
  fill("red")
  textSize(15)
  text("Score : " + count,320,50)
  
}

function makeobstacles(){
  
  if(frameCount%80===0)
  {
    
    obstacles = createSprite(400,350,5,5)
    obstacles.scale = 0.15
    obstacles.collide(ground)
    obstacles.addImage('rocks',obstaclesimage)
    obstacles.velocityX= back.velocityX
    obstacles.lifetime = 80
    
    monkey.depth ===  obstacles.depth
    
    obstaclegroup.add(obstacles)
    }
}
  
  
  function makebanana(){
 
 if(frameCount%90===0){
   
    banana = createSprite(400,200,5,5)
   banana.addImage('Banana',bananaimage)
   banana.scale = 0.05
  
   banana.velocityX = -10
   banana.lifetime = 80
   
  bananagroup.add(banana)
   
 }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  

