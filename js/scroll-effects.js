/**
 * Scroll Effects
 * Handles all scroll-based animations and effects
 */

// Initialize scroll effects
function initializeScrollEffects() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // After components are loaded, set up the effects
        setTimeout(setupScrollEffects, 500);
    });
}

// Set up all scroll effects
function setupScrollEffects() {
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Header style changes on scroll
    setupHeaderScroll();
    
    // Reveal animations for sections
    setupScrollReveal();
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Header style changes on scroll
function setupHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    
    // Initial check
    updateHeaderStyle();
    
    // Scroll event listener with debounce
    window.addEventListener('scroll', debounce(updateHeaderStyle));
    
    function updateHeaderStyle() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    }
}

// Reveal animations for sections
function setupScrollReveal() {
    // Select all sections to animate
    const sections = document.querySelectorAll('.mission, .values, .solutions, .cta');
    
    // Initial check for sections in viewport
    sections.forEach(checkSectionInView);
    
    // Scroll event listener with debounce
    window.addEventListener('scroll', debounce(() => {
        sections.forEach(checkSectionInView);
    }));
    
    function checkSectionInView(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If section is in viewport
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    }
}

// Add CSS for animations
function addAnimationStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .mission, .values, .solutions, .cta {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .mission.revealed, .values.revealed, .solutions.revealed, .cta.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .values-grid {
            --stagger-delay: 0.1s;
        }
        
        .value-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s, transform 0.3s;
        }
        
        .values.revealed .value-card {
            opacity: 1;
            transform: translateY(0);
        }
        
        .values.revealed .value-card:nth-child(1) { transition-delay: calc(var(--stagger-delay) * 0); }
        .values.revealed .value-card:nth-child(2) { transition-delay: calc(var(--stagger-delay) * 1); }
        .values.revealed .value-card:nth-child(3) { transition-delay: calc(var(--stagger-delay) * 2); }
        .values.revealed .value-card:nth-child(4) { transition-delay: calc(var(--stagger-delay) * 3); }
        .values.revealed .value-card:nth-child(5) { transition-delay: calc(var(--stagger-delay) * 4); }
    `;
    
    document.head.appendChild(styleElement);
}

// Call this when DOM is loaded
document.addEventListener('DOMContentLoaded', addAnimationStyles);