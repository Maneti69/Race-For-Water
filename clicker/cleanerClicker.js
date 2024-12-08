let points = 10000;
let clickPower = 1;
let autoPoints = 100;
let autoclick = 0;
let argent = 0;

let priceIncreaseAutoClick = 10;
let priceBoat = 50;
let priceUpClickPower = 100;

const countDisplay = document.getElementById('count');
const clickButton = document.getElementById('clickButton');
const argentDispay = document.getElementById('argent');
const priceUpClickPowerDisplay = document.getElementById('priceClickPower');
const priceBoatDisplay = document.getElementById('priceBoat');
const priceAutoClickDisplay = document.getElementById('priceAutoClick');
const muteButton = document.getElementById('muteButton');
const music = document.getElementById('backgroundMusic');
const clickCounter = document.getElementById('clickCounter');
const clickCountDisplay = document.getElementById('clickCount');
const timer = document.getElementById('timer');
const timeLeftDisplay = document.getElementById('timeLeft');
const autoClickButton = document.getElementById('ac');
const boatButton = document.querySelector('.upgrade button[onclick="boat()"]');
const powerClickButton = document.getElementById('pc');

let muteClickCount = 10;
let timeLeft = 100;
let timerInterval;
let hoverCount = 0;
let clickCount = 0;

clickButton.addEventListener('click', () => {
    points -= clickPower;
    argent += clickPower;
    updateUI();
});

muteButton.addEventListener('click', () => {
    muteClickCount--;
    clickCountDisplay.textContent = muteClickCount;
    clickCounter.style.display = 'block';
    if (muteClickCount <= 0) {
        music.pause();
        clickCounter.style.display = 'none'; // Masquer le compteur après avoir coupé la musique
        muteClickCount = 10; // Réinitialiser le compteur après avoir coupé la musique
        startTimer();
    }
});

autoClickButton.addEventListener('mouseover', () => {
    hoverCount++;
    if (hoverCount === 1) {
        autoClickButton.classList.add('move-right');
    } else if (hoverCount === 2) {
        autoClickButton.classList.remove('move-right');
    } else if (hoverCount === 3) {
        autoClickButton.disabled = false; // Activer le bouton après le troisième survol
    }
    if (hoverCount==4){
        hoverCount=0;
    }
});
boatButton.addEventListener('mouseover', () => {
    hoverCount++;
    if (hoverCount === 1) {
        boatButton.classList.add('move-right');
    } else if (hoverCount === 2) {
        boatButton.classList.remove('move-right');
    } else if (hoverCount === 3) {
        boatButton.disabled = false; // Activer le bouton après le troisième survol
    }
    if (hoverCount==4){
        hoverCount=0;
    }
});
powerClickButton.addEventListener('mouseover', () => {
    hoverCount++;
    if (hoverCount === 1) {
        powerClickButton.classList.add('move-right');
    } else if (hoverCount === 2) {
        powerClickButton.classList.remove('move-right');
    } else if (hoverCount === 3) {
        powerClickButton.disabled = false; // Activer le bouton après le troisième survol
    }
    if (hoverCount==4){
        hoverCount=0;
    }
});

function startTimer() {
    timer.style.display = 'block';
    timeLeft = 100;
    timeLeftDisplay.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            music.play();
            timer.style.display = 'none';
        }
    }, 1000);
}

function upClickPower() {
    if (argent >= priceUpClickPower) {
        argent -= priceUpClickPower;
        priceUpClickPower = Math.ceil(priceUpClickPower * 1.2);
        clickPower = Math.ceil(clickPower * 1.2);
        updateUI();
    }
}

function increaseAutoClick() {
    if (argent >= priceIncreaseAutoClick) {
        argent -= priceIncreaseAutoClick;
        priceIncreaseAutoClick = Math.ceil(priceIncreaseAutoClick * 1.2);
        autoclick += 1;
        updateUI();
    }
}

function boat() {
    if (argent >= priceBoat) {
        argent -= priceBoat;
        priceBoat = Math.ceil(priceBoat * 1.2);
        autoPoints -= 5;
        updateUI();
    }
}

function updateUI() {
    countDisplay.textContent = points;
    argentDispay.textContent = argent;
    priceBoatDisplay.textContent = priceBoat;
    priceUpClickPowerDisplay.textContent = priceUpClickPower;
    priceAutoClickDisplay.textContent = priceIncreaseAutoClick;
}

setInterval(() => {
    points += autoPoints;
    points -= autoclick * clickPower;
    argent += autoclick * clickPower;
    updateUI();
}, 1000);

updateUI();

setTimeout(() => { 
    music.play(); 
}, 3000);

document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = '../index.html'; // Remplacez 'index.html' par l'URL de votre page d'accueil
});