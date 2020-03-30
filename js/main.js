const burgerBtn = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

function toggleMenu() {
  burgerBtn.classList.toggle('active');
  menuList.classList.toggle('active');
  document.body.classList.toggle('scroll-lock');
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
  } else burgerBtn.setAttribute('aria-expanded', 'false');
}

burgerBtn.addEventListener('click', toggleMenu);
