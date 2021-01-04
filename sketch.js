var fixedRect,movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  object1=createSprite(100, 100, 50, 50);
  object1.shapeColor="green";
  object2=createSprite(200, 100, 50, 50);
  object2.shapeColor="green";
  object3=createSprite(300, 100, 50, 50);
  object3.shapeColor="green";
  object4=createSprite(400, 100, 50, 50);
  object4.shapeColor="green";

}

function draw() {
  background("grey");
  movingRect.x=World.mouseX;
  movingRect.y= World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(isTouching(object1,movingRect))
  {
    movingRect.shapeColor="yellow";
    object1.shapeColor="yellow";
  }
  else
  {
    movingRect.shapeColor="green";
    object1.shapeColor="green";
  }
  drawSprites();
}

