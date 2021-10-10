status = "";
object = document.getElementById("object").value;

function preload()
{

}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
}

function find()
{
    objectdetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
  console.log("Coco Ssd is loaded!!");
  status = "true";
}

function draw()
{
    image(video,0,0 ,480,380);
}