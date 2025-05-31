const mensagens = [
  "Seu sorriso ilumina tudo ao meu redor 🌟",
  "Você é a definição de fofura 😍",
  "Luiza, você é incrível do jeitinho que é 💖",
  "Se eu pudesse te dar uma estrela, dava todas 🌠",
  "Hoje é um bom dia só porque você existe 💕",
  "Seu jeitinho doce é meu refúgio favorito 🌸",
  "Cada momento com você é um presente 🎁",
  "Você faz até o dia nublado ficar ensolarado ☀️",
  "Seus olhos brilham mais que as estrelas ✨",
  "Luiza, seu sorriso é a minha música favorita 🎶",
  "Você é poesia que me inspira a cada instante 📖",
  "O mundo é mais bonito com você nele 🌷",
  "Você é a razão dos meus melhores sorrisos 😊",
  "Te ver feliz é o meu desejo mais puro ❤️",
  "Com você, tudo ganha um toque especial 💫",
  "Seu carinho aquece meu coração como um abraço quentinho 🤗",
  "Luiza, você é o meu capítulo preferido da vida 📚",
  "Você tem o poder de transformar o simples em mágico ✨",
  "Saber que você existe já me faz sorrir 😄",
  "Você é a luz que clareia meus dias escuros 💡",
  "Cada dia ao seu lado é uma nova aventura 🌈",
  "Seu jeito meigo é meu lugar favorito para estar 🏡",
  "Você é a melhor parte das minhas histórias 🌟",
  "Com você, tudo fica mais leve e colorido 🎨",
  "Você é o meu sonho que virou realidade 🌙",
  "Luiza, seu sorriso é um raio de sol em dias cinzas ☀️",
  "Sua voz é a melodia que acalma meu coração 🎵",
  "Você é um anjo que caiu do céu só pra mim 👼",
  "Saber que posso contar com você me faz forte 💪",
  "Você é a inspiração por trás dos meus melhores pensamentos 💭"
];


const carinhoBtn = document.getElementById("carinhoBtn");
const mensagemFofa = document.getElementById("mensagemFofa");

carinhoBtn.addEventListener("click", () => {
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
  mensagemFofa.innerText = msg;
});

const musicaBtn = document.getElementById("musicaBtn");
const bgMusic = document.getElementById("bgMusic");
const botao = document.getElementsByClassName("coracao-secreto")
let tocando = false;
musicaBtn.addEventListener("click", () => {
  if (!tocando) {
    bgMusic.play();
    musicaBtn.innerText = "Pausar Música ⏸️";
  } else {
    bgMusic.pause();
    musicaBtn.innerText = "Tocar Música 🎶";
  }
  tocando = !tocando;
});

const botaoSecreto = document.getElementById("botaoSecreto");
const mensagemSecreta = document.getElementById("mensagemSecreta");

botaoSecreto.addEventListener("click", () => {
  mensagemSecreta.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (e.clientX < 50 && e.clientY < 50) {
    document.body.classList.add("modo-secreto");
    alert("Modo especial ativado 🌠\n\nEsse site agora brilha só pra você, Luiza.");
    alert("Você achou o cantinho do coração 💗\n\nLuiza, você é o meu lugar seguro.");
    
  }
    

});

let konami = [];
const segredo = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener("keydown", e => {
  konami.push(e.keyCode);
  konami.splice(-segredo.length - 1, konami.length - segredo.length);
  if (konami.join('') === segredo.join('')) {
    document.body.classList.add("modo-secreto");
    alert("Modo especial ativado 🌠\n\nEsse site agora brilha só pra você, Luiza.");
  }
});

