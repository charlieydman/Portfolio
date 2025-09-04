// Portfolio data for static GitHub Pages deployment
const PORTFOLIO_DATA = {
    'jewelry': [
        {
            'title': 'Silver Ring Collection',
            'description': 'Handcrafted silver rings with intricate designs',
            'image': 'Portfolio\static\img\IMG_2393.jpg',
            'thumbnail': 'Portfolio\static\img\IMG_2393.jpg',
            'year': '2025',
            'tags': ['jewelry']
        }
    ],
    'woodworking': [
       
    ],
    'drawings': [
    ]
};

const CATEGORIES = {
    'jewelry': 'Jewelry',
    'woodworking': 'Woodworking',
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
                       data-year="${item.year}"
                       data-category="${CATEGORIES[category]}">
                       
                        <span class="project-title">${item.title}</span>
                        ${item.tags && item.tags.length > 0 ? `
                            <div class="project-tags">
                                ${item.tags.map(tag => `<span class="tag tag-${tag}">${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                        <span class="project-year">${item.year}</span>
                    </a>
                </div>
            `;
        }
    }
    
    projectList.innerHTML = html;
}