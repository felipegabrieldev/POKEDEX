
const botaoOn = document.querySelector("#big-button");
const tela = document.querySelector('#screen');

let IsLigado = false;

botaoOn.addEventListener("click", ()=> { 
    if (!IsLigado){ 
        botaoOn.classList.add('#aceso');
        tela.innerHTML = '<img src="./assets/pikachu-logo.gif" alt="poke-logo" class="logo-animada">'
        IsLigado = true;
    } 
});