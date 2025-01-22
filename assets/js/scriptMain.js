// SCRIPT => Arquivo principal que inicializa o jogo e conecta os outros módulos.

// main.js
// Referências de colunas e elementos:
document.addEventListener("DOMContentLoaded", () => {

  const col1 = document.getElementById("col1");
  const col2 = document.getElementById("col2");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("time");
  const toggleTrainingBtn = document.getElementById("toggle-training");
  const playPauseBtn = document.getElementById("play-pause");

  let score = 0;
  let trainingMode = false;
  let timerActive = false; // Estado do temporizador
  let timerPaused = false; // Estado de pausa
  let timeLeft = 60; // Tempo inicial do cronômetro
  let interval; // Referência do setInterval para controle

  // Lista de notas e seus nomes:
  const pairs = [
    //!! Não sei se devo colocar esses aliases nos pares!!! ou seguir o outro modo
    { note: "C", name: "Dó", aliases: ["Dó", "C"] },
    { note: "D", name: "Ré", aliases: ["Ré", "D"]  },
    { note: "E", name: "Mi" },
    { note: "F", name: "Fá" },
    { note: "G", name: "Sol" },
    { note: "A", name: "Lá" },
    { note: "B", name: "Si" },
    { note: "C#", name: "Dó#" },
    { note: "D#", name: "Ré#" },
    { note: "F#", name: "Fá#" },
    { note: "G#", name: "Sol#" },
    { note: "A#", name: "Lá#" },
    { note: "Db", name: "Ré♭" },
    { note: "Eb", name: "Mi♭" },
    { note: "Gb", name: "Fá♭" },
    { note: "Ab", name: "Lá♭" },
    { note: "Bb", name: "Si♭" },
  ];

  // Atualiza a pontuação:
  function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
  }

  // Quando o tempo acabar:
  function onTimeEnd() {
    alert(`Tempo esgotado! Sua pontuação final: ${score}`);
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }

  //! REVER abaixo:
  // Controla o temporizador (start/resume)
  function startTimer() {
    timerActive = true;
    timerPaused = false;

    interval = setInterval(() => {
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(interval);
        timerActive = false;
        onTimeEnd();
        toggleGameState(false); // Desativa o jogo ao final do tempo
      } else {
        timerDisplay.textContent = timeLeft;
      }
    }, 1000);
  }

  // Pausa o temporizador:
  function pauseTimer() {
    clearInterval(interval);
    timerActive = false;
    timerPaused = true;
  }

  //! Desabilita ou Habilita o jogo:
  function toggleGameState(isActive) {
    // Seleciona todos os botões do jogo (de ambas as colunas)
    const buttons = document.querySelectorAll(".game-button");
  
    // Desativa ou ativa com base no estado do jogo
    buttons.forEach((btn) => {
      btn.disabled = !isActive;
    });
  }

  // Alterna entre Play e Pause
  playPauseBtn.addEventListener("click", () => {
    if (timerActive) {
      pauseTimer();
      playPauseBtn.textContent = "PLAY";
      toggleGameState(false); // Desativa o jogo
    } else if (timerPaused) {
      startTimer();
      playPauseBtn.textContent = "PAUSE";
      toggleGameState(true); // Ativa o jogo
    } else {
      // Reinicia o jogo e o temporizador:
      timeLeft = 60;
      score = 0;
      scoreDisplay.textContent = score;
      playPauseBtn.textContent = "PAUSE";

      document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
      window.GameSetup.createButtons(pairs, col1, col2, (e) =>
        window.GameLogic.handleSelection(e, col1, col2, pairs, updateScore)
      );

      toggleGameState(true); // Ativa o jogo
      startTimer();
    }
  });
  //! REVER acima:

  // Configura o botão de treinamento:
  toggleTrainingBtn.addEventListener("click", () =>
    window.TrainingMode.toggle(trainingMode, toggleTrainingBtn, pairs, col1, col2, (e) =>
      window.GameLogic.handleSelection(e, col1, col2, pairs, updateScore)
    )
  );

  // Inicializa o jogo e o temporizador:
  window.GameSetup.createButtons(pairs, col1, col2, (e) =>
    window.GameLogic.handleSelection(e, col1, col2, pairs, updateScore)
  );

  timerDisplay.textContent = timeLeft; // Exibe o tempo inicial

  // window.Timer.start(60, timerDisplay, onTimeEnd);
});