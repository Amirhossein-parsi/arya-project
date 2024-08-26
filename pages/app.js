
// const prevScroll = window.scrollBy;

// window.onscroll = function(){
//     var currentScroll = window.scrollBy;
//     if(prevScroll >currentScroll){
//         document.querySelector('.header__menu--low').computedStyleMap.top = "0";
//     } else {
//         document.querySelector('.header__menu--low').computedStyleMap.top = "-5rem";
//     }
//     prevScroll = currentScroll;
// }
let menu = document.querySelector('.header__menu--low__title');
let hiddenMenu = document.querySelector('.header__menu--low__items');
let main = document.querySelector('.magazine');
menu.addEventListener('click', function(){
    hiddenMenu.classList.toggle('hidden');
    menu.classList.toggle('here');
})
main.addEventListener('click', function(){
    hiddenMenu.classList.add('hidden');
    menu.classList.remove('here');
})