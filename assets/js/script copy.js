// SCRIPT => Código Completo - Inicial sem Desmembrar

// Referências de colunas e elementos:
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("time");
const toggleTrainingBtn = document.getElementById("toggle-training");

let score = 0;
let trainingMode = false;

// Lista de notas e seus nomes:
let pairs = [
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

// Embaralhar pares:
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Criar botões para colunas:
function createButtons() {
  col1.innerHTML = "";
  col2.innerHTML = "";

  const shuffledPairs = shuffle(pairs); // ALTERAÇÃO: Mantém embaralhamento confiável
  const col1Items = shuffledPairs.slice(0, 4);
  const col2Items = shuffle(shuffledPairs.slice(0, 4));

  // ALTERAÇÃO:
  col1Items.forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = item.note;
    btn.dataset.pair = item.name;
    btn.addEventListener("click", handleSelection); // Clique dispara lógica
    col1.appendChild(btn);
  });

  col2Items.forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = item.name;
    btn.dataset.pair = item.name;
    btn.addEventListener("click", handleSelection); // Clique dispara lógica
    col2.appendChild(btn);
  });
}


// Lógica do jogo:
let firstSelection = null;

function handleSelection(e) {
  const btn = e.target;

  if (!firstSelection) {
    firstSelection = btn;
    btn.style.backgroundColor = "#007BFF"; // ALTERAÇÃO: Primeira escolha fica azul
    return;
  }

  if (firstSelection.dataset.pair === btn.dataset.pair && firstSelection !== btn) {
    score++;
    scoreDisplay.textContent = score;

    firstSelection.classList.add("correct");
    btn.classList.add("correct");

    setTimeout(() => {
      firstSelection.classList.add("fade-out");
      btn.classList.add("fade-out");

      setTimeout(() => {
        createButtons(); // ALTERAÇÃO: Novos pares sorteados após acerto
      }, 300);
    }, 500);
  } else {
    firstSelection.classList.add("wrong");
    btn.classList.add("wrong");

    setTimeout(() => {
      firstSelection.style.backgroundColor = ""; // ALTERAÇÃO: Reset para cor inicial
      btn.style.backgroundColor = ""; // Reset cor inicial
      firstSelection.classList.remove("wrong");
      btn.classList.remove("wrong");
    }, 500);
  }

  firstSelection = null;
}

// Alternar modo de treino:
toggleTrainingBtn.addEventListener("click", () => {
  trainingMode = !trainingMode;
  toggleTrainingBtn.textContent = trainingMode ? "Desativar Treino" : "Ativar Treino";
  createButtons();
});

// Cronômetro:
function startTimer() {
  let timeLeft = 60;
  const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      alert(`Tempo esgotado! Sua pontuação final: ${score}`);
      document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
    }
  }, 1000);
}

// Inicializar jogo:
function init() {
  createButtons();
  startTimer();
}

init();
