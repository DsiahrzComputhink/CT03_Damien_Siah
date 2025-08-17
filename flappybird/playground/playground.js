let bird,floor;
let flapMidImg, bg, base;

let flapUpImg, flapDownImg; // flap image

let pipeImg; // Pipes
let pipeGroup; // Organisation
let bottomPipe, topPipe;

function preload(){
  flapMidImg = loadImage('assets/yellowbird-midflap.png');
  bg =loadImage('assets/background-day.png');
  base = loadImage('assets/base.png');
  flapUpImg = loadImage('assets/bluebird-upflap.png');
  flapDownImg = loadImage('assets/redbird-downflap.png');
  pipeImg = loadImage('assets/pipe-green.png');
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
  bird.bounciness = 0.99;
  world.gravity.y = 10;

  floor = new Sprite();
  floor.x = 200;
  floor.y = height - 20;
  floor.width = 400;
  floor.height = 125;
  floor.collider = "static";
  floor.img = base;

  pipeGroup = new Group();
}

function draw(){
  image(bg, 0, 0, width, height);

  // keybinds
  if(kb.presses('space') || mouse.presses()){
    bird.vel.y = -5;
    bird.sleeping = false;
  }

  // flap sequence
  if (bird.vel.y < -1){
    bird.img = flapUpImg;
    bird.rotation = -30
  }
  else if(bird.vel.y > 1 ){
    bird.img = flapDownImg;
    bird.rotation = 30
  }
  else{
    bird.img = flapMidImg;
    bird.rotation = 0
  }

  if (frameCount === 1) {
    spawnPipePair(); // custom function
  }

  fill("black");
  textSize(15);
  text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
  text('isMoving' + bird.isMoving, 10, 40);
  text('sleeping' + bird.sleeping, 10, 60);
}

// write the step by step
function spawnPipePair() {
  let gap = 50;
  let midY = height/2;

  bottomPipe = new Sprite(100, height/2 + 200, 52, 320, "static");
  bottomPipe.img = pipeImg;

  topPipe = new Sprite(100, height/2 + 200, 52, 320, "static");
  bottomPipe.img = pipeImg;


  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0; // backmost layer

}