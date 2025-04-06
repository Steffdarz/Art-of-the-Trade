# TradeLearn - Trading Education Website

A clean, simple educational website focused on trading education with sections for futures trading and Web3 trading.

## Features

- Clean, distraction-free design focused on educational content
- Dropdown navigation for easy access to subtopics
- Responsive design that works on mobile and desktop
- Clearly defined content areas for easy updating

## Deployment Instructions

### How to Deploy with GitHub Pages

1. Create a GitHub account if you don't have one
2. Create a new repository (can be named anything)
3. Upload all files from this package to your repository
4. Go to repository Settings > Pages
5. Under "Source", select "main" branch
6. Your site will be published at `https://yourusername.github.io/repositoryname`

### How to Deploy with Vercel

1. Create a Vercel account and connect it to your GitHub
2. Import your repository to Vercel
3. Vercel will automatically deploy your site
4. You'll get a custom URL like `yourproject.vercel.app`

## How to Update Content

This site is designed to be easy to update without coding knowledge:

1. Look for content areas marked with comments like:
   ```html
   <!-- CONTENT-AREA: section-name -->
   Content goes here...
   <!-- END-CONTENT-AREA: section-name -->
   ```

2. Replace the content between these comment tags with your own content
3. Basic HTML formatting you can use:
   - `<p>Paragraph text</p>` - For paragraphs
   - `<h2>Heading</h2>` - For headings
   - `<ul><li>List item</li></ul>` - For bullet lists
   - `<a href="url">Link text</a>` - For links

## Creating New Pages

1. Copy the `page-template.html` file
2. Rename it to your desired page name (e.g., `psychology.html`)
3. Update the PAGE_TITLE and PAGE_DESCRIPTION placeholders
4. Add your content between the content area comments
5. Link to your new page from the appropriate menu item

## File Structure

- `index.html` - Homepage
- `styles.css` - Main stylesheet
- `script.js` - JavaScript functionality
- `page-template.html` - Template for creating new content pages
- Various content pages (psychology.html, risk-management.html, etc.)

## Customization

- To change colors, modify the CSS variables at the top of `styles.css`
- To add new sections or modules, copy existing HTML structures and update content
- To add new menu items, update the navigation section in the header

## Need Help?

For more advanced customization or troubleshooting, consider:
- Learning basic HTML/CSS from resources like MDN Web Docs or W3Schools
- Hiring a freelancer for specific changes
- Using AI tools to help generate HTML for new sections
