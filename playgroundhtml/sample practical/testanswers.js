let floor;
let ball;

function setup() {
    console.log("called once");
    //          h    w
    new Canvas(600, 400);
    background("blue");

    floor = new Sprite(width / 2, height, width, 50, "static");

    let a = new Sprite(50, 0, 75, 75, "dynamic")
    let b = new Sprite(width - 50, 0, 75, 75, "dynamic")
    // abc.diameter = 50;
    // abc.y = 50;

    world.gravity.y = 1; // speed of dropping
}

function draw() {
    background("blue");

    if ( keyboard.presses("k") || keyboard.presses("j") || mouse.presses()) {
        let b = new Sprite( mouseX, mouseY )
        b.diameter = 15;
    }
}