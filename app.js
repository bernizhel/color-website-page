const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
function displayMobileMenu() {
  mobileMenu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

mobileMenu.addEventListener('click', displayMobileMenu)