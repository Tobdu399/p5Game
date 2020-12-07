let width = 700,
    scale = 1,
    slider = document.getElementById("scale-slider");

function setup() {
  createCanvas(width*scale, (width/1.5)*scale);
  textSize(15);
  frameRate(60);
}

function draw() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = (slider.value*1).toFixed(2);
  document.getElementById("scale-title").innerHTML = "Scale: " + scale + "x";

  resizeCanvas(width*scale, (width/1.5)*scale)
  background(220);

  // --> Game Loop
  drawButtons();
}

//! TODO: Hide/Show customization sliders
function drawButtons() {
  fill(255);
  noStroke();

  // rect(20*scale, 20*scale, (width/6)*scale, (height/4)*scale);
  // rect((width/6)*scale, 20*scale, (width/6)*scale, (height/4)*scale)
  // rect(150+(width/6)*scale, 20*scale, (width/6)*scale, (height/4)*scale)
  // rect(300+(width/6)*scale, 20*scale, (width/6)*scale, (height/4)*scale)
  // rect(450+(width/6)*scale, 20*scale, (width/6)*scale, (height/4)*scale)
}