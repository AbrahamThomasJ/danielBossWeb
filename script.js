// AURA - Interactive JavaScript
// Following PersonaForge Anti-Generic Framework

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeArtistParticles();
    initializeScrollEffects();
    initializeInteractiveElements();
    initializeParticles();
    initializeMobileMenu(); // Initialize mobile menu functionality
});

// Navigation with smooth scrolling and active states
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Artist particle animations
function initializeArtistParticles() {
    const container = document.querySelector('.artist-particle-container');
    if (!container) return;

    const artists = [
        'Celeste', 'Leo Gallo', 'The Voids', 'Aria Moon',
        'DJ Nova', 'Riff Raff', 'Luna Beat', 'Solstice',
        'Echoes', 'Mirage', 'Fable', 'Zenith', 'Axel', 'Nia'
    ];

    artists.forEach(name => {
        const particle = document.createElement('div');
        particle.className = 'artist-particle';
        particle.innerText = name;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Set random start and end points for the drift animation
        const startX = Math.random() * containerWidth - 50;
        const startY = Math.random() * containerHeight;
        const endX = Math.random() * containerWidth - 50;
        const endY = Math.random() * containerHeight;

        particle.style.setProperty('--start-x', `${startX}px`);
        particle.style.setProperty('--start-y', `${startY}px`);
        particle.style.setProperty('--end-x', `${endX}px`);
        particle.style.setProperty('--end-y', `${endY}px`);

        // Randomize animation duration and delay
        const animationDuration = Math.random() * 15 + 20; // 20s to 35s
        const animationDelay = Math.random() * 20; // 0s to 20s
        particle.style.animation = `drift ${animationDuration}s ${animationDelay}s linear infinite`;

        container.appendChild(particle);
    });
}

// Scroll-triggered animations with signature offset
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px' // Signature offset from PersonaForge
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.section');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Interactive elements with personality
function initializeInteractiveElements() {
    // Example of interactive element: log clicks on primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${button.textContent.trim()}`);
        });
    });
}

// Add CSS for scroll animations dynamically
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    }
    
    .section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animationStyles);

function initializeParticles() {
    const container = document.getElementById('particle-container');
    if (!container) return;
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        const animationDuration = Math.random() * 15 + 10;
        const animationDelay = Math.random() * 10;
        particle.style.animation = `float ${animationDuration}s ${animationDelay}s linear infinite`;

        container.appendChild(particle);
    }
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.mobile-sidebar');
    const closeButton = document.querySelector('.sidebar-close');
    const overlay = document.querySelector('.sidebar-overlay');

    if (menuToggle && sidebar && closeButton && overlay) {
        const openMenu = () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        };

        const closeMenu = () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        };

        menuToggle.addEventListener('click', openMenu);
        closeButton.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
    }
}
