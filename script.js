const pokeData = [
  {
    nome: 'Hauter',
    nick: 'Luftal',
    type: 'Ghost - Poison',
    img: 'https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png',
  },
  {
    nome: 'Crobat',
    nick: 'Aedes Egito',
    type: 'Poison - Flying',
    img: 'https://archives.bulbagarden.net/media/upload/5/51/Spr_5b_169.png'
  },
 {
    nome: 'Ditto',
    nick: 'Não escolhido ainda',
    type: 'Normal',
    img: 'https://archives.bulbagarden.net/media/upload/5/5f/Spr_5b_132.png',
  },
  {
    nome: 'Mantine',
    nick: 'Claudia Arraia',
    type: 'Water - Flying',
    img: 'https://archives.bulbagarden.net/media/upload/7/7b/Spr_5b_226.png'
  },
  {
    nome: 'Noibat',
    nick: 'Punhetão',
    type: 'Flying - Dragon',
    img: 'https://www.smogon.com/dex/media/sprites/xy/noibat.gif'
  },
  {
    nome: 'Espeon',
    nick: 'Churrasquinho',
    type: 'Psychic',
    img: 'https://archives.bulbagarden.net/media/upload/0/07/Spr_5b_196.png'
  },
  {
    nome: 'Shellder',
    nick: 'Cleiton',
    type: 'Water',
    img: 'https://archives.bulbagarden.net/media/upload/6/66/Spr_5b_090.png'
  },
  {
    nome: 'Arbok',
    nick: 'Ekandidiase',
    type: 'Poison',
    img: 'https://archives.bulbagarden.net/media/upload/0/00/Spr_5b_024.png'
  },
  {
    nome: 'Crabrawler',
    nick: 'Lu Punhetinha',
    type: 'Fighting',
    img: 'https://www.smogon.com/dex/media/sprites/xy/crabrawler.gif'
  },
  {
    nome: 'Tsareena',
    nick: 'Bulbassaura',
    type: 'Grass',
    img: 'https://www.smogon.com/dex/media/sprites/xy/tsareena.gif'
  },
  {
    nome: 'Marowak (Alolan)',
    nick: 'Cubona',
    type: 'Fire - Ghost',
    img: 'https://www.smogon.com/dex/media/sprites/xy/marowak-alola.gif'
  },
  {
    nome: 'Drifblim',
    nick: 'Prd do Balão',
    type: 'Ghost - Flying',
    img: 'https://archives.bulbagarden.net/media/upload/3/32/Spr_5b_426.png'
  },
];

const div = document.querySelector('.pokemons')


console.log(pokeData)

async function add ({ nome, nick, tipo, img }) {
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

async function each () {
 await pokeData.forEach((element) => {
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
};
