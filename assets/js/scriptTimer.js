// SCRIPT => Controla o cronômetro e gerencia o término do jogo.

// timer.js
// Cronômetro/Temporizador:
window.Timer = {
  interval: null, // Armazena o ID do intervalo
  timeLeft: 0, // Tempo restante
  running: false, // Estado do temporizador

  start(duration, timerDisplay, onTimeEnd) {
    // let timeLeft = duration;
    this.timeLeft = duration;
    this.running = true;

    timerDisplay.textContent = this.timeLeft;

    // const interval = setInterval(() => {
    this.interval = setInterval(() => {
      this.timeLeft--;

      if (timeLeft < 0) {
        clearInterval(this.interval);
        onTimeEnd();

      } else {
        timerDisplay.textContent = this.timeLeft;
      }
    }, 1000);
  },

  pause() {
    clearInterval(this.interval);
    this.running = false;
  },

  resume(timerDisplay, onTimeEnd) {
    if (this.running) return;
    this.running = true;

    this.interval = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft < 0) {
        clearInterval(this.interval);
        this.running = false;
        onTimeEnd();
      } else {
        timerDisplay.textContent = this.timeLeft;
      }
    }, 1000);
  },

  stop() {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.running = false;
  },

};