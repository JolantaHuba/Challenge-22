"use strict"


// Menu
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.menu__burger-btn');
const menuElements = document.querySelectorAll('.menu__burger-btn, .menu__close-btn, .menu__link');
const menuList = document.querySelector('.menu__list');

function toggleMenu() {
  menuList.classList.toggle('active');
  if (menuList.classList.contains('active')) {
    burgerBtn.setAttribute('aria-expanded', 'true');
  } else burgerBtn.setAttribute('aria-expanded', 'false');
}

menuElements.forEach(element => element.addEventListener('click', toggleMenu));

//Menu shadow on scroll
window.addEventListener('scroll', function () {
  window.scrollY > 100 ?
    menu.classList.add('scrolled') :
    menu.classList.remove('scrolled');
});

// ScrollTo elements

const scrollBtns = document.querySelectorAll('[data-scroll]');

function scrollTo() {
  const scrollTo = document.querySelector(`.${this.dataset.scroll}`).offsetTop;

  window.scroll({
    top: scrollTo - document.querySelector('.menu').offsetHeight,
    left: 0,
    behavior: 'smooth'
  });
}

scrollBtns.forEach(btn => btn.addEventListener('click', scrollTo))

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


// Quotes

const clientsImgs = document.querySelectorAll('.clients__image');

function changeQuote() {
  const author = this.dataset.author;
  const activeElements = document.querySelectorAll('.clients .active');
  activeElements.forEach(element => element.classList.remove('active'));

  const newElements = document.querySelectorAll(`[data-author="${author}"]`);
  newElements.forEach(element => element.classList.add('active'));
}

clientsImgs.forEach(clientImg => {
  clientImg.addEventListener('click', changeQuote);
});