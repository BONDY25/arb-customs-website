// Select the hamburger menu button, close button, and the nav element
const menuToggle = document.querySelector('.menu-toggle');  // Button to toggle the menu (hamburger icon)
const closeMenuButton = document.querySelector('.close-menu'); // Button to close the menu (appears only on small screens)
const nav = document.querySelector('nav'); // The navigation element (menu itself)

// Function to toggle the navigation menu open or closed
function toggleMenu() 
{
    nav.classList.toggle('active'); // Adds or removes the 'active' class to show or hide the menu
    
    // Only show the close button if the screen width is 768px or smaller
    if (window.innerWidth <= 768) 
    {
        // If the nav has the 'active' class (menu is open), show the close button, otherwise hide it
        closeMenuButton.style.display = nav.classList.contains('active') ? 'block' : 'none';
    }
}

// Event listener for the hamburger menu button
// When the hamburger icon is clicked, it will run the 'toggleMenu' function
menuToggle.addEventListener('click', toggleMenu);

// Function to close the menu
function closeMenu() 
{
    nav.classList.remove('active'); // Removes the 'active' class, hiding the menu
    
    // If the screen width is 768px or smaller, hide the close button
    if (window.innerWidth <= 768) 
    {
        closeMenuButton.style.display = 'none'; // Ensures the close button is hidden when the menu is closed
    }
}

// Event listener for the close button (on small screens)
// When the close button is clicked, it will run the 'closeMenu' function to hide the menu
closeMenuButton.addEventListener('click', closeMenu);

// Event listener for the Escape key
// This listens for keypress events, and if the Escape key is pressed, the menu will close
document.addEventListener(
'keydown', function(event) 
{
    if (event.key === 'Escape') 
    {   // If the Escape key is pressed
        closeMenu(); // Run the 'closeMenu' function to hide the menu
    }
}
);
