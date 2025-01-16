// SCRIPT => Contém a lógica principal do jogo, como verificar pares corretos ou incorretos, atualizar a pontuação e redefinir seleções.

// gameLogic.js
// Lógica do jogo:

window.GameLogic = {
  firstSelection: null,

  handleSelection(e, col1, col2, pairs, updateScore) {
    const btn = e.target;

    //! Se o botão já foi selecionado, ignoramos a nova seleção
    if (btn.classList.contains('correct') || btn.classList.contains('wrong')) {
      return;
    }

    //? Condição: não seria melhor fixar a seleção da esquerda primeiro e depois a da direita?

    // Caso seja a primeira seleção, destacamos o botão
    if (!this.firstSelection) {
      this.firstSelection = btn;
      btn.style.backgroundColor = "#95b3d4"; // Azul para primeira seleção
      return;
    }

    // Caso seja a segunda seleção, verificamos se o par está correto
    if (this.firstSelection.dataset.pair === btn.dataset.pair && this.firstSelection !== btn) {
      // Aumenta a pontuação:
      updateScore(1);

      // Adiciona a classe 'correct' para ambos os botões:
      this.firstSelection.classList.add("correct");
      btn.classList.add("correct");

      // Muda a cor dos dois botões para verde:
      this.firstSelection.style.backgroundColor = "green";
      btn.style.backgroundColor = "green";
      //! Condição: deveriam ficar vermelhos ambos se ERRO

      // Remove os botões após 500ms para dar tempo de ver a cor verde:
      setTimeout(() => {
        this.firstSelection.remove();
        btn.remove();
        //! Fiquei na dúvida se está removendo tudo ou não!!!

        // Sorteia novos pares automaticamente:
        window.GameSetup.createButtons(pairs, col1, col2, (e) =>
          this.handleSelection(e, col1, col2, pairs, updateScore)
        //! Não está sorteando, e parece que seria para tudo e não apenas os pares feitos!!!
        );
      }, 500); // Tempo de espera antes de desaparecer
    } else {

      // Se a escolha for errada, adiciona a classe 'wrong' para ambos os botões:
      this.firstSelection.classList.add("wrong");
      btn.classList.add("wrong");

      // Muda a cor para vermelho:
      this.firstSelection.style.backgroundColor = "red";
      btn.style.backgroundColor = "red";

      // Reverte a cor dos botões após um tempo
      setTimeout(() => {
        this.firstSelection.style.backgroundColor = "";
        btn.style.backgroundColor = "";
        this.firstSelection.classList.remove("wrong");
        btn.classList.remove("wrong");
      }, 500); // Tempo de espera antes de reverter a cor
    }

    // Reinicia a seleção:
    this.firstSelection = null;
  },
};