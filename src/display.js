function updateCanvas() {
  // Using type coercion to be able to format the value to 2 decimals
  scale = scale_slider.value*1;
  document.getElementById("scale-title").innerHTML = "Scale: " + (scale*100).toFixed(0) + "%";

  size = size_slider.value*1;
  document.getElementById("size-title").innerHTML = "Size:  " + (size*100).toFixed(0) + "%";

  resizeCanvas(width*scale, (width/1.5)*scale)
  canvas.position(windowWidth/2-(width/2)*scale, windowHeight/2-height/2);
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
  link.show();
}
