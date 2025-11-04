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
});