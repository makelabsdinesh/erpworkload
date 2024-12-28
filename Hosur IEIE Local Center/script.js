let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(nextSlide, 3500);

