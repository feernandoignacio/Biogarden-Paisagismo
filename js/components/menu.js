window.addEventListener("scroll", function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 200)
})


document.addEventListener('DOMContentLoaded', function (){
    const linksMenu = document.querySelectorAll('.link-menu');

    linksMenu.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);

          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav.menu-desktop').offsetHeight,
              behavior: 'smooth',

            });
        }
      });
    });
  });


let btMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btMenu.addEventListener('click',()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})