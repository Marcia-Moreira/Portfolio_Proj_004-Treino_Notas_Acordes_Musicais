// SCRIPT => Contém a Lógica para Criar Botões Novos na Tela, conforme forem acertados os pares.

// scriptCreateButtons.js
// Lógica para Criar Botões Novos na Tela:
// Função para criar um par de botões na tela
window.GameSetup.createButtons = function (pairs, col1, col2, handleSelection) {
    // Verifica se ainda há pares disponíveis
    if (pairs.length === 0) return;
  
    // Embaralha os pares antes de gerar os botões (1 par por vez)
    const pair = shuffle(pairs)[0]; // Pega apenas o primeiro par aleatório
  
    // Limpa as colunas para recriar os botões
    col1.innerHTML = '';
    col2.innerHTML = '';
  
    // Cria os botões nas colunas para o par sorteado
    const button1 = document.createElement('button');
    button1.textContent = pair.note;  // Nome da nota (coluna da esquerda)
    button1.dataset.pair = pair.id;
    button1.classList.add('button');
    button1.addEventListener('click', handleSelection);
  
    const button2 = document.createElement('button');
    button2.textContent = pair.name;  // Nome alternativo da nota (coluna da direita)
    button2.dataset.pair = pair.id;
    button2.classList.add('button');
    button2.addEventListener('click', handleSelection);
  
    col1.appendChild(button1);
    col2.appendChild(button2);
  };
  
  // Função para embaralhar os pares
  function shuffle(pairs) {
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];  // Troca os elementos
    }
    return pairs;
  }
  