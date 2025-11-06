document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    const updateHeader = () => {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (window.scrollY > 50) {
            header.style.backgroundColor = isDarkMode
                ? 'rgba(36, 36, 36, 0.95)'
                : 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backgroundColor = isDarkMode
                ? '#242424'
                : '#ffffff';
        }
    };

    window.addEventListener('scroll', updateHeader);

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Handle window resize
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;
            if (windowWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Check for dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateHeader);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-text-section, .about-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling for anchor links
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

    // Add loading animation for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // Enhanced animations and effects
    const heroElements = document.querySelectorAll('.hero-stats .stat-item, .feature-tag, .hero-cta');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Parallax effect for background image
    let parallaxTicking = false;
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg-img');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        parallaxTicking = false;
    };

    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            requestAnimationFrame(updateParallax);
            parallaxTicking = true;
        }
    });
});