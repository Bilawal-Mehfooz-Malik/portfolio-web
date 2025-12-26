import './ProjectsPage.css';
import { projectsData } from '../Projects/Projects.js';
import { renderProjectCard } from '../Projects/ProjectCard.js';
import { ProjectModal } from '../Projects/ProjectModal.js';

export function renderProjectsPage(container = document.querySelector('main')) {
  const projectsPage = document.createElement('section');
  projectsPage.className = 'projects-page';

  projectsPage.innerHTML = `
    <div class="projects-page-container">
      <div class="projects-page-header">
        <a href="/" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
        <h1 class="page-title">All <span class="highlight">Projects</span></h1>
        <p class="page-desc">A complete collection of my work and personal projects.</p>
      </div>

      <div class="projects-page-grid">
        ${projectsData.map(project => renderProjectCard(project)).join('')}
      </div>
    </div>

    ${ProjectModal.render()}
  `;

  container.appendChild(projectsPage);
  ProjectModal.init(projectsPage, projectsData);

  // Scroll to top when page loads
  window.scrollTo(0, 0);
}
