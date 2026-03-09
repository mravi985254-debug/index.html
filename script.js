/**
 * Gautam Pickle's - JavaScript
 * Handles navigation, modal, form validation, and email submission
 */

// ============================================
// EmailJS Configuration
// ============================================
// To configure EmailJS, follow these steps:
//
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. In your EmailJS dashboard:
//    - Click "Email Services" → "Add New Service" → Select "Gmail"
//    - Follow the authentication steps
//    - Note your Service ID (e.g., "service_xxxxx")
//
// 3. Click "Email Templates" → "Create New Template"
//    - Design your email template with these variables:
//      {{name}} - Customer Name
//      {{mobile}} - Mobile Number
//      {{email}} - Email Address
//      {{address}} - Delivery Address
//      {{pickle}} - Pickle Type Ordered
//    - Example template:
//      "New Order Received!
//       
//       Name: {{name}}
//       Mobile: {{mobile}}
//       Email: {{email}}
//       Address: {{address}}
//       Pickle: {{pickle}}
//       
//       Please process this order."
//    - Save and note your Template ID (e.g., "template_xxxxx")
//
// 4. Click "Account" → "General" → "API Key"
//    - Note your Public Key (e.g., "xxxxxxxxxxxx")
//
// 5. Replace the placeholder values below:
const EMAILJS_CONFIG = {
    publicKey: "YOUR_PUBLIC_KEY",        // Replace with your EmailJS Public Key
    serviceId: "YOUR_SERVICE_ID",        // Replace with your EmailJS Service ID
    templateId: "YOUR_TEMPLATE_ID"        // Replace with your EmailJS Template ID
};

// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const orderModal = document.getElementById('orderModal');
const modalClose = document.getElementById('modalClose');
const orderForm = document.getElementById('orderForm');
const submitBtn = document.getElementById('submitBtn');
const formFeedback = document.getElementById('formFeedback');
const pickleSelect = document.getElementById('pickleType');

// ============================================
// Initialize EmailJS
// ============================================
(function() {
    // Only initialize if user has configured their own keys
    if (EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
})();

// ============================================
// Navigation
// ============================================

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Order Modal
// ============================================

// Open modal with product pre-selected
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.getAttribute('data-product');
        pickleSelect.value = product;
        openModal();
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);

// Close modal when clicking overlay
orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && orderModal.classList.contains('active')) {
        closeModal();
    }
});

function openModal() {
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
    resetForm();
}

function resetForm() {
    orderForm.reset();
    clearErrors();
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
}

// ============================================
// Form Validation
// ============================================

function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const pickleType = document.getElementById('pickleType').value;
    
    // Validate Full Name
    if (fullName.length < 2) {
        showError('nameError', 'Please enter your full name (at least 2 characters)');
        document.getElementById('fullName').classList.add('error');
        isValid = false;
    }
    
    // Validate Mobile Number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        showError('mobileError', 'Please enter a valid 10-digit mobile number');
        document.getElementById('mobile').classList.add('error');
        isValid = false;
    }
    
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    // Validate Address
    if (address.length < 10) {
        showError('addressError', 'Please enter your complete address (at least 10 characters)');
        document.getElementById('address').classList.add('error');
        isValid = false;
    }
    
    // Validate Pickle Selection
    if (!pickleType) {
        showError('pickleError', 'Please select a pickle type');
        document.getElementById('pickleType').classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
    });
}

// ============================================
// Form Submission
// ============================================

orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
        showFormFeedback('error', 'Email system not configured. Please set up EmailJS in script.js');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Prepare form data
    const formData = {
        name: document.getElementById('fullName').value.trim(),
        mobile: document.getElementById('mobile').value.trim(),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        pickle: document.getElementById('pickleType').value
    };
    
    try {
        // Send email using EmailJS
        await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            formData
        );
        
        // Show success message
        showFormFeedback('success', 'Order placed successfully! We will contact you soon.');
        
        // Close modal after delay
        setTimeout(() => {
            closeModal();
        }, 2000);
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        
        let errorMessage = 'Failed to place order. Please try again.';
        
        // Provide more specific error messages
        if (error.status === 400) {
            errorMessage = 'Invalid configuration. Please check EmailJS settings.';
        } else if (error.status === 401) {
            errorMessage = 'Authentication error. Please check EmailJS credentials.';
        } else if (error.status === 429) {
            errorMessage = 'Too many requests. Please try again later.';
        }
        
        showFormFeedback('error', errorMessage);
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function showFormFeedback(type, message) {
    formFeedback.className = 'form-feedback ' + type;
    formFeedback.textContent = message;
}

// ============================================
// Scroll Animation
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .feature-box, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Console Instructions
// ============================================
console.log(`
╔══════════════════════════════════════════════════════════╗
║              🚀 Gautam Pickle's Website                   ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  To enable email order notifications:                    ║
║                                                          ║
║  1. Sign up at https://www.emailjs.com/                 ║
║  2. Add Gmail as email service                           ║
║  3. Create email template with variables:                ║
║     {{name}}, {{mobile}}, {{email}},                     ║
║     {{address}}, {{pickle}}                              ║
║  4. Get your Public Key, Service ID, Template ID         ║
║  5. Open script.js and update EMAILJS_CONFIG            ║
║                                                          ║
║  Current Status: Email system not configured             ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);
