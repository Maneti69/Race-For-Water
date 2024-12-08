const slider = document.getElementById('slider');
const imageRight = document.querySelector('.image-right');
const line = document.getElementById('line');
const sliderIcon = document.getElementById('slider-icon');
const navbar = document.getElementById('navbar');
const menuIcon = document.getElementById('menu-icon');

// Synchronisation du slider avec les images
slider.addEventListener('input', function () {
    const value = slider.value;
    imageRight.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    line.style.left = `${value}%`;
    sliderIcon.style.left = `${value}%`;
});

// Gestion de l'apparition du menu et de l'icône
window.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
        navbar.style.top = '0';
        menuIcon.style.opacity = '0';
    } else {
        navbar.style.top = '-100px';
        menuIcon.style.opacity = '1';
    }
});
