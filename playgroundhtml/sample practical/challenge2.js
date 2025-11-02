let inputText;
let submitButton;


function setup(){
    createCanvas(400,200);
    
    inputText = createInput();
    inputText.position(600,height + 70);
    inputText.input(updateText);

    submitButton = createButton("Show Input");
    submitButton.mousePressed(displayInput);
    submitButton.position(inputField.x + inputField.width + 10, inputField.y);
}

function draw(){

}

function displayInput() {
    background(220);
    const inputValue = inputField.value();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(inputValue, 200, 100);
}