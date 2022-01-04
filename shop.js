const nav = document.querySelector('.nav')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.shop-nav-link')

console.log(nav)
console.log(menu)

// toggle hamburger
menu.addEventListener('click', function () {
  nav.classList.toggle('show-nav')
})

// hide navbar on click
links.forEach(l =>
  l.addEventListener('click', () => {
    nav.classList.toggle('show-nav')
  })
)
