
console.log('Orbstack Dev landing page loaded');

// Typing animation
function typeText(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Audio 
document.addEventListener('DOMContentLoaded', function() {
    const bgAudio = document.getElementById('bgAudio');
    const audioToggle = document.getElementById('audioToggle');
    const cursor = document.getElementById('cursor');
    const typingElement = document.getElementById('typingText');

    typeText(typingElement, "We'll be live soon");

    bgAudio.volume = 0.20;

    bgAudio.play().then(function() {
        bgAudio.muted = false;
    }).catch(function(error) {
        console.log('Audio auto-play failed:', error);
    });

    audioToggle.addEventListener('click', function() {
        if (bgAudio.paused) {
            bgAudio.play();
            bgAudio.muted = false;
        } else {
            bgAudio.pause();
        }
    });

    audioToggle.addEventListener('mouseenter', function() {
        cursor.classList.add('pointer');
    });
    audioToggle.addEventListener('mouseleave', function() {
        cursor.classList.remove('pointer');
    });

    document.addEventListener('mousemove', function(e) {
        const cursorSize = parseInt(getComputedStyle(cursor).width);
        const offset = cursorSize / 2;
        
        let left = e.clientX - offset;
        let top = e.clientY - offset;
        
        // Clamp to viewport
        left = Math.max(0, Math.min(left, window.innerWidth - cursorSize));
        top = Math.max(0, Math.min(top, window.innerHeight - cursorSize));
        
        cursor.style.left = left + 'px';
        cursor.style.top = top + 'px';
    });
});