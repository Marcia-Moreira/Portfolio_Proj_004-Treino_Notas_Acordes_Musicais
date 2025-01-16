#!/bin/bash

# Exibe mensagem inicial
echo "🛠️  Configurando o ambiente para o projeto de treino de acordes..."

# Criação de pastas necessárias
echo "📁 Criando estrutura de pastas..."
mkdir -p assets/{css,js,images/sounds}

# Gerar arquivos base
echo "📄 Criando arquivos iniciais..."
touch index.html assets/css/{main.css,reset.css} assets/js/main.js

# Verifica se Python está instalado para configurar um servidor local
if command -v python3 &> /dev/null
then
    echo "🐍 Python3 detectado. Configurando servidor local..."
    python3 -m venv venv
    source venv/bin/activate
    echo "✅ Ambiente virtual ativado."
    echo "Instalando dependências (se houver)..."
    # Exemplo: instalar dependências, caso necessárias
    # pip install flask
else
    echo "❌ Python3 não encontrado. Pule a configuração do servidor local."
fi

# Adiciona dependências para desenvolvimento
echo "📦 Configurando dependências para o projeto..."
if command -v npm &> /dev/null
then
    echo "📦 npm detectado. Instalando Live Server..."
    npm install -g live-server
else
    echo "❌ npm não encontrado. Pule a configuração do Live Server."
fi

# Conclui o setup
echo "🎉 Configuração concluída! Você pode iniciar o servidor com:"
echo "   - Para Python: 'source venv/bin/activate' e 'python3 -m http.server'"
echo "   - Para Live Server: 'live-server'"


# Tornar o arquivo setup.sh executavel: chmod +x setup.sh

# Executar o script: ./setup.sh

