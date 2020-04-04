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


// Counters
const countersSection = document.querySelector('.counters');
let counterOn = true;

const counters = {
  delivered: 518,
  webdesign: 177,
  hours: 2465,
  coffee: 1893,
}

const countersDisplay = {
  delivered: document.querySelector('[data-counter="delivered"]'),
  webdesign: document.querySelector('[data-counter="webdesign"]'),
  hours: document.querySelector('[data-counter="hours"]'),
  coffee: document.querySelector('[data-counter="coffee"]'),
}

function setCounter(displayItem, maxValue) {
  let counter = 0;
  const id = setInterval(() => {
    if (maxValue > 1000) {
      counter > maxValue * 0.8 ? counter++ : counter += 10;
    } else {
      counter++
    };

    displayItem.textContent = counter;
    if (counter === maxValue) {
      clearInterval(id);
    }
  }, 8);
}

function startCounters() {
  console.log('startcounters');
  setCounter(countersDisplay.delivered, counters.delivered);
  setCounter(countersDisplay.webdesign, counters.webdesign);
  setCounter(countersDisplay.hours, counters.hours);
  setCounter(countersDisplay.coffee, counters.coffee);
  counterOn = false;
}

window.addEventListener('scroll', () => {
  if (window.scrollY > countersSection.offsetTop - window.innerHeight && counterOn) {
    startCounters();
  }
});