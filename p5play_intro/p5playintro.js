//global variables
let a = 5;
let b = 10;

let sum = a + b;
let product = a * b; 

let base = 4;
let height = 9;

let areaoftriangle = (base * height) / 2;

let totalsum = 0

let age;

function setup() {
    // Set up the canvas
    new Canvas(800, 400); // top left is (0,0)
    background(250); //background color

    console.log("Hello!");
    textSize(16);
    fill(0);

    console.log("Sum of a and b:", sum);
    console.log("Product of a and b:",product)
    console.log("Area of Triangle:",areaoftriangle)


    // logic
    for (let i = 1; i <= 10; i++) {
      console.log("Counting..." + i); // loop 10 times
    }

    for (let i = 20; i >= 10; i--) {
      console.log("Counting..." + i);
    }

    for (let i = 3; i <= 46; i+=3) {
      console.log("Counting..." + i);
    }

    for (let i = 2; i <= 20; i+=2) {
      totalsum += i
    }

    console.log("Total Sum = " + totalsum);

    age = 13;
    if (age < 9){
      console.log("Lower Primary, Age:" + age)
    }else if (age > 9 || age < 13){
      console.log("Upper Primary, Age:" + age)
    }else {
      console.log("Secondary, Age:" + age)
    }

    let num = 19;
    while(num > 0){
      if (num % 2 == 0){
        // do nothing
      }else {
        console.log(num)
      }
      num -= 1
    }

    // arrays
    let groceries = ["apple","bread","milk"];
    groceries.push("orange");
    

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


  fill(0)
  text("inspect page",500,30)
  text("a = " + a,500,50)
  text("b = " + b,500,70)
  text("Sum of a and b = " + sum,500,90)
  text("Product of a and b = " + product,500,110)
  text("Area of Triangle = " + areaoftriangle,500,130)

}

