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

// Gallery

const categoryBtns = document.querySelectorAll('.portfolio__control');
const portfolioItems = document.querySelectorAll('.portfolio__item');

function filterItems() {
  const btnCategory = this.dataset.category;
  document.querySelector('.portfolio__control.active').classList.remove('active');
  this.classList.add('active');

  portfolioItems.forEach((item) => {
    item.classList.remove('hidden');
    if (btnCategory === 'all') {
      item.classList.remove('hidden');
    } else if (btnCategory !== item.dataset.category) {
      item.classList.add('hidden');
    }
  });
}

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', filterItems);
});