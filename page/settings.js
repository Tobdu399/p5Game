// TODO: hide/show sliders when the eye is pressed
function hideSliders() {
  const sliders = document.getElementById("sliders");
  const btnImage = document.getElementById("hide-image");
  const btnTitle = document.getElementById("hide-title");

  if (sliders.style.display === "block") {
    sliders.style.display = btnTitle.style.display = "none";
    btnImage.src = "Images/hide.png";
    btnImage.style.opacity = "0.3";
  } else {
    sliders.style.display = btnTitle.style.display = "block";
    btnImage.src = "Images/show.png";
    btnImage.style.opacity = "1";
  }
}