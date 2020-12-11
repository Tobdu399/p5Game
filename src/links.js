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
      text(this.text, this.x, this.y);
    }
  }
}