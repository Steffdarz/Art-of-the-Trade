// Simple script to enhance interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle functionality can be added here
    
    // Handle dropdown menus for mobile
    const hasDropdown = document.querySelectorAll('.has-dropdown');
    
    if (window.innerWidth <= 768) {
        hasDropdown.forEach(item => {
            item.addEventListener('click', function(e) {
                // Only handle the event if the dropdown parent link is clicked
                if (e.target === this.querySelector('a')) {
                    e.preventDefault();
                    const dropdown = this.querySelector('.dropdown');
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }

    // Add this code to make search functional if needed
    const searchForm = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Search functionality: You searched for "' + searchInput.value + '"');
            // In a real implementation, you would redirect to search results page
        });
    }
});
/**
 * Navigation Update Script
 * 
 * This script updates the navigation structure across all pages of the Art of the Trade website.
 * 
 * Changes:
 * 1. Updates the Web3 dropdown to only show Trading Tools and Web3 Strategy
 * 2. Changes Resources to have a dropdown with Chart Patterns
 * 
 * How to implement:
 * 1. Add this script to your script.js file
 * 2. The changes will be applied when each page loads
 */

document.addEventListener('DOMContentLoaded', function() {
    // Update the navigation structure
    updateNavigation();
    
    // Function to modify the navigation menu
    function updateNavigation() {
        // Find the Web3 dropdown
        const navItems = document.querySelectorAll('.main-nav > li');
        
        // Loop through all nav items to find Web3 and Resources
        navItems.forEach(item => {
            const linkText = item.querySelector('a').textContent.trim();
            
            // Update Web3 dropdown
            if (linkText.includes('Web3')) {
                const dropdown = item.querySelector('.dropdown');
                if (dropdown) {
                    // Clear existing dropdown items
                    dropdown.innerHTML = '';
                    
                    // Add only Trading Tools and Web3 Strategy
                    dropdown.innerHTML = `
                        <li><a href="trading-tools.html">Trading Tools</a></li>
                        <li><a href="web3-strategy.html">Web3 Strategy</a></li>
                    `;
                }
            }
            
            // Update Resources to have dropdown
            if (linkText.includes('Resources')) {
                // First, add the dropdown class to the li if it doesn't have it
                item.classList.add('has-dropdown');
                
                // Get the link element
                const link = item.querySelector('a');
                
                // Update the text to include the dropdown indicator
                if (!link.textContent.includes('▾')) {
                    link.textContent = 'Resources ▾';
                }
                
                // Check if dropdown already exists
                let dropdown = item.querySelector('.dropdown');
                
                // If no dropdown exists, create one
                if (!dropdown) {
                    dropdown = document.createElement('ul');
                    dropdown.className = 'dropdown';
                    item.appendChild(dropdown);
                }
                
                // Set the dropdown content
                dropdown.innerHTML = `
                    <li><a href="resources-chart-patterns.html">Chart Patterns</a></li>
                `;
            }
        });
    }
    
    // Keep the existing mobile navigation functionality
    const hasDropdown = document.querySelectorAll('.has-dropdown');
    
    if (window.innerWidth <= 768) {
        hasDropdown.forEach(item => {
            item.addEventListener('click', function(e) {
                // Only handle the event if the dropdown parent link is clicked
                if (e.target === this.querySelector('a')) {
                    e.preventDefault();
                    const dropdown = this.querySelector('.dropdown');
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }
});
