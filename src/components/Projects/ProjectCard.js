export function renderProjectCard(project) {
    return `
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
  `;
}
