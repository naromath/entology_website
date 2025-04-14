/**
 * Main JavaScript File
 * Initializes all scripts and handles global site functionality
 */

// DOM ready event listener
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    loadComponents();
    
    // Initialize all features
    initializeSolutionTabs();
    initializeScrollEffects();
    
    console.log('Entology website initialized successfully!');
});

// Global site settings
const siteSettings = {
    animationSpeed: 300,
    apiEndpoint: 'https://api.entology.co.kr', // Replace with actual API endpoint
    debug: false
};

// Global utility functions
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Simple form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });
    
    return isValid;
}

// Initialize contact form submission
function initializeContactForm() {
    const form = document.querySelector('.cta-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm(this)) {
            alert('Please fill out all required fields correctly.');
            return;
        }
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Simulated form submission - replace with actual API call
        console.log(`Contact form submitted with email: ${email}`);
        
        // Show success message
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
    });
}