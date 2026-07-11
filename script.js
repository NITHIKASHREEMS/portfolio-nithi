// Initial Animations & Preloader
document.addEventListener('DOMContentLoaded', () => {

    const introScreen = document.getElementById('intro-screen');
    const introWord = document.getElementById('intro-word');
    const introStackedContainer = document.getElementById('intro-stacked-container');
    const words = [
        "Software Developer",
        "AI Researcher",
        "Designer",
        "Problem Solver",
        "Analytical Thinker",
        "ML Enthusiast"
    ];
    
    let wordIndex = 0;
    
    // Disable scrolling during intro
    document.body.style.overflow = 'hidden';

    function showNextWord() {
        if (wordIndex < words.length) {
            introWord.textContent = words[wordIndex];
            introWord.className = 'intro-word visible';
            
            setTimeout(() => {
                introWord.className = 'intro-word exit';
                setTimeout(() => {
                    wordIndex++;
                    showNextWord();
                }, 150); // Delay before next word transition starts
            }, 550); // Display time for each word
        } else {
            // All words shown individually: reveal them stacked vertically
            introWord.style.display = 'none';
            introStackedContainer.classList.add('active');
            
            const stackedWords = document.querySelectorAll('.intro-stacked-word');
            stackedWords.forEach((word, idx) => {
                // Stagger reveal of stacked words
                setTimeout(() => {
                    word.classList.add('revealed');
                    
                    // Highlight the last item dynamically as a finish effect
                    if (idx === stackedWords.length - 1) {
                        word.classList.add('highlight');
                    }
                }, idx * 250);
            });

            // Dismiss preloader after all stacked words are revealed
            const totalDelay = (stackedWords.length * 250) + 1200;
            setTimeout(() => {
                introScreen.classList.add('fade-out');
                document.body.style.overflow = ''; // Restore body scrolling
                
                // Trigger main page entry animations
                setTimeout(() => {
                    const heroContent = document.querySelector('.hero-content');
                    const heroImage = document.querySelector('.hero-image');
                    if (heroContent) heroContent.classList.add('active');
                    if (heroImage) heroImage.classList.add('active');
                }, 300);
            }, totalDelay);
        }
    }
    
    // Start intro sequence after a brief pause
    setTimeout(showNextWord, 200);

    // Ambient Interactive Background Canvas Particle Network
    const canvas = document.getElementById('ambient-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };
        
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.8;
                this.vx = (Math.random() - 0.5) * 0.25;
                this.vy = (Math.random() - 0.5) * 0.25;
                // Vibrant purple or cyan trail colors
                this.color = Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4';
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Wrap boundaries
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
                
                // Cursor interactive warping effect
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = dx / distance;
                        let directionY = dy / distance;
                        this.x -= directionX * force * 1.6;
                        this.y -= directionY * force * 1.6;
                    }
                }
            }
        }
        
        function init() {
            particles = [];
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 90);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }
        init();
        
        function connect() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 110) {
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - distance / 110)})`;
                        ctx.lineWidth = 0.65;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            requestAnimationFrame(animate);
        }
        animate();
        
        window.addEventListener('resize', init);
    }

    // 3D Parallax Tilt Effect for Profile matrix and Experience cards (3 degrees)
    const tiltCards = document.querySelectorAll('.tilt-target-3d');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Subtle 3D parallax tilt limited to 3 degrees max
            const tiltX = -(y - centerY) / centerY * 3;
            const tiltY = (x - centerX) / centerX * 3;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Experience Card Spotlights / Projects spotlight (cursor coordinates gradient glow)
    const spotlightCards = document.querySelectorAll('.spotlight-card, .project-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // About Section Metric Fast numerical count-up on scroll
    const countTargets = document.querySelectorAll('.count-target');
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetEl = entry.target;
                const finalVal = parseInt(targetEl.getAttribute('data-target'));
                let currentVal = 0;
                const duration = 1000; // 1s
                const increment = finalVal / (duration / 16); // 60fps increments
                
                let counter = setInterval(() => {
                    currentVal += increment;
                    if (currentVal >= finalVal) {
                        targetEl.textContent = finalVal;
                        targetEl.style.color = '#a855f7'; // Shift dynamically into accent color
                        targetEl.style.transition = 'color 0.5s ease';
                        clearInterval(counter);
                    } else {
                        targetEl.textContent = Math.floor(currentVal);
                    }
                }, 16);
                
                countObserver.unobserve(targetEl);
            }
        });
    }, { threshold: 0.1 });
    
    countTargets.forEach(target => countObserver.observe(target));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Intersection Observer for Standard Scroll Animations
    const observerOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements, excluding grids that use staggered observer reveals
    const elementsToAnimate = Array.from(document.querySelectorAll('.scroll-reveal, .fade-in-left, .fade-in-right'))
        .filter(el => !el.closest('.experience-list') && !el.closest('.projects-grid') && !el.closest('.cert-grid'));
    
    elementsToAnimate.forEach(el => observer.observe(el));

    // Staggered cascade scroll reveals for Experience, Projects, and Certifications cards
    const gridContainers = document.querySelectorAll('.experience-list, .projects-grid, .cert-grid');
    
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 100; // Default projects / certs stagger
                if (entry.target.classList.contains('experience-list')) {
                    delay = 150; // Stagger delay for experience cards
                }
                
                const cards = entry.target.querySelectorAll('.experience-card, .project-card, .cert-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, index * delay);
                });
                
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });
    
    gridContainers.forEach(container => gridObserver.observe(container));

    // Interactive Skills & Expertise Logic
    const skillItems = document.querySelectorAll('.skill-item-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.skill-bar-fill');
                const level = entry.target.getAttribute('data-level');
                if (fill) {
                    fill.style.width = `${level}%`;
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    skillItems.forEach(item => {
        skillObserver.observe(item);

        // Mobile touch toggle for skill percentage badge
        item.addEventListener('touchstart', (e) => {
            const isTouched = item.classList.contains('touched');
            skillItems.forEach(si => si.classList.remove('touched'));
            if (!isTouched) {
                item.classList.add('touched');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.skill-item-bar')) {
            skillItems.forEach(si => si.classList.remove('touched'));
        }
    });

    // Retro-Modern Timeline Film Strip Scroll deck effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function updateTimelineFocus() {
        const viewportCenter = window.innerHeight / 2;
        let closestItem = null;
        let closestDistance = Infinity;

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + (rect.height / 2);
            const distance = Math.abs(viewportCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
            }
        });

        timelineItems.forEach(item => {
            if (item === closestItem) {
                item.classList.add('focused');
            } else {
                item.classList.remove('focused');
            }
        });
    }

    if (timelineItems.length > 0) {
        window.addEventListener('scroll', updateTimelineFocus);
        window.addEventListener('resize', updateTimelineFocus);
        setTimeout(updateTimelineFocus, 100);
    }

    console.log("Portfolio Initialized v1.4 - Ambient Animations and Spotlight Active");
});
