import './Projects.css';

// Project data - easily editable
export const projectsData = [
  {
    id: 'risewell',
    title: 'Risewell',
    shortDesc: 'A smart alarm app with dynamic music and daily inspiration.',
    fullDesc: `Risewell is a beautifully designed alarm application that transforms your morning routine. It features dynamic music that changes with each alarm, a daily inspiration system with motivational quotes, and a clean, intuitive interface designed entirely in Figma.`,
    role: 'Full-Stack Developer & UI/UX Designer',
    techStack: ['Flutter', 'Dart', 'Supabase', 'Figma'],
    features: [
      'Dynamic music selection for each alarm',
      'Daily motivational quotes and inspiration',
      'Beautiful, intuitive UI designed in Figma',
      'Cloud sync with Supabase backend'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik',
      playstore: null, // Coming soon
      live: null
    },
    status: 'In Development',
    year: '2025',
    featured: true
  },
  {
    id: 'findout',
    title: 'Findout',
    shortDesc: 'A location-based discovery app for exploring nearby places.',
    fullDesc: `Findout helps users discover interesting places around them. Built with Flutter, it provides a seamless experience for finding restaurants, attractions, and hidden gems in your area with real-time location tracking and beautiful map integration.`,
    role: 'Mobile App Developer',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    features: [
      'Real-time location tracking',
      'Interactive map with custom markers',
      'Place details with ratings and reviews',
      'Save favorite locations'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2024',
    featured: true
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio V1',
    shortDesc: 'My first personal portfolio website built with HTML and CSS.',
    fullDesc: 'A minimalist portfolio project created to showcase my early web development skills. It features a clean layout, responsive design, and a contact form.',
    role: 'Frontend Developer',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design',
      'Interactive UI elements',
      'Project showcase grid'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2023',
    featured: false
  },
  {
    id: 'weather-app',
    title: 'SkyCast',
    shortDesc: 'A real-time weather forecasting app with location tracking.',
    fullDesc: 'SkyCast provides accurate weather data using OpenWeatherMap API. It features a dynamic background that changes based on weather conditions and detailed 7-day forecasts.',
    role: 'Flutter Developer',
    techStack: ['Flutter', 'Dart', 'OpenWeather API'],
    features: [
      'Real-time weather updates',
      'Location-based forecasting',
      'Dynamic UI animations'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2023',
    featured: false
  },
  {
    id: 'task-manager',
    title: 'FocusFlow',
    shortDesc: 'A productivity app for managing tasks and daily goals.',
    fullDesc: 'FocusFlow helps users stay organized with a simplified task management system. Built with Flutter and Hive for local storage, it offers offline support and a clean dark-mode interface.',
    role: 'Mobile App Developer',
    techStack: ['Flutter', 'Hive', 'Dart'],
    features: [
      'Local data persistence',
      'Task prioritization',
      'Daily goal reminders'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2024',
    featured: false
  }
];

export function renderProjects(container = document.querySelector('main')) {
  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects';
  projectsSection.className = 'projects-section';

  // Only show featured projects on homepage (max 4)
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);
  const hasMoreProjects = projectsData.length > featuredProjects.length;

  projectsSection.innerHTML = `
    <div class="projects-container">
      <div class="projects-header">
        <h2 class="section-title">Featured <span class="highlight">Projects</span></h2>
        <p class="section-desc">Here are some of my recent works. Click on any project to learn more about it.</p>
      </div>

      <div class="projects-grid">
        ${featuredProjects.map(project => `
          <div class="project-card" data-project-id="${project.id}">
            <div class="project-card-content">
              <div class="project-header">
                <span class="project-status ${project.status === 'In Development' ? 'status-dev' : 'status-done'}">${project.status}</span>
                <span class="project-year">${project.year}</span>
              </div>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-short-desc">${project.shortDesc}</p>
              <div class="project-tech-stack">
                ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
              </div>
              <button class="project-view-btn">
                View Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      ${hasMoreProjects ? `
      <div class="projects-view-all">
        <a href="/projects" class="view-all-btn">
          View All Projects
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      ` : ''}
    </div>

    <!-- Project Modal -->
    <div class="project-modal" id="project-modal">
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div class="modal-body" id="modal-body">
          <!-- Content injected by JS -->
        </div>
      </div>
    </div>
  `;

  container.appendChild(projectsSection);
  initProjectsLogic(projectsSection, featuredProjects);
}

function initProjectsLogic(section, projects = projectsData) {
  const modal = section.querySelector('#project-modal');
  const modalBody = section.querySelector('#modal-body');
  const modalBackdrop = section.querySelector('.modal-backdrop');
  const modalClose = section.querySelector('.modal-close');
  const projectCards = section.querySelectorAll('.project-card');

  // Open modal on card click
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        openModal(project);
      }
    });
  });

  // Close modal events
  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  let modalPushed = false;

  function openModal(project) {
    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-row">
          <h2 class="modal-title">${project.title}</h2>
          <span class="modal-status ${project.status === 'In Development' ? 'status-dev' : 'status-done'}">${project.status}</span>
        </div>
        <p class="modal-role">${project.role}</p>
      </div>

      <div class="modal-section">
        <h4>About This Project</h4>
        <p class="modal-desc">${project.fullDesc}</p>
      </div>

      <div class="modal-section">
        <h4>Key Features</h4>
        <ul class="modal-features">
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>Tech Stack</h4>
        <div class="modal-tech-stack">
          ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
      </div>

      <div class="modal-links">
        ${project.links.github ? `
          <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="modal-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        ` : ''}
        ${project.links.playstore ? `
          <a href="${project.links.playstore}" target="_blank" rel="noopener noreferrer" class="modal-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            View on Play Store
          </a>
        ` : ''}
        ${!project.links.github && !project.links.playstore ? `
          <span class="modal-coming-soon">Links coming soon...</span>
        ` : ''}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Push state to history for back button support
    history.pushState({ modalOpen: true }, '', window.location.hash);
    modalPushed = true;
  }

  function closeModal(shouldGoBack = true) {
    if (!modal.classList.contains('active')) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';

    // If modal was closed via X or backdrop (not back button), remove history entry
    if (shouldGoBack && modalPushed) {
      history.back();
    }
    modalPushed = false;
  }

  // Handle local close events (popstate is handled in main.js)
  window.addEventListener('closeCurrentModal', () => closeModal(false));
}
