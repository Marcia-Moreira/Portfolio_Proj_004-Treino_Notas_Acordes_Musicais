// SCRIPT => Arquivo principal que inicializa o jogo e conecta os outros módulos.

// main.js
// Referências de colunas e elementos:
document.addEventListener("DOMContentLoaded", () => {
  const col1 = document.getElementById("col1");
  const col2 = document.getElementById("col2");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("time");
  const toggleTrainingBtn = document.getElementById("toggle-training");

  let score = 0;
  let trainingMode = false;

  // Lista de notas e seus nomes:
  const pairs = [
    { note: "C", name: "Dó" },
    { note: "D", name: "Ré" },
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


  function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
  }

  function onTimeEnd() {
    alert(`Tempo esgotado! Sua pontuação final: ${score}`);
    document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }

  toggleTrainingBtn.addEventListener("click", () =>
    window.TrainingMode.toggle(trainingMode, toggleTrainingBtn, pairs, col1, col2, (e) =>
      window.GameLogic.handleSelection(e, col1, col2, pairs, updateScore)
    )
  );

  window.GameSetup.createButtons(pairs, col1, col2, (e) =>
    window.GameLogic.handleSelection(e, col1, col2, pairs, updateScore)
  );
  window.Timer.start(60, timerDisplay, onTimeEnd);
});