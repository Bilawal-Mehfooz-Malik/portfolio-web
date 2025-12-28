import './Resume.css';
import { icons } from '../../assets/icons.js';

export function renderResume(container = document.querySelector('main')) {
  const resumeSection = document.createElement('section');
  resumeSection.id = 'about';
  resumeSection.className = 'resume-section';
  resumeSection.innerHTML = `
    <div class="resume-container">
      <div class="resume-grid">
        <!-- Left Sidebar: Navigation -->
        <div class="resume-sidebar animate-fade-right">
          <h2 class="resume-title">All over my <span class="highlight">details</span> find here...</h2>
          <p class="resume-desc">
            Here's a detailed look at my experience, technical skills, and educational background.
          </p>

          <div class="resume-tabs">
            <button class="tab-btn active" data-tab="tab-about">About Me</button>
            <button class="tab-btn" data-tab="tab-experience">Experience</button>
            <button class="tab-btn" data-tab="tab-education">Education</button>
            <button class="tab-btn" data-tab="tab-skills">Skills</button>
          </div>
        </div>

        <!-- Right Content: Tab Panels -->
        <div class="resume-content animate-fade-up delay-100">

          <!-- About Me Tab (First & Active) -->
          <div class="tab-content active" id="tab-about">
            <h3 class="tab-title">About Me</h3>
            <div class="about-tab-text">
              <h4 class="bio-heading">Based in Pakistan</h4>
              <p class="bio-text">
                I craft <strong>beautiful, high-performance mobile applications</strong> that users love.
                Specializing in <strong>Flutter</strong> development, I transform complex ideas into intuitive,
                pixel-perfect experiences. With a <strong>B.Sc in Computer Systems Engineering</strong>,
                I bring both technical depth and creative vision to every project I build.
              </p>
              <div class="info-grid">
                <div class="info-item">
                  <span class="label">Name</span>
                  <span class="value">Bilawal Mehfooz</span>
                </div>
                <div class="info-item">
                  <span class="label">Experience</span>
                  <span class="value">2+ Years</span>
                </div>
                <div class="info-item">
                  <span class="label">Nationality</span>
                  <span class="value">Pakistan</span>
                </div>
                <div class="info-item">
                  <span class="label">Freelance</span>
                  <span class="value">Available</span>
                </div>
                <div class="info-item">
                  <span class="label">Email</span>
                  <span class="value">bilawalmehfoozflutter@gmail.com</span>
                </div>
                <div class="info-item">
                  <span class="label">Languages</span>
                  <span class="value">English, Urdu</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Tab -->
          <div class="tab-content" id="tab-experience">
            <h3 class="tab-title">My Experience</h3>
            <div class="resume-scroll-container">
              <div class="resume-card">
                <span class="card-date">Nov, 2025 - Present</span>
                <h4 class="card-role">Flutter Developer (Contract)</h4>
                <span class="card-company">SMB</span>
                <p class="card-text">Currently working on <strong>Risewell</strong>, an alarm app with dynamic music
                  on each alarm and daily inspiration system. Designed the full app in <strong>Figma</strong> and
                  developing it in <strong>Flutter</strong>.</p>
              </div>
              <!-- Placeholder for Internship -->
              <div class="resume-card">
                <span class="card-date">Aug 2024 - Oct 2024</span>
                <h4 class="card-role">Flutter Development Intern</h4>
                <span class="card-company">Internship Pakistan</span>
                <p class="card-text">Collaborated with the development team to build and optimize cross-platform mobile applications using Flutter. Implemented responsive UI designs and integrated REST APIs for seamless data handling.</p>
              </div>
            </div>
          </div>

          <!-- Education Tab -->
          <div class="tab-content" id="tab-education">
            <h3 class="tab-title">My Education</h3>
            <div class="resume-scroll-container">
              <div class="resume-card">
                <span class="card-date">2021 - 2025</span>
                <h4 class="card-role">B.Sc Computer Systems Engineering</h4>
                <span class="card-company">Mirpur University of Science & Technology</span>
                <p class="card-text">CGPA: 3.40 / 4.0</p>
              </div>
            </div>
          </div>

          <!-- Skills Tab -->
          <div class="tab-content" id="tab-skills">
            <h3 class="tab-title">Technical Skills</h3>
            <div class="skills-container-tab">
              
              <div class="skill-category">
                <h4 class="category-title"><i class="fa-solid fa-code"></i> Languages</h4>
                <div class="skills-grid-tab">
                  <div class="skill-pill"><span>Dart</span></div>
                  <div class="skill-pill"><span>JavaScript</span></div>
                  <div class="skill-pill"><span>TypeScript</span></div>
                </div>
              </div>
              
              <div class="skill-category">
                <h4 class="category-title"><i class="fa-solid fa-layer-group"></i> Frameworks</h4>
                <div class="skills-grid-tab">
                  <div class="skill-pill"><span>Flutter</span></div>
                  <div class="skill-pill"><span>Next.js</span></div>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="category-title"><i class="fa-solid fa-toolbox"></i> Tools & Platforms</h4>
                <div class="skills-grid-tab">
                  <div class="skill-pill"><span>Firebase</span></div>
                  <div class="skill-pill"><span>Supabase</span></div>
                  <div class="skill-pill"><span>Git & GitHub</span></div>
                  <div class="skill-pill"><span>Codemagic</span></div>
                  <div class="skill-pill"><span>Figma</span></div>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="category-title"><i class="fa-solid fa-cloud-arrow-up"></i> Deployment</h4>
                <div class="skills-grid-tab">
                  <div class="skill-pill"><span>Google Play Store</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  container.appendChild(resumeSection);
  initResumeLogic(resumeSection);
}

function initResumeLogic(resumeSection) {
  const tabBtns = resumeSection.querySelectorAll('.tab-btn');
  const tabContents = resumeSection.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    // 1. Remove active class from all buttons and contents
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // 2. Add active class to corresponding button
    const activeBtn = Array.from(tabBtns).find(b => b.getAttribute('data-tab') === tabId);
    if (activeBtn) activeBtn.classList.add('active');

    // 3. Show corresponding content
    const content = resumeSection.querySelector(`#${tabId}`);
    if (content) content.classList.add('active');
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      switchTab(targetId);
    });
  });

  // Handle Hash Navigation (for initial load)
  function handleHash() {
    const hash = window.location.hash;
    processNavigation(hash);
  }

  // Handle Custom Navigation Event (for internal clicks without URL change)
  window.addEventListener('portfolio-navigate', (e) => {
    processNavigation(e.detail.section);
  });

  function processNavigation(identifier) {
    if (identifier === '#experience') {
      switchTab('tab-experience');
    } else if (identifier === '#skills') {
      switchTab('tab-skills');
    } else if (identifier === '#education') {
      switchTab('tab-education');
    } else if (identifier === '#about') {
      switchTab('tab-about');
    }
  }

  // Check on load
  handleHash();
}
