let inputText;
let userText = "Your text here";

function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(updateText);
}

function draw(){
    background(ColorPicker.value())
    background(220);
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(userText, width/2, 180)
}

function updateText(){
    userText = this.value();
}