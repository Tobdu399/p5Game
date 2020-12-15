function setup() {
  canvas = createCanvas(width*scale, (width/1.5)*scale);
  canvas.parent("display");

  frameRate(60);
  boldFont = loadFont("styles/boldFont.ttf");
  lightFont = loadFont("styles/lightFont.ttf");

  // shopLink = createButton("Shop");
  // shopLink.parent("display");
  // shopLink.position(0, 100*scale)
  link = new Link(shopImg, width-80, 30, 25, 25, 14);
}

function draw() {
  clear();
  
  updateCanvas();

  // --> Game Loop

  showHeaders();
  drawButtons();
}
