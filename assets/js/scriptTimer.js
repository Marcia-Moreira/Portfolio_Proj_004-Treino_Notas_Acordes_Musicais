// SCRIPT => Controla o cronômetro e gerencia o término do jogo.

// timer.js
// Cronômetro/Temporizador:
window.Timer = {
  start(duration, timerDisplay, onTimeEnd) {
    let timeLeft = duration;

    timerDisplay.textContent = timeLeft;

    const interval = setInterval(() => {
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(interval);
        onTimeEnd();

      } else {
        timerDisplay.textContent = timeLeft;
        
      }
    }, 1000);
  },
};