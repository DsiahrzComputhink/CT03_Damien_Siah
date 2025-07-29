
// global variables
let startingvelocity;

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
    ball.x = 400;
    ball.y = 200;
    ball.diameter = 40;
    ball.color = "blue";
    ball.vel.x = 6;
    ball.vel.y = 6;
    ball.bounciness = 1;
    ball.collider = "dynamic"; // optional --> obeys the physics --> default

    startingvelocity = (Math.abs(ball.vel.x) + Math.abs(ball.vel.y))

    // another sprite that is a rectangle
    box = new Sprite();
    box.x = 100;
    box.y = 100;
    box.w = 75;
    box.h = 75;
    box.color = "green";
    box.collider = "static" // fixed but others can bounce off

    // new sprite that is collidable
    square = new Sprite();
    square.x = 100;
    square.y = 100;
    square.w = 50;
    square.h = 50;
    square.color = "yellow";
    square.collider = "dynamic"
}
function draw() {
  // write your codes here
  background(250);
  fill(0);
  textSize(16)
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10,20);

  let ballcurrentvel = (Math.abs(ball.vel.x) + Math.abs(ball.vel.y)) // Total Velocity of the ball
  text("Ball Velocity: ("+ int(ballcurrentvel) + ")", 10,40);

  text("Box: (" + int(box.x) + ", " + int(box.y) + ")", 10,60);

  text("Energy: ("+ (int((ballcurrentvel/startingvelocity)*100)) + "%)", 10,80);


  text("Square: (" + int(square.x) + ", " + int(square.y) + ")", 10,360);

  let squarecurrentvel = (Math.abs(square.vel.x) + Math.abs(square.vel.y)) // Total Velocity of the square
  text("Square Velocity: ("+ int(squarecurrentvel) + ")", 10,380);
  

  // Or operator --> ||
  // ball
  if ( ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2){
    ball.vel.x *= -1;
  }
  if ( ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diameter / 2){
    ball.vel.y *= -1;
  }

  // square
  if ( square.x < 0 + square.diameter / 2 || square.x > width - ball.diameter / 2){
    square.vel.x *= -1;
  }
  if ( square.y < 0 + square.diameter / 2 || square.y > height - ball.diameter / 2){
    square.vel.y *= -1;
  }

  // box
  if(box.x == ball.x){
    ball.vel.x *= 2
  }
  if(box.y == ball.y){
    ball.vel.y *= 2
  }

  // to negate for velocity loss
  if(ballcurrentvel < startingvelocity){
    ball.vel.x *= startingvelocity/ballcurrentvel
    ball.vel.y *= startingvelocity/ballcurrentvel
  }

  if(mouseX < width){
    if(mouseX > 0){
      box.x = mouseX;
    }
  }

  if(mouseY < height){
    if(mouseY > 0){
      box.y = mo
    }
  }
}

