const products = document.querySelector('#products-link')
const productsNav =  document.querySelector('.products-nav')

products.addEventListener('click', openBox)

function openBox(){
    productsNav.classList.toggle('open')
}

const hamburguer = document.querySelector('.hamburguer')
const navigation = document.querySelector('.navigation')

hamburguer.addEventListener('click', openNavigation)

function openNavigation(){
    navigation.classList.toggle('mobile-open')
}