const navMenu = document.querySelector('#header-menu');
const btn = document.querySelector('#close-btn');

btn.onclick = () => {
    navMenu.classList.toggle('header__menu--is-visible');
    btn.classList.toggle('header-close-btn--is-active');
}
