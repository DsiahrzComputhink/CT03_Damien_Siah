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
    //text(inputValue, 200, 100);

    inputNoun = createInput();
    inputNoun.position(width / 2,height + 70);

    inputVerb = createInput();
    inputVerb.position(width / 2,height + 90);

    inputAdj = createInput();
    inputAdj.position(600,height + 110);

    inputAdverb = createInput();
    inputAdverb.position(600,height + 130);

    inputPlace = createInput();
    inputPlace.position(600,height + 150);
    //inputText.input(updateText);

    submitButton = createButton("Show Input");
    submitButton.mousePressed(displayInput);
    submitButton.position(inputNoun.x + inputNoun.width + 10, inputNoun.y);
}

function draw(){

}

function displayInput() {
    background(220);
    const inputValue = inputNoun.value();
    textSize(64);
    textAlign(CENTER, CENTER);
    text(inputValue, 200, 100);
}