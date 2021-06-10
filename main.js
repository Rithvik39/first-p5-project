function preload(){

}

function setup(){
    canvas = createCanvas(800 , 600);
    canvas.position(600, 300);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video , 250 , 160 , 300 , 250);
    fill(3, 252, 227);
    stroke(3, 252, 227);
    circle(65 , 65 , 100);
    circle(65 , 540 , 100);
    circle(735 , 65 , 100);
    circle(735 , 540 , 100);

    fill(252, 7, 3);
    stroke(252, 7, 3);
   rect(50,  115 , 30 , 375);
   rect(720,  115 , 30 , 375);
   rect(115 , 50 , 570 , 30);
   rect(115 , 525 , 570 , 30);
}

function take_snapshot(){
    save("Rithvik.png");
}