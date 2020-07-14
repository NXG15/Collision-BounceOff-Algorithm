function setup() {
  createCanvas(800,600);

 
  fixedRect = createSprite(400, 100, 50, 80); 
  collisionRect = createSprite(400,200,80,30);
  movingRect = createSprite(400,600,50,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  stillrect = createSprite(300,300,30,70);
  stillrect.debug = true;
  collisionRect.debug = true;

  
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"; 
  fixedRect.debug = true; 
  movingRect.debug = true;
}

function draw() {
  background(0);  
  drawSprites();

    //moving rectangle - collision
    collisionRect.x = World.mouseX;
    collisionRect.y = World.mouseY;

      bounceOff(movingRect, fixedRect);

  

       if(isTouching(collisionRect,stillrect)){

        collisionRect.shapeColor = "blue"; 
        stillrect.shapeColor = "red"; 

       }
       else{

        stillrect.shapeColor = "green"; 
        collisionRect.shapeColor = "green";

       }

 
}

