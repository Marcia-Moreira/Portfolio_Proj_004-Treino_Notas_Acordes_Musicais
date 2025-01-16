// SCRIPT => Controla o cronômetro e gerencia o término do jogo.

// timer.js
// Cronômetro:
window.Timer = {
  start(duration, timerDisplay, onTimeEnd) {
    let timeLeft = duration;
    const interval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(interval);
        onTimeEnd();
      }
    }, 1000);
  },
};