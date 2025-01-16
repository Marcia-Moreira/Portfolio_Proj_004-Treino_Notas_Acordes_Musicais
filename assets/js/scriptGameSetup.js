// SCRIPT => Responsável pela configuração inicial do jogo, incluindo embaralhamento e criação de botões.


// Embaralhar pares:
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // gameSetup.js
  // Criar botões para colunas:
  window.GameSetup = {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  
    createButtons(pairs, col1, col2, handleSelection) {
      col1.innerHTML = "";
      col2.innerHTML = "";
  
      const shuffledPairs = this.shuffle(pairs);
      const col1Items = shuffledPairs.slice(0, 3);
      const col2Items = this.shuffle(shuffledPairs.slice(0, 3));
  
      col1Items.forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = item.note;
        btn.dataset.pair = item.name;
        btn.addEventListener("click", handleSelection);
        col1.appendChild(btn);
      });
  
      col2Items.forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = item.name;
        btn.dataset.pair = item.name;
        btn.addEventListener("click", handleSelection);
        col2.appendChild(btn);
      });
    },
  };