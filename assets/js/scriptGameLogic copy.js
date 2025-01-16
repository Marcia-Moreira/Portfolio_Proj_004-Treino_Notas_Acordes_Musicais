// SCRIPT => Contém a lógica principal do jogo, como verificar pares corretos ou incorretos, atualizar a pontuação e redefinir seleções.

// gameLogic.js
// Lógica do jogo:

window.GameLogic = {
  firstSelection: null,

  handleSelection(e, col1, col2, pairs, updateScore) {
    const btn = e.target;

    if (!this.firstSelection) {
      this.firstSelection = btn;
      btn.style.backgroundColor = "#95b3d4"; // Azul para primeira seleção
      return;
    }

    if (this.firstSelection.dataset.pair === btn.dataset.pair && this.firstSelection !== btn) {
      updateScore(1);

      // Adiciona a classe 'correct' para ambos os botões
      this.firstSelection.classList.add("correct");
      btn.classList.add("correct");

      // Remove os botões após um tempo
      setTimeout(() => {
        this.firstSelection.remove();
        btn.remove();

        // Sorteia novos pares automaticamente
        window.GameSetup.createButtons(pairs, col1, col2, (e) =>
          this.handleSelection(e, col1, col2, pairs, updateScore)
        );
      }, 500); // Tempo de espera antes de desaparecer
    } else {
      // Se a escolha for errada, adiciona a classe 'wrong'
      this.firstSelection.classList.add("wrong");
      btn.classList.add("wrong");

      // Reverte a cor dos botões após um tempo
      setTimeout(() => {
        this.firstSelection.style.backgroundColor = "";
        btn.style.backgroundColor = "";
        this.firstSelection.classList.remove("wrong");
        btn.classList.remove("wrong");
      }, 500); // Tempo de espera antes de reverter a cor
    }

    // Reinicia a seleção
    this.firstSelection = null;
  },
};