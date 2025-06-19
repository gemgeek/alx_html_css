// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the necessary DOM elements
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links'); // Assuming there's only one .nav-links element

    // Check if both elements exist before adding event listeners
    if (menuToggle && navLinks) {
        // Add an event listener to the menu toggle checkbox
        // The 'change' event fires when the checkbox's checked state changes
        menuToggle.addEventListener('change', function() {
            // Toggle the 'menu-active' class on the nav-links element
            // This class will control the visibility and animation of the menu
            if (this.checked) {
                navLinks.classList.add('menu-active'); // Add class to show menu
            } else {
                navLinks.classList.remove('menu-active'); // Remove class to hide menu
            }
        });
    } else {
        // Log an error if elements are not found, useful for debugging
        console.error('Error: menuToggle or navLinks element not found in the DOM.');
    }
});