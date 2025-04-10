/**
 * navigation-update.js
 * This standalone script updates the navigation structure across all pages.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all navigation menus on the page (in case there are multiple)
    const navMenus = document.querySelectorAll('nav');
    
    navMenus.forEach(nav => {
        // Process each navigation menu
        const mainNavItems = nav.querySelectorAll('.main-nav > li');
        
        if (mainNavItems.length > 0) {
            // We found a main navigation menu, now process it
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
        }
    });
});
