// Display Mobile Menu
const mobileMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

function displayMobileMenu() {
  mobileMenu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

mobileMenu.addEventListener('click', displayMobileMenu)


// Close Mobile Menu
function hideMobileMenu() {
  if (window.getComputedStyle(menuLinks).display !== 'flex') {
    mobileMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
  }
}

const links = document.querySelectorAll('.navbar a')
for (let link of links) {
  link.addEventListener('click', hideMobileMenu)
}


// Smooth Scroll
function highlightMenu() {
  const highlightClass = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const servicesMenu = document.querySelector('#services-page')
  const navbarHeight = 2 * Number(window.getComputedStyle(document.querySelector('.navbar')).height.match('[0-9]*')[0])
  let aboutSectionY = document.querySelector('#about').offsetTop - navbarHeight
  let servicesSectionY = document.querySelector('#services').offsetTop - navbarHeight
  let signUpSectionY = document.querySelector('#sign-up').offsetTop - navbarHeight
  let scrollPos = window.scrollY
  let notMobileCheck = window.getComputedStyle(menuLinks).display === 'flex'
  if (notMobileCheck && scrollPos < aboutSectionY) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (notMobileCheck && scrollPos < servicesSectionY) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  } else if (notMobileCheck && scrollPos < signUpSectionY) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }
  if ((highlightClass && !notMobileCheck && scrollPos < aboutSectionY) || highlightClass) {
    highlightClass.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)
