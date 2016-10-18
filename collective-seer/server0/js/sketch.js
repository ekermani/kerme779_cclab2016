// Video Capture: adapted from Daniel Shiffman's p5.js Muybridge style animation tutorial video 
// Face Detection: https://kylemcdonald.github.io/cv-examples/FaceDetection/sketch.js
// Drag and Drop: https://github.com/processing/p5.js-website-OLD/pull/80/commits/8a08568e7a147d03e32eb2ec6afe5281e7dee674

var capture;
var button;
var record;
var ciel;
var canvas;

function preload() {
    // how do I make this image on top show camera???
    ciel = createImg("assets/ciel2.png");
    // ciel.size();
    ciel.position(CENTER);

}

function setup() {
    
    canvas = createCanvas(680, 480);

    // background(0);
    canvas.drop(gotFile);
    canvas.position(500,200);
    capture = createCapture(VIDEO);

    capture.size(640, 480);
    // capture.position(50,150);
    // capture.hide();
    
    // button = createButton('System Ready');
    // button.mousePressed(takesnap);
    // record = createButton('Save Image');
    // record.mousePressed(recorded);

}

function draw() {
    tint(255,50);
    // fill(255);
    noStroke();
    noLoop();

}

function gotFile(file) {
    if(file.type === 'image'){
        var img = createImg(file.data).hide();
        image(img, 0, 0, width, height);
    } else {
        println('Not an image');

    }
}

function takesnap() {
    image(video,0,0);
}

function recorded() {
    save(0);

}
