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

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const nextButton = document.getElementById('next-button');
    const popupText = document.getElementById('popup-text');

    // Liste des textes à afficher
    const texts = [
        "Bonjour moussaillon.",
        "Avant d'embarquer sur le MODX 70 le nouveau navire 0 émission tu dois apprendre à connaitre l'océan.",
        "Et accessoirement connaitre ton corps si tu veux survivre seul en mer...",
        "Alors si tu es prêt allons-y !",
        "Et n'oublie pas, l'océan c'est comme ton corps, essaye d'en prendre soin !"
    ];

    let currentTextIndex = 0; // Index pour suivre le texte actuel

    // Afficher le pop-up au chargement de la page
    popup.style.display = 'flex';

    // Fonction pour changer le texte
    function changeText() {
        if (currentTextIndex < texts.length - 1) {
            currentTextIndex++;
            popupText.textContent = texts[currentTextIndex]; // Changer le texte dans la bulle
        } else {
            nextButton.style.display = 'none'; // Cacher le bouton "Suivant" après le dernier texte
        }
    }

    // Écouter le clic du bouton "Suivant"
    nextButton.addEventListener('click', changeText);

    // Fermer le pop-up en cliquant sur la croix
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
