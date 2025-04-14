/* ========================== typing animation ========================== */

var typed = new Typed(".typing",{
    strings :["","Web Designer","Web Developer","Python Developer","You Tuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const a  = document.getElementsByClassName('nav-toggler');
const menu = document.getElementsByClassName('aside');

a[0].addEventListener('click',()=>{
    console.log("welcome")
    menu[0].classList.toggle('show-menu');
});

window.addEventListener('scroll',()=>{
    menu[0].classList.remove('show-menu');
});

