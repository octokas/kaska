var num = 0;
var shuffle = document.querySelector(".shuffle");
var button = document.querySelector("#card");
var eng = document.querySelector("#trans");
var instr = document.querySelector("#instr").innerHTML = "Please use either the <b><u>up</u></b> and <b><u>down</u></b> arrow keys, OR use the <b><u>left</u></b> and <b><u>right</u></b> arrow keys to continue through the deck, OR simply <b><u>click</u></b> through the cards.";

document.addEventListener("keydown", event => {
  const keyName = event.key;
  if (keyName === "ArrowRight") {
    checkAnswer();
  } else if (keyName === "ArrowDown") {
    checkAnswer();
  } else if (keyName === "ArrowLeft") {
    if (button.classList.contains("answer")) {
      button.classList.remove("answer");
    }
    if (num > 0) {
      num -= 1;
    }
    button.innerHTML = cards[num].letter;
    eng.textContent = "";
  } else if (keyName === "ArrowUp") {
    if (button.classList.contains("answer")) {
      button.classList.remove("answer");
    }
    if (num > 0) {
      num -= 1;
    }
    button.innerHTML = cards[num].letter;
    eng.textContent = "";
  }
});

button.addEventListener("click", function() {
  checkAnswer();
});

function checkAnswer() {
  button.classList.toggle("answer");
  if (button.classList.contains("answer")) {
    button.innerHTML = cards[num].perfekt;
    eng.textContent = cards[num].romanized;
    num += 1;
  } else {
    button.innerHTML = cards[num].letter;
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
  button.classList.remove("answer");
  eng.textContent = "";
  num = 0;
  button.textContent = cards[num].letter;
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
    letter: "ג",
    perfekt: "ג Gimel",
    romanized: "(G as in green)"
  },
  {
    letter: "ד",
    perfekt: "ד Daleth",
    romanized: "(D as in door)"
  },
  {
    letter: "ה",
    perfekt: "ה He",
    romanized: "(H as in high)"
  },
  {
    letter: "ו",
    perfekt: "ו Vav",
    romanized: "(V as in valid)"
  },
  {
    letter: "ז",
    perfekt: "ז Zayin",
    romanized: "(Z as in zoo)"
  },
  {
    letter: "ח",
    perfekt: "ח Heth",
    romanized: "(CH/H as in hole)"
  },
  {
    letter: "ט",
    perfekt: "ט Teth",
    romanized: "(T as in telephone)"
  },
  {
    letter: "י",
    perfekt: "י Yod",
    romanized: "(Y as in yellow)"
  },
  {
    letter: "כ",
    perfekt: "כ Kaph",
    romanized: "(K as in book)"
  },
  {
    letter: "ל",
    perfekt: "ל Lamed",
    romanized: "(L as in lemon)"
  }
];

shuffleCards(cards);