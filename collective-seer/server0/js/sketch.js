// adapted from p5.js video capture example + Muybridge style animation tutotiral video 

var capture;
var button;
var snapshots = [];
var counter = 0;
var total = 43;

function setup() {
  createCanvas(320, 240);
  background(0);
  capture = createCapture(VIDEO, ready);
  capture.size(320, 240);
  //capture.hide();
  button = createButton('snap');
  button.mousepressed(takesnap);
}

var go = false; 

function ready(){
	go = true;
}

function takesnap() {
	// image(capture,0,0);
//use as API?

}

function draw() {
  // background(255);
  // image(capture, 0, 0, 720, 480);
  if (go) {
  	  // snapshots.push(capture.get());
  	  snapshots[counter] = capture.get();
  	  counter++;
  	  if (counter == total) {
  	  	counter = 0;

  	  }
  }
  var w = 80;
  var h = 60;
  var x = 0; 
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {
  	// tint(255, 50);
  	// image(snapshots[i], x, y, w, h);
  	var index = (i + frameCount) % total;
  	image(snapshots[index], x, y, w, h);
  	x = x + w;
  	if (x > width) {
  		x = 0;
  		y = y + h;
  	}
  }
  // filter('INVERT');
  // filter('')
}


//mousepressed, save frame 