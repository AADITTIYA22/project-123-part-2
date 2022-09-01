 function preload(){

 }

 function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(1200,600);
    canvas.position(560,125);
    pose_net = ml5.poseNet(video,modelLoaded);
    pose_net.on("pose",gotPoses);
 }
  
 function draw(){

 }

 function modelLoaded(){
    console.log("POSE-NET MODAL LOADED");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}