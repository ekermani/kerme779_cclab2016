// Video Capture: p5 example
// Face Detection: https://kylemcdonald.github.io/cv-examples/FaceDetection/sketch.js

var button;
var record;
var img;
var capture;

function setup() {
    // background(0);
    var canvas = createCanvas(480, 640);
    canvas.parent('sketch-container');
    // position relative to entire page
    // canvas.position(0,0);
    
    // right
    capture = createCapture(VIDEO);
    capture.parent('camera-container');
    // capture.size(800,600);
    // capture.position(50,150);
    
    button = createButton('ciel');
    button.position(100,100);
    button.mousePressed(takesnap);
    record = createButton('save');
    record.position(100,120);
    record.mousePressed(recorded);

}

function draw() {
    noStroke();
    noLoop();

}

// function mousePressed() {
//     // boolean, target id of image div, change visibility
//     // putting elements in array
//     // 
//     image(img,0,0);

//     console.log("click");

// }
    // console.log("click");
    // var change = document.getElementById("ciel"); 
    // // console.log(change);
    // if(change.style.opacity == 1) {
    //     change.style.opacity = 0;
    //     console.log(change.style.opacity);
    // } else{
    //     change.style.opacity = 1;
    //     console.log(change.style.opacity);
    // }

    // for (var i = 0; i > change.length; i++) {

    //     if(change[i].style.opacity = 1) {
    //         change[i].style.opacity = 0;
    //         console.log("opacity = 0");
    //     } else{
    //         change[i].style.opacity = 1;
    //         console.log("opacity = 0");
    //     }
    // };

// function gotFile(file) {
//     if(file.type === 'image'){
//         var img = createImg(file.data).hide();
//         image(img, 0, 0, width, height);
//     } else {
//         println('Not an image');

//     }
// }

function takesnap() {
    image(capture,0,0);
}

function recorded() {
    save();

}
