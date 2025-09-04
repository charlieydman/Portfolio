# GitHub Pages Deployment Instructions

Your portfolio website has been converted from Flask to static HTML for GitHub Pages deployment.

## Files Ready for GitHub Pages

- `index.html` - Main portfolio page with interactive project switching
- `about.html` - About page with your skills and philosophy  
- `contact.html` - Contact page with form and information
- `static/` - All CSS and JavaScript files
  - `static/css/style.css` - Your custom styles and colored tags
  - `static/js/gallery.js` - Interactive functionality (lightbox, project switching)
  - `static/js/portfolio-data.js` - Portfolio data (moved from Python to JavaScript)

## Deploy to GitHub Pages

1. **Push to GitHub Repository:**
   ```bash
   git add .
   git commit -m "Convert to static site for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Select source: "Deploy from a branch"
   - Select branch: "main"
   - Select folder: "/ (root)"
   - Click "Save"

3. **Your site will be available at:**
   `https://yourusername.github.io/your-repository-name`

## Features Preserved

✅ **Interactive project switching** - Click projects on left to view details on right  
✅ **Colored tags** - WIP (red), jewelry (teal), woodwork (gray), sketch (orange)  
✅ **Lightbox gallery** - "View Full Size" opens images in lightbox  
✅ **Responsive design** - Works on mobile and desktop  
✅ **About and Contact pages** - Fully functional static pages  

## No Server Required

The site is now fully static - no Python/Flask server needed. All functionality runs in the browser using JavaScript.

## Customizing Your Portfolio

To add/edit projects, modify the `PORTFOLIO_DATA` object in `static/js/portfolio-data.js`:

```javascript
'jewelry': [
    {
        'title': 'Your New Project',
        'description': 'Project description',  
        'image': 'https://your-image-url.com/image.jpg',
        'thumbnail': 'https://your-image-url.com/thumb.jpg',
        'tags': ['jewelry', 'WIP'] // Available tags: WIP, jewelry, woodwork, sketch
    }
]
```

## Custom Domain (Optional)

To use a custom domain like `yourname.com`:
1. Add a `CNAME` file in your repository root with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in GitHub Pages settings