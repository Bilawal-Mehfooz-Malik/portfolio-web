import './Projects.css';
import { renderProjectCard } from './ProjectCard.js';
import { ProjectModal } from './ProjectModal.js';

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
    featured: false
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
        ${featuredProjects.map(project => renderProjectCard(project)).join('')}
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

    ${ProjectModal.render()}
  `;

  container.appendChild(projectsSection);
  ProjectModal.init(projectsSection, projectsData);
}
