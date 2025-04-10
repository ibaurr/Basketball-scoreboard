let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let home = 0;
let guest = 0;

function updateScoreH(points) {
    if (!gameOver) {
        home += points;
        homeScore.textContent = home;
        updateHighlight();
    }
}

function updateScoreG(points) {
    if (!gameOver) {
        guest += points;
        guestScore.textContent = guest;
        updateHighlight();
    }
}

function resetScores() {
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
    updateHighlight();
}

function updateHighlight() {
    homeScore.classList.remove("leading");
    guestScore.classList.remove("leading");

    if (home > guest) {
        homeScore.classList.add("leading");
    } else if (guest > home) {
        guestScore.classList.add("leading");
    }
}

// Countdown Timer
let timerDisplay = document.getElementById("timer");
let timeLeft = 60; // in seconds
let timer;
let gameOver = false;

function startTimer() {
    clearInterval(timer); // just in case
    timeLeft = 60;
    gameOver = false;
    enableButtons();
    timerDisplay.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver = true;
            timerDisplay.textContent = "TIME'S UP";
            disableButtons();
        }
    }, 1000);
}

function disableButtons() {
    document.querySelectorAll("button").forEach(btn => {
        if (!btn.classList.contains("reset-button") && !btn.classList.contains("start-button")) {
            btn.disabled = true;
            btn.style.opacity = 0.5;
        }
    });
}

function enableButtons() {
    document.querySelectorAll("button").forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = 1;
    });
}

window.updateScoreH = updateScoreH;
window.updateScoreG = updateScoreG;
window.resetScores = resetScores;
window.startTimer = startTimer;