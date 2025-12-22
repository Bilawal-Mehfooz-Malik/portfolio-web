import './Hero.css';

export function renderHero() {
    const heroSection = document.createElement('section');
    heroSection.id = 'hero';
    heroSection.className = 'hero-section';
    heroSection.innerHTML = `
    <div class="hero-content">
      <h2 class="animate-fade-up">Hello, I'm Bilawal Mehfooz</h2>
      <h1 class="animate-fade-up delay-100">Building Mobile Experiences<br /><span class="highlight">That
          Matter.</span></h1>
      <p class="animate-fade-up delay-200">Mobile Application Developer & Flutter Specialist.</p>
      <div class="cta-group animate-fade-up delay-300">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-outline">Contact Me</a>
      </div>
    </div>
    <div class="hero-visual animate-fade-in delay-200">
      <div class="abstract-shape"></div>
      <div class="abstract-shape-2"></div>
    </div>
  `;

    document.querySelector('main').appendChild(heroSection);
    initHeroAnimations(heroSection);
}

function initHeroAnimations(heroSection) {
    // Scroll Animation Observer (reused logic)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    heroSection.querySelectorAll('.animate-fade-up, .animate-fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}
