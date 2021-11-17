
// finding menu items
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

// display global menu

const mobileMenu = () => {
   menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

// adding event listener
menu.addEventListener('click', mobileMenu)