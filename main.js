function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550,550)
    canvas.position(600, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background('#555555')
}