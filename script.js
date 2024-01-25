const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')
const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}



let readMoreBtn = document.getElementById('readMoreBtn');
let textInfo = document.getElementById('textInfo');

function toggleReadMore() {
    let isExpanded = textInfo.classList.contains('show');
    readMoreBtn.textContent = isExpanded ? 'Leggi di più' : 'Leggi di meno';
}


document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
    readMoreBtn.addEventListener('click', toggleReadMore)
})