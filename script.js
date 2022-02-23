const pokeData = [
  {
    nome: 'Hauter',
    nick: 'Luftal',
    type: 'Ghost - Poison',
    img: '/imgs/haunter.png',
  },
  {
    nome: 'Crobat',
    nick: 'Aedes Egito',
    type: 'Poison - Flying',
    img: '/imgs/crowbat.png'
  },
  {
    nome: 'Ditto',
    nick: 'Não escolhido ainda',
    type: 'Normal',
    img: '/imgs/ditto.png'
  },
  {
    nome: 'Mantine',
    nick: 'Claudia Arraia',
    type: 'Water - Flying',
    img: '/imgs/mantine.png'
  },
  {
    nome: 'Noibat',
    nick: 'Punhetão',
    type: 'Flying - Dragon',
    img: '/imgs/noibat.gif'
  },
  {
    nome: 'Espeon',
    nick: 'Churrasquinho',
    type: 'Psychic',
    img: '/imgs/espion.png'
  },
  {
    nome: 'Shellder',
    nick: 'Cleiton',
    type: 'Water',
    img: '/imgs/shelder.png'
  },
  {
    nome: 'Arbok',
    nick: 'Ekandidiase',
    type: 'Poison',
    img: '/imgs/arbok.png'
  },
  {
    nome: 'Crabrawler',
    nick: 'Lu Punhetinha',
    type: 'Fighting',
    img: '/imgs/crabrawler.gif'
  },
  {
    nome: 'Tsareena',
    nick: 'Bulbassaura',
    type: 'Grass',
    img: '/imgs/tsareena.gif'
  },
  {
    nome: 'Marowak (Alolan)',
    nick: 'Cubona',
    type: 'Fire - Ghost',
    img: '/imgs/marowak-alola.gif'
  },
  {
    nome: 'Drifblim',
    nick: 'Prd do Balão',
    type: 'Ghost - Flying',
    img: '/imgs/driff.png'
  },
  {
    nome: 'Shiinotic',
    nick: 'PauDoMarcelo',
    type: 'Grass - Fairy',
    img: '/imgs/shiinotic.gif'
  },
];

const div = document.querySelector('.pokemons')

function add ({ nome, nick, tipo, img }) {
  console.log(nome)
  const section = document.createElement('section')
  section.className = 'card';
  const name = document.createElement('p')
  name.className = 'name';
  name.innerHTML = nome;
  const nickName = document.createElement('p')
  nickName.innerHTML = nick;
  nickName.className = 'nick';
  const type = document.createElement('p')
  type.innerHTML = tipo;
  const imagem = document.createElement('img')
  imagem.src = img;

  section.appendChild(nickName)
  section.appendChild(name)
  section.appendChild(type)
  section.appendChild(imagem)
  return section;
  };
const a = ''
function each () {
  pokeData.forEach((element) => {
    const data = {
      nome: element.nome,
      nick: element.nick,
      tipo: element.type,
      img: element.img,
    }
    div.appendChild(add(data));
  })
}

window.onload = async () => {
  await each();
  console.log(`
  PARABÉNS VOCÊ ENCONTROU A:
  
▄▄▄█████▓ ▒█████  ▄▄▄█████▓ ▄▄▄       ██▓        ██▓     ██▓▒██   ██▒ ▒█████  
▓  ██▒ ▓▒▒██▒  ██▒▓  ██▒ ▓▒▒████▄    ▓██▒       ▓██▒    ▓██▒▒▒ █ █ ▒░▒██▒  ██▒
▒ ▓██░ ▒░▒██░  ██▒▒ ▓██░ ▒░▒██  ▀█▄  ▒██░       ▒██░    ▒██▒░░  █   ░▒██░  ██▒
░ ▓██▓ ░ ▒██   ██░░ ▓██▓ ░ ░██▄▄▄▄██ ▒██░       ▒██░    ░██░ ░ █ █ ▒ ▒██   ██░
  ▒██▒ ░ ░ ████▓▒░  ▒██▒ ░  ▓█   ▓██▒░██████▒   ░██████▒░██░▒██▒ ▒██▒░ ████▓▒░
  ▒ ░░   ░ ▒░▒░▒░   ▒ ░░    ▒▒   ▓▒█░░ ▒░▓  ░   ░ ▒░▓  ░░▓  ▒▒ ░ ░▓ ░░ ▒░▒░▒░ 
    ░      ░ ▒ ▒░     ░      ▒   ▒▒ ░░ ░ ▒  ░   ░ ░ ▒  ░ ▒ ░░░   ░▒ ░  ░ ▒ ▒░ 
  ░      ░ ░ ░ ▒    ░        ░   ▒     ░ ░        ░ ░    ▒ ░ ░    ░  ░ ░ ░ ▒  
             ░ ░                 ░  ░    ░  ░       ░  ░ ░   ░    ░      ░ ░  
                                                                              
BOA SORTE`)
};

