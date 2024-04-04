const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link')


closeButton.addEventListener ("click", () => {
    nav.classList.remove('navigation-open')
})

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
})

navLink.forEach(function(element) {
    element.addEventListener("click", () => {
        nav.classList.remove('navigation-open')
    } )
});