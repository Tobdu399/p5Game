let money = 0;

let width = 700,
    scale = 1,
    size = 1;

const buttonAmount = 6;

const scale_slider = document.getElementById("scale-slider"),
    size_slider = document.getElementById("size-slider");

let boldFont,
    lightFont;

function setup() {
  createCanvas(width*scale, (width/1.5)*scale);
  frameRate(144);
  boldFont = loadFont("Fonts/boldFont.ttf");
  lightFont = loadFont("Fonts/lightFont.ttf");
}

function draw() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = scale_slider.value*1;
  document.getElementById("scale-title").innerHTML = "Scale: " + (scale*100).toFixed(0) + "%";

  size = size_slider.value*1;
  document.getElementById("size-title").innerHTML = "Size:  " + (size*100).toFixed(0) + "%";

  resizeCanvas(width*scale, (width/1.5)*scale)
  background(220);

  // --> Game Loop
  // Title
  fill(0);
  textFont(boldFont);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(20*size*scale);
  text("Game", width/2*scale, 50*scale);

  // Balance
  fill(0);
  textFont(lightFont);
  textAlign(LEFT);
  textSize(16*size*scale);
  text("Money: ", 100*scale, 100*scale);

  drawButtons();
}
