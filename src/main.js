import './styles/main.css';
import { renderNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './components/Hero/Hero.js';
import { renderResume } from './components/Resume/Resume.js';
import { renderProjects } from './components/Projects/Projects.js';
import { renderProjectsPage } from './components/ProjectsPage/ProjectsPage.js';

console.log('Initializing Portfolio...');

renderNavbar();

const main = document.createElement('main');
document.body.appendChild(main);

let currentRoute = null;
let isAnimating = false;
let savedScrollPosition = 0; // Remember scroll position when leaving home

function getRouteType(hash) {
    if (hash === '#/projects') return 'projects';
    return 'home';
}

function renderContent(container, routeType) {
    if (routeType === 'projects') {
        renderProjectsPage(container);
    } else {
        renderHero(container);
        renderResume(container);
        renderProjects(container);
    }
}

async function router() {
    if (isAnimating) return;

    const hash = window.location.hash || '#/';
    const newRoute = getRouteType(hash);

    // Skip if same route and content exists
    if (newRoute === currentRoute && main.children.length > 0) return;

    const oldContainer = main.querySelector('.page-container');

    // Create new container
    const newContainer = document.createElement('div');
    newContainer.className = 'page-container';
    renderContent(newContainer, newRoute);

    // Determine direction: going to projects = forward, going to home = backward
    const isForward = newRoute === 'projects';

    // Track if we're returning from projects page
    const returningFromProjects = !isForward && currentRoute === 'projects';

    if (oldContainer) {
        isAnimating = true;

        // Always scroll to top at the start of animation
        window.scrollTo(0, 0);

        // Add animating class to both
        oldContainer.classList.add('animating');
        newContainer.classList.add('animating');

        // Set initial position for new container
        if (isForward) {
            // New page slides in from the right (translateX(100%))
            newContainer.classList.add('slide-in-right');
        } else {
            // New page slides in from the left (translateX(-100%))
            newContainer.classList.add('slide-in-left');
        }

        // Add new container to DOM
        main.appendChild(newContainer);

        // Force reflow to ensure initial position is applied
        newContainer.offsetHeight;

        // Animate both containers
        requestAnimationFrame(() => {
            // Move new container to center
            newContainer.classList.add('slide-active');

            // Move old container off screen
            if (isForward) {
                oldContainer.classList.add('slide-out-left');
            } else {
                oldContainer.classList.add('slide-out-right');
            }
        });

        // Cleanup after animation
        setTimeout(() => {
            oldContainer.remove();
            newContainer.classList.remove('animating', 'slide-in-left', 'slide-in-right', 'slide-active');
            isAnimating = false;

            // Smoothly scroll to projects section when returning from projects page
            if (returningFromProjects) {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 500);
    } else {
        // First render, no animation needed
        main.appendChild(newContainer);
        window.scrollTo(0, 0);
    }

    currentRoute = newRoute;
}

window.addEventListener('hashchange', router);

window.addEventListener('popstate', () => {
    window.dispatchEvent(new CustomEvent('closeCurrentModal'));
});

router();

console.log('Portfolio Initialized.');

