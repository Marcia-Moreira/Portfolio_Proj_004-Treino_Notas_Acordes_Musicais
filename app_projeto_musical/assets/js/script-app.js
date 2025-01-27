// Sidebar 
// Menu Lateral
// https://youtu.be/Poh9zuXp0YA?si=A5nc7PEkvtk2evt_
// https://youtu.be/mm4TAzPYvm4?si=KVdMPFiOhbY3pwko

// Primeiro guarde todas os itens na classe .item-menu:
var menuItem = document.querySelectorAll('.item-menu')

// Criar uma função Selecionar:
function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
    // Essa função está retirando ativo de um item que eu não cliquei e colocando ativo no que eu cliquei!
}

// Criar função Escutar:
menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

// Expandir Menu com o Botão Amburguer:
var btnExp = document.querySelector('#btn-exp')

var menuSide = document.querySelector('.menu-lateral')

var containerPaginas = document.querySelector('.container-layout')

// Chamar o btn-exp:
btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    containerPaginas.classList.toggle('expandido')
})
    // Ajustar a largura do container principal com base no estado do menu (aberto x fechado):

    // if (menuSide.classList.contains('expandir')) {
    //     containerPaginas.style.width = 'calc(100vw - 300px)'
    // } else {
    //     containerPaginas.style.width = 'calc(100vw - 60px)'
    // }


// Menu Amburguer fechar em X:
// Código para criar efeito de bolha animada no navbar:
const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector(".btn-expandir");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Responsividade: ajustar para dispositivos móveis
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        containerPaginas.style.width = '100vw' // Tela cheia em dispositivos menores
        containerPaginas.style.marginLeft = '0'
    } else if (menuSide.classList.contains('expandir')) {
        containerPaginas.style.width = 'calc(100vw - 250px)'
        containerPaginas.style.marginLeft = '250px'
    } else {
        containerPaginas.style.width = 'calc(100vw - 60px)'
        containerPaginas.style.marginLeft = '60px'
    }
})