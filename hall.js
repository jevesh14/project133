imge = "";
 function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    ImageDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("sta").innerHTML = "Status : Identifing Object";
}

function draw(){
image(imge,0,0,640,420);

if(status != ""){
    for(h = 0; h < objects.length; h++){
        document.getElementById("sta").innerHTML = "status: Object Identified";

        percent = floor(objects[h].confidence*100);
        fill("#ff1723");
        noFill();
        stroke("#ff1723");
        text(objects[h].label + "" + percent + "%",objects[h].x,objects[h].y);
        rect(objects[h].x,objects[h].y,objects[h].width,objects[h].height);
    }
     
      

}
}

function modelLoaded(){
     console.log("Model Loaded!")
     status = true;
     ImageDetector.detect(imge,GotResult);
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
    imge = loadImage("hall.jpeg");
}