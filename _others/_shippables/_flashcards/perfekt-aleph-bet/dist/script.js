var num = 0;
var shuffle = document.querySelector(".shuffle");
var div = document.querySelector("#card");
var eng = document.querySelector("#trans");

document.addEventListener("keydown", event => {
  const keyName = event.key;
  if (keyName === "ArrowRight") {
    checkAnswer();
  } else if (keyName === "ArrowLeft") {
    if (div.classList.contains("answer")) {
      div.classList.remove("answer");
    }
    if (num > 0) {
      num -= 1;
    }
    div.innerHTML = cards[num].letter;
    eng.textContent = "";
  }
});

div.addEventListener("click", function() {
  checkAnswer();
});

function checkAnswer() {
  div.classList.toggle("answer");
  if (div.classList.contains("answer")) {
    div.innerHTML = cards[num].perfekt;
    eng.textContent = cards[num].romanized;
    num += 1;
  } else {
    div.innerHTML = cards[num].letter;
    eng.textContent = "";
  }
  if (num === cards.length) {
    num = 0;
  }
}

shuffle.addEventListener("click", function() {
  shuffleCards(cards);
});

function shuffleCards(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  div.classList.remove("answer");
  eng.textContent = "";
  num = 0;
  div.textContent = cards[num].letter;
}

var cards = [
  {
    letter: "א",
    perfekt: "א Aleph",
    romanized: "(A as in Father)"
  },
  {
    letter: "ב",
    perfekt: "ב Beth",
    romanized: "(B as in boy)"
  },
  {
    letter: "ב",
    perfekt: "ב Beth",
    romanized: "(B as in boy)"
  },
  {
    letter: "ב",
    perfekt: "ב Beth",
    romanized: "(B as in boy)"
  },
  {
    letter: "ב",
    perfekt: "ב Beth",
    romanized: "(B as in boy)"
  }
];

shuffleCards(cards);