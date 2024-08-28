// variables
let menu = document.querySelector('.header__menu--low__title');
let hiddenMenu = document.querySelector('.header__menu--low__items');
let main = document.querySelector('.magazine');
let articles = document.querySelector('.article');
let bar = document.querySelector('.header__menu--upp__mobile-bars');
let cancel = document.querySelector('.header__hamburger--cancel');
let hamburgerMenu = document.querySelector('.header__hamburger');

// event listeners
menu.addEventListener('click', function(){
    hiddenMenu.classList.toggle('hidden');
    menu.classList.toggle('here');
})
articles.addEventListener('click', function(){
    hiddenMenu.classList.add('hidden');
    menu.classList.remove('here');
    hamburgerMenu.classList.add('push');
})
bar.addEventListener('click', function(){
    hamburgerMenu.classList.remove('push');
})
cancel.addEventListener('click', function(){
    hamburgerMenu.classList.add('push');
})