let handPose;
let VideoW = 640;
let VideoH = 480;
let video;
let hands = [];

let fingerTip;
let balloon; // sprite
let bottomWall, topWall, rightWall, leftWall;

let gameStarted = false;
let gameOver = false;
let score = 0;

let pointSound;

function preload(){
    let options = {
        flipped: true,
        runtime: 'tfjs',
        modelType: "full",
        detectorModelUrl: undefined,
        landmarkModelUrl: undefined,
    }

    // loading the handpose model
    handPose = ml5.handPose(options);
    pointSound = createAudio("assets/sfx_point.mp3")
}

function setup(){

    fingerTip = new Sprite();
    fingerTip.diameter = 60;
    fingerTip.collider = 'kinematic';
    fingerTip.color = 'rgba(52, 255, 2, 0.35)'
    createCanvas(VideoW, VideoH)

    let constraints = {
        video: {
            mandatory: {
                minWidth: VideoW,
                minHeight: VideoH
            },

            optional: [{minFrameRate: 60}]
        },

        audio: false,
        flipped: true,
    };

    // Create the webcam video and hide it
    video = createCapture(constraints);
    video.size(640,480);
    video.hide();

    handPose.detectStart(video, gotHands);

    // balloon
    world.gravity.y = 6;

    balloon = new Sprite();
    balloon.diameter = 60;
    balloon.color = 'red';
    balloon.x = width / 2;
    balloon.y = 100;
    balloon.visible = false;
    balloon.bounciness = 1;
    //balloon.mass = 2;
    //balloon.drag = 0.01;

    // walls
    topWall = new Sprite(width /2, 0, width, 10, 'static');
    bottomWall = new Sprite(width/2, height, width, 10, 'static');
    leftWall = new Sprite(0, height/2, 0, height, 'static');
    rightWall = new Sprite(width, height/2, 10, height, 'static');

    boundaryGroup = new Group;
    boundaryGroup.add(topWall);
    boundaryGroup.add(bottomWall);
    boundaryGroup.add(leftWall);
    boundaryGroup.add(rightWall);
    boundaryGroup.visible = false;
}

function draw(){
    image(video, 0, 0, VideoW, VideoH);

    // for(let i = 0; i < hands.length; i++){
    //     let hand = hands[i]; // left or right

    //     for(let j = 0 ; j < hand.keypoints.length; j++){
    //         let keypoint = hand.keypoints[j];

    //         circle(keypoint.x, keypoint.y, 10)
    //     }

    // }
    if (gameStarted === false) {
        textSize(28);
        textAlign(CENTER, CENTER);
        fill('black');
        textSize(20);
        text("Use your Index Finger to bounce the ball.",width/2, height/2 - 40)
        textSize(28);
        text("Press Space to Start the Game.",width/2, height/2);
    }
    if (gameOver === false) {
        if (hands.length > 0) {
            let hand = hands[0]
            let keypoint = hand.keypoints[8]
            fingerTip.x = keypoint.x;
            fingerTip.y = keypoint.y;
            fingerTip.visible = true;
        } else {
            fingerTip.visible = false;
        }
    }
    if (balloon.collides(fingerTip)){
        pointSound.play();
        console.log("collided")
        score += 1;
    }

    textAlign(LEFT,CENTER)
    textSize(20)
    text("Score: "+score,5, 20);
}

function gotHands(results){
    hands = results;
}

function keyPressed(){
    if(key === ' '){
        gameStarted = true;
        gameOver = false;
        score = 0;

        // resetting balloon state
        balloon.x = width/2;
        balloon.y = 100;
        balloon.vel.x = 0;
        balloon.vel.y = 0;
        balloon.collider = 'dynamic';
        balloon.bounciness = 1;
        balloon.drag = 0.01;
        balloon.visible = true;
    }
}