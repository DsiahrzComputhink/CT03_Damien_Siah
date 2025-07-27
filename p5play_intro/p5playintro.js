//global variables
let a = 5;
let b = 10;

let sum = a + b;
let product = a * b; 

let base = 4;
let height = 9;

let areaoftriangle = (base * height) / 2;


function setup() {
    // Set up the canvas
    new Canvas(800, 400); // top left is (0,0)
    background(250); //background color

    console.log("Hello!");
    textSize(16);
    fill(0);

    console.log("Sum of a and b:", sum);
    console.log("Product of a and b:",product)

}

function draw() {
  noStroke();
  fill(255,40,50); // rgb
  ellipse(100,100,30,50);
  fill(90,255,0); // rgb
  ellipse(200,100,80,150);
  fill(0,255,255); // rgb
  circle(320,120,100);
  fill(90,255,0); // rgb
  rect(30,20,55,50,0,0,20,0); // (x, y, width, height, [tl], [tr], [bl], [br])
  fill(0,0,0); // rgb
  triangle(30,75,58,20,86,75) // (x1, y1, x2, y2, x3, y3) [Plots 3 points and creates a triangle]
  fill(99,99,99); // rgb
  quad(65,90,340,300,400,500,90,150) // (x1, y1, x2, y2, x3, y3) [Plots 4 points and creates a polygon]

  text(sum,50,50)
  text(product,50,70)
}

