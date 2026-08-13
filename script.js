// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    mobileToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// Project Category Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(' ');
      
      if (filterValue === 'all' || categories.includes(filterValue)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Interactive Contact Form Submission Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending Message...';
    formStatus.textContent = '';
    formStatus.className = 'form-status-msg';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      formStatus.classList.add('success');
      formStatus.textContent = '✓ Thank you! Your message has been received. Mohd Rashid Ansari will get back to you shortly.';
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
      }, 6000);
    }, 1000);
  });
}
