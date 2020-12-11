function setup() {
  createCanvas(width*scale, (width/1.5)*scale);
  frameRate(144);
  boldFont = loadFont("styles/boldFont.ttf");
  lightFont = loadFont("styles/lightFont.ttf");
}

function draw() {
  updateCanvas();

  // --> Game Loop

  showHeaders();
  drawButtons();
}
