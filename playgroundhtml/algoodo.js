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
    fill('white')
    textSize(14)
    text("Keybinds", 10,20)
    textSize(13)
    text("R - Circle", 10,35);
    text("T - Square", 10,50);
    text("Y - Rectangle", 10,65);

    text("'-' or '+' to Adjust Size",10,85)
    text("'A' or 'D' to Adjust Elasticity",10,100)
    text("'Z' or 'C' to Adjust Gravity",10,115)
    text("'Enter' to Reset Constants",10,130)

    textSize(14)
    text("Constants",10, 150)
    textSize(13)
    text("Size - " + size,10, 165)
    text("Elasticity - " + Math.round(elasticity * 100) + "%", 10, 180)
    text("Gravity - " + gravity,10, 195)


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
    if ( keyboard.presses("=") || keyboard.presses("-") || keyboard.presses("a") || keyboard.presses("d") || keyboard.presses("z") || keyboard.presses("c") || keyboard.presses("enter")) {

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

        if ( keyboard.presses("z")) { // Gravity Decrease
            gravity -= 0.5;
        }

        if ( keyboard.presses("c")) { // Gravity Increase
            gravity += 0.5;
        }

        if (keyboard.presses("enter")) {
            gravity = 10;
            elasticity = 0.25;
            size = 15;
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