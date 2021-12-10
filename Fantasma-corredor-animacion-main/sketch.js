var ghost,ghostImage


function preload() {
ghostImage = loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
ghost = createSprite(200,200,50,50);
ghost.addAnimation("running",ghostImage);
}

function draw(){
background("black");
  drawSprites();
}