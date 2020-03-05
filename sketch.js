var mic
var vol = 0

function setup() {
  createCanvas(430, 800);
  // Create an Audio input
  mic = new p5.AudioIn();
     // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(000);

  // Get the overall volume (between 0 and 1.0)
   var vol = mic.getLevel();
  
  fill(0,255,0);
  stroke(0,255,0);
  
  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 0.5, height, 0);
  ellipse(width/2, h - 25, 50, 50);
}

function touchStarted() {
  getAudioContext().resume()
}