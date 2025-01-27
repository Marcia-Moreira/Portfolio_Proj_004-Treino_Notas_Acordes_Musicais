
//! Código Pausado para Revisão de Melhorias!

document.addEventListener("DOMContentLoaded", () => {
    console.log("Script Legend carregado!");
  
    const toggleTrainingButton = document.getElementById("toggle-training");
    let treinoAtivo = localStorage.getItem("treinoAtivo") === "true"; // Recupera o estado salvo
  
    if (toggleTrainingButton) {
      // Atualiza o botão e o estado inicial
      toggleTrainingButton.textContent = treinoAtivo ? "DESATIVAR TREINO" : "ATIVAR TREINO";
      if (treinoAtivo) exibirLegendas();
  
      toggleTrainingButton.addEventListener("click", () => {
        treinoAtivo = !treinoAtivo; // Alterna o estado
        localStorage.setItem("treinoAtivo", treinoAtivo); // Salva o estado
        if (treinoAtivo) {
          toggleTrainingButton.textContent = "DESATIVAR TREINO";
          ativarTreino();
        } else {
          toggleTrainingButton.textContent = "ATIVAR TREINO";
          desativarTreino();
        }
      });
    }
  
    function ativarTreino() {
      console.log("Treino ativado!");
      exibirLegendas();
    }
  
    function desativarTreino() {
      console.log("Treino desativado!");
      ocultarLegendas();
    }
  
    function exibirLegendas() {
      const legends = document.querySelectorAll(".legend");
  
      legends.forEach((legend, index) => {
        if (index < pairs.length) {
          legend.textContent = `${pairs[index].name} - Nota ${pairs[index].note}`;
          legend.style.display = "block"; // Exibe a legenda
        } else {
          legend.style.display = "none"; // Oculta se não houver correspondência
        }
      });
    }
  
    function ocultarLegendas() {
      const legends = document.querySelectorAll(".legend");
      legends.forEach((legend) => {
        legend.textContent = "";
        legend.style.display = "none";
      });
    }
  
    // Lista de notas e seus nomes
    const pairs = [
      { note: "C", name: "Dó" },
      { note: "D", name: "Ré" },
      { note: "E", name: "Mi" },
      { note: "F", name: "Fá" },
      { note: "G", name: "Sol" },
      { note: "A", name: "Lá" },
      { note: "B", name: "Si" },
      { note: "C#", name: "Dó#" },
      { note: "D#", name: "Ré#" },
      { note: "F#", name: "Fá#" },
      { note: "G#", name: "Sol#" },
      { note: "A#", name: "Lá#" },
      { note: "Db", name: "Ré♭" },
      { note: "Eb", name: "Mi♭" },
      { note: "Gb", name: "Fá♭" },
      { note: "Ab", name: "Lá♭" },
      { note: "Bb", name: "Si♭" },
    ];
  });
  