import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const menuHamburger4 = document.getElementById('menu-icon-wrapper-4');

menuHamburger4.addEventListener('click', () => {
    menuHamburger4.classList.toggle('open');
}, false);