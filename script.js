
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

    bgAudio.volume = 0.15;

    // Start playing the audio (muted attribute allows autoplay)
    bgAudio.play().then(function() {
        // Unmute the audio to start hearing it
        bgAudio.muted = false;
    }).catch(function(error) {
        console.log('Audio auto-play failed:', error);
        // If autoplay fails, user can click the button to start
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
        cursor.style.left = (e.clientX - 5) + 'px';
        cursor.style.top = (e.clientY - 5) + 'px';
    });
});