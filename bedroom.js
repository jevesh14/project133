img = "";
function setup(){
   canvas = createCanvas(640,420);
   canvas.center();

   ImageDetector = ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("stat").innerHTML = "Status : Identifing Object";
}

function draw(){
image(img,0,0,640,420);

if(status != ""){
   for(i = 0; i < objects.length; i++){
       document.getElementById("stat").innerHTML = "status: Object Identified";

       percent = floor(objects[i].confidence*100);
       fill("#ff1723");
       noFill();
       stroke("#ff1723");
       text(objects[i].label + "" + percent + "%",objects[i].x,objects[i].y);
       rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
   }
    
     

}
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    ImageDetector.detect(img,GotResult);
}

function GotResult(error,results){
   if(error){
        console.log(error);
   }
   else
   {
       console.log(results);
       objects = results;
   }

}

function preload(){
   img = loadImage("bedrroms.jpeg");
}