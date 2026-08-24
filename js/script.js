/* ===================================
   PORTFOLIO BRENO - JAVASCRIPT
   Animações, Interações e Funcionalidades
   ==================================== */

// ===== DOM ELEMENTS =====
const html = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.theme-toggle)');
const sections = document.querySelectorAll('section[id]');

// ===== THEME MANAGEMENT =====
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.updateToggleIcon();
        themeToggle.addEventListener('click', (e) => this.toggle(e));
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            body.classList.add('dark-mode');
        } else {
            html.removeAttribute('data-theme');
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
        this.theme = theme;
    }

    toggle(e) {
        e.preventDefault();
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleIcon();
        this.animateToggle();
    }

    updateToggleIcon() {
        const icon = themeToggle.querySelector('i');
        if (this.theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    animateToggle() {
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 600);
    }
}

// ===== SCROLL REVEAL ANIMATION =====
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('section, .project-card, .skill-category, .timeline-item');
        this.observer = null;
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.reveal(entry.target);
                }
            });
        }, options);

        this.elements.forEach(element => {
            element.classList.add('scroll-reveal');
            this.observer.observe(element);
        });
    }

    reveal(element) {
        element.classList.add('revealed');
        this.observer.unobserve(element);
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.activeSection = null;
        this.init();
    }

    init() {
        // Close navbar on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeNavbar());
        });

        // Update active nav on scroll
        window.addEventListener('scroll', () => this.updateActiveSection());

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }

    handleNavClick(e) {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    updateActiveSection() {
        let currentSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    closeNavbar() {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    }
}

// ===== FORM VALIDATION =====
class FormValidator {
    constructor(form) {
        this.form = form;
        this.fields = {
            name: form.querySelector('#formName'),
            email: form.querySelector('#formEmail'),
            message: form.querySelector('#formMessage')
        };
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        Object.values(this.fields).forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('focus', () => this.clearError(field));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = false;

        if (!value) {
            this.showError(field, 'Este campo é obrigatório');
            return false;
        }

        if (fieldName === 'email') {
            isValid = this.validateEmail(value);
            if (!isValid) {
                this.showError(field, 'Email inválido');
            }
        } else {
            isValid = value.length >= 3;
            if (!isValid) {
                this.showError(field, 'Deve conter pelo menos 3 caracteres');
            }
        }

        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }

        return isValid;
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    showError(field, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        const errorElement = field.parentElement.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    clearError(field) {
        field.classList.remove('is-invalid');
        const errorElement = field.parentElement.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Validate all fields
        let allValid = true;
        Object.values(this.fields).forEach(field => {
            if (!this.validateField(field)) {
                allValid = false;
            }
        });

        if (allValid) {
            this.submitForm();
        } else {
            this.showFeedback('Por favor, corrija os erros acima.', 'error');
        }
    }

    submitForm() {
        // Simulate form submission
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

        // Simulate API call
        setTimeout(() => {
            this.showFeedback('✓ Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
            this.form.reset();
            Object.values(this.fields).forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;

            // Clear feedback after 5 seconds
            setTimeout(() => {
                formFeedback.classList.remove('success', 'error');
                formFeedback.textContent = '';
            }, 5000);
        }, 1500);
    }

    showFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.classList.remove('success', 'error');
        formFeedback.classList.add(type);
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.lastScrollY = 0;
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const currentScrollY = window.scrollY;

        // Hide/show header on scroll
        if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
            this.header.style.transform = 'translateY(-100%)';
        } else {
            this.header.style.transform = 'translateY(0)';
        }

        this.lastScrollY = currentScrollY;

        // Add shadow to header when scrolled
        if (currentScrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

// ===== COUNTER ANIMATION =====
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// ===== PARALLAX EFFECT =====
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        if (this.hero) {
            window.addEventListener('scroll', () => this.updateParallax());
        }
    }

    updateParallax() {
        const scrollY = window.scrollY;
        const parallaxElements = this.hero.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrollY * 0.3}px)`;
        });
    }
}

// ===== KEYBOARD NAVIGATION =====
class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    handleKeyPress(e) {
        // Ctrl + / to focus search or open menu
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            navLinks[0].focus();
        }

        // Esc to close mobile menu
        if (e.key === 'Escape') {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
    }
}

// ===== PROGRESS INDICATOR =====
class ProgressIndicator {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / windowHeight) * 100;
        
        // You can add a progress bar element if needed
        document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    }
}

// ===== SMOOTH SCROLL POLYFILL =====
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// ===== PROJECT CARD INTERACTIONS =====
class ProjectCardInteractions {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.addGlowEffect(card));
            card.addEventListener('mouseleave', () => this.removeGlowEffect(card));
        });
    }

    addGlowEffect(card) {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        
        card.style.setProperty('--glow-x', `${x * 100}%`);
        card.style.setProperty('--glow-y', `${y * 100}%`);
        card.classList.add('glow');
    }

    removeGlowEffect(card) {
        card.classList.remove('glow');
    }
}

// ===== SKILLS CATEGORY ANIMATION =====
class SkillsAnimation {
    constructor() {
        this.categories = document.querySelectorAll('.skill-category');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            });
        }, { threshold: 0.2 });

        this.categories.forEach(category => observer.observe(category));
    }
}

// ===== TIMELINE ANIMATION =====
class TimelineAnimation {
    constructor() {
        this.items = document.querySelectorAll('.timeline-item');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        this.items.forEach(item => observer.observe(item));
    }
}

// ===== LOADER/PRELOADER =====
class Loader {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => this.hideLoader());
        // Hide loader after 2 seconds even if not fully loaded
        setTimeout(() => this.hideLoader(), 2000);
    }

    hideLoader() {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }
}

// ===== TOOLTIP INITIALIZATION =====
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// ===== COPY TO CLIPBOARD FUNCTION =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado para a área de transferência!', 'success');
    }).catch(() => {
        showNotification('Erro ao copiar', 'error');
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    new ThemeManager();
    new ScrollReveal();
    new Navigation();
    new FormValidator(contactForm);
    new ScrollAnimations();
    new ParallaxEffect();
    new KeyboardNavigation();
    new ProgressIndicator();
    new ProjectCardInteractions();
    new SkillsAnimation();
    new TimelineAnimation();
    new Loader();
    
    // Initialize utilities
    smoothScrollPolyfill();
    initTooltips();
    initLazyLoading();

    // Add entry animation to hero
    document.querySelector('.hero-content')?.classList.add('animate-in');
});

// ===== WINDOW RESIZE HANDLER =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate layout if needed
        document.dispatchEvent(new CustomEvent('layoutchange'));
    }, 250);
});

// ===== VISIBILITY CHANGE HANDLER =====
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible again
        console.log('Page visible');
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // You can send error reports to a service here
});

// Export functions for external use if needed
window.PortfolioUtils = {
    copyToClipboard,
    showNotification
};
