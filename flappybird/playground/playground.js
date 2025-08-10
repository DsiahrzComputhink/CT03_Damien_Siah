let bird,floor;
let flapMidImg, bg, base;

function preload(){
  flapMidImg = loadImage('assets/yellowbird-midflap.png');
  bg =loadImage('assets/background-day.png');
  base = loadImage('assets/base.png');
  flapUpImg = loadImage('assets/bluebird-upflap.png');
  flapDownImg = loadImage('assets/redbird-downflap.png');
}

function setup(){
  new Canvas(400,600);

  // bird sprite, location, size
  bird = new Sprite();
  bird.x = width / 2;
  bird.y = 500;
  bird.width = 30;
  bird.height = 30;
  bird.img = flapMidImg;

  bird.collider = 'dynamic';
  bird.mass = 2;
  bird.drag = 0.02;
  bird.bounciness = 0.999;
  world.gravity.y = 10;

  floor = new Sprite();
  floor.x = 200;
  floor.y = height - 20;
  floor.width = 400;
  floor.height = 125;
  floor.collider = "static";
  floor.img = base;
}

function draw(){
  image(bg, 0, 0, width, height);

  // keybinds
  if(kb.presses('space') || mouse.presses()){
    bird.vel.y = -15;
    bird.sleeping = false;
  }

  if (bird.vel.y < -1){
    bird.img = flapUpImg
  }
  else if(bird.vel.y > 1 ){

    bird.img = flapDownImg;

  }
  else{

    bird.img = flapMidImg;
  }

  fill("black");
  textSize(15);
  text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
  text('isMoving' + bird.isMoving, 10, 40);
  text('sleeping' + bird.sleeping, 10, 60);
}