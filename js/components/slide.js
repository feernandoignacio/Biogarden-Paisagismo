const gallery = document.querySelector(".gallery");
const slides = document.querySelectorAll(".item");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let startX = 0;
let isDragging = false;

slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlidePosition() {
  slides.forEach(slide => slide.classList.remove("current-item"));
  slides[currentIndex].classList.add("current-item");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");

  
  const offset = -currentIndex * 100;
  gallery.style.transform = `translateX(${offset}%)`; 
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
}

btnLeft.addEventListener("click", (e) => {
  e.preventDefault(); 
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

btnRight.addEventListener("click", (e) => {
  e.preventDefault(); 
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});


gallery.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  e.preventDefault();
});

gallery.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSlidePosition();
    isDragging = false;
  }
});

gallery.addEventListener("touchend", () => {
  isDragging = false;
});


let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateSlidePosition();
  }, 200);
});
