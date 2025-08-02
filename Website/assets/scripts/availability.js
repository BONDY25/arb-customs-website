// Wait for the entire DOM (Document Object Model) to load before running the script
document.addEventListener(
"DOMContentLoaded", function() 
{
    // Select the element with the class 'availability'
    const availabilityStatus = document.querySelector('.availability');
    
    // Check if the 'availability' element exists on the page
    if (availabilityStatus) 
    {
        // Trim any extra whitespace and check if the content is 'Currently Unavailable'
        if (availabilityStatus.textContent.trim() === 'Currently Unavailable') 
        {
            // If the text is 'Currently Unavailable', change the text color to red
            availabilityStatus.style.color = 'red';
            
        } 
        // Otherwise, check if the content is 'Available'
        else if (availabilityStatus.textContent.trim() === 'Available') 
        {
            // If the text is 'Available', change the text color to green
            availabilityStatus.style.color = 'green';
        }
    }
}
);
