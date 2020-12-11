class Link {
  constructor(text, x, y, font, fontsize, align) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.font = font;
    this.fontsize = fontsize;
    this.align = align;

    this.showLink = function () {
      fill(0);
      textFont(this.font);
      textSize(fontsize*size*scale);
      textAlign(this.align);
      // text(this.text, this.x, this.y);

      if (mouseX > this.x-(this.text.length*8.75)*scale*size && mouseX < this.x && mouseY > (y-fontsize*scale) && mouseY < y*scale) {
        cursor("pointer");
      } else {
        cursor("default");
      }
    }
  }
}