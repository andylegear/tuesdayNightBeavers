// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Set active navigation link based on current page
    setActiveNavLink();
    
    // Add fun interactions
    addFunInteractions();
    
    // Add smooth scrolling
    addSmoothScrolling();
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Add fun interactions for a child-friendly experience
function addFunInteractions() {
    // Make cards bounce on click
    const cards = document.querySelectorAll('.about-card, .leader-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'bounce 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    // Add click sound effect simulation (visual feedback)
    const clickableElements = document.querySelectorAll('button, .nav-link, .about-card, .leader-card, .contact-card');
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Add a subtle pulse effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Make beaver illustration interactive
    const beaverSvg = document.querySelector('.beaver-svg');
    if (beaverSvg) {
        beaverSvg.addEventListener('click', function() {
            this.style.animation = 'wiggle 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'wiggle 3s ease-in-out infinite';
            }, 500);
        });
    }
    
    // Add rainbow trail to cursor (fun effect)
    addRainbowTrail();
}

// Add smooth scrolling for internal links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fun rainbow trail effect (child-friendly)
function addRainbowTrail() {
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trail dot
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${mouseX - 4}px;
            top: ${mouseY - 4}px;
            background: hsl(${Math.random() * 360}, 100%, 70%);
            animation: fadeOut 1s ease-out forwards;
        `;
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        // Remove old trail dots
        if (trail.length > 20) {
            const oldDot = trail.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        // Clean up dots after animation
        setTimeout(() => {
            if (dot && dot.parentNode) {
                dot.parentNode.removeChild(dot);
            }
        }, 1000);
    });
}

// Add CSS for trail animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Form validation (for future forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone);
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Add slide in animation for success message
const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(slideInStyle);
