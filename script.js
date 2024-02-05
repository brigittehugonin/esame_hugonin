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




const anim = () => {
  const vwidth = window.innerWidth; // wiewport width
  const message1 = document.getElementById("message1") //
  




  /* stagger example */
  // see docs at https://gsap.com/docs/v3/Plugins/ScrollTrigger/
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#headline",
      pin: true, // pin the trigger element while active
      start: "top 100px", // 1st param reference to trigger, 2nd param is a reference to the viewport
      scrub: true, // link animation to mouse scroll
      markers: true, // show debug markers
      onEnter: () => { // callback when trigger enters
        console.log("enter")
      },
      onLeave: () => { // callback when trigger leaves
        console.log("leave")
      }
    }
  });
  tl2.from(message1, 1, {x: -vwidth})
  tl2.from(message1, 1, {scale: 1.3, delay: 0.3})
  
  message1.addEventListener("click", () =>{
    //gsap.to(message1, 1, {x: vwidth})
    gsap.set(message1, {x: 100})
  })
}




// fiorellino
let nav = document.querySelector('.nav')

let tween = gsap.to(".flair", {
  duration: 2,
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360,
  ease: "none",
  paused: true
});

// click handlers for controlling the tween instance
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();


// testo cambia colore
gsap.to("#headline h1", { "color": "#fcff51", delay: 1, duration: 1, repeatDelay: 0.5, yoyo: true, repeat: -1 });


document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
    readMoreBtn.addEventListener('click', toggleReadMore)
})

document.addEventListener("DOMContentLoaded", anim)