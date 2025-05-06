window.addEventListener("scroll", function(){
  let header = document.querySelector('.header')
  header.classList.toggle('scroll',window.scrollY > 0)
})


/*Menu responsivel*/
document.addEventListener('DOMContentLoaded', () => {
  const abrirMenu = document.querySelector('.abrir-menu');
  const menuMobile = document.getElementById('menu-mobile');
  const btnFechar = document.querySelector('.btn-fechar');
  const overlayMenu = document.querySelector('.overlay-menu');
  const menuLinks = document.querySelectorAll('.menu-mobile .link-nav');

  function toggleMenu() {
    menuMobile.classList.toggle('aberto');
    overlayMenu.classList.toggle('aberto');
  }

  abrirMenu.addEventListener('click', toggleMenu);
  btnFechar.addEventListener('click', toggleMenu);
  overlayMenu.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('aberto');
      overlayMenu.classList.remove('aberto');
    });
  });
});