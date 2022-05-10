import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const menuHamburger4 = document.getElementById('menu-icon-wrapper-4');

const activehamburger = document.getElementById('sidebar__active');
const activelokalizacja = document.getElementById('active__lokalizacja');

menuHamburger4.addEventListener('click', () => {
    menuHamburger4.classList.toggle('open');
    activehamburger.classList.toggle('active')

}, false);
const activelok = document.getElementById('nav__active');
activelokalizacja.addEventListener('click', () => {

    activelok.classList.toggle('active__loka')
}, false);