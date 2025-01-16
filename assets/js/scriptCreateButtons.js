// SCRIPT => Contém a Lógica para Criar Botões Novos na Tela, conforme forem acertados os pares.

// scriptCreateButtons.js
// Lógica para Criar Botões Novos na Tela:
// Função para criar um par de botões na tela
window.GameSetup = {
    createButtons(pairs, col1, col2, handleSelection) {
      // Sorteia um par de botões
      const randomPair = getRandomPair(pairs); // Supondo que getRandomPair sorteia um par de botões
      const btn1 = createButton(randomPair[0]);
      const btn2 = createButton(randomPair[1]);
  
      // Adiciona os botões à coluna correta
      col1.appendChild(btn1);
      col2.appendChild(btn2);
  
      // Adiciona os event listeners
      btn1.addEventListener('click', handleSelection);
      btn2.addEventListener('click', handleSelection);
    }
  };
  
  // Função auxiliar para pegar um par aleatório
  function getRandomPair(pairs) {
    const randomIndex = Math.floor(Math.random() * pairs.length);
    return pairs[randomIndex]; // Retorna um par aleatório de notas
  }
  
  // Função auxiliar para criar um botão
  function createButton(note) {
    const btn = document.createElement('button');
    btn.textContent = note;
    btn.dataset.pair = note; // Adiciona a referência do par no botão
    return btn;
  }
  