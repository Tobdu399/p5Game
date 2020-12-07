let row1_buttons = [];
let row2_buttons = [];

class Button {
  constructor(x, y, width, height, borderradius) {

    this.show = function() {
      fill(255);
      noStroke();
      rect(x*scale, y*scale, width*size*scale, height*size*scale, borderradius);
    }

  }
}

function drawButtons() {
  fill(255);
  noStroke();

  if (row1_buttons.length <= buttonAmount || row2_buttons.length <= buttonAmount) {
    for (let i=1; i<buttonAmount; i++) {
      const button1 = new Button(102*i, 100, 90, 120, 5);
      const button2 = new Button(102*i, 235, 90, 120, 5)

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