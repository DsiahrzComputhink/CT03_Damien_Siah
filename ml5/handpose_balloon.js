let handPose;
let VideoW = 640;
let VideoH = 480;
let video;
let hands = [];

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
        let keypoint = handPose.keypoints[8]
        circle(keypoint.x, keypoint.y, 30);
    }
}

function gotHands(results){
    hands = results;
}