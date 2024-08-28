// variables
let menu = document.querySelector('.header__menu--low__title');
let hiddenMenu = document.querySelector('.header__menu--low__items');
let main = document.querySelector('.magazine');
let articles = document.querySelector('.article');

// event listeners
menu.addEventListener('click', function(){
    hiddenMenu.classList.toggle('hidden');
    menu.classList.toggle('here');
})
main.addEventListener('click', function(){
    hiddenMenu.classList.add('hidden');
    menu.classList.remove('here');
})