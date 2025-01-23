// SCRIPT => Lida com a funcionalidade de alternar o modo de treino, exibindo ou ocultando as "legendas de treino".

// trainingMode.js
// Alternar modo de treino:
// window.TrainingMode = {
//   toggle(trainingMode, btn, pairs, col1, col2, handleSelection) {
//     trainingMode = !trainingMode;
//     btn.textContent = trainingMode ? "DESATIVAR TREINO" : "ATIVAR TREINO";
//     window.GameSetup.createButtons(pairs, col1, col2, handleSelection);
//   },
// };
window.TrainingMode = {
  toggle(trainingMode, btn, pairs, col1, col2) {
    // Alternar estado do modo treino
    
    trainingMode = !trainingMode;
    // let trainingMode = false;
    btn.textContent = trainingMode ? "DESATIVAR TREINO" : "ATIVAR TREINO";

    // Atualizar legendas nos botões existentes
    this.updateLegends(trainingMode, pairs, col1, col2);

    // Retornar o estado atualizado do modo treino
    return trainingMode;
  },

  updateLegends(trainingMode, pairs, col1, col2) {
    // Atualizar legendas em uma coluna
    const updateColumn = (col, isNoteColumn) => {
      const buttons = col.querySelectorAll("button");
      buttons.forEach((btn, index) => {
        const translation = btn.querySelector(".translation");
        const pair = pairs[index]; // Correspondência do par

        if (trainingMode) {
          // Adicionar legenda se estiver no modo treino
          if (!translation) {
            const span = document.createElement("span");
            span.textContent = isNoteColumn
              ? ` (${pair.name})`
              : ` (${pair.note})`;
            span.classList.add("translation");
            span.style.fontSize = "0.8em";
            span.style.color = "gray";
            btn.appendChild(span);
          }
        } else {
          // Remover legenda se estiver fora do modo treino
          if (translation) {
            translation.remove();
          }
        }
      });
    };

    // Atualizar ambas as colunas
    updateColumn(col1, true); // Coluna 1 mostra nome da nota
    updateColumn(col2, false); // Coluna 2 mostra o símbolo da nota
  },
};

