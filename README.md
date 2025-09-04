# Portfolio Website

## Overview

This is a  portfolio website showcasing my creative works across multiple disciplines including jewelry, woodworking, sketches. The site features an interactive project browser with a minimal, clean design that emphasizes visual content.

## System Architecture

### Frontend Architecture
- **Static HTML Structure**: Two main pages (index.html and about.html)
- **Interactive Project Browser**: Two-column layout where the left column displays a project list and the right column shows either profile information or detailed project content
- **Component-Based JavaScript**: Modular approach with separate files for gallery functionality and portfolio data management

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

### Deployment Platform
- **GitHub Pages**: Static site hosting with automatic deployment from the main branch
- **Git Integration**: Version control with standard Git workflow for updates and changes

### Browser APIs
- **DOM Manipulation**: Vanilla JavaScript for dynamic content updates and user interaction handling
- **CSS Grid/Flexbox**: Modern layout technologies for responsive design without additional framework dependencies
