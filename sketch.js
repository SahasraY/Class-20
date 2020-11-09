var Mrectangle,Frectangle

function setup() {
  createCanvas(800,400);
  Mrectangle=createSprite(400, 200, 50, 50);
  Frectangle=createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  
  Mrectangle.x=World.mouseX;
  Mrectangle.y=World.mouseY;
  if(Frectangle.x-Mrectangle.x<Mrectangle.width/2+Frectangle.width/2 &&
    Mrectangle.x-Frectangle.x<Mrectangle.width/2+Frectangle.width/2&&
    Mrectangle.y-Frectangle.y<Mrectangle.height/2+Frectangle.height/2&&
    Frectangle.y-Mrectangle.y<Mrectangle.height/2+Frectangle.height/2){
    Frectangle.shapeColor="red";
    Mrectangle.shapeColor="red";
  }
  else{
    Frectangle.shapeColor="blue";
    Mrectangle.shapeColor="blue";  
  }
  drawSprites();
}