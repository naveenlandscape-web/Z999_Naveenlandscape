// WhatsApp Button Configuration
const WHATSAPP_NUMBER = '+919876543210'; // Replace with your actual WhatsApp number
const WHATSAPP_MESSAGE = 'Hello! I\'m interested in your plant pots and landscaping services.'; // Pre-texted message

// Initialize WhatsApp Button
function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Carousel Content Data
const carouselContent = [
    {
        title: "Transform Your Space",
        subtitle: "Premium Plant Pots for Every Style",
        description: "Elevate your indoor and outdoor gardens with our exquisite collection of handcrafted plant pots. Designed with quality and aesthetics in mind."
    },
    {
        title: "Ceramic Perfection",
        subtitle: "Modern & Elegant Designs",
        description: "Discover our premium ceramic collection, crafted with meticulous attention to detail. Each pot combines contemporary aesthetics with functional design."
    },
    {
        title: "Timeless Terracotta",
        subtitle: "Classic & Durable",
        description: "Experience the charm of traditional terracotta pots. Eco-friendly, rustic, and perfect for adding warmth and character to your garden spaces."
    }
];

// Image Carousel Functionality
class ImageCarousel {
    constructor() {
        this.currentIndex = 0;
        this.images = document.querySelectorAll('.carousel-image');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Dot click listeners
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Arrow button listeners
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        this.startAutoplay();

        const carouselContainer = document.getElementById('carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => this.stopAutoplay());
            carouselContainer.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }

    updateHeroContent() {
        const content = carouselContent[this.currentIndex];
        const heroContent = document.getElementById('hero-content');
        
        if (heroContent) {
            heroContent.innerHTML = `
                <h2 class="hero-title text-5xl md:text-6xl font-bold mb-4 animate-fade-in">${content.title}</h2>
                <h4 class="hero-subtitle text-xl md:text-2xl font-semibold mb-6 text-green-200">${content.subtitle}</h4>
                <p class="hero-description text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
                    ${content.description}
                </p>
            `;
        }
    }

    goToSlide(index) {
        this.images.forEach(img => img.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.currentIndex = index % this.images.length;

        this.images[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
        
        this.updateHeroContent();

        this.stopAutoplay();
        this.startAutoplay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.goToSlide(this.currentIndex);
    }

    startAutoplay() {
        if (this.autoplayInterval) return;
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (!mobileMenuBtn) return;

    mobileMenuBtn.addEventListener('click', () => {
        console.log('Mobile menu button clicked');
        // You can add mobile menu functionality here
    });
}

function initSmoothScroll() {
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

// Initialize carousel animation for hero text
function animateHeroText() {
    const h2 = document.querySelector('#home h2');
    const h4 = document.querySelector('#home h4');
    const p = document.querySelector('#home p');

    if (h2) h2.style.animation = 'fadeInUp 0.8s ease-out 0.1s both';
    if (h4) h4.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
    if (p) p.style.animation = 'fadeInUp 0.8s ease-out 0.3s both';
}

// Scroll Animation for Cards using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe all cards with scroll animation
    const cards = document.querySelectorAll('.scroll-animate-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    const carousel = new ImageCarousel();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize smooth scroll
    initSmoothScroll();

    // Animate hero text
    animateHeroText();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize WhatsApp button
    initWhatsAppButton();

    // Add scroll effect to navbar
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = '';
        }

        lastScrollTop = scrollTop;
    });

    // Store carousel instance for keyboard navigation
    window.carouselInstance = document.querySelector('.carousel-image') ? {
        currentIndex: 0,
        images: document.querySelectorAll('.carousel-image'),
        nextSlide: function() {
            const dots = document.querySelectorAll('.carousel-dot');
            const nextIndex = (this.currentIndex + 1) % this.images.length;
            dots[nextIndex].click();
        },
        goToSlide: function(index) {
            const dots = document.querySelectorAll('.carousel-dot');
            dots[index].click();
        }
    } : null;

    // Form Submission Handler for FormGrid
    const enquiryForm = document.getElementById('enquiry-form');
    const formStatus = document.getElementById('form-status');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            console.log('Form submitted');

            // Get form data
            const formData = new FormData(enquiryForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                date: formData.get('date'),
                time: formData.get('time'),
                message: formData.get('message')
            };

            console.log('Form data:', data);

            try {
                // FormGrid endpoint
                const response = await fetch('https://formgrid.dev/api/f/s4a70e5g', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                console.log('Response status:', response.status);

                if (response.ok) {
                    // Success message
                    formStatus.classList.remove('error', 'hidden');
                    formStatus.classList.add('success');
                    formStatus.textContent = '✓ Thank you! Your enquiry has been sent successfully. We\'ll get back to you soon.';
                    
                    // Reset form
                    enquiryForm.reset();
                    
                    // Scroll to form
                    enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Clear message after 5 seconds
                    setTimeout(() => {
                        formStatus.classList.add('hidden');
                    }, 5000);
                } else {
                    throw new Error(`Server error: ${response.status}`);
                }
            } catch (error) {
                // Error message
                formStatus.classList.remove('success', 'hidden');
                formStatus.classList.add('error');
                formStatus.textContent = '✗ Error sending enquiry. Please try again or contact us directly.';
                
                console.error('Form submission error:', error);
                
                // Clear error message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }
        });
    }

    console.log('Website initialized successfully!');
});
// Add keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    const carousel = window.carouselInstance;
    if (carousel) {
        if (e.key === 'ArrowRight') carousel.nextSlide();
        if (e.key === 'ArrowLeft') carousel.goToSlide((carousel.currentIndex - 1 + carousel.images.length) % carousel.images.length);
    }
});
