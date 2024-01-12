function setup() {
    console.log('setup')
}

document.addEventListener('DOMContentLoaded', setup)

"use strict";

const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
})




//read more
var nuovoTesto = document.querySelector('#DueColonne');
var buttonMore = document.querySelector('#ButtonMore');



function toggleReadMore() {
    nuovoTesto.style.display = readMoreOpen ? 'none' : 'block';
    if (nuovoTesto.style.display === 'none' || nuovoTesto.style.display === '') {
        nuovoTesto.style.display = 'block';
        buttonMore.textContent = 'Read less';
    } else {
        nuovoTesto.style.display = 'none';
        buttonMore.textContent = 'Read more';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    buttonMore.addEventListener('click', toggleReadMore)
})