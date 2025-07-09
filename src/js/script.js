// Navbar fixed
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
});

window.addEventListener('scroll', () => {
    const navLinkEls = document.querySelectorAll('.nav-link');
    const sectionEls = document.querySelectorAll('section');
    let currentSection = 'home';

    sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 60) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach((navLinkEl) => {
        navLinkEl.classList.remove('active');
        if (navLinkEl.href.includes(currentSection)) {
            navLinkEl.classList.add('active');
        }
    });
});
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});