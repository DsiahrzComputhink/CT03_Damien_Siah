// Archive
function setup() {
  // Set up the canvas
  new Canvas(800, 400); // top left is (0,0)
  background(250); //background color

  // Basic shape testing
  // write your codes here
  // End Basic shape testing
  fill("skyblue");
  stroke("pink");
  strokeWeight(10);
  
  circle(30,30,50); //(x, y, d)
  // x and y refers to the position in space
  // d refers to the diameter of the object
  rect(50,50,100,200) //(x, y, w, h)
  
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

}

function draw() {
  // write your codes here
}

