const galleryWrapper = document.querySelector(".gallery-wrapper");
const gallery = document.querySelector(".gallery");
const slides = document.querySelectorAll(".item");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let startX = 0;
let isDragging = false;

// Criação dos dots
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

  const offset = -currentIndex * (slides[0].offsetWidth + 20);
  gallery.style.transform = `translateX(${offset}px)`;
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
}

// Event listeners para os botões
if (btnLeft) {
  btnLeft.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });
}

if (btnRight) {
  btnRight.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });
}

// Event listeners para touch drag
galleryWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  gallery.classList.add('dragging');
});

galleryWrapper.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const moveX = e.touches[0].clientX;
  const diff = startX - moveX;

  // Sensibilidade do arrasto
  const sensitivity = 50;

  // Feedback visual durante o arrasto
  const dragOffset = -currentIndex * (slides[0].offsetWidth + 20) - diff;
  gallery.style.transform = `translateX(${dragOffset}px)`;
});

galleryWrapper.addEventListener("touchend", () => {
  if (!isDragging) return;
  isDragging = false;
  gallery.classList.remove('dragging');
  const moveX = event.changedTouches[0].clientX;
  const diff = startX - moveX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      currentIndex = (currentIndex + 1) % slides.length;
    } else {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
  }
  updateSlidePosition();
});

// Atualização na mudança de tamanho da tela
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateSlidePosition();
  }, 200);
});

// Inicializa a posição dos slides
updateSlidePosition();