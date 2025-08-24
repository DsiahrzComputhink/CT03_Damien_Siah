let bird, floor; // objects
let flapMidImg,  bg, base; // images
let flapUpImg,flapDownImg; // images for flap up and down
let pipe; // image for pipes
let topPipe, bottomPipe;
let pipeGroup; // declare the group for pipe
let gameoverImg; // declare variable for image
let gameoverLabel; // declare variable for game over sprite
let startGame = false;

let startScreenLabel; // declare variable for start screen
let startScreenImg; // declare variable for image

function preload() {
    // bird image, background and the floor
    flapMidImg = loadImage('assets/yellowbird-midflap.png'); 
    // preload images for flap up and down
    flapUpImg = loadImage('assets/yellowbird-upflap.png');
    flapDownImg = loadImage('assets/yellowbird-downflap.png')

    pipe = loadImage('assets/pipe-green.png'); // preload image for pipe

    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');

    gameoverImg = loadImage('assets/gameover.png'); // preload the image

    startScreenImg = loadImage('assets/message.png'); // preload the image
}

function setup() {
  new Canvas(400, 600);

  // Bird Sprite construction
  bird = new Sprite();
  bird.x = width / 2;
  bird.y = 200,
  bird.width = 30;
  bird.height = 30;
  bird.img = flapMidImg; // defined earlier in preload()
  bird.visible = false;

  // setting bird physics
  bird.collider = "static"; 
  bird.mass = 2;         // heavier = stronger pull from gravity
  bird.drag = 0.02;      // air resistance
  bird.bounciness = 0.5; // how much it bounces when hitting floor
  world.gravity.y = 10;

  // Floor to bounce bird
  floor = new Sprite();
  floor.x = 200;
  floor.y = height - 20;
  floor.width = 400;
  floor.height = 125;
  floor.collider = "static"; 
  floor.img = base;

  pipeGroup = new Group();

  // setup the start message and display
  startScreenLabel = new Sprite(width/2, height/2, 50, 50, 'none');
  startScreenLabel.img = startScreenImg;
}

function draw() {
  image(bg, 0, 0, width, height);        

  // at start of game, press space or mouse to start
  if (kb.presses('space') || mouse.presses()){
    startGame = true;
    startScreenLabel.visible = false;
    bird.visible = true;
  }

  // if startGame flag is true, then run all the other code
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
 
/* 
Function to create a pair of pipes
and add it to the group
*/ 
function spawnPipePair(){
  // control the gap and height of the top and bottom pipe
  let gap = 70;
  // let midY = height / 2;
  let midY = random(250, height - 250); // random(min, max)

  // create the top pipe
  topPipe = new Sprite(bird.x + 400, midY - gap / 2 - 200, 52, 320, 'static');
  topPipe.img = pipe;
  topPipe.rotation = 180;

  // create the bottom pipe sprite
  bottomPipe = new Sprite(bird.x + 400, midY + gap / 2 + 200, 52, 320, 'static');
  bottomPipe.img = pipe;

  pipeGroup.add(topPipe);
  pipeGroup.add(bottomPipe);
  pipeGroup.layer = 0;
}

// < . . . previous code . . . >

