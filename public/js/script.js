
let typed = new Typed(".multi-headline",{
    strings:["Frontend Developer","Gammer","Graphic Designer","Freelancer","B-Loger"],
    typeSpeed:80,
    backSpeed:80,
    backdelay:1000,
    loop:true
})

// // const list = document.querySelectorAll(".list");
// // function activeLink(){
// // list.forEach((item) =>
// // item.classList.remove('active'));
// // this.classList.add('active');
// // }
// // list.forEach((item) =>
// // item.addEventListener('click', activeLink));


// toggle icon  
let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = () => {
    menubtn.classList.toggle("bi-x");
    navbar.classList.toggle('active');
}

// Active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
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
