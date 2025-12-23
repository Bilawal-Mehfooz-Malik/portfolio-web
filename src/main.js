import './styles/main.css';
import { renderNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './components/Hero/Hero.js';
import { renderResume } from './components/Resume/Resume.js';
import { renderProjects } from './components/Projects/Projects.js';
import { renderProjectsPage } from './components/ProjectsPage/ProjectsPage.js';

console.log('Initializing Portfolio...');

// Render Navbar (always visible)
renderNavbar();

// Main Content Container
const main = document.createElement('main');
document.body.appendChild(main);

// Simple hash-based router
function router() {
    const hash = window.location.hash || '#/';

    if (hash === '#/projects') {
        // Render Projects Page
        renderProjectsPage();
    } else {
        // Render Home Page (default)
        renderHomePage();
    }
}

function renderHomePage() {
    // Clear main content
    const main = document.querySelector('main');
    main.innerHTML = '';

    // Render home page components
    renderHero();
    renderResume();
    renderProjects();
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Initial route
router();

console.log('Portfolio Initialized.');
