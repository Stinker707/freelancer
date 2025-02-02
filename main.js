// const btn = document.querySelector('#close-btn');
// const menuMobi = document.querySelector('#menu-mobi');
// btn.onclick = () => {
//     btn.classList.toggle('header-mobi-close-btn--is-active');
//     menuMobi.classList.toggle('header-mobi__menu--is-visible');
// }

const navMenu = document.querySelector('#header-menu');
const btn = document.querySelector('#close-btn');

btn.onclick = () => {
    navMenu.classList.toggle('header__menu--is-visible');
    btn.classList.toggle('header-close-btn--is-active');
}