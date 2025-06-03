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

const opcoes = ["🎓 Faculdade", "📚 Estudar", "🧼 Lavar o cabelo"];
const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");
const botaoGirar = document.getElementById("girarRoleta");
const resultado = document.getElementById("resultadoRoleta");

let anguloInicial = 0;
let girando = false;

function desenharRoleta() {
  const raio = canvas.width / 2;
  const centroX = canvas.width / 2;
  const centroY = canvas.height / 2;
  const anguloPorOpcao = (2 * Math.PI) / opcoes.length;

  for (let i = 0; i < opcoes.length; i++) {
    const anguloInicio = anguloInicial + i * anguloPorOpcao;
    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.arc(centroX, centroY, raio, anguloInicio, anguloInicio + anguloPorOpcao);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "#d63384"; // contorno rosa fofo
    ctx.lineWidth = 2;
    ctx.stroke();

    // Texto
    ctx.save();
    ctx.translate(centroX, centroY);
    ctx.rotate(anguloInicio + anguloPorOpcao / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#222"; // letra preta
    ctx.font = "10px Comic Sans MS";
    ctx.fillText(opcoes[i], raio - 5, 3);
    ctx.restore();
  }

  // Indicador rosa
  ctx.beginPath();
  ctx.moveTo(centroX, 0);
  ctx.lineTo(centroX - 5, 10);
  ctx.lineTo(centroX + 5, 10);
  ctx.closePath();
  ctx.fillStyle = "#d63384";
  ctx.fill();
}

function girar() {
  if (girando) return;
  girando = true;

  let velocidade = Math.random() * 0.3 + 0.25;
  let desaceleracao = 0.005;

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharRoleta();
    anguloInicial += velocidade;
    velocidade -= desaceleracao;

    if (velocidade > 0) {
      requestAnimationFrame(animar);
    } else {
      anguloInicial %= 2 * Math.PI;
      const index = Math.floor(opcoes.length - (anguloInicial / (2 * Math.PI)) * opcoes.length) % opcoes.length;
      resultado.innerText = `Resultado: ${opcoes[index]} 💡`;
      girando = false;
    }
  }

  animar();
}

desenharRoleta();
botaoGirar.addEventListener("click", girar);
