import './Projects.css';

// Project data - easily editable
export const projectsData = [
  {
    id: 'risewell',
    title: 'Risewell',
    shortDesc: 'An alarm app with dynamic music and daily inspiration quotes.',
    fullDesc: `Risewell is an alarm application that transforms your morning routine. It features dynamic music that changes with each alarm, a daily inspiration system with motivational quotes, and a clean interface designed entirely in Figma.`,
    role: 'Full-Stack Developer & UI/UX Designer',
    techStack: ['Flutter', 'Supabase', 'Figma', 'Clean Architecture'],
    features: [
      'Dynamic music selection for each alarm',
      'Daily motivational quotes and inspiration',
      'Cloud sync with Supabase backend for motivational quotes'
    ],
    links: {
      github: null,
      playstore: null,
      live: null
    },
    status: 'In Development',
    year: '2025',
    featured: true
  },
  {
    id: 'findout',
    title: 'FindOut',
    shortDesc: 'A multi-vendor discovery platform for food and residences.',
    fullDesc: `FindOut is a discovery ecosystem connecting users with local businesses. It features search experience powered by Algolia, allowing users to browse food menus, residence pricing, and reviews. The platform includes a complex multi-role architecture where business owners can register via phone authentication and manage listings through an admin transition flow, supported by an automated Zoho Mail and Firebase verification system.`,
    role: 'Full-Stack Developer & Architect',
    techStack: ['Flutter', 'Firebase', 'Algolia', 'Zoho Mail', 'Cloudflare', 'Google Maps API', 'Clean Architecture'],
    features: [
      'Search with Algolia integration for real-time results',
      'Dynamic business listings with images, reviews, menus, and pricing',
      'Phone-based authentication and multi-role (User/Admin) management',
      'Automated admin onboarding with Zoho Mail notifications and Firebase verification',
      'Highly secure infrastructure protected by Firebase App Check'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik/City-Helper-System',
      playstore: 'https://play.google.com/store/apps/details?id=com.bmenterprises.findout',
      live: 'https://findout.com.pk'
    },
    status: 'Completed',
    year: '2023-2025',
    featured: true
  },
  {
    id: 'ecommerce-app',
    title: 'ShopSmart',
    shortDesc: 'A full-stack e-commerce application with Stripe integration.',
    fullDesc: `ShopSmart is an e-commerce application developed as part of Andrea Bizzotto's specialized Full-Stack Flutter course. It implements a clean architecture with Riverpod for robust state management, Firebase for scalable backend services, and Stripe for secure server-side payment processing.`,
    role: 'Full-Stack Developer',
    techStack: ['Flutter', 'Firebase', 'Stripe', 'Algolia', 'Clean Architecture'],
    features: [
      'Clean Architecture with domain-driven design and Riverpod',
      'Secure checkout flow with Stripe payment integration',
      'Server-side payment verification via Firebase Cloud Functions',
      'Persistent shopping cart and real-time product inventory sync',
      'Authenticated user profiles and order history management',
      'Admin panel for product management'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik/Full-Stack-Ecommerce-App',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2024',
    featured: true
  },
  {
    id: 'ai-todo-app',
    title: 'SmartTask AI',
    shortDesc: 'A productivity app with Gemini-powered conversational task creation and Shorebird OTA.',
    fullDesc: 'SmartTask AI is a high-performance productivity application that integrates Google\'s Gemini AI for task management. Built with a clean feature-first architecture, it utilizes flutter_bloc for state management and Drift for a reactive local database. The project also implements advanced DevOps practices, including automated CI/CD with Codemagic and Over-the-Air (OTA) hotfixes using Shorebird.',
    role: 'Full Stack Developer',
    techStack: ['Flutter', 'Gemini AI', 'flutter_bloc', 'Drift (SQLite)', 'Shorebird', 'Firebase Crashlytics', 'Codemagic'],
    features: [
      'Conversational AI assistant for task creation and management',
      'Real-time Voice Input for hands-free workflow',
      'Reactive local storage using Drift on top of SQLite',
      'Shorebird integration for seamless Over-the-Air updates',
      'Automated CI/CD tag-based release system via Codemagic',
      'Feature-first Clean Architecture (Domain, Data, Application, Presentation)'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik/todo_app',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2025',
    featured: true
  },
  {
    id: 'food-app-ui',
    title: 'FoodExpress UI',
    shortDesc: 'A food delivery application UI built with Flutter.',
    fullDesc: 'FoodExpress UI is a mobile application interface designed to showcase advanced UI implementation in Flutter. It covers the complete user journey, including authentication, category-based food browsing, detailed product descriptions, cart management, and a streamlined checkout process. This project focuses on visual excellence and smooth user transitions.',
    role: 'Flutter UI Developer',
    techStack: ['Dart', 'Flutter'],
    features: [
      'Complete authentication flow (Login/Register) UI',
      'Dynamic Home screen with categorized food discovery',
      'Food Description and detail screens',
      'Cart management and Order summary interface',
      'Checkout and payment selection UI'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik/simple_food_app',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2024',
    featured: false
  },
  {
    id: 'v-card-scanner',
    title: 'Virtual Card Scanner',
    shortDesc: 'AI-powered business card scanner with OCR and contact management.',
    fullDesc: 'V-Card Scanner is a smart utility app that simplifies networking. Using Google ML Kit for high-accuracy text recognition, it automatically extracts names, emails, and phone numbers from scanned business cards. Extracted data is managed via a reactive local SQL database, enabling one-tap communication (calls, emails) and location mapping directly from the saved contacts.',
    role: 'Flutter Developer',
    techStack: ['Flutter', 'Google ML Kit (OCR)', 'Sqflite', 'Provider'],
    features: [
      'Real-time OCR scanning using Google ML Kit Text Recognition',
      'Automated data extraction (Email, Phone, Designation, Company)',
      'Persistent local contact management with Sqflite database',
      'Dynamic Light & Dark theme support'
    ],
    links: {
      github: 'https://github.com/Bilawal-Mehfooz-Malik/v_card',
      playstore: null,
      live: null
    },
    status: 'Completed',
    year: '2024',
    featured: true
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
        ${project.links.live ? `
          <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="modal-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            View on Web
          </a>
        ` : ''}
        ${!project.links.github && !project.links.playstore && !project.links.live ? `
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
