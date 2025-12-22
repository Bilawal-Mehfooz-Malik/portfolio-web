import './Resume.css';

export function renderResume() {
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
                <span class="card-date">2023 - 2024</span>
                <h4 class="card-role">Mobile App Intern</h4>
                <span class="card-company">Tech Solutions</span>
                <p class="card-text">Assisted in UI/UX implementation and bug fixing for cross-platform mobile apps.
                </p>
              </div>
            </div>
          </div>

          <!-- Education Tab -->
          <div class="tab-content" id="tab-education">
            <h3 class="tab-title">My Education</h3>
            <div class="resume-scroll-container">
              <div class="resume-card">
                <span class="card-date">2019 - 2023</span>
                <h4 class="card-role">BSc Computer Systems Engineering</h4>
                <span class="card-company">University of Engineering</span>
              </div>
            </div>
          </div>

          <!-- Skills Tab -->
          <div class="tab-content" id="tab-skills">
            <h3 class="tab-title">Technical Skills</h3>
            <div class="skills-grid-tab">
              <div class="skill-card tooltip" data-tooltip="Cross-platform Dev"><span>Flutter</span></div>
              <div class="skill-card"><span>Dart</span></div>
              <div class="skill-card"><span>Firebase</span></div>
              <div class="skill-card"><span>REST APIs</span></div>
              <div class="skill-card"><span>Google Cloud</span></div>
              <div class="skill-card"><span>SQL</span></div>
              <div class="skill-card"><span>Git / GitHub</span></div>
              <div class="skill-card"><span>Figma</span></div>
              <div class="skill-card"><span>Clean Architecture</span></div>
              <div class="skill-card"><span>State Management</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

    document.querySelector('main').appendChild(resumeSection);
    initResumeLogic(resumeSection);
}

function initResumeLogic(resumeSection) {
    const tabBtns = resumeSection.querySelectorAll('.tab-btn');
    const tabContents = resumeSection.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 2. Add active class to clicked button
            btn.classList.add('active');

            // 3. Show corresponding content
            const targetId = btn.getAttribute('data-tab');
            resumeSection.querySelector(`#${targetId}`).classList.add('active');
        });
    });
}
