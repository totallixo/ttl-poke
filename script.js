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
    nome: 'Steene',
    nick: 'Bulbassaura',
    type: 'Grass',
    img: 'https://www.smogon.com/dex/media/sprites/xy/steenee.gif'
  },
  {
    nome: 'Marowak (Alolan)',
    nick: 'Cubona',
    type: 'Fire - Ghost',
    img: 'https://www.smogon.com/dex/media/sprites/xy/marowak-alola.gif'
  },
  {
    nome: 'Drifloon',
    nick: 'Prd do Balão',
    img: 'https://archives.bulbagarden.net/media/upload/3/32/Spr_5b_425.png'
  },
];

const div = document.querySelector('.pokemons')


console.log(pokeData)

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
};
