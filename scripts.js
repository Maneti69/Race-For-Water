// Script pour ajouter des interactions aux bulles
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer toutes les bulles interactives
    const interactiveBubbles = document.querySelectorAll('.interactive-bubble');

    // Ajouter un événement de clic à chaque bulle
    interactiveBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            const bubbleContent = bubble.querySelector('.bubble-content');

            // Basculer l'affichage du contenu
            if (bubbleContent.style.display === 'block') {
                bubbleContent.style.display = 'none';
            } else {
                bubbleContent.style.display = 'block';
            }
        });
    });

    // Ajouter des animations aux bulles (facultatif)
    interactiveBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', () => {
            bubble.style.transform = 'scale(1.05)';
        });

        bubble.addEventListener('mouseleave', () => {
            bubble.style.transform = 'scale(1)';
        });
    });

    // Script pour animer le défilement vers les sections
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien

            const targetId = link.getAttribute('href').substring(1); // Récupérer l'id cible
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuster le décalage pour compenser l'en-tête
                    behavior: 'smooth'
                });
            }
        });
    });
});
