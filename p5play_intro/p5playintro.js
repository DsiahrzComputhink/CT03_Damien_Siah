function setup() {
  // Set up the canvas
  new Canvas(800, 400); // top left is (0,0)
  background(250); //background color

  // Basic shape testing
  // write your codes here

  // fill("skyblue");
  // stroke("pink");
  // strokeWeight(10);
  
  // circle(30,30,50); //(x, y, d)
  // rect(50,50,100,200) //(x, y, w, h)

  // End Basic shape testing
  
  // Create a bouncing ball sprite
  // write your codes here
  ball = new Sprite();
  // location of ball
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 40;
  ball.color = "blue";
  ball.vel.x = 3;
  ball.vel.y = 3;
  ball.bounciness = 1;
  ball.collider = "dynamic"; // optional --> obeys the physics --> default

  // another sprite that is a rectangle
  box = new Sprite();
  box.x = 100;
  box.y = 100;
  box.w = 50;
  box.h = 50;
  box.color = "green";
}

function draw() {
  // write your codes here
    background(250);
    // Or operator --> ||
  if ( ball.x < (ball.diameter / 2) + 0 || ball.x > (ball.diameter / 2) - width){
    ball.vel.x *= -1;
  }
  if ( ball.y < (ball.diameter / 2) + 0 || ball.y > (ball.diameter / 2) - height){
    ball.vel.y *= -1;
  }
}

