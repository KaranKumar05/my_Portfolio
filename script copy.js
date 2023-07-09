
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Text animation  
let typed = new Typed(".multi-headline", {
    strings: ["Frontend Developer", "Gammer", "Graphic Designer", "Freelancer", "B-Loger"],
    typeSpeed: 80,
    backSpeed: 80,
    backdelay: 1000,
    loop: true
})


// toggle icon  
let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle("bi-x");
    navbar.classList.toggle('active');
}

// Active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon || active link when scroll or click 
    menubtn.classList.remove("bi-x");
    navbar.classList.remove('active');
};

// scroll animation 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3:nth-child(3), .about-content, .portfolio-box, .contact form', { origin: 'right' });
