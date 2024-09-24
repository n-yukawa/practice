const responsive_menu_btn = 
document.querySelector('.responsive-btn');
responsive_menu_btn.addEventListener('click', menuToggle);

function menuToggle() {
    const header_menu_detail = document.querySelector('.header-nav');
    header_menu_detail.classList.toggle('menu-active');
}