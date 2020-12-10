let money = 0;

let width = 700,
    scale = 1,
    size = 1;

const sharesAmount = 5;

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
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(22*size*scale);
  text("Stocks and Shares", width/2*scale, 50*scale);

  // Balance
  fill(0);
  textFont("Georgia");
  textAlign(LEFT);
  textSize(16*size*scale);
  text("Money: " + money + "$", 102*scale, 100*scale);

  // Shop
  fill(0);
  textFont("Georgia");
  textAlign(RIGHT);
  textSize(16*size*scale);
  text("Shop", width*scale-102*scale, 100*scale);

  drawButtons();
}
