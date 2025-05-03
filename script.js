let slider = document.getElementById("mentor-slider");
let slides = document.querySelectorAll(".slide");
let index = 0;
let totalSlides = slides.length;

// Fungsi menghitung jumlah slide yang terlihat
function getVisibleSlides() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function autoSlide() {
  const visible = getVisibleSlides();
  index = (index + 1) % (totalSlides - visible + 1); // agar tidak out of range
  const offset = index * (100 / visible);
  slider.style.transform = `translateX(-${offset}%)`;
}

// Restart ketika resize agar index valid
window.addEventListener('resize', () => {
  index = 0;
  slider.style.transform = `translateX(0)`;
});

setInterval(autoSlide, 3000);
