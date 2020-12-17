let opcatiy = 1;

function hideSliders() {
  const sliders = document.getElementById("sliders");
  const btnImage = document.getElementById("hide-image");
  const btnTitle = document.getElementById("hide-title");

  if (sliders.style.display === "block") {
    sliders.style.display = btnTitle.style.display = "none";
    btnImage.src = "images/hide.png";
    btnImage.style.opacity = "0.3";
  } else {
    sliders.style.display = btnTitle.style.display = "block";
    btnImage.src = "images/show.png";
    btnImage.style.opacity = "1";
  }
}

function fadeOut() {
  return "Under developement";
}

function fadeIn() {
  return "Under developement";
}
