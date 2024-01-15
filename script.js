function setup() {
    console.log('setup')
}

document.addEventListener('DOMContentLoaded', setup)

"use strict";

//menu
const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

/*document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
})*/



// Read More
let testoNascosto = document.querySelector('#TestoNascosto');
let buttonMore = document.querySelector('#ButtonMore');

function toggleReadMore() {
    // Verifica se lo stile dell'elemento è 'none' o vuoto
    let isHidden = testoNascosto.style.display === 'none' || testoNascosto.style.display === '';

    // Aggiorna la visibilità dell'elemento
    testoNascosto.style.display = isHidden ? 'block' : 'none';

    // Aggiorna il testo del pulsante in base allo stato attuale
    if (isHidden) {
        buttonMore.textContent = 'Read less';
    } else {
        buttonMore.textContent = 'Read more';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
    buttonMore.addEventListener('click', toggleReadMore)
})