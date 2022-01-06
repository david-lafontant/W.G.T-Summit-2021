// menu script
const menu = document.querySelector('.navigation');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const menuLinks = document.querySelectorAll('.menu-link');

open.addEventListener('click', showNavbar);


function showNavbar() {
  menu.style.display = 'flex';
  menu.style.top = '0';
}


