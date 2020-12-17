class Link {
  constructor(image, x, y, button_width, button_height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = button_width;
    this.height = button_height;
    this.link = createImg(this.image);

    this.show = function() {
      this.link.parent("display");
      this.link.size(this.width*scale, this.height*scale);
      this.link.position((windowWidth/2-(width/2)*scale + this.x*scale),  (windowHeight/2-height/2 + this.y*scale));
      this.link.mousePressed(this.click);
    }

    this.click = function() {
      alert("Under developement");
    }
  }
}
