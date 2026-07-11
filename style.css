/* Global Design Tokens */
:root {
    /* Colors */
    --bg-primary: #0a0a0a;
    --bg-secondary: #171717;
    --text-primary: #ffffff;
    --text-secondary: #a3a3a3;
    --accent-primary: #8b5cf6;
    /* Violet */
    --accent-secondary: #3b82f6;
    /* Blue */
    --accent-gradient: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));

    /* Glassmorphism */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    /* Typography */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Inter', sans-serif;

    /* Spacing */
    --spacing-container: 1200px;
}

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
}

ul {
    list-style: none;
}

h1,
h2,
h3,
h4 {
    font-family: var(--font-heading);
    font-weight: 700;
}

/* Utilities */
.container {
    max-width: var(--spacing-container);
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 5rem 0;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

.glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: var(--glass-shadow);
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), 
                box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), 
                border-color 0.4s ease;
    position: relative;
    overflow: hidden;
}

.glass-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
}

.gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: var(--accent-gradient);
    color: white;
    border: none;
}

.btn-secondary {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: white;
}

.btn-secondary:hover {
    background: var(--glass-bg);
}

/* Navbar */
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 1.5rem 0;
}

#navbar.scrolled {
    padding: 1rem 0;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--glass-border);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-secondary);
    font-weight: 500;
}

.nav-links a:hover {
    color: var(--text-primary);
}

.mobile-toggle {
    display: none;
    color: var(--text-primary);
}

/* Hero */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 80px;
}

.hero-bg-glow {
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: -1;
    border-radius: 50%;
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.greeting {
    display: block;
    color: var(--accent-primary);
    font-weight: 600;
    margin-bottom: 1rem;
}

.hero-title-large {
    font-size: 1.8rem;
}

.name {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, #a3a3a3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-name-large {
    font-size: 5rem;
    line-height: 1.05;
}

@media (max-width: 768px) {
    .hero-name-large {
        font-size: 3.5rem;
    }
}

.role {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-weight: 400;
    margin-bottom: 2rem;
}

.bio-text {
    max-width: 500px;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
}

.cta-group {
    display: flex;
    gap: 1rem;
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
}

.image-wrapper {
    width: 400px;
    height: 500px;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    position: relative;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.floating {
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }
}

.status-badge {
    position: absolute;
    bottom: 40px;
    left: -20px;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: var(--glass-shadow);
}

.status-dot {
    width: 10px;
    height: 10px;
    background: #22c55e;
    border-radius: 50%;
}

/* About Stats */
.about-text {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.stats-grid {
    display: flex;
    justify-content: center;
    gap: 5rem;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

/* Experience */
.experience-list {
    display: flex;
    flex-column: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.experience-list>div {
    display: flex;
    flex-direction: column;
}

.exp-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

.exp-role {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
}

.exp-company {
    color: var(--accent-secondary);
    font-weight: 500;
}

.exp-loc {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.exp-desc {
    color: var(--text-secondary);
}

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    display: flex;
    flex-direction: column;
    min-height: 250px;
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s ease, box-shadow 0.4s ease;
    will-change: transform, opacity;
}

.project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.project-desc {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1.5rem;
}

.project-link {
    color: var(--accent-secondary);
    font-weight: 600;
}

/* Skills */
.skill-category {
    margin-bottom: 2rem;
}

.skill-category:last-child {
    margin-bottom: 0;
}

.skill-head {
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.text-accent {
    color: var(--accent-primary);
}

.text-blue {
    color: var(--accent-secondary);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.skills-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    width: 100%;
}

@media (max-width: 768px) {
    .skills-grid-layout {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
}

.skill-item-bar {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0.4rem 0;
    width: 100%;
    position: relative;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.skill-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.5px;
}

.skill-percentage-badge {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-primary);
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.2);
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    opacity: 0;
    transform: scale(0.85);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-bar-track {
    height: 10px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.skill-bar-track:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(139, 92, 246, 0.2);
}

.skill-bar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 50px;
    transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Hover & Active / Touch states for showing the badge */
.skill-item-bar:hover .skill-percentage-badge,
.skill-bar-track:active ~ .skill-percentage-badge,
.skill-item-bar.touched .skill-percentage-badge,
.skill-percentage-badge.visible {
    opacity: 1;
    transform: scale(1);
    background: var(--accent-gradient);
    border-color: transparent;
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
}

/* Contact */
.contact-container {
    text-align: center;
    max-width: 600px;
}

.contact-text {
    color: var(--text-secondary);
    margin-bottom: 3rem;
    font-size: 1.1rem;
}

.contact-btn {
    font-size: 1.2rem;
    padding: 1rem 3rem;
    margin-bottom: 4rem;
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 4rem;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    color: var(--text-secondary);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-links a svg,
.social-links a i {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.social-links a:hover {
    color: white;
    background: rgba(139, 92, 246, 0.1);
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2);
}

.social-links a:hover svg,
.social-links a:hover i {
    transform: scale(1.15);
}

.footer {
    border-top: 1px solid var(--glass-border);
    padding-top: 2rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* GPU-Accelerated Smooth Flow Animations */
.scroll-reveal,
.fade-in-left,
.fade-in-right {
    opacity: 0;
    will-change: transform, opacity;
}

.scroll-reveal {
    transform: translate3d(0, 40px, 0) scale(0.98);
    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-in-left {
    transform: translate3d(-50px, 0, 0);
    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-in-right {
    transform: translate3d(50px, 0, 0);
    transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.active {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1) !important;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-content {
        order: 2;
    }

    .hero-image {
        order: 1;
        margin-bottom: 2rem;
    }

    .cta-group {
        justify-content: center;
    }

    .name {
        font-size: 3rem;
    }

    .image-wrapper {
        width: 300px;
        height: 380px;
    }

    .nav-links {
        display: none;
        /* Todo: Add Mobile Menu JS */
    }

    .mobile-toggle {
        display: block;
        cursor: pointer;
    }
}

/* Certifications Section */
.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.cert-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.4s ease, box-shadow 0.4s ease;
    will-change: transform;
}

.cert-card:hover {
    transform: translate3d(0, -6px, 0);
    border-color: transparent;
    background: linear-gradient(#0a0712, #0a0712) padding-box,
                linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)) border-box;
    box-shadow: 0 12px 35px rgba(139, 92, 246, 0.2);
}

.cert-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.cert-card:hover::before {
    opacity: 1;
}

.cert-icon-wrapper {
    margin-bottom: 1.5rem;
    display: inline-flex;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid var(--glass-border);
}

.cert-icon {
    width: 32px;
    height: 32px;
    color: var(--text-secondary);
    transition: color 0.15s ease, filter 0.15s ease;
}

.cert-issuer {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.cert-subtitle {
    display: block;
    font-size: 0.9rem;
    color: var(--accent-secondary);
    margin-bottom: 1rem;
    font-weight: 500;
}

.cert-list {
    margin-top: auto;
    padding-left: 1.2rem;
    list-style-type: disc;
}

.cert-list li {
    color: var(--text-secondary);
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
    transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
}

.cert-list li::marker {
    color: var(--accent-primary);
}

/* Achievements Section */
.achievements-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
}

.achievement-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
}

.achievement-card:hover {
    transform: translateX(10px);
    border-left-color: var(--accent-secondary);
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
}

.ach-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    transition: transform 0.3s ease;
}

.achievement-card:hover .ach-icon {
    transform: scale(1.1) rotate(5deg);
}

.ach-icon i {
    width: 24px;
    height: 24px;
}

/* Specific Icon Colors */
.ach-icon.win {
    color: #fbbf24;
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);
}

.ach-icon.paper {
    color: #3b82f6;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
}

.ach-icon.star {
    color: #f472b6;
    box-shadow: 0 0 15px rgba(244, 114, 182, 0.2);
}

.ach-icon.rocket {
    color: #ef4444;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.2);
}

.ach-icon.medal {
    color: #10b981;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
}

.ach-icon.leader {
    color: #8b5cf6;
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
}

.ach-icon.design {
    color: #ec4899;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.2);
}

.ach-icon.heart {
    color: #f9a8d4;
    box-shadow: 0 0 15px rgba(249, 168, 212, 0.2);
}

.ach-text h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
    color: var(--text-primary);
}

.ach-text p {
    color: var(--text-secondary);
    font-size: 1rem;
}

/* Responsive for new sections */
@media (max-width: 600px) {
    .achievement-card {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .achievement-card:hover {
        transform: translateY(-5px);
    }

    .cert-grid {
        grid-template-columns: 1fr;
    }
}

/* Intro Screen (Preloader) */
#intro-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1), transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

#intro-screen.fade-out {
    opacity: 0;
    transform: translateY(-100%);
    pointer-events: none;
}

.intro-content {
    text-align: center;
}

.intro-word-container {
    height: 6rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro-word {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 30%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
}

@media (max-width: 600px) {
    .intro-word {
        font-size: 2.2rem;
    }
}

.intro-word.visible {
    opacity: 1;
    transform: translateY(0);
}

.intro-word.exit {
    opacity: 0;
    transform: translateY(-40px);
}

/* Stacked Roles Preloader Styles */
.intro-stacked-container {
    display: none;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

.intro-stacked-container.active {
    display: flex;
}

.intro-stacked-word {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 40%, rgba(255, 255, 255, 0.3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 600px) {
    .intro-stacked-word {
        font-size: 1.8rem;
        gap: 0.8rem;
    }
}

.intro-stacked-word.revealed {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.intro-stacked-word.highlight {
    background: linear-gradient(135deg, #ffffff 30%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
}

/* Background Drifting Blobs */
.blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -2;
    opacity: 0.12;
    pointer-events: none;
    animation: drift 20s infinite alternate ease-in-out;
}

.blob-1 {
    top: -10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: var(--accent-primary);
    animation-duration: 25s;
}

.blob-2 {
    bottom: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: var(--accent-secondary);
    animation-duration: 30s;
    animation-delay: -5s;
}

.blob-3 {
    top: 40%;
    left: 30%;
    width: 400px;
    height: 400px;
    background: #ec4899;
    animation-duration: 22s;
    animation-delay: -10s;
}

@keyframes drift {
    0% {
        transform: translate(0, 0) scale(1) rotate(0deg);
    }
    50% {
        transform: translate(120px, 80px) scale(1.15) rotate(180deg);
    }
    100% {
        transform: translate(-60px, -120px) scale(0.85) rotate(360deg);
    }
}

/* Education Section Styling */
.education-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.education-card {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.edu-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.edu-degree {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
}

.edu-school {
    color: var(--accent-secondary);
    font-weight: 500;
}

.edu-date {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
}

.edu-meta {
    font-size: 1.1rem;
    color: var(--text-primary);
}

.edu-desc {
    color: var(--text-secondary);
    font-size: 1rem;
}

.edu-skills {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 1rem;
}

.edu-skills-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.small-tags {
    gap: 0.5rem !important;
}

.pill-sm {
    padding: 0.35rem 0.9rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
}

.education-card:hover .pill-sm {
    border-color: rgba(59, 130, 246, 0.3);
    color: var(--text-primary);
}

/* ==========================================================================
   Volunteering & Leadership (Glassmorphic White-Overlay Timeline)
   ========================================================================== */

#volunteering {
    position: relative;
    padding: 8rem 0;
    overflow: hidden;
}

.timeline-container {
    position: relative;
    max-width: 900px;
    margin: 4rem auto 0 auto;
    padding: 2rem 0;
}

/* Vertical Timeline Track Line */
.timeline-line {
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--accent-primary) 0%, var(--accent-secondary) 100%);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
    border-radius: 10px;
    z-index: 1;
}

.timeline-deck {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
}

/* Timeline Item base */
.timeline-item {
    position: relative;
    display: flex;
    padding-left: 90px;
    width: 100%;
    opacity: 0.35;
    transform: scale(0.96) translate3d(0, 10px, 0);
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
}

/* Node (icon container) */
.timeline-node {
    position: absolute;
    left: 40px;
    top: 20px;
    width: 44px;
    height: 44px;
    background-color: var(--accent-primary);
    border: 2px solid #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
    z-index: 10;
    color: #ffffff;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.timeline-node svg {
    width: 18px;
    height: 18px;
    stroke-width: 2.5px;
}

/* The glassmorphic card styling (80% transparent white) */
.timeline-card {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    padding: 1.8rem;
    width: 100%;
    color: #1a1a1a;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.timeline-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}

.timeline-title-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.timeline-role {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
    margin: 0;
    letter-spacing: -0.2px;
    text-transform: uppercase;
    transition: font-weight 0.3s ease, color 0.3s ease;
}

.timeline-org {
    background-color: rgba(139, 92, 246, 0.15);
    border: 1.5px solid rgba(139, 92, 246, 0.35);
    color: #6d28d9; /* High-contrast darker purple on white bg */
    padding: 0.2rem 0.5rem;
    font-weight: 800;
    border-radius: 6px;
    display: inline-block;
    font-size: 0.8rem;
    text-transform: uppercase;
    box-shadow: 0 2px 5px rgba(139, 92, 246, 0.1);
}

.timeline-date {
    background-color: rgba(0, 0, 0, 0.06);
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    color: #333333;
    padding: 0.25rem 0.6rem;
    font-family: monospace;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 6px;
    white-space: nowrap;
    transition: font-weight 0.3s ease, color 0.3s ease;
}

.timeline-card-body {
    margin-top: 1rem;
}

.timeline-dashed {
    border-top: 1px dashed rgba(0, 0, 0, 0.18);
    margin: 1.2rem 0;
}

.timeline-skills {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.timeline-skills-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: #222222;
    text-transform: uppercase;
    transition: font-weight 0.3s ease, color 0.3s ease;
}

.timeline-skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.timeline-skill-tag {
    background-color: rgba(139, 92, 246, 0.08);
    border: 1.5px solid rgba(139, 92, 246, 0.3);
    color: #374151;
    padding: 0.35rem 0.9rem;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
    cursor: pointer;
}

.timeline-skill-tag:hover {
    background: var(--accent-gradient);
    border-color: transparent;
    color: #ffffff;
    transform: scale(1.15) translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 92, 246, 0.35);
}

/* Focused Center State (Film Strip Scrolling Deck Effect) */
.timeline-item.focused {
    opacity: 1;
    transform: scale(1.02) translate3d(0, 0, 0);
}

.timeline-item.focused .timeline-node {
    background-color: #000000;
    color: #ffffff;
    border-color: var(--accent-primary);
    box-shadow: 0px 0px 20px rgba(139, 92, 246, 0.6);
    transform: translateX(-50%) scale(1.15) rotate(5deg);
}

.timeline-item.focused .timeline-card,
.timeline-card:hover {
    background: #ffffff;
    border-color: var(--accent-primary);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
    color: #000000;
}

.timeline-item.focused .timeline-role,
.timeline-card:hover .timeline-role {
    font-weight: 900;
    color: #000000;
}

.timeline-item.focused .timeline-skills-label,
.timeline-card:hover .timeline-skills-label {
    font-weight: 800;
    color: #000000;
}

.timeline-item.focused .timeline-date,
.timeline-card:hover .timeline-date {
    font-weight: 800;
    color: #000000;
    border-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.08);
}

.timeline-item.focused .timeline-skill-tag,
.timeline-card:hover .timeline-skill-tag {
    color: #111111;
    border-color: rgba(139, 92, 246, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .timeline-line {
        left: 20px;
    }
    .timeline-node {
        left: 20px;
        width: 36px;
        height: 36px;
    }
    .timeline-node svg {
        width: 16px;
        height: 16px;
    }
    .timeline-item {
        padding-left: 55px;
    }
    .timeline-card {
        padding: 1.2rem;
    }
    .timeline-role {
        font-size: 1.1rem;
    }
    .timeline-org {
        font-size: 0.75rem;
    }
    .timeline-date {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
    }
}

/* ==========================================================================
   Premium Animation Overlay & Spotlight Effects
   ========================================================================== */

#ambient-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -5;
    pointer-events: none;
    background-color: transparent;
}

.matrix-glow-container {
    position: relative;
    padding: 1rem;
    background: rgba(139, 92, 246, 0.01);
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.05);
    transform-style: preserve-3d;
    perspective: 1000px;
    display: inline-block;
}

.matrix-grid-pattern {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(rgba(139, 92, 246, 0.1) 1.2px, transparent 1.2px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: -1;
    border-radius: 24px;
    animation: matrixGlow 10s infinite alternate ease-in-out;
}

@keyframes matrixGlow {
    0% { opacity: 0.2; filter: hue-rotate(0deg); }
    100% { opacity: 0.7; filter: hue-rotate(30deg); }
}

.tilt-target-3d {
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.1s cubic-bezier(0.25, 1, 0.5, 1);
}

.tilt-target-3d img,
.tilt-target-3d * {
    transform: translateZ(25px);
}

/* About Card Gradient shift border glow */
.about-card {
    transition: border-color 0.5s ease, box-shadow 0.5s ease;
    will-change: border-color, box-shadow;
}

.about-card:hover {
    border-color: transparent;
    background: linear-gradient(#0c0a12, #0c0a12) padding-box,
                linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%) border-box;
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.12);
}

/* Experience spotlight dynamic border illumination */
.spotlight-card {
    position: relative;
    transition: transform 0.1s cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
}

.spotlight-card::before {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    border-radius: 16px;
    padding: 1.5px;
    background: radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.6) 40%, transparent 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 2;
}

.spotlight-card:hover::before {
    opacity: 1;
}

.spotlight-card:hover {
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.12);
}

/* Projects grid adjacent cards dimming */
.projects-grid {
    transition: all 0.3s ease;
}

.projects-grid:hover .project-card {
    opacity: 0.6;
}

.projects-grid .project-card:hover {
    opacity: 1;
    transform: translate3d(0, -6px, 0) scale(1.02);
    border-color: transparent;
    background: linear-gradient(#0c0a12, #0c0a12) padding-box,
                linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%) border-box;
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.18);
}

.projects-grid .project-card::before {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    border-radius: 16px;
    padding: 1.5px;
    background: radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.65) 0%, rgba(59, 130, 246, 0.65) 50%, transparent 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
}

.projects-grid .project-card:hover::before {
    opacity: 1;
}
