// Basic JavaScript for Orbstack Dev landing page
console.log('Orbstack Dev landing page loaded');

// Example: Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    const cursor = document.getElementById('cursor');

    // Move custom cursor
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });

    // Change cursor size on hover over clickable elements
    h1.addEventListener('mouseenter', function() {
        cursor.classList.add('pointer');
    });
    h1.addEventListener('mouseleave', function() {
        cursor.classList.remove('pointer');
    });

    h1.addEventListener('click', function() {
        alert('Welcome to Orbstack Dev!');
    });
});