let inputText;
let userText = "Your text here";
let colorPicker;


function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(updateText);

    colorPicker = createColorPicker("#63c1a6ff");
    colorPicker.position(120,32);
}

function draw(){
    background(ColorPicker.value());
    textSize(16);
    textAlign(LEFT);
    fill(0);
    text("Pick a Color",20, 50)

    background(220);
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(userText, width/2, 180)
}

function updateText(){
    userText = this.value();
}