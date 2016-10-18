// Video Capture: adapted from Daniel Shiffman's p5.js Muybridge style animation tutorial video 
// Face Detection: https://kylemcdonald.github.io/cv-examples/FaceDetection/sketch.js
// Shiffman/Coding Rainbow: Drag and Drop tutorial

var video;
var button;
var record;
var dropzone;
// var tracker;
// var snapshots = [];
// var counter = 0;
// var total = 43;

function setup() {
    var c = createCanvas(640, 480);
    // devicePixelScaling(false);
    background(0);
    c.drop(gotFile);
    // capture = createCapture(VIDEO, ready);
    // video = createCapture(VIDEO);

    // video.size(640, 480);
    //capture.hide();
    // button = createButton('System Ready');
    // button.mousePressed(takesnap);
    // record = createButton('Save Image');
    // record.mousePressed(recorded);

    // dropzone = select('#dropzone');
    // dropzone.dragOver();

    // tracker = new clm.tracker();
    // tracker = init(pModel);
    // tracker.start(video.elt);

}

function draw() {
    fill(255);
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


//     var img = createImg(file.data).hide();
//     image(img, 0, 0, width, height);
//     console.log(img);
//     noStroke();
//     for (var i = 0; i < width; i+=10) {
//         for (var j=0; j < height; j+=10) {
//             fill(get(i, j));
//             ellipse(i, j, 10, 10);
//         }
//     }
// }

// var go = false; 

// function ready(){
// 	go = true;
// }

// function highlight() {
//     dropzone.style('background-color', '#ccc');
// }

// function takesnap() {
//     image(video,0,0);
// // //     var positions = tracker.getCurrentPosition();
// }

// function recorded() {
// // saveFrames(filename,extension,_duration,_fps,callback)
//     // saveFrames("image-","png", 1, 1);
//     // saveFrames("image-","png");
//     save(0);

// }


    // tint(255, 50);
    // image(video,0,0);
    // var positions = tracker.getCurrentPosition();

    // noFill();
    // stroke(255);
    // beginShape();
    // for (var i = 0; i < positions.length; i++) {
    //     fill(map(i, 0, positions.length, 0, 360), 50, 100);
    //     ellipse(positions[i][0], positions[i][1], 4, 4);
    //     text(i, positions[i],[0], positions[i][1]);
    // }

    // if(positions.length > 0) {
    //     var mouthLeft = createVector(positions[44][0], positions[44][1]);
    //     var mouthRight = createVector(positions[50][0], positions[50][1]);
    //     var smile = mouthLeft.dist(mouthRight);

    // image(video,0,0);

    // snapshots.push(video.get());

    // for (var i = 0; i < snapshots.length; i++) {
        // image(snapshots[i], 0, 0, 50, 50);
    // }

  // background(255);
  // image(capture, 0, 0, 720, 480);

  // console.log(go);

  // if (go) {
  // 	  // snapshots.push(capture.get());

  // 	  // add images to array
  // 	  snapshots[counter] = capture.get();
  // 	  counter++;

  // 	  // when counter reaches max, go back to 0
  // 	  if (counter == total) {
  // 	  	counter = 0;

  // 	  }

//   var w = 80;
//   var h = 60;
//   var x = 0; 
//   var y = 0;
  

//   for (var i = 0; i < snapshots.length; i++) {
//   	// tint(255, 50);
//   	// image(snapshots[i], x, y, w, h);
//   	var index = (i + frameCount) % snapshots.length;
//   	image(snapshots[index], x, y, w, h);
//   	x = x + w;
//   	if (x > width) {
//   		x = 0;
//   		y = y + h;
//   	}
//   }
//   // filter('INVERT');
//   // filter('')
// }