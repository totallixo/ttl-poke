const pokeData = [
  {
    nome: 'Hauter',
    nick: 'Luftal',
    type1: './icons/Ghost.webp',
    type2: './icons/Poison.webp',
    img: './imgs/haunter.png',
  },
  {
    nome: 'Crobat',
    nick: 'Aedes Egito',
    type1: './icons/Flying.webp',
    type2: './icons/Poison.webp',
    img: './imgs/crowbat.png'
  },
  {
    nome: 'Ditto',
    nick: 'Jarbas',
    type1: './icons/Normal.webp',
    type2: '',
    img: './imgs/ditto.png'
  },
  {
    nome: 'Mantine',
    nick: 'Claudia Arraia',
    type1: './icons/Water.webp',
    type2: './icons/Flying.webp',
    img: './imgs/mantine.png'
  },
  {
    nome: 'Noibat',
    nick: 'Punhetão',
    type1: './icons/Flying.webp',
    type2: './icons/Dragon.webp',
    img: './imgs/noibat.gif'
  },
  {
    nome: 'Espeon',
    nick: 'Churrasquinho',
    type1: './icons/Psychic.webp',
    type2: '',
    img: './imgs/espion.png'
  },
  {
    nome: 'Starmie',
    nick: 'PT',
    type1: './icons/Water.webp',
    type2: './icons/Psychic.webp',
    img: './imgs/starmie.png',
  },
  {
    nome: 'Shellder',
    nick: 'Cleiton',
    type1: './icons/Water.webp',
    type2: '',
    img: './imgs/shelder.png'
  },
  {
    nome: 'Arbok',
    nick: 'Ekandidiase',
    type1: './icons/Poison.webp',
    type2: '',
    img: './imgs/arbok.png'
  },
  {
    nome: 'Marowak (Alolan)',
    nick: 'Cubona',
    type1: './icons/Fire.webp',
    type2: './icons/Ghost.webp',
    img: './imgs/marowak-alola.gif'
  },
  {
    nome: 'Crabrawler',
    nick: 'Lu Punhetinha',
    type1: './icons/Fighting.webp',
    type2: '',
    img: './imgs/crabrawler.gif'
  },
  {
    nome: 'Shiinotic',
    nick: 'PauDoMarcelo',
    type1: './icons/Grass.webp',
    type2: './icons/Fairy.webp',
    img: './imgs/shiinotic.gif'
  },
  {
    nome: 'Tsareena',
    nick: 'Bulbassaura',
    type1: './icons/Grass.webp',
    type2: '',
    img: './imgs/tsareena.gif'
  },
  {
    nome: 'Goomy',
    nick: 'Bukkakemon',
    type1: './icons/Water.webp',
    type2: './icons/Psychic.webp',
    img: './imgs/goomy.gif',
  },
  {
    nome: 'Drifblim',
    nick: 'Prd do Balão',
    type1: './icons/Ghost.webp',
    type2: './icons/Flying.webp',
    img: './imgs/driff.png'
  },
];

const div = document.querySelector('.pokemons')

function add ({ nome, nick, tipo1, tipo2, img }) {
  console.log(nome)
  const section = document.createElement('section')
  const typesSec = document.createElement('section')
  section.className = 'card';
  const name = document.createElement('p')
  name.className = 'name';
  name.innerHTML = nome;
  const nickName = document.createElement('p')
  nickName.innerHTML = nick;
  nickName.className = 'nick';
  const type1 = document.createElement('img')
  type1.src = tipo1;
  type1.className = 'type';
  const type2 = document.createElement('img')
  type2.src = tipo2;
  type2.className = 'type';
  const imagem = document.createElement('img')
  imagem.src = img;

  section.appendChild(nickName)
  section.appendChild(name)
  typesSec.appendChild(type1)
  typesSec.appendChild(type2)
  section.appendChild(imagem)
  return [section , typesSec]
  };
const a = ''
function each () {
  pokeData.forEach((element) => {
    const data = {
      nome: element.nome,
      nick: element.nick,
      tipo1: element.type1,
      tipo2: element.type2,
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

