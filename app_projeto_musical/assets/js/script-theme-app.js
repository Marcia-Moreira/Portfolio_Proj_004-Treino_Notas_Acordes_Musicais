// Selecionar o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
// const body = document.body;
const html = document.documentElement; 
// Seleciona o <html> em vez do <body>

// Função para aplicar o tema
function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeIcon.classList.remove('bi-brightness-high');
        themeIcon.classList.add('bi-moon');
        themeText.textContent = 'Dark';
    } else {
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-brightness-high');
        themeText.textContent = 'Light';
    }
}

// Verifica o tema armazenado no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const storedTheme = localStorage.getItem('theme') || 'light'; // Define 'light' como tema padrão
    applyTheme(storedTheme); // Aplica o tema armazenado ou o padrão
});

// Função para alternar tema ao clicar no botão
themeToggle.addEventListener('click', function() {
    let currentTheme = html.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Armazena o novo tema no localStorage
});