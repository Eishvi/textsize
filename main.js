
difference=0;
rightWristX=0
leftWristX=0;function setup(){
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
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
    }
}
function draw(){
    background('#555555')
    textSize(difference);
text('Hello There', 10, 30);
}

