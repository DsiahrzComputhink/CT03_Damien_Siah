let handPose;
let VideoW = 640;
let VideoH = 480;
let video;
let hands = [];

let balloon; // sprite
let bottomWall, topWall, rightWall, leftWall;

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
    balloon.bounciness = 1;
    balloon.mass = 2;
    balloon.drag = 0.01;

    // walls
    topWall = newSprite(width /2, 0, width, 10, 'static');
    bottomWall = newSprite
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

function gotHands(results){
    hands = results;
}