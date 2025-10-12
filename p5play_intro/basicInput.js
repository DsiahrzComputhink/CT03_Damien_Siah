let inputText;
let userText = "Your text here";

function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 80);
    inputText.input(updateText);
}

function draw(){
    background(220);
    FileList(0);
    
}

function updateText(){
    userText = this.value();
}