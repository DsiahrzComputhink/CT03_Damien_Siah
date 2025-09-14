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

let score = 0;
let numberImages = [];
let scoreDigits;

function preload(){
  flapMidImg =loadImage('assets/yellowbird-midflap.png');
  bg =loadImage('assets/background-day.png');
  base = loadImage('assets/base.png');
  flapUpImg = loadImage('assets/bluebird-upflap.png');
  flapDownImg = loadImage('assets/redbird-downflap.png');
  pipeImg = loadImage('assets/pipe-green.png');
  gameoverImg = loadImage('assets/gameover.png');
  startscreenImg = loadImage('assets/message.png');

  for(let i = 0; i < 10; i++){
    numberImages[i] = loadImage('assets/' + i + '.png');
  }
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
  startscreenLabel.img = startscreenImg;

  scoreDigits = new Group();
  scoreDigits.collider = 'none';
  scoreDigits.layer = 1000;

}


function draw(){

  image(bg, 0, 0, width, height);

  if(kb.presses('space') || mouse.presses()){
    startGame = true;
    startscreenLabel.visible = false;
    bird.collider = "dynamic";
    bird.visible = true;
  }

  if(startGame){

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

    // bird movement
    bird.x += 3;
    camera.x = bird.x;

    if (bird.x % 399 > 100) {
      CreateFloor(bird.x - (bird.x % 399));
    }

    if (bird.x % pipeSpace === 0) {
      spawnPipePair(bird.x - (bird.x % pipeSpace));
    }

    if (bird.collides(pipeGroup) || bird.collides(floor) ) {
      gameoverLabel = new Sprite(width/2, height/2, 192, 42, "none");
      gameoverLabel.img = gameoverImg;
      gameoverLabel.layer = 100;
      gameoverLabel.x = camera.x;
      noLoop();
    }

    // if (frameCount === 1) {
    //   spawnPipePair(bird.x + 400); // custom function
    // }



    fill("black");
    textSize(15);
    text('vel.y: ' + bird.vel.y.toFixed(2), 10, 20);
    text('isMoving' + bird.isMoving, 10, 40);
    text('sleeping' + bird.sleeping, 10, 60);
    text('bird.x: ' + bird.x.toFixed(2), 10, 80);

    drawScore(width/2, 20, score, 24, 36)
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

function drawScore(x, y, score, digitWidth, digitHeight){
  scoreDigits.removeAll;

  let scoreStr = str(score);
  let totalWidth = scoreStr.length * digitWidth;
  let startX = x - totalWidth / 2;

  for( let i = 0; i < scoreStr.length; i++){
    let digit = int(scoreStr[i])
    let xPos = startX + i * digitWidth
    let digitSprite = new scoreDigits.Sprite(xPos)
  }
}