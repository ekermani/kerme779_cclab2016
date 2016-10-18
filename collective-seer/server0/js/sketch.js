// Video Capture: p5 example
// Face Detection: https://kylemcdonald.github.io/cv-examples/FaceDetection/sketch.js
// Drag and Drop: https://github.com/processing/p5.js-website-OLD/pull/80/commits/8a08568e7a147d03e32eb2ec6afe5281e7dee674

var button;
var record;
var ciel;

//html elements:
// var h1;
var sky;

// function preload() {


//     ciel = createImg("assets/ciel2.png");
//     // ciel.size();
//     ciel.position(CENTER);

// }

function setup() {
    // background(0);
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');
    // position relative to entire page
    canvas.position(500,200);
    canvas.drop(gotFile);
    
    var capture = createCapture(VIDEO);
    capture.parent('camera-container');
    capture.size(640, 480);
    // capture.position(50,150);
    // capture.hide();
    
    // button = createButton('System Ready');
    // button.mousePressed(takesnap);
    // record = createButton('Save Image');
    // record.mousePressed(recorded);

}
// h1.html under mousePressed function can change the h1 content

function draw() {
    tint(255,50);
    // fill(255);
    noStroke();
    noLoop();
// what's drawn on canvas - position is relative to canvas (versus dom)

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
