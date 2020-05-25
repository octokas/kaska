var num = 0;
var shuffle = document.querySelector(".shuffle");
var aleph = document.querySelector(".aleph-order");
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
  //Fisher Yates Method from 1938 -- True Random Generator
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  button.classList.remove("answer");
  eng.textContent = "";
  num = 0;
  button.textContent = cards[num].letter;
};

var cards = [
  {
    letter: "א",
    perfekt: "א Aleph",
    romanized: "(A as in Father)",
    value: 0
  },
  {
    letter: "ב",
    perfekt: "ב Beth",
    romanized: "(B as in boy)",
    value: 1
  },
  {
    letter: "ג",
    perfekt: "ג Gimel",
    romanized: "(G as in green)",
    value: 2
  },
  {
    letter: "ד",
    perfekt: "ד Daleth",
    romanized: "(D as in door)",
    value: 3
  },
  {
    letter: "ה",
    perfekt: "ה He",
    romanized: "(H as in high)",
    value: 4
  },
  {
    letter: "ו",
    perfekt: "ו Vav",
    romanized: "(V as in valid)",
    value: 5
  },
  {
    letter: "ז",
    perfekt: "ז Zayin",
    romanized: "(Z as in zoo)",
    value: 6
  },
  {
    letter: "ח",
    perfekt: "ח Heth",
    romanized: "(CH/H as in hole)",
    value: 7
  },
  {
    letter: "ט",
    perfekt: "ט Teth",
    romanized: "(T as in telephone)",
    value: 8
  },
  {
    letter: "י",
    perfekt: "י Yod",
    romanized: "(Y as in yellow)",
    value: 9
  },
  {
    letter: "כ",
    perfekt: "כ Kaph",
    romanized: "(K as in book)",
    value: 10
  },
  {
    letter: "ל",
    perfekt: "ל Lamed",
    romanized: "(L as in lemon)",
    value: 11
  },
  {
    letter: "מ",
    perfekt: "מ Mem",
    romanized: "(M in mother)",
    value: 12
  },
  {
    letter: "נ",
    perfekt: "נ Nun",
    romanized: "(N as in cotton)",
    value: 13
  },
  {
    letter: "ס",
    perfekt: "ס Samekh",
    romanized: "(S as in ski)",
    value: 14
  },
  {
    letter: "ע",
    perfekt: "ע Ayin",
    romanized: "(A as in America)",
    value: 15
  },
  {
    letter: "פ",
    perfekt: "פ Pe",
    romanized: "(P as in pony)",
    value: 16
  },
  {
    letter: "צ",
    perfekt: "צ Sadhe",
    romanized: "(S/TZ/ZZ as pizza)",
    value: 17
  },
  {
    letter: "ק",
    perfekt: "ק Qoph",
    romanized: "(K as in pink)",
    value: 18
  },
  {
    letter: "ר",
    perfekt: "ר Resh",
    romanized: "(R as in room)",
    value: 19
  },
  {
    letter: "ש",
    perfekt: "ש Shin",
    romanized: "(SH as in sugar)",
    value: 20
  },
  {
    letter: "ת",
    perfekt: "ת Tav",
    romanized: "(T as in team)",
    value: 21
  }
];

// sort the array by value on click
aleph.addEventListener("click", function() {
  alephOrder(cards);
});

// grab the cards array
var bet = cards;
console.log(bet); // full array

// define the value as the number key value and remove the other fancies
// see more on sorting object arrays below
// https://www.w3schools.com/Js/js_array_sort.asp
function alephOrder(b) {
  bet.sort(function(a, b){return a.value - b.value});
  button.classList.remove("answer");
  eng.textContent = "";
  num = 0;
  button.textContent = cards[num].letter;
};

// TODO, ascribe each letter a number, so we can sort them on the click of the Aleph-Order button

shuffleCards(cards);
alephOrder(cards);