let row1_buttons = [];
let row2_buttons = [];

class Button {
  constructor(x, y, width, height, borderradius) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.borderradius = borderradius;
    this.isClicked = false;

    this.show = function() {
      fill(255);
      noStroke();
      rect(this.x*scale, this.y*scale, this.width*size*scale, this.height*size*scale, this.borderradius);

      if (this.isClicked) {
        fill(200);
        noStroke();
        rect(this.x*scale, this.y*scale, this.width*size*scale, this.height*size*scale, this.borderradius);
      }
    }

    this.click = function() {
      if (this.isClicked == false && mouseX >= this.x*scale && mouseX <= (this.x+this.width*size)*scale && mouseY >= this.y*scale && mouseY <= (this.y+this.height*size)*scale) {
        this.isClicked = true;
        setTimeout(() => {
          this.isClicked = false;
          money++;
        }, 150);
      }
    }
  }
}

function drawButtons() {
  fill(255);
  noStroke();

  if (row1_buttons.length <= buttonAmount || row2_buttons.length <= buttonAmount) {
    for (let i=1; i<buttonAmount; i++) {
      const button1 = new Button(102*i, 150, 90, 120, 5);
      const button2 = new Button(102*i, 285, 90, 120, 5)

      if (row1_buttons.length <= buttonAmount)
        row1_buttons.push(button1);
      else if (row2_buttons.length <= buttonAmount)
        row2_buttons.push(button2);

    }
  } else {
    for (let j=0; j<row1_buttons.length; j++)
      row1_buttons[j].show();
    for (let k=0; k<row2_buttons.length; k++)
      row2_buttons[k].show();
  }
}

function mouseClicked() {

  for (let j=0; j<row1_buttons.length; j++)
    row1_buttons[j].click();
  for (let k=0; k<row2_buttons.length; k++)
    row2_buttons[k].click();

}