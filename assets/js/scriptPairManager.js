// scriptPairManager.js
// Responsável por gerenciar a adição e atualização de pares no jogo.

// Gerenciamento dos pares e slots vazios:
window.PairManager = {
    // Remove os botões corretos
    removeCorrectButtons() {
      const correctButtons = document.querySelectorAll(".correct");
      correctButtons.forEach((button) => button.remove());
    },
  
    // Adiciona slots vazios nas colunas
    addEmptySlots(col1, col2) {
      for (let i = 0; i < 3; i++) {
        const emptyBtn1 = document.createElement("button");
        emptyBtn1.classList.add("empty-slot");
        col1.appendChild(emptyBtn1);
  
        const emptyBtn2 = document.createElement("button");
        emptyBtn2.classList.add("empty-slot");
        col2.appendChild(emptyBtn2);
      }
    },
  
    // Preenche os slots vazios com novos pares embaralhados
    fillEmptySlots(pairs, col1, col2, handleSelection) {
      const emptySlots1 = col1.querySelectorAll(".empty-slot");
      const emptySlots2 = col2.querySelectorAll(".empty-slot");
  
    //   if (emptySlots1.length !== emptySlots2.length) {
    //     console.error("Número de slots vazios nas colunas está desbalanceado.");
    //     return;
    //   }
  
      // Embaralha os pares
      const shuffledPairs = window.GameSetup.shuffle(pairs);
      const newPairs = shuffledPairs.slice(0, emptySlots1.length);
  
      newPairs.forEach((pair, index) => {
        // Preenche o botão da coluna 1
        const btn1 = emptySlots1[index];
        btn1.textContent = pair.note;
        btn1.dataset.pair = pair.name;
        btn1.classList.remove("empty-slot");
        btn1.addEventListener("click", handleSelection);
  
        // Preenche o botão da coluna 2
        const btn2 = emptySlots2[index];
        btn2.textContent = pair.name;
        btn2.dataset.pair = pair.name;
        btn2.classList.remove("empty-slot");
        btn2.addEventListener("click", handleSelection);
      });
    },
  };
  