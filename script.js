// Add motion on hover for tab buttons
const tabButtons = document.querySelectorAll('.tab-buttons a');

tabButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add motion on hover for social icons
const socialIcons = document.querySelectorAll('.social-logo img');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(360deg)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});
