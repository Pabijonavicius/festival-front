let hamburger = document.querySelector('#hamburger');
let navElements = document.getElementsByClassName('navbar__items__item');

hamburger.addEventListener('click', () => {
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.toggle('inline-block');
  }
});
