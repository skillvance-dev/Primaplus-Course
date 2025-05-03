const slider = document.getElementById('mentorSlider');
let scrollAmount = 0;

function autoScrollSlider() {
  if (slider.scrollWidth - slider.clientWidth === scrollAmount) {
    scrollAmount = 0;
  } else {
    scrollAmount += 310; // Ukuran 1 slide + gap
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScrollSlider, 3000);
