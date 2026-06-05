
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

const botaoPlay = document.querySelector('#play-music');
const botaoPause = document.querySelector('#pause-music');
const musicaBackground = new Audio('./audios/1-02. Theme Of Pallet Town.mp3');

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

    { 
        id: 7,
        name: "Squirtle",
        tipo: "Água",
        imagem: "./assets/assets-dex/007.png",
        pixel: "./assets/imgs/pixel-squirtle.png",
        descricao: "Sua carapaça é macia logo após o nascimento. Em pouco tempo, ela se torna tão resistente que um dedo que a cutuca ricocheteia sem problemas.",
    },
    
    { 
        id: 8,
        name: "Wartortle",
        tipo: "Água",
        imagem: "./assets/assets-dex/008.png",
        pixel: "./assets/imgs/pixel-wartortle.png",
        descricao: "Costuma se esconder na água para espreitar presas desavisadas. Enquanto nada rapidamente, move as orelhas para manter o equilíbrio.",
    },
        
    { 
        id: 9,
        name: "Blastoise ",
        tipo: "Água",
        imagem: "./assets/assets-dex/009.png",
        pixel: "./assets/imgs/pixel-blastoise.png",
        descricao: "Possui jatos de combustível em sua carapaça. Este Pokémon impressionante usa esses jatos para investir contra os inimigos com toda a força de um foguete.",
    },
      
    { 
        id: 10,
        name: "Caterpie",
        tipo: "Inseto",
        imagem: "./assets/assets-dex/010.png",
        pixel: "./assets/imgs/pixel-caterpie.png",
        descricao: "Para se proteger, libera um odor horrível pela antena em sua cabeça para afastar os inimigos.",
    },  

    { 
        id: 11,
        name: "Metapod",
        tipo: "Inseto",
        imagem: "./assets/assets-dex/011.png",
        pixel: "./assets/imgs/pixel-metapod.png",
        descricao: "Está aguardando o momento certo para evoluir. Nesta fase, só consegue endurecer, por isso permanece imóvel para evitar ataques.",
    },

    { 
        id: 12,
        name: "Butterfree",
        tipo: "Inseto / Voador",
        imagem: "./assets/assets-dex/012.png",
        pixel: "./assets/imgs/pixel-butterfree.png",
        descricao: "Ele adora o néctar das flores e consegue localizar áreas floridas que contenham até mesmo quantidades mínimas de pólen.",
    },
    
    { 
        id: 13,
        name: "Weedle",
        tipo: "Inseto / Venenoso",
        imagem: "./assets/assets-dex/013.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e nos arbustos, onde se alimenta de folhas.",
    },
    
    { 
        id: 14,
        name: "Kakuna",
        tipo: "Inseto / Venenoso",
        imagem: "./assets/assets-dex/014.png",
        pixel: "./assets/imgs/kakuna-pixel.png",
        descricao: "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode estender seu ferrão e envenenar seu inimigo.",
    },
    
    { 
        id: 15,
        name: "Beedrill",
        tipo: "Inseto / Venenoso",
        imagem: "./assets/assets-dex/015.png",
        pixel: "./assets/imgs/pixel-bedril.png",
        descricao: "Possui três ferrões venenosos nas patas dianteiras e na cauda. São usados ​​para golpear repetidamente o inimigo.",
    },
    
    { 
        id: 16,
        name: "Pidgey",
        tipo: "Normal / Voador",
        imagem: "./assets/assets-dex/016.png",
        pixel: "./assets/imgs/pixel-pidyei.png",
        descricao: "Muito dócil. Se atacado, costuma levantar areia para se proteger em vez de revidar.",
    },
    
    { 
        id: 17,
        name: "Pidgeotto",
        tipo: "Normal / Voador",
        imagem: "./assets/assets-dex/017.png",
        pixel: "./assets/imgs/pixel-Pidgeotto.png",
        descricao: "Este Pokémon é cheio de vitalidade. Ele voa constantemente por seu vasto território em busca de presas.",
    },

    { 
        id: 18,
        name: "Pidgeot",
        tipo: "Normal / Voador",
        imagem: "./assets/assets-dex/018.png",
        pixel: "./assets/imgs/pixel-pigeot.png",
        descricao: "Este Pokémon voa à velocidade de Mach 2, em busca de presas. Suas grandes garras são temidas como armas cruéis.",
    },
    
    { 
        id: 19,
        name: "Ratata",
        tipo: "Normal",
        imagem: "./assets/assets-dex/019.png",
        pixel: "./assets/imgs/ratata-pixel.png",
        descricao: "Mastiga qualquer coisa com suas presas. Se você vir um, pode ter certeza de que outros 40 vivem na área.",
    },
    
    { 
        id: 20,
        name: "Raticate",
        tipo: "Normal",
        imagem: "./assets/assets-dex/020.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Suas patas traseiras são palmadas. Elas funcionam como nadadeiras, permitindo que ele nade em rios e cace presas.",
    },
    
    { 
        id: 21,
        name: "Spearow",
        tipo: "Normal / Voador",
        imagem: "./assets/assets-dex/021.png",
        pixel: "./assets/imgs/pixel-Spearow.png",
        descricao: "Inábil para voar alto. No entanto, consegue voar muito rápido para proteger seu território.",
    },
    
    { 
        id: 22,
        name: "Fearow",
        tipo: "Normal / Voador",
        imagem: "./assets/assets-dex/022.png",
        pixel: "./assets/imgs/pixel-Fearow.png",
        descricao: "Um Pokémon que existe há muitos anos. Se pressentir perigo, ele voa alto e para longe instantaneamente.",
    },

    { 
        id: 23,
        name: "Ekans",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/023.png",
        pixel: "./assets/imgs/pixel-Ekans.png",
        descricao: "Ela consegue destacar livremente a mandíbula para engolir presas grandes inteiras. No entanto, pode ficar pesada demais para se mover.",
    },

    
    { 
        id: 24,
        name: "Arbok",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/024.png",
        pixel: "./assets/imgs/pixel-Arbok.png",
        descricao: "O padrão em sua barriga parece ser um rosto assustador. Inimigos fracos fugirão só de ver o padrão.",
    },

    
    { 
        id: 25,
        name: "Pikachu",
        tipo: "Elétrico",
        imagem: "./assets/assets-dex/025.png",
        pixel: "./assets/imgs/pixel-Pikachu.png",
        descricao: "Quando se irrita, descarrega imediatamente a energia armazenada nas bolsas em suas bochechas.",
    },

    
    { 
        id: 26,
        name: "Raichu",
        tipo: "Elétrico",
        imagem: "./assets/assets-dex/026.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Quando sua eletricidade aumenta, seus músculos são estimulados e ele se torna mais agressivo do que o normal.",
    },
]


let pokemonAtual = 0
let isLigado = false;

function obterCorPorTipo(tipo) {
    const chave = tipo.toLowerCase();
    if (chave.includes('planta')) return '#8bc34a';
    if (chave.includes('elétrico') || chave.includes('eletrico')) return '#ffeb3b';
    if (chave.includes('veneno') || chave.includes('venenoso')) return '#9c27b0';
    if (chave.includes('inseto')) return '#b2ff59';
    if (chave.includes('fogo')) return '#f44336';
    if (chave.includes('água') || chave.includes('agua')) return '#2196f3';
    if (chave.includes('voador')) return '#9e9e9e';
    if (chave.includes('normal')) return '#ffffff';
    return '#ffffff';
}

/////////////////////////////////////////////////////////////
/// LIGA / DESLIGA

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
    tela.style.background = '';

    musicaBackground.pause();
    musicaBackground.currentTime = 0;
    botaoPlay.classList.remove('disponivel');
    botaoPause.classList.remove('disponivel');

    if (smallScreen) smallScreen.innerHTML = '';
    if (identify) identify.innerHTML = '';
    if (dice) dice.innerHTML = '';
    if (infoBox) infoBox.innerHTML = '<p class="text"> type: </p>';

}

////////////////////////////////////////////////////////////
/// FUNCTIONS DAS SCREENS

function mostrarPokemon(){
    const pokemon = listaPokemon[pokemonAtual];
    if (!pokemon) {
        console.warn('Pokémon não encontrado em listaPokemon:', pokemonAtual);
        return;
    }

    const corTipo = obterCorPorTipo(pokemon.tipo);
    tela.style.background = corTipo;

    tela.innerHTML = `
        <div class="pokemon-card" style="background: ${corTipo};">
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
        const tipos = pokemon.tipo.split('/').map(tipo => tipo.trim());
        const chips = tipos.map(tipo => {
            const cor = obterCorPorTipo(tipo);
            return `<div class="type-chip" style="background: ${cor};">${tipo}</div>`;
        }).join('');

        infoBox.innerHTML = `
            <p class="text"><b> tipo: </b></p>
            <div class="type-chip-container">${chips}</div>
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
/// EVENTO DO BOTÃO START

botaoStart.addEventListener('click', function(){
    if (!isLigado) return; 

    pokemonAtual = 0; 
    mostrarPokemon(); 
});

////////////////////////////////////////////////////////////
/// FUNCTIONS DE COMANDO 

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

/////////////////////////////////////////////////////////////
/// MUSIC BUTTONS

botaoPlay.addEventListener('click', function(){ 
    if (!isLigado) return; // Só toca se a Pokédex estiver ligada!
    
    musicaBackground.play();
});

botaoPause.addEventListener('click', function() {
    if (!isLigado) return; // Só pausa se estiver ligada
    
    musicaBackground.pause();
});

////////////////////////////////////////////////////////////
/// EVENTOS DE CLICK

botaoOn.addEventListener('click', ligarPokedex);
botaoOff.addEventListener('click', resetSite);
