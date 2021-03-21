var bullet,wall,thickness ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

 bullet =  createSprite(50,200,100,20);
 bullet.shapeColor = "brown"
 
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "yellow";
}


function draw() {
  background(80,80,80);  

  bullet.velocityX = speed ; 

  if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
      bullet.velocityX = 0 ;
      var damage = 0.5*weight*speed*speed /(thickness*thickness*thickness) ; 
      if(damage > 10 )
      {
        bullet.shapeColor = "red";
      }
      if(damage < 10 ) 
      {
        bullet.shapeColor = "green";
      }
    } 
  drawSprites();
}