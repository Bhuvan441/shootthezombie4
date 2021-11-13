var backgroundimg
var player
var playerimg
var playeraiming
var bullet,bulletimg

function preload(){
backgroundimg = loadImage('assets/background.jpg');
playerimg = loadImage('assets/shooter_2.png');
playeraiming = loadImage('assets/shooter_3.png');
bulletimg = loadImage('assets/bullet.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.scale = 2.8;
bg.velocityX = -3;
bg.addImage("bgimg",backgroundimg);

player = createSprite(displayWidth-1400,displayHeight-350,20,20);
player.scale = 0.5;
player.addImage("playerimage",playeraiming);

bullet = createSprite(350,500,77,75);
bullet.scale = 0.05;
bullet.addImage("bulletimage",bulletimg);
bullet.visible = false;
}


function draw() {
  background(0);
  player.y = bullet.y;

if(bg.x < 0){
  bg.x = bg.width/7;
}
if(keyDown("SPACE")){
 
  bullet.visible = true;
 bullet.velocityX = 1;
}





  drawSprites();
}