const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const question = document.querySelector('.question');
const title = document.querySelector('.title');
const silly = document.querySelector('.silly');
const nxtBTN = document.getElementById('nxtBTN');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const flowrs = document.querySelector('.flowers');

let yesScale = 1;

// Stage 1: Are you my Baby?
yes.addEventListener('click', () => {
    question.style.display = 'none';
    silly.style.display = 'block';
});

no.addEventListener('click', () => {
    alert("Dun ka sa Far away!!!");
});

// Stage 2: I know you silly
nxtBTN.addEventListener('click', () => {
    silly.style.display = 'none';
    title.style.display = 'block';
});

// Stage 3: The Valentine Question
yesButton.addEventListener('click', () => {
    flowrs.style.display = 'block';
    title.style.display = 'none';
    // Hide the 'No' button so it doesn't float around
    noButton.style.display = 'none';
});

// The "No" Button Logic (Movement + Growth)
function moveAndGrow() {
    // 1. Move the No button
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    noButton.style.position = 'fixed'; // Fixed keeps it relative to screen
    noButton.style.left = `${Math.random() * maxX}px`;
    noButton.style.top = `${Math.random() * maxY}px`;

    // 2. Make the Yes button bigger
    yesScale += 0.3; // Grows by 30% each time
    yesButton.style.transform = `scale(${yesScale})`;
}

// Triggers when they try to click OR hover the No button
noButton.addEventListener('click', moveAndGrow);
