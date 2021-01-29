var mario;
var mario_running;
var mario_collided;
var bg;
var bgimage;
function preload(){
    mario_running=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
    bgimage=loadImage("images/bgnew.jpg");

}

function setup() {
createCanvas(1000, 600);
bg=createSprite(580,300);
bg.scale=0.5;
bg.addImage(bgimage);
mario=createSprite(200,490,20,50);
mario.scale=0.4;
mario.addAnimation("running",mario_running);
gr=createSprite(200,580,400,10);
gr.visible=false;
}

function draw() {
    if(keyDown("space"))
 mario.velocityY=-16;
mario.velocityY+=0.5;
mario.collide(gr)


drawSprites();    
}
