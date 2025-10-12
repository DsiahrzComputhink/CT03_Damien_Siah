let inputText;
let userText = "Your text here";

function setup(){
    createCanvas(600,400);
    
    inputText = createInput();
    inputText.position(200,height - 80);
}

function draw(){
    TextSize(30);
    text(userText, width/2, height/2)
}