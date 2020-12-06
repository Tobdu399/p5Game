let width = 700,
    scale = 1,
    slider = document.getElementById("scale-slider");

function setup() {
  createCanvas(width*scale, (width/1.5)*scale);
  textSize(15);
}

function draw() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = (slider.value*1).toFixed(2);
  document.getElementById("scale-title").innerHTML = "Scale: " + scale + "x";

  resizeCanvas(width*scale, (width/1.5)*scale)
  background(220);

  // --> Game Loop
}

//! TODO: Hide/Show customization sliders
