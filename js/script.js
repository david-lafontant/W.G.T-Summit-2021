// menu script
const menu = document.querySelector('.navigation');
const close = document.querySelector('.close');
const open = document.querySelector('.open');
const menuLinks = document.querySelectorAll('.menu-link');

function showNavbar() {
  menu.style.display = 'flex';
  menu.style.top = '0';
}

function hideNavbar() {
  menu.style.top = '-100%';
}


open.addEventListener('click', showNavbar);

close.addEventListener('click', hideNavbar);
menuLinks.forEach((item) => {
  item.addEventListener('click', hideNavbar);
});

