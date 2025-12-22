import './styles/main.css';
import { renderNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './components/Hero/Hero.js';
import { renderResume } from './components/Resume/Resume.js';

console.log('Initializing Portfolio...');

// Render Components
renderNavbar();

// Main Content Container
const main = document.createElement('main');
document.body.appendChild(main);

renderHero();
renderResume();

console.log('Portfolio Initialized.');
