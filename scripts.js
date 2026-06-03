
const botaoOn = document.querySelector('#big-button');
const botaoOff = document.querySelector('#off');
const botaoStart = document.querySelector('#start');

const tela = document.querySelector('#screen');
const greenLantern = document.querySelector('.green-lantern');

const smallScreen = document.querySelector('.small-screen');
const identify = document.querySelector('.identify');
const dice = document.querySelector('.dice');
const infoBox = document.querySelector('.info');

const setaCima = document.querySelector('.arrow-up');
const setaDireita = document.querySelector('.arrow-right');
const setaBaixo = document.querySelector('.arrow-down');
const setaEsquerda = document.querySelector('.arrow-left');

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

    { 
        id: 4,
        name: "Charmander",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/004.png",
        pixel: "./assets/imgs/pixel-charmander.png",
        descricao: "A chama em sua cauda demonstra a força de sua energia vital. Se Charmander estiver fraco, a chama também arderá fracamente.",
    },
    
    { 
        id: 5,
        name: "Charmeleon",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/005.png",
        pixel: "./assets/imgs/pixel-charmeleon.png",
        descricao: "É uma pessoa de natureza muito impulsiva, por isso está sempre à procura de oponentes para enfrentar. Sua agressividade não se aplaca se não vencer.",
    },
        
    { 
        id: 6,
        name: "Charizard",
        tipo: "Fogo / Voador",
        imagem: "./assets/assets-dex/006.png",
        pixel: "./assets/imgs/pixel-charizard.png",
        descricao: "Ele usa suas asas para voar bem alto. Quanto mais experiência adquire em batalha, maior a temperatura em que suas chamas queimam.",
    },
]

let pokemonAtual = 0
let isLigado = false;

function ligarPokedex(){
    if (!isLigado) {
        isLigado = true;
        botaoOn.classList.add('aceso');
        tela.classList.add('aceso');

        identify.classList.add('aceso')
        smallScreen.classList.add('aceso');
        dice.classList.add('aceso');
        infoBox.classList.add('aceso');

        greenLantern.classList.add('aceso');
        tela.innerHTML = '<img src="./assets/logos/pikachu-logo.gif" alt="poke-logo" class="logo-animada">';

    }
}

function resetSite(){
    isLigado = false;
    botaoOn.classList.remove('aceso');
    tela.classList.remove('aceso');

    identify.classList.remove('aceso');
    smallScreen.classList.remove('aceso');
    dice.classList.remove('aceso');
    infoBox.classList.remove('aceso');

    greenLantern.classList.remove('aceso');
    tela.innerHTML = '';
    if (smallScreen) smallScreen.innerHTML = '';
    if (identify) identify.innerHTML = '';
    if (dice) dice.innerHTML = '';
    if (infoBox) infoBox.innerHTML = '<p class="text"> type: </p>';

}

////////////////////////////////////////////////////////////

function mostrarPokemon(){
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

    if (identify) {
        identify.innerHTML = `
            <p class="identify-id"> <b> #${pokemon.id.toString().padStart(3, '0')} </b> </p>
            <p class="identify-name"> <b> ${pokemon.name} </b> </p>
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

function avançarPokemon(){ 
    pokemonAtual++;

    if(pokemonAtual >= listaPokemon.length){ 
        pokemonAtual = 0;
    }

    mostrarPokemon();
}

function voltarPokemon(){ 
    pokemonAtual--;

    if(pokemonAtual < 0){
        pokemonAtual = listaPokemon.length - 1;
    }

    mostrarPokemon();
}

////////////////////////////////////////////////////////////

// EVENTO DO BOTÃO START
botaoStart.addEventListener('click', function(){
    if (!isLigado) return; 

    pokemonAtual = 0; 
    mostrarPokemon(); 
});

setaCima.addEventListener('click', function(){ 
    if (!isLigado) return; 
    avançarPokemon()
});

setaDireita.addEventListener('click', function(){ 
    if (!isLigado) return;
    avançarPokemon()
})

setaEsquerda.addEventListener('click', function(){ 
    if (!isLigado) return;
    voltarPokemon()
})

setaBaixo.addEventListener('click', function(){ 
    if (!isLigado) return;
    voltarPokemon()
})

////////////////////////////////////////////////////////////

botaoOn.addEventListener('click', ligarPokedex);
botaoOff.addEventListener('click', resetSite);
