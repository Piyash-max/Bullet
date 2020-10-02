var wall;
 var speed , weight ;
var thickness ;
 var bullet
 function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 100, 50, 50);
  bullet.shapeColor='white';

  wall=createSprite(1200, 200, 70,height/2);
  wall.shapeColor='white';

  speed=random(223,321);
   weight=random(30,52);
  bullet.velocityX=speed;

 thickness=random(22,83)


 }


function draw() {
  background("black");  

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(Damage>10){
    bullet.shapeColor='green';
  }
  if(Damage<10){
    bullet.shapeColor='red';
  }
}
  



  drawSprites();
 }


  function hasCollided(lbullet,lwall){
  bulletRigthEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRigthEdge>=wallLeftEdge){
    return true ;
  }
   return false ;
}

