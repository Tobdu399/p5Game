function updateCanvas() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = scale_slider.value*1;
  document.getElementById("scale-title").innerHTML = "Scale: " + (scale*100).toFixed(0) + "%";

  size = size_slider.value*1;
  document.getElementById("size-title").innerHTML = "Size:  " + (size*100).toFixed(0) + "%";

  resizeCanvas(width*scale, (width/1.5)*scale)
  background(220);
}

function showHeaders() {
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
  // const shopLink = new Link("Shop", width*scale-102*scale, 100*scale, "Georgia", 16, "right");
  // shopLink.showLink();
  fill(0);
  textFont("Georgia");
  textAlign(RIGHT);
  textSize(16*size*scale);
  text("Shop", width*scale-102*scale, 100*scale);

  if (mouseX > (width*scale-102*scale)-35*scale*size && mouseX < width*scale-102*scale &&
      mouseY > (100-15*scale) && mouseY < 102*scale) {
    cursor('pointer');
  } else {
    cursor('default');
  }

}