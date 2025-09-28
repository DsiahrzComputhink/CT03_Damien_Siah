let handPose;
let VideoW = 640;
let VideoH = 480;

let video;

function preload(){
    let options = {
        flipped: true,
        runtime: 'tfjs',
        modelType: "full",
        detectorModelUrl: undefined,
        landmarkModelUrl: undefined,
    }

    // loading the handpose model
    handpose = ml5.handpose(options);
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