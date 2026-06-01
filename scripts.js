
const botaoOn = document.querySelector('#big-button');
const tela = document.querySelector('#screen');

const botaoOff = document.querySelector('#off');
const setaCima = document.querySelector('.arrow-up');
const setaDireita = document.querySelector('.arrow-right');

let IsLigado = false;

botaoOn.addEventListener("click", ()=> { 
    if (!IsLigado){ 
        botaoOn.classList.add('aceso');
        tela.classList.add('aceso');
        tela.innerHTML = '<img src="./assets/pikachu-logo.gif" alt="poke-logo" class="logo-animada">'
       IsLigado = true;
    } else {
        botaoOn.classList.remove('aceso');
        tela.classList.remove('aceso');
        tela.innerHTML = ''; 
        IsLigado = false;
        } 
 });

function desligarPokedex() {
    isLigado = false;
    botaoOn.classList.remove('aceso');
    tela.innerHTML = '';
}

botaoOn.addEventListener('click', ()=> {
    if (!isLigado) {
        isLigado = true;
        botaoOn.classList.add('aceso');
        tela.innerHTML = '<img src="caminho-da-sua-imagem/logo.gif" alt="Pokemon Logo" class="logo-animada">';
    }
});

botaoOff.addEventListener('click', ()=> { 
    desligarPokedex();
});
