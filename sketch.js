let width = 700,
    scale = 1,
    size = 1,
    buttonAmount = 6,
    scale_slider = document.getElementById("scale-slider"),
    size_slider = document.getElementById("size-slider"),
    boldFont,
    lightFont;

function setup() {
  createCanvas(width*scale, (width/1.5)*scale);
  frameRate(60);
  boldFont = loadFont("Fonts/boldFont.ttf");
  lightFont = loadFont("Fonts/lightFont.ttf");
}

function draw() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = (scale_slider.value*1).toFixed(2);
  document.getElementById("scale-title").innerHTML = "Scale: " + scale + "x";

  size = (size_slider.value*1).toFixed(2);
  document.getElementById("size-title").innerHTML = "Size: " + size + "x";

  resizeCanvas(width*scale, (width/1.5)*scale)
  background(220);

  textSize(20*size*scale);

  // --> Game Loop
  // Title
  fill(0);
  textFont(boldFont);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Game", width/2*scale, 50*scale);


  drawButtons();
}
