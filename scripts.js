
const botaoOn = document.querySelector('#big-button');
const botaoOff = document.querySelector('#off');
const botaoStart = document.querySelector('#start')

const tela = document.querySelector('#screen');
const greenLantern = document.querySelector('.green-lantern');

const setaCima = document.querySelector('.arrow-up');
const setaDireita = document.querySelector('.arrow-right');

let isLigado = false;

function ligarPokedex() {
    if (!isLigado) {
        isLigado = true;
        botaoOn.classList.add('aceso');
        tela.classList.add('aceso');
        greenLantern.classList.add('aceso');
        tela.innerHTML = '<img src="./assets/logos/pikachu-logo.gif" alt="poke-logo" class="logo-animada">';

    }
}

function resetSite() {
    isLigado = false;
    botaoOn.classList.remove('aceso');
    tela.classList.remove('aceso');
    greenLantern.classList.remove('aceso');
    tela.innerHTML = '';

}

////////////////////////////////////////////////////////////

setaCima.addEventListener('click', function(){ 
    if (!isLigado) return; 
    console.log("Avançar Pokémon (Seta Cima)");
});

setaDireita.addEventListener('click', function(){ 
    if (!isLigado) return;
    console.log("Avançar pokémon (seta direita)");
})

////////////////////////////////////////////////////////////

botaoOn.addEventListener('click', ligarPokedex);
botaoOff.addEventListener('click', resetSite);
