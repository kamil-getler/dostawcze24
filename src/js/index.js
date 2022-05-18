import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const menuHamburger4 = document.getElementById('menu-icon-wrapper-4');

const activehamburger = document.getElementById('sidebar__active');
const activelokalizacja = document.getElementById('active__lokalizacja');
const activekontakt = document.getElementById('active__kontakt');
const actikontakt = document.getElementById('nav__kontakt');

// <------------------------->
menuHamburger4.addEventListener('click', () => {
    menuHamburger4.classList.toggle('open');
    activehamburger.classList.toggle('active')

}, false);
const activelok = document.getElementById('nav__active');

// <------------------------->
activelokalizacja.addEventListener('click', () => {

    actikontakt.classList.add('active__loka')
    activelok.classList.toggle('active__loka')
}, false);



// <------------------------->
activekontakt.addEventListener('click', () => {

    activelok.classList.add('active__loka')
    actikontakt.classList.toggle('active__loka')
}, false);