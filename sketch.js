var mic;
var vol = 0;
var i = 0;
var factor;
function setup() {
  createCanvas(430, 800);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  if (i === 1e12){
	  i = 0;
  }
  background(000);
  factor = Math.sin(2*Math.PI*5000*i);
  var vol = mic.getLevel();
  var h = height/2 - vol*factor*height/2;
  fill(0,255,0);
  stroke(0,255,0);
  ellipse(width/2, h , 50, 50);
  i++;
}

function touchStarted() {
  getAudioContext().resume()
}