import './Contact.css';

export function renderContact(container = document.querySelector('main')) {
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.className = 'contact-section';

  contactSection.innerHTML = `
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="section-title">Get In <span class="highlight">Touch</span></h2>
        <p class="section-desc">Have a project in mind or just want to say hi? Feel free to reach out!</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info animate-fade-right">
          <a href="mailto:bilawalmehfoozflutter@gmail.com" class="info-card">
            <div class="info-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="info-details">
              <h4>Email</h4>
              <p>bilawalmehfoozflutter@gmail.com</p>
            </div>
          </a>

          <div class="info-card">
            <div class="info-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="info-details">
              <h4>Location</h4>
              <p>Pakistan</p>
            </div>
          </div>

          <a href="tel:+923169298833" class="info-card">
            <div class="info-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="info-details">
              <h4>Phone</h4>
              <p>+92 316 9298833</p>
            </div>
          </a>

          <div class="social-links">
            <a href="https://github.com/Bilawal-Mehfooz-Malik" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bilawal-mehfooz/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="contact-form-container animate-fade-left">
          <form class="contact-form" id="contact-form">
            <input type="hidden" name="access_key" value="1ea080f1-8a30-4e9c-8104-c9847f036bd1">
            <!-- Anti-Spam Honeypot -->
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
            
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required minlength="2">
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required minlength="3">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required minlength="10"></textarea>
            </div>
            <button type="submit" class="btn btn-primary submit-btn">
              Send Message
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  container.appendChild(contactSection);
  initContactLogic(contactSection);
}

function initContactLogic(section) {
  const form = section.querySelector('#contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;

    // UI feedback
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        submitBtn.innerHTML = 'Message Sent! <i class="fa-solid fa-check"></i>';
        submitBtn.style.backgroundColor = '#22c55e';
        submitBtn.style.borderColor = '#22c55e';
        submitBtn.style.color = '#ffffff';
        form.reset();
      } else {
        submitBtn.innerHTML = 'Error! <i class="fa-solid fa-xmark"></i>';
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      submitBtn.innerHTML = 'Connection Error <i class="fa-solid fa-triangle-exclamation"></i>';
      console.error("Submission error:", error);
    } finally {
      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        submitBtn.style.color = '';
        submitBtn.disabled = false;
      }, 4000);
    }
  });
}
