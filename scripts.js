
const botaoOn = document.querySelector('#big-button');
const botaoOff = document.querySelector('#off');
const botaoStart = document.querySelector('#start');

const tela = document.querySelector('#screen');
const greenLantern = document.querySelector('.green-lantern');

const smallScreen = document.querySelector('.small-screen');
const dice = document.querySelector('.dice');
const infoBox = document.querySelector('.info');

const setaCima = document.querySelector('.arrow-up');
const setaDireita = document.querySelector('.arrow-right');

const listaPokemon = [ 
    { 
        id: 1,
        name: "Bulbassaur",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/001.png",
        pixel: "./assets/imgs/pixel-bulbasaur.png",
        descricao: "Durante algum tempo após o nascimento, utiliza os nutrientes armazenados na semente em suas costas para crescer."
    },

    { 
        id: 2,
        name: "Ivysaur",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/002.png",
        pixel: "./assets/imgs/pixel-Ivysaur.png",
        descricao: "Quanto mais luz solar Ivysaur recebe, mais força surge dentro dele, permitindo que o broto em suas costas cresça."
    },

    { 
        id: 3,
        name: "Venasaur",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/003.png",
        pixel: "./assets/imgs/pixel-venasaur.png",
        descricao: "Enquanto se banha ao sol, consegue converter a luz em energia. Consequentemente, é mais potente no verão."
    }, 

]

let pokemonAtual = 0
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
    if (smallScreen) smallScreen.innerHTML = '';
    if (dice) dice.innerHTML = '';
    if (infoBox) infoBox.innerHTML = '<p class="text"> type: </p>';

}

////////////////////////////////////////////////////////////

function mostrarPokemon() {
    const pokemon = listaPokemon[pokemonAtual];
    if (!pokemon) {
        console.warn('Pokémon não encontrado em listaPokemon:', pokemonAtual);
        return;
    }

    tela.innerHTML = `
        <div class="pokemon-card">
            <img src="${pokemon.imagem}" alt="${pokemon.name}" class="pokemon-img">
        </div>
    `;

    if (smallScreen) {
        smallScreen.innerHTML = `
            <img src="${pokemon.pixel}" alt="Pixel ${pokemon.name}" class="pixel-img">
        `;
    }

    if (dice) {
        dice.innerHTML = `
            <p class="pokemon-description">${pokemon.descricao}</p>
        `;
    }

    if (infoBox) {
        infoBox.innerHTML = `
            <p class="text"> <b> tipo: </b> ${pokemon.tipo}</p>
        `;
    }
}

////////////////////////////////////////////////////////////

// EVENTO DO BOTÃO START
botaoStart.addEventListener('click', function() {
    if (!isLigado) return; 

    pokemonAtual = 0; 
    mostrarPokemon(); 
});

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
