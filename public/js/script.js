// Navbar drop down 
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    let navLinks = document.querySelector(".nav-links");
    let links = document.querySelectorAll(".nav-links li");
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
// auto close dropdown while click 
let links = document.querySelectorAll('.nav-links li');
links.forEach(link => {
    link.addEventListener('click', () => {
        let navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("open");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
        let hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("toggle");


    });
});

window.onscroll = () => {
    // Active link 
    let sections = document.querySelectorAll('section');
    let navLinksActive = document.querySelectorAll('.nav-links li a');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinksActive.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
// Text animation  
let typed = new Typed(".multi-headline", {
    strings: ["Frontend Developer", "Gammer", "Graphic Designer", "Freelancer", "B-Loger"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1500,
    loop: true
})
// scroll animation 
ScrollReveal({
    reset: true,
    // distance: '80px',
    duration: 2000,
    delay: 100
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3:nth-child(3), .about-content, .portfolio-box, .contact form', { origin: 'right' });
