
const botaoOn = document.querySelector('#big-button');
const botaoOff = document.querySelector('#off');
const botaoStart = document.querySelector('#start');
const botaoRandom = document.querySelector('#random');

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

    { 
        id: 27,
        name: "Sandshrew",
        tipo: "Terra",
        imagem: "./assets/assets-dex/027.png",
        pixel: "./assets/imgs/Sandshrew-pixel.png",
        descricao: "Ele cava tocas profundas para viver. Quando em perigo, enrola o corpo para resistir a ataques.",
    },

    { 
        id: 28,
        name: "Sandslash",
        tipo: "Terra",
        imagem: "./assets/assets-dex/028.png",
        pixel: "./assets/imgs/Sandslash-pixel.png",
        descricao: "Os espinhos em seu corpo são formados por sua pele endurecida. Ele se enrola e ataca os inimigos com seus espinhos.",
    },    

    { 
        id: 29,
        name: "Nidoran ♀",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/029.png",
        pixel: "./assets/imgs/Nidoran-femea.png",
        descricao: "Ele usa seus dentes incisivos duros para esmagar e comer frutas silvestres. A ponta do chifre de uma Nidoran fêmea é um pouco mais arredondada do que a ponta do chifre de um macho.",
    },    

    { 
        id: 30,
        name: "Nidorina",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/030.png",
        pixel: "./assets/imgs/nidorina-pixel.png",
        descricao: "O chifre em sua cabeça atrofiou. Acredita-se que isso aconteça para que os filhotes de Nidorina não sejam espetados enquanto a mãe os alimenta.",
    },    

    { 
        id: 31,
        name: "Nidoqueen",
        tipo: "Venenoso / Terra",
        imagem: "./assets/assets-dex/031.png",
        pixel: "./assets/imgs/Nidoqueen-pixel.png",
        descricao: "Nidoqueen é melhor na defesa do que no ataque. Com escamas que funcionam como uma armadura, este Pokémon protege seus filhotes de qualquer tipo de ataque.",
    },    

    { 
        id: 32,
        name: "Nidoran ♂",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/032.png",
        pixel: "./assets/imgs/Nidoran-macho.png",
        descricao: "O chifre na testa de um Nidoran macho contém um veneno poderoso. Este é um Pokémon muito cauteloso, sempre atento às suas grandes orelhas.",
    },    

    { 
        id: 33,
        name: "Nidorino ",
        tipo: "Venenoso",
        imagem: "./assets/assets-dex/033.png",
        pixel: "./assets/imgs/Nidorino-pixel.png",
        descricao: "É nervoso e propenso a agir agressivamente. A potência do seu veneno aumenta conforme o nível de adrenalina presente em seu corpo.",
    },    

    { 
        id: 34,
        name: "Nidoking ",
        tipo: "Venenoso / Terra",
        imagem: "./assets/assets-dex/034.png",
        pixel: "./assets/imgs/Nidoking-pixel.png",
        descricao: "Quando entra em fúria, é impossível controlá-lo. Mas na presença de uma Nidoqueen com quem convive há muito tempo, Nidoking se acalma.",
    },    

    { 
        id: 35,
        name: "Clefairy",
        tipo: "Fada",
        imagem: "./assets/assets-dex/035.png",
        pixel: "./assets/imgs/Clefairy-pixel.png",
        descricao: "Nas noites de lua cheia, os Clefairy se reúnem de todos os lugares e dançam. Banhar-se ao luar os faz flutuar.",
    },    

    { 
        id: 36,
        name: "Clefable",
        tipo: "Fada",
        imagem: "./assets/assets-dex/036.png",
        pixel: "./assets/imgs/Clefable-pixel.png",
        descricao: "Um Pokémon fada tímido e raramente visto, que foge e se esconde assim que percebe a presença de pessoas.",
    },    

    { 
        id: 37,
        name: "Vulpix",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/037.png",
        pixel: "./assets/imgs/vulpix-pixel.png",
        descricao: "Se for atacado por um inimigo mais forte do que ele, finge estar ferido para enganá-lo e foge.",
    },    

    { 
        id: 38,
        name: "Ninetales",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/038.png",
        pixel: "./assets/imgs/Ninetales-pixel.png",
        descricao: "Algumas lendas afirmam que cada uma de suas nove caudas possui um tipo único de poder místico especial.",
    },    

    { 
        id: 39,
        name: "Jigglypuff",
        tipo: "Normal / Fada",
        imagem: "./assets/assets-dex/039.png",
        pixel: "./assets/imgs/Jigglypuff-pixel.png",
        descricao: "Quando seus enormes olhos vacilam, ela canta uma melodia misteriosamente suave que embala seus inimigos para dormir.",
    },    

    { 
        id: 40,
        name: "Wigglytuff",
        tipo: "Normal / Fada",
        imagem: "./assets/assets-dex/040.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Possui uma pelagem muito fina. Tome cuidado para não irritá-lo, ou ele pode inflar constantemente e desferir um golpe de corpo.",
    },    

    { 
        id: 41,
        name: "Zubat",
        tipo: "Venenoso / Voador",
        imagem: "./assets/assets-dex/041.png",
        pixel: "./assets/imgs/zubat-pixel.png",
        descricao: "Ele emite ondas ultrassônicas pela boca para verificar o ambiente ao seu redor. Mesmo em cavernas apertadas, Zubat voa com destreza.",
    },    

    { 
        id: 42,
        name: "Golbat ",
        tipo: "Venenoso / Voador",
        imagem: "./assets/assets-dex/042.png",
        pixel: "./assets/imgs/golbat-pixel.png",
        descricao: "Adora beber o sangue de outras criaturas. Diz-se que, se encontra outros de sua espécie passando fome, às vezes compartilha o sangue que coletou.",
    },    

    { 
        id: 43,
        name: "Oddish",
        tipo: "Planta / Venenoso",
        imagem: "./assets/assets-dex/043.png",
        pixel: "./assets/imgs/Oddish-pixel.png",
        descricao: "Seu nome científico é Oddium wanderus. Diz-se que, ao cair da noite, ela consegue percorrer distâncias de até 300 metros, caminhando sobre suas duas raízes."
    },    

    { 
        id: 44,
        name: "Gloom",
        tipo: "Planta / Venenoso",
        imagem: "./assets/assets-dex/044.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Ela secreta um néctar pegajoso, semelhante à saliva. Embora doce, seu cheiro é tão repulsivo que é impossível chegar muito perto.",
    },    

    { 
        id: 45,
        name: "Vileplume",
        tipo: "Planta / Venenoso",
        imagem: "./assets/assets-dex/045.png",
        pixel: "./assets/imgs/Vileplume-pixel.png",
        descricao: "O botão desabrocha com um estrondo. Em seguida, começa a espalhar pólen alergênico e venenoso.",
    },    

    { 
        id: 46,
        name: "Paras",
        tipo: "Inseto / Planta",
        imagem: "./assets/assets-dex/046.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Escava tocas no solo para roer as raízes das árvores. Os cogumelos em suas costas absorvem a maior parte dos nutrientes.",
    },    

    { 
        id: 47,
        name: "Parasect",
        tipo: "Inseto / Planta",
        imagem: "./assets/assets-dex/047.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "O inseto hospedeiro tem sua energia drenada pelo cogumelo em suas costas. O cogumelo parece ser o responsável por todo o processo mental.",
    },    

    { 
        id: 48,
        name: "Venonat ",
        tipo: "Inseto / Venenoso",
        imagem: "./assets/assets-dex/048.png",
        pixel: "./assets/imgs/Venonat-pixel.png",
        descricao: "O veneno escorre por todo o seu corpo. Ele captura pequenos Pokémon insetos à noite, atraídos pela luz.",
    },    

    { 
        id: 49,
        name: "Venomoth",
        tipo: "Inseto / Venenoso",
        imagem: "./assets/assets-dex/049.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "As asas são cobertas por escamas semelhantes a poeira. Cada vez que bate as asas, libera uma poeira altamente tóxica.",
    },

    { 
        id: 50,
        name: "Diglett",
        tipo: "Terra",
        imagem: "./assets/assets-dex/050.png",
        pixel: "./assets/imgs/Diglett-pixel.png",
        descricao: "Vive a cerca de um metro de profundidade, onde se alimenta de raízes de plantas. Às vezes, aparece na superfície.",
    },    

    { 
        id: 51,
        name: "Dugtrio",
        tipo: "Terra",
        imagem: "./assets/assets-dex/051.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Suas três cabeças se movem separadamente para cima e para baixo, soltando o solo próximo e facilitando a escavação.",
    },

    { 
        id: 52,
        name: "Meowth ",
        tipo: "Normal",
        imagem: "./assets/assets-dex/052.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Ele adora coisas que brilham. Quando vê um objeto brilhante, a moeda de ouro em sua cabeça também brilha.",
    },
    
    { 
        id: 53,
        name: "Persian",
        tipo: "Normal",
        imagem: "./assets/assets-dex/053.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Apesar de sua pelagem ter muitos admiradores, é difícil criá-lo como animal de estimação devido ao seu temperamento imprevisível e agressivo.",
    },
    
    { 
        id: 54,
        name: "Psyduck",
        tipo: "Água",
        imagem: "./assets/assets-dex/054.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "É constantemente atormentado por dores de cabeça. Quando a dor de cabeça se intensifica, começa a usar poderes misteriosos.",
    },
    
    { 
        id: 55,
        name: "Golduck ",
        tipo: "Água",
        imagem: "./assets/assets-dex/055.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Ela nada graciosamente pelas águas calmas e lentas dos rios e lagos que tanto aprecia.",
    },
    
    
    { 
        id: 56,
        name: "Mankey",
        tipo: "Lutador",
        imagem: "./assets/assets-dex/056.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Vive em grupos no topo das árvores. Se perde o seu grupo de vista, fica furioso com a solidão.",
    },
    
    { 
        id: 57,
        name: "Primeape",
        tipo: "Lutador",
        imagem: "./assets/assets-dex/057.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Alguns pesquisadores teorizam que Primeape permanece irritado mesmo dentro de uma Poké Bola.",
    },
    
    { 
        id: 58,
        name: "Growlithe",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/058.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Possui uma natureza corajosa e confiável. Enfrenta destemidamente inimigos maiores e mais fortes.",
    },
    
    { 
        id: 59,
        name: "Arcanine",
        tipo: "Fogo",
        imagem: "./assets/assets-dex/059.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Seu latido magnífico transmite uma sensação de majestade. Quem o ouve não consegue evitar se curvar diante dele.",
    },
    
    { 
        id: 60,
        name: "Poliwag",
        tipo: "Água",
        imagem: "./assets/assets-dex/060.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Suas pernas cresceram recentemente e ele não consegue andar muito bem. Parece preferir nadar na água.",
    },
    
    { 
        id: 61,
        name: "Poliwhirl ",
        tipo: "Água",
        imagem: "./assets/assets-dex/061.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Suas duas patas são bem desenvolvidas. Embora possa viver em terra, prefere viver na água.",
    },
    
    { 
        id: 62,
        name: "Poliwrath",
        tipo: "Água / Lutador",
        imagem: "./assets/assets-dex/062.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Apesar de ser habilidoso em um estilo de natação dinâmica que utiliza todos os seus músculos, por algum motivo vive em terra firme.",
    },

    { 
        id: 63,
        name: "Abra",
        tipo: "Psíquico",
        imagem: "./assets/assets-dex/063.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon utiliza.",
    },
    
    { 
        id: 64,
        name: "Kadabra",
        tipo: "Psíquico",
        imagem: "./assets/assets-dex/064.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Usando seu poder psíquico, Kadabra levita enquanto dorme. Ele usa sua cauda elástica como travesseiro.",
    },
    
    { 
        id: 65,
        name: "Alakazam",
        tipo: "Psíquico",
        imagem: "./assets/assets-dex/065.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Possui um nível de inteligência incrivelmente alto. Alguns dizem que Alakazam se lembra de tudo o que lhe acontece, do nascimento à morte.",
    },
    
    { 
        id: 66,
        name: "Machop",
        tipo: "Lutador",
        imagem: "./assets/assets-dex/066.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Seu corpo inteiro é composto de músculos. Apesar de ter o tamanho de uma criança humana, consegue arremessar 100 adultos.",
    },
    
    { 
        id: 67,
        name: "Machoke",
        tipo: "Lutador",
        imagem: "./assets/assets-dex/067.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Seu corpo musculoso é tão poderoso que precisa usar um cinto de economia de energia para conseguir regular seus movimentos.",
    },
    
    { 
        id: 68,
        name: "Machamp",
        tipo: "Lutador",
        imagem: "./assets/assets-dex/068.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Ele desfere socos com seus quatro braços a uma velocidade estonteante. Consegue lançar 1.000 socos em dois segundos.",
    },
    
    { 
        id: 69,
        name: "Bellsprout",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/069.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Independentemente do que Bellsprout esteja fazendo, se detectar movimento por perto, reagirá imediatamente estendendo seus finos cipós.",
    },
    
    { 
        id: 70,
        name: "Weepinbell",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/070.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Embora esteja cheio de ácido, não derrete porque também exala um fluido protetor.",
    },
    
    { 
        id: 71,
        name: "Victreebel",
        tipo: "Planta / Veneno",
        imagem: "./assets/assets-dex/071.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Uma vez dentro do corpo de Victreebel, até mesmo o objeto mais duro será derretido pelo ácido do Pokémon.",
    },
    
    { 
        id: 72,
        name: "Tentacool",
        tipo: "Água / Venenoso",
        imagem: "./assets/assets-dex/072.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Quando a maré baixa, exemplares de Tentacool desidratados podem ser encontrados na costa.",
    },
    
    { 
        id: 73,
        name: "Tentacruel",
        tipo: "Água / Venenoso",
        imagem: "./assets/assets-dex/073.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Nas raras ocasiões em que ocorrem grandes surtos de Tentacruel, todos os Pokémon peixes desaparecem do mar circundante.",
    },
    
    { 
        id: 74,
        name: "Geodude",
        tipo: "Pedra / Terra",
        imagem: "./assets/assets-dex/074.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Em repouso, parece apenas uma pedra. Mas se você pisar nela sem cuidado, ela vai agitar os punhos furiosamente.",
    },
        
    { 
        id: 75,
        name: "Graveler",
        tipo: "Pedra / Terra",
        imagem: "./assets/assets-dex/075.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Anda devagar e rola para se mover. Não presta atenção a nenhum objeto que esteja em seu caminho.",
    },
        
    { 
        id: 76,
        name: "Golem",
        tipo: "Pedra / Terra",
        imagem: "./assets/assets-dex/076.png",
        pixel: "./assets/imgs/diversos.png",
        descricao: "Está envolto por uma carapaça dura, tão resistente quanto lajes de rocha. Troca de pele uma vez por ano para crescer.",
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
    if (chave.includes('lutador')) return '#D56723';
    if (chave.includes('fada')) return '#FDB9E9';
    if (chave.includes('psíquico') || chave.includes('psiquico')) return '#F366B9';
    if (chave.includes('pedra')) return '#696969';
    if (chave.includes('terra')) return '#8a540e';
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
/// RANDOM

botaoRandom.addEventListener('click', function(){ 
    if (!isLigado) return;

    tela.style.background = '#FAFBFB';
    tela.innerHTML = `
        <div class="captura-container">
            <img src="./assets/logos/pokeball.gif" class="pokeball-gif">
        </div>
    `;

    if (dice) {
        dice.innerHTML = '<p class="captura-texto">Capturando Pokémon selvagem...</p>';
    }

    const indiceAleatorio = Math.floor(Math.random() * listaPokemon.length);
    pokemonAtual = indiceAleatorio;

    setTimeout(function() {

        if (isLigado) {
            mostrarPokemon();
        }
    }, 2000);
})

////////////////////////////////////////////////////////////
/// EVENTOS DE CLICK

botaoOn.addEventListener('click', ligarPokedex);
botaoOff.addEventListener('click', resetSite);
