let floor;
let ball;

let size = 15;
let elasticity = 0.25;

function setup() {
    console.log("called once");
    //          w    h
    new Canvas(800, 500);
    background("blue");

    floor = new Sprite(width / 2, height, width, 50, "static");

    // abc.diameter = 50;
    // abc.y = 50;

    world.gravity.y = 10; // speed of dropping
}

function draw() {
    background("black");

    // Text
    textSize(13)
    fill('white')
    text("R - Circle", 10,20);
    text("T - Ellipse", 10,35);
    text("Y - Square", 10,50);
    text("U - Rectangle", 10,65);
    text("I - Triangle", 10,80);


    // Sprite Creation
    if ( keyboard.presses("R") || keyboard.presses("t") || keyboard.presses("y") || keyboard.presses("u") || keyboard.presses("i")) {

        if ( keyboard.presses("r")) {
            let s = new Sprite( mouseX, mouseY ) // Sphere
            s.diameter = size;
            s.bounciness = elasticity;
        }

        if ( keyboard.presses("t")) {
            let e = ellipse(mouseX, mouseY, size, 80);
            e.collider = "dynamic"
            e.bounciness = elasticity;
        }
    }

}