// adapted from Daniel Shiffman's p5.js Muybridge style animation tutorial video 

var video;
var button;
var record;
// var snapshots = [];
// var counter = 0;
// var total = 43;

function setup() {
    createCanvas(640, 480);
    background(51);
    // capture = createCapture(VIDEO, ready);
    video = createCapture(VIDEO);

    video.size(640, 480);
    //capture.hide();
    button = createButton('System Ready');
    button.mousePressed(takesnap);
    record = createButton('Save Image');
    record.mousePressed(recorded);

}

// var go = false; 

// function ready(){
// 	go = true;
// }

function takesnap() {
    image(video,0,0);
}

function recorded() {
// saveFrames(filename,extension,_duration,_fps,callback)
    saveFrames("image-","png", 3, 30);
}

function draw() {
    tint(255, 50);
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
}

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