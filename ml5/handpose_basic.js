let handPose;

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