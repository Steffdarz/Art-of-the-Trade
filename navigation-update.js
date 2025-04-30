/**
 * navigation-update.js
 * This standalone script updates the navigation structure across all pages.
 */

document.addEventListener('DOMContentLoaded', function() {
    const navMenus = document.querySelectorAll('nav');
    
    navMenus.forEach(nav => {
        const mainNav = nav.querySelector('.main-nav');
        if (!mainNav) return;

        // Get existing items
        const items = Array.from(mainNav.children);
        
        // Find Market and Resources items
        const marketItem = items.find(item => item.querySelector('a')?.textContent.includes('Market'));
        const resourcesItem = items.find(item => item.querySelector('a')?.textContent.includes('Resources'));
        
        // Create new Education dropdown
        const educationItem = document.createElement('li');
        educationItem.className = 'has-dropdown';
        educationItem.innerHTML = `
            <a href="javascript:void(0);">Education ▾</a>
            <ul class="dropdown">
                <li><a href="Trading Process & Manual Part 1.html">Trading Process Part 1</a></li>
                <li><a href="Trading Process & Manual Part 2.html">Trading Process Part 2</a></li>
                <li><a href="The Trading Mindset & Psychology - Part 1.html">Trading Mindset Part 1</a></li>
                <li><a href="The Trading Mindset & Psychology - Part 2.html">Trading Mindset Part 2</a></li>
                <li><a href="The Trading Mindset & Psychology - Part 3.html">Trading Mindset Part 3</a></li>
                <li><a href="Trading Routine and Goal Setting.html">Trading Routine</a></li>
            </ul>
        `;

        // Remove old items
        if (marketItem) marketItem.remove();
        if (resourcesItem) resourcesItem.remove();

        // Add items in correct order
        mainNav.appendChild(educationItem);
        if (marketItem) mainNav.appendChild(marketItem);
        if (resourcesItem) mainNav.appendChild(resourcesItem);

        // Continue with existing dropdown functionality
        const mainNavItems = mainNav.querySelectorAll('li');
        
        mainNavItems.forEach(item => {
            const link = item.querySelector('a');
            
            if (!link) return; // Skip if no link found
            
            const linkText = link.textContent.trim();
            
            // Update Web3 dropdown
            if (linkText.includes('Web3')) {
                // Add dropdown class if not already present
                item.classList.add('has-dropdown');
                
                // Get or create dropdown
                let dropdown = item.querySelector('.dropdown');
                if (!dropdown) {
                    dropdown = document.createElement('ul');
                    dropdown.className = 'dropdown';
                    item.appendChild(dropdown);
                }
                
                // Update dropdown content
                dropdown.innerHTML = `
                    <li><a href="trading-tools.html">Trading Tools</a></li>
                    <li><a href="web3-strategy.html">Web3 Strategy</a></li>
                `;
            }
            
            // Update Resources to have dropdown without redirect
            if (linkText.includes('Resources')) {
                // Add dropdown class if not already present
                item.classList.add('has-dropdown');
                
                // Update link to prevent navigation
                link.setAttribute('href', 'javascript:void(0);');
                
                // Ensure dropdown indicator is present
                if (!linkText.includes('▾')) {
                    link.textContent = 'Resources ▾';
                }
                
                // Get or create dropdown
                let dropdown = item.querySelector('.dropdown');
                if (!dropdown) {
                    dropdown = document.createElement('ul');
                    dropdown.className = 'dropdown';
                    item.appendChild(dropdown);
                }
                
                // Update dropdown content
                dropdown.innerHTML = `
                    <li><a href="resources-chart-patterns.html">Chart Patterns</a></li>
                `;
                
                // Add click handler for Resources
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const dropdown = item.querySelector('.dropdown');
                    if (dropdown) {
                        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                    }
                });
            }
        });
        
        // Handle mobile navigation functionality
        if (window.innerWidth <= 768) {
            const dropdownItems = nav.querySelectorAll('.has-dropdown');
            dropdownItems.forEach(item => {
                const dropdownLink = item.querySelector('a');
                if (dropdownLink) {
                    dropdownLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        const dropdown = item.querySelector('.dropdown');
                        if (dropdown) {
                            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                        }
                    });
                }
            });
        }
    });
});
