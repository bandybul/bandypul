const toggleBtn = document.querySelector('.nabvar_toogleBtn');
const menu = document.querySelector('.nabvar_menu');
const icons = document.querySelector('.nabvar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');

});