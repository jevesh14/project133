imag = "";
function setup(){
   canvas = createCanvas(640,420);
   canvas.center();

   ImageDetector = ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("st").innerHTML = "Status : Identifing Object";
}

function draw(){
image(imag,0,0,640,420);

if(status != ""){
   for(n = 0; n < objects.length; n++){
       document.getElementById("st").innerHTML = "status: Object Identified";

       percent = floor(objects[n].confidence*100);
       fill("#ff1723");
       noFill();
       stroke("#ff1723");
       text(objects[n].label + "" + percent + "%",objects[n].x,objects[n].y);
       rect(objects[n].x,objects[n].y,objects[n].width,objects[n].height);
   }
    
     

}
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    ImageDetector.detect(imag,GotResult);
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
   imag = loadImage("tv.jpeg");
}