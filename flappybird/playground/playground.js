let bird,floor;
let flapMidImg, bg, base;

let flapUpImg, flapDownImg; // flap image

let pipeImg; // Pipes
let pipeGroup; // Organisation
let bottomPipe, topPipe;
let pipeSpace = 50; // Distance between each pipe

let startGame = false;
let lastPipePosition; // debug

let startscreenLabel;
let startscreenImg;

let gameoverImg;

function preload(){
  flapMidImg =loadImage('assets/yellowbird-midflap.png');
  bg =loadImage('assets/background-day.png');
  base = loadImage('assets/base.png');
  flapUpImg = loadImage('assets/bluebird-upflap.png');
  flapDownImg = loadImage('assets/redbird-downflap.png');
  pipeImg = loadImage('assets/pipe-green.png');
  gameoverImg = loadImage('assets/gameover.png');
  startscreenImg = loadImage('assets/message.png');
}

function setup(){
  new Canvas(400,600);

  // bird sprite, location, size
  bird = new Sprite();
  bird.x = width / 2;
  bird.y = height / 2;
  bird.width = 30;
  bird.height = 30;
  bird.img = flapMidImg;
  bird.visible = false;

  bird.collider = "static";
  bird.mass = 2;
  bird.drag = 0.02;
  bird.bounciness = 0.99;
  world.gravity.y = 10;

  CreateFloor(-799);
  CreateFloor(-399);
  CreateFloor(0);
  CreateFloor(399);

  pipeGroup = new Group();

  startscreenLabel = new Sprite(width/2, height/2, 50, 50, 'none');
  startscreenLabel = startscreenImg;

}


function draw(){

  image(bg, 0, 0, width, height);

  if(kb.presses('space') || mouse.presses()){
    startGame = true;
    startscreenLabel.visible = false;
    bird.collider = "dynamic";
    bird.visible = true;
  }

  if (startGame){
    // new code to make bird dynamic only when game start
    bird.collider = "dynamic"; 
  // make the bird move "forward"
    bird.x += 2; // make the bird move forward
    camera.x = bird.x; // "lock" the camera pos to the bird.x pos
    floor.x = camera.x;// "lock" the floor pos to the bird.x pos

      // Apply upward push when space is pressed
    if (kb.presses('space') || mouse.presses()) {
      bird.vel.y = -5; // which direction do you think this is?
      bird.sleeping = false; // wake up if sleeping
    }
    
    // Activity: Change image according to flying action/ falling
    if (bird.vel.y < -1) {
      bird.img = flapUpImg; // flying upward
      bird.rotation = -30; // rotate up
    } 
    else if (bird.vel.y > 1) {
      bird.img = flapDownImg; // falling
      bird.rotation = 30; // rotate down
    } 
    else {
      bird.img = flapMidImg; // neutral
      bird.rotation = 0;
    }

    if (frameCount === 1){
      spawnPipePair();
    }

    if (frameCount % 120 === 0){
      spawnPipePair();
    }

    // remove offscreenpipes
    for (let pipe of pipeGroup){
      if (pipe.x < -50){
        pipe.remove();
      }
    }

    // End Game on Collision
    // note that this is checking collision against the group
    if (bird.collides(pipeGroup) || bird.collides(floor)){
      gameoverLabel = new Sprite(width/2, height/2, 192, 42);
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100; // make the game over text come to front
      gameoverLabel.x = camera.x;

      noLoop(); 
    }

    // Debug info (optional)
    fill("blue");
    textSize(14);
    text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
    text('isMoving: ' + bird.isMoving, 10, 40);
    text('sleeping: ' + bird.sleeping , 10, 60);
    text('bird.x: ' + bird.x.toFixed(2), 10, 80);
  }
}

function spawnPipePair(Xposition) {
  let gap = 75;
  let midY = random(250, height - 250); // random(min, max)


  console.log(Xposition - lastPipePosition)
  lastPipePosition = Xposition

  // new sprite
  bottomPipe = new Sprite(400 + Xposition, midY + gap/2 + 200, 52, 320, "static");
  bottomPipe.img = pipeImg;

  // new sprite
  topPipe = new Sprite(400 + Xposition, midY - gap/2 - 200, 52, 320, "static");
  topPipe.img = pipeImg;
  topPipe.rotation = 180;

  pipeGroup.add(topPipe);

  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0; // backmost layer

}

function CreateFloor(Xposition) {
  floor = new Sprite();
  floor.x = Xposition + 500;
  floor.y = height - 20;
  floor.width = 399;
  floor.height = 125;
  floor.collider = "static";
  floor.img = base;
}