let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.Floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createdColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }

  //acende a proxima cor
  let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
      element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
      element.classList.remove('selected');
    });
  };
};

//checa se os botões clicados são os mesmos da ordem gerada aleatoriamente
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }

  if (clickedOrder.length == order.length) {
    alert(`Pontuacao: ${score}\nVocê acertou! Iniciando próximo nível`);
    nextLevel();
  }
};

//função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createdColorElement(color).classList.add('selected');

  setTimeout(() => {
    createdColorElement(color).classList.remove('selected');
  });

  checkOrder();
};
