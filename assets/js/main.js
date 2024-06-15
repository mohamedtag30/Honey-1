const header = document.querySelector('header');
window.addEventListener("scroll", function () {
    header.classList.toggle('sticky', window.scrollY > 80);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // bx-x
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x'); // bx-x
    navlist.classList.remove('open')
};

const sr = ScrollReveal = ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home_text', { delay: 200 });
sr.reveal ('.home_img',  { delay: 400 });
sr.reveal ('.container', { delay: 600 });
sr.reveal ('.about_img', { delay: 800 });
sr.reveal ('.about_text',{ delay: 1000});
