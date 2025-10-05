let floor;
let ball;

let size = 15;
let elasticity = 0.25;
let gravity = 10;
let menu = false;

function setup() {
    console.log("Loading...");
    //          w    h
    new Canvas(800, 500);
    background("blue");

    floor = new Sprite(width / 2, height, width, 50, "static");



    // Draw the right rectangle.
    Menu = new Sprite(width / 2, height / 2, width, height, "none");
    Menu.color = color('rgba(0, 0, 0, 0.5)');

}

function draw() {

    // Constants
    world.gravity.y = gravity;
    // Menu
    if (menu = true){

    }

    background("black");

    // Text
    textSize(13)

    fill('white')
    text("Keybinds", 10,20)
    text("R - Circle", 10,35);
    text("T - Square", 10,50);
    text("Y - Rectangle", 10,65);

    text("'-' or '+' to Adjust Size",10,85)
    text("Q to open World Menu",10,100)

    text("Constants",600, 20)
    text("Size - " + size,600,35)
    text("Elasticity - " + (elasticity * 100) + "%", 600, 50)


    // Sprite Creation
    if ( keyboard.presses("R") || keyboard.presses("t") || keyboard.presses("y")) {

        if ( keyboard.presses("r")) {
            let s = new Sprite( mouseX, mouseY ) // Circle
            s.diameter = size;
            s.bounciness = elasticity;
            s.layer = -10;
        }

        else if ( keyboard.presses("t")) {
            let s = new Sprite(mouseX, mouseY, size, size); // Square
            s.collider = "dynamic";
            s.bounciness = elasticity;
            s.layer = -10;
        }

        else if ( keyboard.presses("y")) {
            let r = new Sprite(mouseX, mouseY, size, size * 1.5); // Square
            r.collider = "dynamic";
            r.bounciness = elasticity;
            r.layer = -10;
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