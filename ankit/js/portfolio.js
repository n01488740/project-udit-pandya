function populateProject1Slider(params) {}

function populateProject2Slider(params) {}

function populateSlider(params) {}

const totalSlides = 4;
let slider1Index = 0;
let slider2Index = 0;

function moveSlider1(by) {
  slider1Index += by;

  if (slider1Index < 0) {
    slider1Index = 0;
  }

  if (slider1Index >= totalSlides) {
    slider1Index = totalSlides - 1;
  }

  moveSlider("featured_1_slider", "slider_1_play", slider1Index);
}

function moveSlider2(by) {
  slider2Index += by;

  if (slider2Index < 0) {
    slider2Index = 0;
  }

  if (slider2Index >= totalSlides) {
    slider2Index = totalSlides - 1;
  }

  moveSlider("featured_2_slider", "slider_2_play", slider2Index, by);
}

function moveSlider(sliderName, playButtonName, toIndex) {
  var slides = document.querySelectorAll(`#${sliderName} img`);

  slides.forEach((item) => {
    item.style.display = "none";
  });

  slides[toIndex].style.display = "block";

  if (toIndex == 0) {
    document.getElementById(`${playButtonName}`).style.display = "block";
  } else {
    document.getElementById(`${playButtonName}`).style.display = "none";
  }

  //   var dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
}

moveSlider1(0);
moveSlider2(0);
closeMenu()