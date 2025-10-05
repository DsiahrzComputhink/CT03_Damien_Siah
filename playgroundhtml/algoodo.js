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

    Menu = new Sprite(width / 2, height / 2, width, height, "none");
    Menu.color = color('rgba(0, 0, 0, 0.5)');
    Menu.visible = false;
}

function draw() {

    // Constants
    world.gravity.y = gravity;
    // Menu
    // if (menu == true){
    //     Menu.visible = true;
    // }else {
    //     Menu.visible = false;
    // }

    background("black");

    // Text

    textSize(13)

    fill('white')
    text("Keybinds", 10,20)
    text("R - Circle", 10,35);
    text("T - Square", 10,50);
    text("Y - Rectangle", 10,65);

    text("'-' or '+' to Adjust Size",10,85)
    text("'A' or 'S' to Adjust Elasticity",10,100)
    text("'Z' or 'X' to Adjust Gravity",10,115)

    text("Constants",600, 20)
    text("Size - " + size,600,35)
    text("Elasticity - " + (elasticity * 100) + "%", 600, 50)
    text("Gravity - " + gravity,600,65)


    // Sprite Creation
    if ( keyboard.presses("r") || keyboard.presses("t") || keyboard.presses("y")) {

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
    if ( keyboard.presses("=") || keyboard.presses("-") || keyboard.presses("a") || keyboard.presses("s") || keyboard.presses("z") || keyboard.presses("x")) {

        if ( keyboard.presses("-")) { // Size Decrease
            size -= 5;
        }

        if ( keyboard.presses("=")) { // Size Increase
            size += 5;
        }

        if ( keyboard.presses("a")) { // Elasticity Decrease
            elasticity -= 0.05;
        }

        if ( keyboard.presses("d")) { // Elasticity Increase
            elasticity += 0.05;
        }

        if ( keyboard.presses("-")) { // Gravity Decrease
            gravity -= 0.5;
        }

        if ( keyboard.presses("=")) { // Gravity Increase
            gravity += 0.5;
        }
    }

    

    // Menu
    // if ( keyboard.presses("q")) {
    //     if (menu == true){
    //         menu = false;
    //         console.log("menu is now false")
    //     } else {
    //         menu = true;
    //         console.log("menu is now true")
    //     }
    // }
}