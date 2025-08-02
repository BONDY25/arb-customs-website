document.addEventListener(
    "DOMContentLoaded", function() 
    {
        const availabilityStatus = document.querySelector('.availability');
        
        if (availabilityStatus) {
            if (availabilityStatus.textContent.trim() === 'Currently Unavailable') {
                availabilityStatus.style.color = 'red';
            } else if (availabilityStatus.textContent.trim() === 'Available') {
                availabilityStatus.style.color = 'green';
            }
        }
    }
);