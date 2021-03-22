
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150,  150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 230, 150, 220, 200);         

//first circle

    fill(145, 10, 10);
    stroke(145, 10, 10);
    circle(50, 50, 80);

    //first rec

    fill(194, 68, 6);
    stroke(194, 68, 6);
    rect(50, 40, 460, 20);

    rect(90, 40, 460, 20);

    //sec circle

    fill(255, 87, 87);
    stroke(255, 87, 87);
    circle(550, 50, 80);

    //sec rec

    fill(235, 108, 45);
    stroke(235, 108, 45);
    rect(40, 40, 20, 400);

    rect(90, 40, 460, 20);

    //third circle

    fill(145, 10, 10);
    stroke(145, 10, 10);
    circle(550, 400, 80);

    //third rec
    fill(194, 68, 6);
    stroke(194, 68, 6);
    rect(540, 40, 20, 370);

    rect(90, 40, 460, 20);

    //fourth circle
    
    fill(255, 87, 87);
    stroke(255, 87, 87);
    circle(50, 400, 80);

    //fourth rec
    fill(235, 108, 45);
    stroke(235, 108, 45);
    rect(90, 390, 460, 20);

    rect(90, 40, 460, 20);


}

