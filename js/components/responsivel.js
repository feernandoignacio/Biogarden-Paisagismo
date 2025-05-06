/* Responsividade NAV */
function adjustIntroHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', adjustIntroHeight);
window.addEventListener('load', adjustIntroHeight);

