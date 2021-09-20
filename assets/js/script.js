var startBtn = document.querySelector("button");
var timeEl = document.querySelector(".time");

// add event to the button to play game

startBtn.addEventListener("click", playGame);

// playGame started

function playGame() {}

// Time Left (setInterval) time start when play game

var timeLeft = 60;
function setTimer() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeInterval === 0) {
      clearInterval();
    }
  }, 1000);
}

setTimer();
