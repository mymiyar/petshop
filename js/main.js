$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: true
  });
});

const btnBurger = document.querySelector('.header-menu__burger'),
      mobileMenu = document.querySelector('.header-mobile');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('header-menu__burger--active');
  mobileMenu.classList.toggle('open-flex');
});