import './Footer.css';

export function renderFooter(container) {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo" aria-label="Footer Logo">
          <a href="#hero" class="logo-text">Bilawal Mehfooz</a>
        </div>
        
        <div class="footer-links">
          <a href="#about" class="footer-link">About</a>
          <a href="#projects" class="footer-link">Projects</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
        
        <div class="footer-socials">
          <a href="https://github.com/Bilawal-Mehfooz-Malik" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/bilawal-mehfooz/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${currentYear} Bilawal Mehfooz. All rights reserved.</p>
        <p class="footer-tagline">Built with <i class="fa-solid fa-heart highlight"></i> & Passion</p>
      </div>
    </div>
  `;

  container.appendChild(footer);
}
