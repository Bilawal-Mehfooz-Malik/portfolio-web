// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Check local storage or preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
} else {
  // Default to light for minimal theme
  htmlElement.setAttribute('data-theme', 'light');
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Mobile Menu Logic
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  // Prevent scrolling when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});



// Close mobile menu on resize if screen becomes wide
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

console.log('Portfolio initialized.');
