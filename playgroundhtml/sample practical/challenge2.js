let inputNoun;
let inputVerb;
let inputAdj;
let inputAdverb;
let inputPlace;
let submitButton;


function setup(){
    createCanvas(600, 600);
    background(100)
    
    textSize(20);
    fill("black")
    textAlign(CENTER, CENTER);
    text("Enter a Noun", (width / 2) - 150,  height - 540);

    inputNoun = createInput();
    inputNoun.position(width / 2,height - 540);

    inputVerb = createInput();
    inputVerb.position(width / 2, height - 500);

    inputAdj = createInput();
    inputAdj.position(width / 2, height - 460);

    inputAdverb = createInput();
    inputAdverb.position(width / 2, height - 420);

    inputPlace = createInput();
    inputPlace.position(width / 2,height - 380);
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