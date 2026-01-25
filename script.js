// Initial Animations
document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements
    const elementsToAnimate = document.querySelectorAll('.scroll-reveal, .fade-in-left, .fade-in-right');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Initialize specific animations immediately for Hero
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('active');
        document.querySelector('.hero-image').classList.add('active');
    }, 100);

    console.log("Portfolio Initialized v1.0");
});
