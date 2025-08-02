let slideIndex = 1; // Keeps track of the current slide (starts at 1)
let slideInterval;  // Declare a global variable to store the interval for automatic slideshow

// Function to initialize the slideshow
// The 'isAuto' parameter determines if the slideshow should automatically advance
function initSlideshow(isAuto) 
{
    showSlides(slideIndex); // Display the first slide when the slideshow is initialized

    // If 'isAuto' is true, the slideshow will automatically advance to the next slide
    if (isAuto) 
    {
        // Set an interval to move to the next slide every 7500 milliseconds (7.5 seconds)
        slideInterval = setInterval(function() {
            plusSlides(1); // Move to the next slide
        }, 7500); // Change slide every 7.5 seconds (adjust as needed)
    }
}

// Function to manually go to the next/previous slide
// The 'n' parameter determines the direction (1 for next, -1 for previous)
function plusSlides(n) 
{
    showSlides(slideIndex += n); // Move to the next or previous slide

    // If there is an active automatic slideshow, stop it when a manual control is used
    if (slideInterval) 
    {
        clearInterval(slideInterval); // Clear the interval to stop the auto slideshow
    }
}

// Function to jump to a specific slide
// The 'n' parameter represents the specific slide number to show
function currentSlide(n) 
{
    showSlides(slideIndex = n); // Show the specific slide based on the given number

    // Clear the interval if manual slide control is used (stop the auto slideshow)
    if (slideInterval) 
    {
        clearInterval(slideInterval); 
    }
}

// Function to display the slides
// The 'n' parameter represents the current slide index
function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Select all slide elements
    let dots = document.getElementsByClassName("dot"); // Select all dot elements

    // If 'n' exceeds the number of slides, reset 'slideIndex' to 1 (loop back to the first slide)
    if (n > slides.length) 
    {
        slideIndex = 1;
    }

    // If 'n' is less than 1, set 'slideIndex' to the last slide (loop back to the last slide)
    if (n < 1) 
    {
        slideIndex = slides.length;
    }

    // Loop through all slides and hide each one by setting 'display' to 'none'
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none"; // Hide all slides
    }

    // Loop through all dots and remove the 'active' class from each one
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from dots
    }

    // Display the current slide (based on 'slideIndex')
    slides[slideIndex - 1].style.display = "block"; // Show the selected slide
    dots[slideIndex - 1].className += " active"; // Add the 'active' class to the current dot
}
