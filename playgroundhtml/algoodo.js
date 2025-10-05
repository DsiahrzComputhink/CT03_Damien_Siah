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
    text("Keybinds", 10,20)
    text("R - Circle", 10,35);
    text("T - Square", 10,50);
    text("Y - Rectangle", 10,65);

    text("'-' or '+' to Adjust Size",10,85)
    text("'-' or '+' to Adjust Size",10,85)

    text("Constants",600, 20)
    text("Size - " + size,600,35)
    text("Elasticity - " + (elasticity * 100) + "%", 600, 50)


    // Sprite Creation
    if ( keyboard.presses("R") || keyboard.presses("t") || keyboard.presses("y")) {

        if ( keyboard.presses("r")) {
            let s = new Sprite( mouseX, mouseY ) // Circle
            s.diameter = size;
            s.bounciness = elasticity;
        }

        else if ( keyboard.presses("t")) {
            let e = new Sprite(mouseX, mouseY, size, size); // Square
            e.collider = "dynamic";
            e.bounciness = elasticity;
        }

        else if ( keyboard.presses("y")) {
            let e = new Sprite(mouseX, mouseY, size, size * 1.5); // Square
            e.collider = "dynamic";
            e.bounciness = elasticity;
        }
    }

    // Variable Adjustment
    if ( keyboard.presses("=") || keyboard.presses("+") || keyboard.presses("-")) {

        if ( keyboard.presses("-")) { // Size Decrease
            size -= 5;
        }

        if ( keyboard.presses("=") || keyboard.presses("+")) { // Size Decrease
            size += 5;
        }
    }
}