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
    ball.vel.x = 3;
    ball.vel.y = 9;
    ball.bounciness = 1;
    ball.collider = "dynamic"; // optional --> obeys the physics --> default

    // another sprite that is a rectangle
    box = new Sprite();
    box.x = 100;
    box.y = 100;
    box.w = 50;
    box.h = 50;
    box.color = "green";
    box.collider = "static" // fixed but others can bounce off
}
function draw() {
    // write your codes here
      background(250);

      fill(0);
      textSize(16)
      text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10,20);
      text("Ball Velocity: (" + int(ball.vel.x) + ", " + int(ball.vel.y) + ")", 10,20);
      text("Mouse: (" + int(mouseX) + ", " + int(mouseY) + ")", 10,40);
      // Or operator --> ||
    if ( ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2){
      ball.vel.x *= -1;
    }
    if ( ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diameter / 2){
      ball.vel.y *= -1;
    }

    if(box.x == ball.x){
      ball.vel.x *= 1
    }
    if(box.y == ball.y){
      ball.vel.y *= 1
    }

    box.x = mouseX;
    box.y = mouseY;
}

