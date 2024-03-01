
function toggleSection(sectionId) {
    var content = document.getElementById(sectionId);
    var button = content.previousElementSibling.querySelector('button'); // Adjust based on your actual HTML structure if needed

    if (content.style.display === "none" || !content.style.display) {
        content.style.display = "block";
        button.textContent = "Collapse this section ▴";
    } else {
        content.style.display = "none";
        button.textContent = "Expand this section ▾";
    }
}

document.getElementById('goToMisTac').addEventListener('click', function() {
    window.location.href = 'misTac.html';
});



document.addEventListener('DOMContentLoaded', function() {
    // Query all the elements with the class 'toggle-sym'
    document.querySelectorAll('.toggle-sym').forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            // The next sibling element of the toggle, which should be the content to show/hide
            var content = this.nextElementSibling;
            
            // Check if the content is currently displayed
            if (content.style.display === 'none') {
                // Show the content
                content.style.display = '';
                // Change symbol to '–'
                this.textContent = '–';
            } else {
                // Hide the content
                content.style.display = 'none';
                // Change symbol back to '+'
                this.textContent = '+';
            }
        });
    });
});

