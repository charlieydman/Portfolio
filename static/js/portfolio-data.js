// Portfolio data for static GitHub Pages deployment
const PORTFOLIO_DATA = {
    'jewelry': [
        {
            'title': 'Silver Ring Collection',
            'description': 'Handcrafted silver rings with intricate designs',
            'image': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop',
            'tags': ['jewelry']
        },
        {
            'title': 'Gold Pendant Series',
            'description': 'Elegant gold pendants with gemstone accents',
            'image': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop',
            'tags': ['jewelry', 'WIP']
        },
        {
            'title': 'Custom Wedding Bands',
            'description': 'Personalized wedding bands crafted to perfection',
            'image': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop',
            'tags': ['jewelry']
        }
    ],
    'woodworking': [
        {
            'title': 'Oak Dining Table',
            'description': 'Solid oak dining table with live edge finish',
            'image': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop',
            'tags': ['woodwork']
        },
        {
            'title': 'Walnut Coffee Table',
            'description': 'Modern walnut coffee table with steel legs',
            'image': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop',
            'tags': ['woodwork', 'WIP']
        },
        {
            'title': 'Custom Bookshelf',
            'description': 'Built-in bookshelf with adjustable shelving',
            'image': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop',
            'tags': ['woodwork']
        }
    ],
    'models3d': [
        {
            'title': 'Architectural Visualization',
            'description': 'Modern house exterior 3D rendering',
            'image': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop',
            'tags': ['WIP']
        },
        {
            'title': 'Product Design Model',
            'description': 'Consumer electronics design concept',
            'image': 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=200&h=200&fit=crop',
            'tags': []
        },
        {
            'title': 'Character Design',
            'description': '3D character modeling and texturing',
            'image': 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=200&h=200&fit=crop',
            'tags': ['WIP']
        }
    ],
    'drawings': [
        {
            'title': 'Portrait Study',
            'description': 'Charcoal portrait with detailed shading',
            'image': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
            'tags': ['sketch']
        },
        {
            'title': 'Landscape Sketch',
            'description': 'Pen and ink landscape drawing',
            'image': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop',
            'tags': ['sketch', 'WIP']
        },
        {
            'title': 'Abstract Composition',
            'description': 'Mixed media abstract artwork',
            'image': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
            'thumbnail': 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop',
            'tags': ['sketch']
        }
    ]
};

const CATEGORIES = {
    'jewelry': 'Jewelry',
    'woodworking': 'Woodworking',
    'models3d': '3D Models',
    'drawings': 'Drawings'
};

// Function to render the portfolio projects
function renderPortfolioProjects() {
    const projectList = document.getElementById('project-list');
    if (!projectList) return;
    
    let html = '';
    
    for (const [category, items] of Object.entries(PORTFOLIO_DATA)) {
        for (const item of items) {
            html += `
                <div class="project-item">
                    <a href="#" class="project-link" 
                       data-title="${item.title}" 
                       data-description="${item.description}"
                       data-image="${item.image}"
                       data-thumbnail="${item.thumbnail}"
                       data-category="${CATEGORIES[category]}">
                        <span class="project-title">${item.title}</span>
                        ${item.tags && item.tags.length > 0 ? `
                            <div class="project-tags">
                                ${item.tags.map(tag => `<span class="tag tag-${tag}">${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                        <span class="project-year">2024</span>
                    </a>
                </div>
            `;
        }
    }
    
    projectList.innerHTML = html;
}