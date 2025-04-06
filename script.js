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
