const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach((section) => {
    observer.observe(section);
});


const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetSection = document.querySelector(this.getAttribute('href'));
       
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    
    navList.classList.toggle('show');
});

const galleryItems = document.querySelectorAll('.gallery-item.tilt');

galleryItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const x = (offsetX / target.clientWidth) - 0.5;
        const y = (offsetY / target.clientHeight) - 0.5;

        item.style.transform = `rotateY(${x * 30}deg) rotateX(${y * -30}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
