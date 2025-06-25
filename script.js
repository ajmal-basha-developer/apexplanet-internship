// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-button');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    // Update active link styles
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Optional: close mobile menu on clicking outside
document.addEventListener('click', e => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }
});
