let slider = document.getElementById("mentor-slider");
let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  index++;
  if (index >= slides.length) index = 0;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 3000);
