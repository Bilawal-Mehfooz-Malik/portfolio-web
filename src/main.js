import './styles/main.css';
import { renderNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './components/Hero/Hero.js';
import { renderResume } from './components/Resume/Resume.js';
import { renderProjects } from './components/Projects/Projects.js';
import { renderProjectsPage } from './components/ProjectsPage/ProjectsPage.js';
import { renderContact } from './components/Contact/Contact.js';
import { renderFooter } from './components/Footer/Footer.js';

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
        renderContact(container);
        renderFooter(container);
    }
}


/**
 * Main router function
 */
async function router(targetSectionId = null) {
    if (isAnimating) return;

    const path = window.location.pathname;
    const newRoute = getRouteType(path);

    // If we're already on the correct route but need to scroll to a section
    if (newRoute === currentRoute && main.children.length > 0) {
        if (targetSectionId) {
            scrollToSection(targetSectionId);
        }
        return;
    }

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

            if (targetSectionId && newRoute === 'home') {
                scrollToSection(targetSectionId);
            } else if (returningFromProjects) {
                // Default return scroll restoration
                window.scrollTo({
                    top: savedScrollPosition,
                    behavior: 'smooth'
                });
            }
        }, 700);
    } else {
        main.appendChild(newContainer);
        window.scrollTo(0, 0);
        if (targetSectionId && newRoute === 'home') {
            setTimeout(() => scrollToSection(targetSectionId), 100);
        }
    }

    currentRoute = newRoute;
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
        const offset = 80; // Account for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Clean up URL hash after scroll
        setTimeout(() => {
            history.pushState(null, null, window.location.pathname);
        }, 1000);
    }
}

// Navigation helper
export function navigate(path, targetSectionId = null) {
    if (window.location.pathname === path && !targetSectionId) return;
    window.history.pushState({}, '', path);
    router(targetSectionId);
}

// Global click handler to intercept links
document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !link.href) return;

    const url = new URL(link.href);
    const isInternalOrigin = url.origin === window.location.origin;

    if (isInternalOrigin) {
        const path = url.pathname;
        const hash = url.hash;

        // Special handling for section links (#about, #projects, etc)
        if (hash && (path === '/' || path === window.location.pathname)) {
            e.preventDefault();

            if (getRouteType(window.location.pathname) === 'home') {
                // We're already on home, just scroll
                scrollToSection(hash);
            } else {
                // We're on projects, navigate back to home then scroll
                navigate('/', hash);
            }
            return;
        }

        // Standard route navigation (/projects, /)
        const isInternalRoute = path === '/' || path === '/projects';
        if (isInternalRoute) {
            e.preventDefault();
            navigate(path);
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
