// SCRIPT => Lida com a funcionalidade de alternar o modo de treino, exibindo ou ocultando as "legendas de treino".

// trainingMode.js
// Alternar modo de treino:
window.TrainingMode = {
  toggle(trainingMode, btn, pairs, col1, col2, handleSelection) {
    trainingMode = !trainingMode;
    btn.textContent = trainingMode ? "Desativar Treino" : "Ativar Treino";
    window.GameSetup.createButtons(pairs, col1, col2, handleSelection);
  },
};