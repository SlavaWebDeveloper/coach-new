// Импортируйте наш пользовательский CSS
import '../scss/styles.scss'
import "bootstrap-icons/font/bootstrap-icons.scss";

// Импортируйте только то, что нам нужно

// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import Modal from 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
import Tooltip from 'bootstrap/js/dist/tooltip';

import '../js/custom/sliders.js';
import '../js/custom/arrow-up.js';
import '../js/custom/blurHeader.js';
import '../js/custom/scrollRevealAnimation.js';
import '../js/custom/scrollTimeline.js';

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl);
});


document.addEventListener("DOMContentLoaded", function () {
  // Анимация для элементов с классом .animated-line и .about-line
  ['.animated-line', '.about-line'].forEach(selector => {
    const line = document.querySelector(selector);
    if (line) {
      line.classList.add('animate');
    }
  });

  // Инициализация модального окна при скролле
  const modalElement = document.getElementById('subscribeModal');
  const publicationsSection = document.getElementById('publications');

  let isModalShown = false;

  if (modalElement && publicationsSection) {
    const modal = new Modal(modalElement);
    window.addEventListener('scroll', function () {
      const sectionTop = publicationsSection.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > sectionTop && !isModalShown) {
        setTimeout(() => {
          modal.show();
          isModalShown = true; 
        }, 2600)
      }
    });
  }
});