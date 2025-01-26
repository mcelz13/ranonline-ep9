// script.js
document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");

    // Check if the intro has already been shown
    if (!sessionStorage.getItem("introShown")) {
        // Show the intro animation
        intro.style.display = "flex";

        // Wait for the animation to finish (3 seconds + 1 second fadeOut)
        setTimeout(() => {
            intro.style.display = "none"; // Hide the intro section
            sessionStorage.setItem("introShown", "true"); // Mark intro as shown
        }, 4000); // 4 seconds total
    } else {
        // If intro has already been shown, hide it immediately
        intro.style.display = "none";
    }

    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        alert('Right-click is disabled on this page.');
    });

    // Disable keyboard shortcuts (Ctrl+Shift+I, F12, Ctrl+U)
    document.addEventListener('keydown', function (e) {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            alert('F12 is disabled on this page.');
        }

        // Disable Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            alert('Ctrl+Shift+I is disabled on this page.');
        }

        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            alert('Ctrl+U is disabled on this page.');
        }
    });

    // Detect Developer Tools opening
    setInterval(function () {
        const devToolsOpened = function () {
            const widthThreshold = window.outerWidth - window.innerWidth > 160;
            const heightThreshold = window.outerHeight - window.innerHeight > 160;
            return widthThreshold || heightThreshold;
        };

        if (devToolsOpened()) {
            alert('Developer Tools detected. Please close them to continue.');
            window.location.reload(); // Reload the page
        }
    }, 1000); // Check every second
});