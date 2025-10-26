let inputText;
let inputAge
let userText = "Your Name";
let userAge = "Age"
let colorPicker;
let rectangle;


function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 110);
    inputText.input(updateText);

    inputAge = createInput();
    inputAge.position(200,height - 80);
    inputAge.input(updateText);

    colorPicker = createColorPicker("#63c1a6ff");
    colorPicker.position(20 + 70,height - 50);
}

function draw(){
    background(colorPicker.value());

    rectangle = rect(50, 100, 500, 160, 20)
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text("Your Name", 20, height - 110);
    text("Your Age", 20, height - 80)
    text("Pick a Color",20, height - 50)
    textSize(30)

    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(userText, width/2, 180)
    text(userAge, width/2, 180)

    fill(255);
}

function updateText(){
    userText = this.value();
}