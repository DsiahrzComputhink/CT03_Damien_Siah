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

  CreateFloor(0 - 399);

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

  // bird movement
  bird.x = bird.x + 3;
  camera.x = bird.x;

  if (bird.x % 399 > 100) {
    CreateFloor(bird.x - (bird.x % 399));
  }

  if (bird.x % pipeSpace === 0) {
    spawnPipePair(bird.x - (bird.x % pipeSpace));
  }

  if (bird.collides(pipeGroup) || bird.collides(floor) ) {
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
}