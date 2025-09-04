// Gallery functionality with lightbox and interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GLightbox for image gallery
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        selector: '.gallery-item',
        skin: 'modern',
        width: '90vw',
        height: '90vh',
        descPosition: 'bottom'
    });

    // Add loading states for images
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not available';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
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

    // Add loading animation for cards
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        cardObserver.observe(card);
    });

    // Add CSS animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Contact form handling - display only mode
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show info message about contact form
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-info mt-3';
            alertDiv.innerHTML = `
                <i class="fas fa-info-circle me-2"></i>
                This is a portfolio demonstration. To contact me, please use the email address listed in the contact information section.
            `;
            
            this.insertBefore(alertDiv, submitBtn.closest('.col-12'));
            
            // Remove alert after 8 seconds
            setTimeout(() => {
                alertDiv.remove();
            }, 8000);
            
            // Scroll to alert
            alertDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Form validation feedback
        const inputs = contactForm.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid') && this.value.trim() !== '') {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            });
        });
    }

    // Project detail functionality
    const projectLinks = document.querySelectorAll('.project-link');
    const profileContent = document.getElementById('profile-content');
    const projectDetail = document.getElementById('project-detail');
    const backToProfile = document.querySelector('.back-to-profile');
    
    // Handle project link clicks
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const image = this.getAttribute('data-image');
            const thumbnail = this.getAttribute('data-thumbnail');
            const category = this.getAttribute('data-category');
            
            // Update project detail content
            document.getElementById('project-title').textContent = title;
            document.getElementById('project-description').textContent = description;
            document.getElementById('project-category').textContent = category;
            document.getElementById('project-image').src = thumbnail;
            document.getElementById('project-image').alt = title;
            document.getElementById('project-lightbox').href = image;
            document.getElementById('project-lightbox').setAttribute('title', title);
            
            // Show project detail, hide profile
            profileContent.style.display = 'none';
            projectDetail.style.display = 'block';
            
            // Update active state
            document.querySelectorAll('.project-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle back to profile
    if (backToProfile) {
        backToProfile.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show profile, hide project detail
            profileContent.style.display = 'block';
            projectDetail.style.display = 'none';
            
            // Remove active states
            document.querySelectorAll('.project-link').forEach(l => l.classList.remove('active'));
        });
    }

    // Add parallax effect to hero section (if present)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Enhanced dropdown behavior
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownToggle = this.querySelector('.dropdown-toggle');
            const dropdownMenu = this.querySelector('.dropdown-menu');
            
            if (window.innerWidth >= 992) { // Only on desktop
                dropdownToggle.click();
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            const dropdownToggle = this.querySelector('.dropdown-toggle');
            
            if (window.innerWidth >= 992) { // Only on desktop
                setTimeout(() => {
                    if (!this.matches(':hover')) {
                        dropdownToggle.click();
                    }
                }, 100);
            }
        });
    });

    // Portfolio gallery initialized
});

// Utility function for lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize lazy loading
lazyLoadImages();
