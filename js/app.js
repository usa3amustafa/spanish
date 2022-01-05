const nav = document.querySelector('nav')
const logo = document.querySelector('.logo')
const menu = document.querySelector('#menu')
const link = document.querySelectorAll('.link')
const links = document.querySelector('.links')
const header = document.querySelector('.header-section')

// stickyNav
const stickyNav = function (entries) {
  const [entry] = entries
  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
    logo.style.width = '4rem'
  } else nav.classList.remove('sticky')
}

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
})

headerobserver.observe(header)

// toggle hamburger
menu.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

// hide navbar on click
link.forEach(l =>
  l.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
)
