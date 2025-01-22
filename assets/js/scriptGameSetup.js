// SCRIPT => Responsável pela configuração inicial do jogo, incluindo embaralhamento e criação de botões.

  // gameSetup.js
  // Criar botões para colunas:
  window.GameSetup = {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  
    createButtons(pairs, col1, col2, handleSelection) {
      // Limpar colunas:
      col1.innerHTML = "";
      col2.innerHTML = "";
  
      const shuffledPairs = this.shuffle(pairs);
      const col1Items = shuffledPairs.slice(0, 3);
      const col2Items = this.shuffle(shuffledPairs.slice(0, 3));
  
      // Criar botões para a primeira coluna (notas):
      col1Items.forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = item.note;
        btn.dataset.pair = item.name;
        btn.classList.add("game-button"); // Adiciona a classe ao botão pause-play
        btn.addEventListener("click", handleSelection);
        col1.appendChild(btn);
      });
  
      // Criar botões para a segunda coluna (nomes):
      col2Items.forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = item.name;
        btn.dataset.pair = item.name;
        btn.classList.add("game-button"); // Adiciona a classe ao botão pause-play
        btn.addEventListener("click", handleSelection);
        col2.appendChild(btn);
      });

      //! Aplicar legendas caso o modo treino esteja ativo: Não sei se está funcionando!!!
      if (window.TrainingMode.active) {
        window.TrainingMode.updateLegends(col1, pairs, true);
        window.TrainingMode.updateLegends(col2, pairs, false);
      }

      // REVER:
      
    },
  };