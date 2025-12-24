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
let savedScrollPosition = 0;

function getRouteType(path) {
    if (path === '/projects') return 'projects';
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

/**
 * Main router function
 */
async function router() {
    if (isAnimating) return;

    const path = window.location.pathname;
    const newRoute = getRouteType(path);

    if (newRoute === currentRoute && main.children.length > 0) return;

    const oldContainer = main.querySelector('.page-container');

    const newContainer = document.createElement('div');
    newContainer.className = 'page-container';
    renderContent(newContainer, newRoute);

    const isForward = newRoute === 'projects';
    const returningFromProjects = !isForward && currentRoute === 'projects';

    if (oldContainer) {
        isAnimating = true;
        const scrollY = window.scrollY;

        if (isForward && currentRoute === 'home') {
            savedScrollPosition = scrollY;
        }

        // Anchor the old container visually
        oldContainer.style.top = `-${scrollY}px`;

        // Reset window scroll without visual jumping
        window.scrollTo(0, 0);

        oldContainer.classList.add('animating');
        newContainer.classList.add('animating');

        if (isForward) {
            newContainer.classList.add('slide-in-right');
        } else {
            newContainer.classList.add('slide-in-left');
        }

        main.appendChild(newContainer);
        newContainer.offsetHeight;

        requestAnimationFrame(() => {
            newContainer.classList.add('slide-active');
            if (isForward) {
                oldContainer.classList.add('slide-out-left');
            } else {
                oldContainer.classList.add('slide-out-right');
            }
        });

        setTimeout(() => {
            oldContainer.remove();
            newContainer.classList.remove('animating', 'slide-in-left', 'slide-in-right', 'slide-active');
            isAnimating = false;

            if (returningFromProjects) {
                // Smooth scroll back to section
                window.scrollTo({
                    top: savedScrollPosition,
                    behavior: 'smooth'
                });
            }
        }, 700);
    } else {
        main.appendChild(newContainer);
        window.scrollTo(0, 0);
    }

    currentRoute = newRoute;
}

// Navigation helper
export function navigate(path) {
    if (window.location.pathname === path) return;
    window.history.pushState({}, '', path);
    router();
}

// Global click handler to intercept links
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        const isInternalRoute = url.pathname === '/' || url.pathname === '/projects';

        if (isInternalRoute) {
            if (url.pathname === window.location.pathname && url.hash) {
                return;
            }

            e.preventDefault();
            navigate(url.pathname);
        }
    }
});

window.addEventListener('popstate', (e) => {
    router();
    window.dispatchEvent(new CustomEvent('closeCurrentModal'));
});

// Initial route
router();

console.log('Portfolio Initialized.');
