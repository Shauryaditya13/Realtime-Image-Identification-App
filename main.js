function preload() {
}

function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fXNkTNPPV/model.json",modelloaded);
}


function modelloaded() {
    console.log("modelloaded");
}

 function draw() {
    image(video,0,0,600,400);
    classifier.classify(video,getresult)
 }

 function getresult(error,result) {
     if(error){
         console.log(error)
     }
     else{
         console.log(result)
         document.getElementById("result_object").innerHTML=result[0].label;
         document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
     }
 }