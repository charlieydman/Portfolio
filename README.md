# Portfolio Website

## Overview

This is a static portfolio website showcasing creative works across multiple disciplines including jewelry, woodworking, and 3D models. The site features an interactive project browser with a minimal, clean design that emphasizes visual content. Originally built as a Flask application, it has been converted to a static site for GitHub Pages deployment, maintaining all interactive functionality through client-side JavaScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML Structure**: Three main pages (index.html, about.html, contact.html) with a grid-based layout using Bootstrap's dark theme
- **Interactive Project Browser**: Two-column layout where the left column displays a project list and the right column shows either profile information or detailed project content
- **Component-Based JavaScript**: Modular approach with separate files for gallery functionality and portfolio data management
- **Responsive Design**: Mobile-first approach using CSS Grid and Bootstrap components

### Data Management
- **Client-Side Data Storage**: Portfolio data stored in JavaScript objects within `static/js/portfolio-data.js`, eliminating the need for a backend database
- **Dynamic Content Rendering**: JavaScript-driven project rendering that populates the interface from the data structure
- **Tag-Based Organization**: Projects categorized by type (jewelry, woodwork, WIP, sketch) with color-coded visual indicators

### User Interface Design
- **Minimal Aesthetic**: Clean, typography-focused design with generous whitespace
- **Interactive Gallery**: GLightbox integration for full-screen image viewing with touch navigation support
- **State Management**: JavaScript handles switching between profile view and project detail view without page reloads
- **Loading States**: Progressive image loading with error handling for missing assets

### Styling Architecture
- **CSS Custom Properties**: Consistent color scheme and typography using CSS variables
- **Component Styles**: Modular CSS structure with specific styling for project items, tags, and interactive elements
- **Theme Integration**: Bootstrap dark theme as the foundation with custom overrides for branding

## External Dependencies

### Frontend Libraries
- **Bootstrap 5**: UI framework with Replit dark theme variant for consistent styling
- **Font Awesome 6**: Icon library for decorative and functional icons throughout the interface
- **GLightbox**: Modern lightbox library for image gallery functionality with touch support and responsive behavior

### Content Delivery
- **Unsplash**: External image service providing placeholder images for portfolio projects
- **CDN Dependencies**: All external libraries loaded via CDN for faster deployment and reduced bundle size

### Deployment Platform
- **GitHub Pages**: Static site hosting with automatic deployment from the main branch
- **Git Integration**: Version control with standard Git workflow for updates and changes

### Browser APIs
- **DOM Manipulation**: Vanilla JavaScript for dynamic content updates and user interaction handling
- **CSS Grid/Flexbox**: Modern layout technologies for responsive design without additional framework dependencies
