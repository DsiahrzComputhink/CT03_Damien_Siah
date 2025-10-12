let inputText;
let inputAge
let userText = "Your text here";
let colorPicker;
let rectangle;


function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 100);
    inputText.input(updateText);

    inputAge = createInput();
    inputAge.position(200,height - 80);
    inputText.input(updateText);

    colorPicker = createColorPicker("#63c1a6ff");
    colorPicker.position(120,375);
}

function draw(){
    background(colorPicker.value());
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text("Pick a Color",20, 360)
    textSize(30)
    text("Your Name");
    text("Your Age")

    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(userText, width/2, 180)

    fill(255);
    rectangle = rect(50, 100, 500, 160, 50)
}

function updateText(){
    userText = this.value();
}