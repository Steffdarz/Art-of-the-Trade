# Art of the Trade

A comprehensive educational website focused on cryptocurrency trading, covering futures trading, Web3, technical analysis, trading psychology, and weekly market updates.

## Features

- Clean, professional design focused on educational content
- Comprehensive curriculum covering both technical and psychological aspects of trading
- Dropdown navigation for easy access to subtopics
- Responsive design that works on mobile and desktop
- Weekly Bitcoin market analysis with archives
- Clearly defined content areas for easy updating

## Site Structure

### Futures Trading Section
- `futures.html` - Overview of cryptocurrency futures trading
- `trading-mindset.html` - Psychology, emotional control, and journaling for traders
- `risk-management.html` - Position sizing, stop losses, and risk-to-reward strategies
- `technical-analysis.html` - Chart reading, pattern recognition, and indicator usage

### Web3 Trading Section
- `web3.html` - Introduction to Web3 and decentralized trading
- `dex-trading.html` - Guide to decentralized exchanges and liquidity pools
- `trading-tools.html` - Essential tools for cryptocurrency traders
- `web3-strategy.html` - Trading strategies for Web3 markets

### Market Analysis
- `market.html` - Weekly Bitcoin market analysis (updated weekly)
- `market-archives.html` - Archive of previous market updates

### Resources
- `resources-chart-patterns.html` - Library of chart patterns for technical analysis

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

## Updating Weekly Market Analysis

To update the weekly market analysis:

1. Save the current `market.html` content as `market-YYYYMMDD.html` (e.g., `market-20250406.html`)
2. Add the new date file to the archives list in `market-archives.html` with a brief description
3. Update `market.html` with your new analysis for the current week
4. Change the date and update all relevant content sections

## Creating New Pages

1. Copy the `page-template.html` file
2. Rename it to your desired page name (e.g., `new-topic.html`)
3. Update the PAGE_TITLE and PAGE_DESCRIPTION placeholders
4. Add your content between the content area comments
5. Link to your new page from the appropriate menu item

## File Structure

- `index.html` - Homepage
- `styles.css` - Main stylesheet
- `script.js` - JavaScript functionality
- `page-template.html` - Template for creating new content pages
- Various content pages (futures.html, trading-mindset.html, etc.)

## Customization

- To change colors, modify the CSS variables at the top of `styles.css`
- To add new sections or modules, copy existing HTML structures and update content
- To add new menu items, update the navigation section in the header

## Need Help?

For more advanced customization or troubleshooting, consider:
- Learning basic HTML/CSS from resources like MDN Web Docs or W3Schools
- Hiring a freelancer for specific changes
- Using AI tools to help generate HTML for new sections
