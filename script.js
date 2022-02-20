const pokeData = [
  {
    nome: 'Hauter',
    nick: 'Luftal',
    img: 'https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png',
  },
  {
    nome: 'Crobat',
    nick: 'Aedes Egito',
    img: 'https://archives.bulbagarden.net/media/upload/5/51/Spr_5b_169.png'
  },
  {
    nome: 'Mantine',
    nick: 'Claudia Arraia',
    img: 'https://archives.bulbagarden.net/media/upload/7/7b/Spr_5b_226.png'
  },
  {
    nome: 'Noibat',
    nick: 'Punhetão',
    img: 'https://www.smogon.com/dex/media/sprites/xy/noibat.gif'
  },
  {
    nome: 'Espeon',
    nick: 'Churrasquinho',
    img: 'https://archives.bulbagarden.net/media/upload/0/07/Spr_5b_196.png'
  },
  {
    nome: 'Shellder',
    nick: 'Cleiton',
    img: 'https://archives.bulbagarden.net/media/upload/6/66/Spr_5b_090.png'
  },
  {
    nome: 'Arbok',
    nick: 'Ekandidiase',
    img: 'https://archives.bulbagarden.net/media/upload/0/00/Spr_5b_024.png'
  },
  {
    nome: 'Crabrawler',
    nick: 'Lu Punhetinha',
    img: 'https://www.smogon.com/dex/media/sprites/xy/crabrawler.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Steene',
    nick: 'Bulbassaura',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  

  
];

const div = document.querySelector('.pokemons')


console.log(pokeData)

function add ({ nome, nick, img }) {
  console.log(nome)
  const section = document.createElement('section')
  section.className = 'card';
  const name = document.createElement('p')
  name.innerHTML = nome;
  const nickName = document.createElement('p')
  nickName.innerHTML = nick;
  const imagem = document.createElement('img')
  imagem.src = img;

  section.appendChild(name)
  section.appendChild(nickName)
  section.appendChild(imagem)
  return section;
  };

function each () {
  pokeData.forEach((element) => {
    const data = {
      nome: element.nome,
      nick: element.nick,
      img: element.img,
    }
    div.appendChild(add(data));
  })
}

window.onload = () => {
  each();
};

