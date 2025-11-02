let inputNoun;
let inputVerb;
let inputAdj;
let inputAdverb;
let inputPlace;
let submitButton;


function setup(){
    createCanvas(400,200);
    
    textSize(64);
    textAlign(CENTER, CENTER);
    text(inputValue, 200, 100);

    inputNoun = createInput();
    inputNoun.position(600,height + 70);
    inputNoun = createInput();
    inputNoun.position(600,height + 70);
    inputNoun = createInput();
    inputNoun.position(600,height + 70);
    inputNoun = createInput();
    inputNoun.position(600,height + 70);
    inputNoun = createInput();
    inputNoun.position(600,height + 70);
    //inputText.input(updateText);

    submitButton = createButton("Show Input");
    submitButton.mousePressed(displayInput);
    submitButton.position(inputText.x + inputText.width + 10, inputText.y);
}

function draw(){

}

function displayInput() {
    background(220);
    const inputValue = inputText.value();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(inputValue, 200, 100);
}