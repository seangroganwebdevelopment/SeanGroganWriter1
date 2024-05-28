
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

// JavaScript code to change the color code of the webpage
document.addEventListener('DOMContentLoaded', function() {
    const colorToggleBtn = document.getElementById('color-toggle');
    const colors = ['#ff1000', '#f14f90', '#0600ff']; // Define an array of color codes

    let colorIndex = 0; // Initialize color index

    colorToggleBtn.addEventListener('click', function() {
        // Change the background color of the body
        document.body.style.backgroundColor = colors[colorIndex];

        // Change the background color of the sections
        const sections = document.querySelectorAll('.bio-section'); // Replace '.bio-section' with the appropriate selector for your sections
        sections.forEach(section => {
            section.style.backgroundColor = colors[colorIndex];
        });

        // Increment color index and reset if it exceeds the array length
        colorIndex = (colorIndex + 1) % colors.length;
    });
});

