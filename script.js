/* ================================================
   SUMIT KARKI PORTFOLIO - ENHANCED JAVASCRIPT
   ================================================ */

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollReveal();
    initContactForm();
    initNavbarEffects();
    initProjectCardHovers();
    initSmoothLinks();
});

// === MOBILE MENU TOGGLE ===
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenu.classList.add('hidden');
        }
    });
}

// === SCROLL REVEAL ANIMATION ===
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-reveal');
        observer.observe(section);
    });
}

// === NAVBAR EFFECTS ===
function initNavbarEffects() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', debounce(() => {
        const currentScrollY = window.scrollY;
        
        // Add background enhancement on scroll
        if (currentScrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
        
        lastScrollY = currentScrollY;
    }, 10));
}

// === PROJECT CARD HOVER EFFECTS ===
function initProjectCardHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
        
        // Prevent scale-105 on touch devices
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, { passive: true });
    });
}

// === CONTACT FORM HANDLING ===
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading mr-2"></span>Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '✓ Message Sent!';
            submitBtn.style.opacity = '0.8';
            
            // Reset form after success
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// === SMOOTH SCROLL TO ANCHOR ===
function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const nav = document.querySelector('nav');
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === DEBOUNCE UTILITY ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// === PAGE LOAD ANIMATIONS ===
window.addEventListener('load', () => {
    // Add loaded state
    document.body.classList.add('loaded');

    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// === SCROLL PROGRESS INDICATOR ===
window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Can be used to update a progress bar if needed
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent + '%');
}, 16));

// === KEYBOARD NAVIGATION ===
document.addEventListener('keydown', (e) => {
    // Quick navigation shortcuts (optional)
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'h':
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'k':
                // Could open a command palette or search
                break;
        }
    }
});

// === SOCIAL LINK TRACKING (optional) ===
function trackSocialClick(platform) {
    console.log(`Social link clicked: ${platform}`);
    // Add your analytics here
}

// === INTERSECTION OBSERVER FOR LAZY ANIMATIONS ===
function createLazyObserver(selector, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(selector).forEach(el => {
        observer.observe(el);
    });
}

// === RESPONSIVE IMAGE LOADING ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === TOUCH DETECTION ===
const isTouchDevice = () => {
    return (
        (typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        (typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0))
    );
};

if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// === SMOOTH COLOR TRANSITIONS ===
document.addEventListener('mousemove', (e) => {
    // Optional: Add parallax or cursor tracking effects here
});

// === ACCESSIBILITY: FOCUS VISIBLE ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-focus');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-focus');
});

// === ERROR HANDLING ===
window.addEventListener('error', (event) => {
    console.error('An error occurred:', event.error);
});

// === UNLOAD CLEANUP ===
window.addEventListener('beforeunload', () => {
    // Clean up any resources if needed
});

console.log('Portfolio script loaded successfully');
