# Portfolio Website

## Overview

This is a personal portfolio website built with Flask that showcases creative works across multiple disciplines including jewelry making, woodworking, 3D modeling, and drawings. The application provides a clean, responsive interface for displaying artistic projects with an image gallery system, detailed project descriptions, and contact functionality. The website serves as a digital showcase for creative professionals to display their work and connect with potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a traditional server-side rendered architecture with Flask templates and Jinja2 templating engine. The frontend leverages Bootstrap 5 for responsive design and dark theme support, ensuring consistent styling across devices. JavaScript is used minimally for interactive features like image galleries and smooth scrolling, with GLightbox providing elegant lightbox functionality for image viewing.

### Backend Architecture
The backend follows a simple Flask application structure with clear separation of concerns:
- `app.py` serves as the application factory and entry point
- `routes.py` contains all route definitions and business logic
- Templates are organized in a dedicated `templates/` directory with template inheritance
- Static assets (CSS/JS) are served from the `static/` directory

The application uses a straightforward MVC pattern where routes act as controllers, templates as views, and portfolio data is currently stored as Python dictionaries (simulating a model layer).

### Data Storage
Currently implements an in-memory data structure (`PORTFOLIO_DATA` dictionary) containing portfolio items organized by categories. This approach was chosen for simplicity and ease of deployment, though the code comments indicate awareness that a database would be more appropriate for production use. The data structure supports multiple categories with consistent schema including titles, descriptions, and image URLs.

### Authentication and Authorization
No authentication system is currently implemented, as this is a public portfolio website designed for showcasing work rather than user management. Session management is configured but minimal, primarily for potential future features like contact form submissions.

### Template System
Uses Jinja2 templating with a base template (`base.html`) that provides consistent navigation, Bootstrap integration, and common page structure. Child templates extend this base for specific pages (home, gallery, about, contact), promoting code reuse and maintainable styling.

## External Dependencies

### Frontend Libraries
- **Bootstrap 5**: CSS framework for responsive design and dark theme support via CDN
- **Font Awesome 6**: Icon library for visual elements throughout the interface
- **GLightbox**: JavaScript library for image lightbox functionality and gallery navigation

### Backend Framework
- **Flask**: Core web framework handling routing, templating, and HTTP requests
- **Python Standard Library**: Uses `os` for environment variable management and `logging` for debugging

### External Services
- **Unsplash**: Image hosting service providing placeholder images for portfolio items via their API-based URLs
- **CDN Services**: Content delivery for Bootstrap, Font Awesome, and GLightbox to improve loading performance

### Development Dependencies
The application is configured for development with Flask's built-in server, debug mode enabled, and basic logging for troubleshooting. Production deployment would require additional considerations like WSGI server integration and environment-specific configuration.