document.addEventListener('DOMContentLoaded', () => {
    const interactiveBubbles = document.querySelectorAll('.interactive-bubble');
    const bubbleTextContainer = document.getElementById('bubble-text');
    const textContent = document.getElementById('text-content');

    // Ajouter un événement de clic à chaque bulle
    interactiveBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            const text = bubble.getAttribute('data-text'); // Récupérer le texte associé à l'image
            textContent.textContent = text; // Afficher le texte dans la zone de texte
            bubbleTextContainer.style.display = 'block'; // Afficher la zone de texte
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
