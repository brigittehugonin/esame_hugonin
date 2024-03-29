const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')
const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}



let readMoreBtn = document.getElementById('readMoreBtn');


function toggleReadMore() {
  if(textInfo.classList.contains('open')) {
    textInfo.classList.remove('open');
    readMoreBtn.textContent = 'Leggi di più';
  } else {
    textInfo.classList.add('open');
    readMoreBtn.textContent = 'Leggi di meno';
  }
}


//Gioca con il fiorellino
const anim = () => {
  const vwidth = window.innerWidth; // save window width in viewport
  const message1 = document.getElementById("message1")

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#headline",
      pin: true, // pin the trigger element while active
      start: "top 100px", // when top of the trigger is 100px from top viewport
      scrub: true, // link animation to mouse scroll
      markers: true,
      onEnter: () => { // callback when trigger enters
        console.log("enter")
      },
      onLeave: () => {
        console.log("leave")
      }
    }
  });

  tl2.from(message1, 1, { x: -vwidth })
  tl2.from(message1, 1, { 
    scale: 1.2,
    delay: 0.1, 
    duration: 0.2, 
    repeatDelay: 0.2, 
    yoyo: true, 
    repeat: -1 })
}


// testo cambia colore
gsap.to("#headline h1", { 
  "color": "#fcff51", 
  delay: 1, 
  duration: 1, 
  repeatDelay: 0.5, 
  yoyo: true, 
  repeat: -1 
});


// fiorellino
let nav = document.querySelector('.nav')

let tween = gsap.to(".flair", {
  duration: 2,
  x: () => nav.offsetWidth, // animate by the width of the nav
  xPercent: -100, //spostato del 100% verso sinistra
  rotation: 360,
  ease: "none",
  paused: true
});

// bottoni che controllano il tween
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();



document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
    readMoreBtn.addEventListener('click', toggleReadMore)
})

document.addEventListener("DOMContentLoaded", anim)