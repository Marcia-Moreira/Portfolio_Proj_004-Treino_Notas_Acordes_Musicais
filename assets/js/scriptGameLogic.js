// SCRIPT => Contém a lógica principal do jogo, como verificar pares corretos ou incorretos, atualizar a pontuação e redefinir seleções.

// gameLogic.js
// Lógica do jogo:
window.GameLogic = {
  firstSelection: null,

  handleSelection(e, col1, col2, pairs, updateScore) {
    const btn = e.target;

    //* OK Se o botão já foi selecionado (correto), ignoramos a nova seleção
    if (btn.classList.contains('correct')) {
      return;
    }

    //* OK Caso seja a primeira seleção, destacamos o botão
    if (!this.firstSelection) {
      this.firstSelection = btn;
      //* OK Adiciona a classe "selected" para destacar o botão
      btn.classList.add("selected");
      return;
    }
  
    //* OK Caso seja a segunda seleção, verificamos se o par está correto
    if (this.firstSelection.dataset.pair === btn.dataset.pair && this.firstSelection !== btn) {
      //* OK Aumenta a pontuação:
      updateScore(1);

      //* OK Adiciona a classe 'correct' para ambos os botões:
      this.firstSelection.classList.remove("selected");
      this.firstSelection.classList.add("correct");
      btn.classList.add("correct");

      //* OK Remove os botões após 300ms para dar tempo de ver a cor verde:
      setTimeout(() => {
        //! Remove ambos os botões corretos: NÃO
        this.firstSelection.remove();
        btn.remove();

        //! Sorteia novos pares automaticamente:
        window.GameSetup.createButtons(pairs, col1, col2, (e) =>
          this.handleSelection(e, col1, col2, pairs, updateScore)
        );

        //! Resetando firstSelection para permitir uma nova seleção de pares:
        this.firstSelection = null;
      }, 300);

    } else {
      //* OK Define os dois botões como vermelhos para indicar erro:
      this.firstSelection.classList.add('wrong');
      btn.classList.add('wrong');
     
      //* OK Após 300ms, reseta as cores vermelhas de ambos os botões:
      setTimeout(() => {
        this.firstSelection.classList.remove("wrong", "selected");
        //* OK Reseta o estilo do segundo botão errado:
        btn.classList.remove('wrong');
        //* OK Reseta a seleção:
        this.firstSelection = null;

      }, 300);
    }
  }
};