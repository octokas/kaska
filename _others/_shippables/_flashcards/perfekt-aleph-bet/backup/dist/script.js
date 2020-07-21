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
    div.innerHTML = cards[num].word;
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
    eng.textContent = cards[num].english;
    num += 1;
  } else {
    div.innerHTML = cards[num].word;
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
  div.textContent = cards[num].word;
}

var cards = [
  {
    word: "א",
    perfekt: "Aleph",
    romanized: "(To Sleep)"
  },
  {
    word: "Spielen",
    perfekt: "Gespielt",
    romanized: "(To Play)"
  },
  {
    word: "Lernen",
    perfekt: "Gelernt",
    romanized: "(To Learn)"
  },
  {
    word: "Sprechen",
    perfekt: "Gesprochen",
    romanized: "(To Speak)"
  },
  {
    word: "Geben",
    perfekt: "Gegeben",
    romanized: "(To Give)"
  },
  {
    word: "Wohnen",
    perfekt: "Gewohnt",
    romanized: "(To Live)"
  },
  {
    word: "Machen",
    perfekt: "Gemacht",
    romanized: "(To Do)"
  },
  {
    word: "Arbeiten",
    perfekt: "Gearbeitet",
    romanized: "(To Work)"
  },
  {
    word: "Fragen",
    perfekt: "Gefragt",
    romanized: "(To Ask)"
  },
  {
    word: "Reden",
    perfekt: "Geredet",
    romanized: "(To Reason)"
  },
  {
    word: "Studieren",
    perfekt: "Studiert",
    romanized: "(To Study)"
  },
  {
    word: "Manipulieren",
    perfekt: "Manipuliert",
    romanized: "(To Manipulate)"
  },
  {
    word: "Reparieren",
    perfekt: "Repariert",
    romanized: "(To Repair)"
  },
  {
    word: "Besuchen",
    perfekt: "Besucht",
    romanized: "(To Visit)"
  },
  {
    word: "Erleben",
    perfekt: "Erlebt",
    romanized: "(To Experience)"
  },
  {
    word: "Verkaufen",
    perfekt: "Verkauft",
    romanized: "(To Sell)"
  },
  {
    word: "Backen",
    perfekt: "Gebacken",
    romanized: "(To Bake)"
  },
  {
    word: "Befehlen",
    perfekt: "Befolhen",
    romanized: "(To Command)"
  },
  {
    word: "Beginnen",
    perfekt: "Begonnen",
    romanized: "(To Begin)"
  },
  {
    word: "Bei&szlig;en",
    perfekt: "Gebissen",
    romanized: "(To Bite)"
  },
  {
    word: "Bergen",
    perfekt: "Geborgen",
    romanized: "(To Secure)"
  },
  {
    word: "Bekommen",
    perfekt: "Bekommen",
    romanized: "(To Get)"
  },
  {
    word: "Betr&uuml;gen",
    perfekt: "Betrogen",
    romanized: "(To Cheat)"
  },
  {
    word: "Biegen",
    perfekt: "Gebogen",
    romanized: "(To Bend)"
  },
  {
    word: "Bieten",
    perfekt: "Geboten",
    romanized: "(To Offer)"
  },
  {
    word: "Binden",
    perfekt: "Gebunden",
    romanized: "(To Tie)"
  },
  {
    word: "Bitten",
    perfekt: "Gebeten",
    romanized: "(To Ask)"
  },
  {
    word: "Blasen",
    perfekt: "Geblasen",
    romanized: "(To Blow)"
  },
  {
    word: "Bleiben",
    perfekt: "Geblieben",
    english: "(To Stay)"
  },
  {
    word: "Braten",
    perfekt: "Gebraten",
    english: "(To Fry or Roast)"
  },
  {
    word: "Brechen",
    perfekt: "Gebrochen",
    english: "(To Break)"
  },
  {
    word: "Brennen",
    perfekt: "Gebrannt",
    english: "(To Burn)"
  },
  {
    word: "Bringen",
    perfekt: "Gebracht",
    english: "(To Bring)"
  },
  {
    word: "Denken",
    perfekt: "Gedacht",
    english: "(To Think)"
  },
  {
    word: "Empfangen",
    perfekt: "Empfangen",
    english: "(To Recieve)"
  },
  {
    word: "Empfehlen",
    perfekt: "Empfohlen",
    english: "(To Recommend)"
  },
  {
    word: "Empfinden",
    perfekt: "Empfunden",
    english: "(To Feel)"
  },
  {
    word: "Erl&ouml;schen",
    perfekt: "Erloschen",
    english: "(To Go Out)"
  },
  {
    word: "Erschrecken",
    perfekt: "Erschrocken",
    english: "(To Scare)"
  },
  {
    word: "Essen",
    perfekt: "Gegessen",
    english: "(To Eat)"
  },
  {
    word: "Fahren",
    perfekt: "Gefahren",
    english: "(To Drive)"
  },
  {
    word: "Fallen",
    perfekt: "Gefallen",
    english: "(To Fall)"
  },
  {
    word: "Fangen",
    perfekt: "Gefangen",
    english: "(To Catch)"
  },
  {
    word: "Finden",
    perfekt: "Gefunden",
    english: "(To Find)"
  },
  {
    word: "Fliegen",
    perfekt: "Geflogen",
    english: "(To Fly)"
  },
  {
    word: "Fliehen",
    perfekt: "Geflohen",
    english: "(To Flee)"
  },
  {
    word: "Flie&szlig;en",
    perfekt: "Geflossen",
    english: "(To Flow)"
  },
  {
    word: "Frieren",
    perfekt: "Gefroren",
    english: "(To Freeze)"
  },
  {
    word: "Gefallen",
    perfekt: "Gefallen",
    english: "(To Like)"
  },
  {
    word: "Gehen",
    perfekt: "Gegangen",
    english: "(To Go)"
  },
  {
    word: "Gelingen",
    perfekt: "Gelungen",
    english: "(To Succeed)"
  },
  {
    word: "Gelten",
    perfekt: "Gegolten",
    english: "(To Validate)"
  },
  {
    word: "Genie&szlig;en",
    perfekt: "Genossen",
    english: "(To Enjoy)"
  },
  {
    word: "Geschehen",
    perfekt: "Geschehen",
    english: "(To Finish)"
  },
  {
    word: "Gewinnen",
    perfekt: "Gewonnen",
    english: "(To Win)"
  },
  {
    word: "Gie&szlig;en",
    perfekt: "Gegossen",
    english: "(To Water)"
  },
  {
    word: "Gleiten",
    perfekt: "Geglitten",
    english: "(To Slide)"
  },
  {
    word: "Graben",
    perfekt: "Gegraben",
    english: "(To Dig)"
  },
  {
    word: "Greifen",
    perfekt: "Gegriffen",
    english: "(To Grab)"
  },
  {
    word: "Haben",
    perfekt: "Gehabt",
    english: "(To Have)"
  },
  {
    word: "Halten",
    perfekt: "Gehalten",
    english: "(To Hold)"
  },
  {
    word: "Heben",
    perfekt: "Gehoben",
    english: "(To Lift)"
  },
  {
    word: "Hei&szlig;en",
    perfekt: "Gehei&szlig;en",
    english: "(To Be Called)"
  },
  {
    word: "Helfen",
    perfekt: "Geholfen",
    english: "(To Help)"
  },
  {
    word: "Kennen",
    perfekt: "Gekannt",
    english: "(To Know)"
  },
  {
    word: "Klingen",
    perfekt: "Geklungen",
    english: "(To Sound)"
  },
  {
    word: "Kommen",
    perfekt: "Gekommen",
    english: "(To Come)"
  },
  {
    word: "Kriechen",
    perfekt: "Gekrochen",
    english: "(To Crawl)"
  },
  {
    word: "Laden",
    perfekt: "Geladen",
    english: "(Load)"
  },
  {
    word: "Lassen",
    perfekt: "Gelassen",
    english: "(To Let)"
  },
  {
    word: "Laufen",
    perfekt: "Gelaufen",
    english: "(To Run)"
  },
  {
    word: "Leiden",
    perfekt: "Gelitten",
    english: "(To Suffer)"
  },
  {
    word: "Leihen",
    perfekt: "Geliehen",
    english: "(To Lend)"
  },
  {
    word: "Lesen",
    perfekt: "Gelesen",
    english: "(To Read)"
  },
  {
    word: "Liegen",
    perfekt: "Gelegen",
    english: "(To Lie)"
  },
  {
    word: "L&uuml;gen",
    perfekt: "Gelogen",
    english: "(To Lie)"
  },
  {
    word: "Meiden",
    perfekt: "Gemieden",
    english: "(To Avoid)"
  },
  {
    word: "Messen",
    perfekt: "Gemessen",
    english: "(To Measure Up)"
  },
  {
    word: "Nehmen",
    perfekt: "Genommen",
    english: "(To Take)"
  },
  {
    word: "Nennen",
    perfekt: "Genannt",
    english: "(To Call)"
  },
  {
    word: "Pfeifen",
    perfekt: "Gepfiffen",
    english: "(To Pipe)"
  },
  {
    word: "Raten",
    perfekt: "Geraten",
    english: "(To Guess)"
  },
  {
    word: "Reiben",
    perfekt: "Gerieben",
    english: "(To Rub)"
  },
  {
    word: "Rei&szlig;en",
    perfekt: "Gerissen",
    english: "(To Crack)"
  },
  {
    word: "Reiten",
    perfekt: "Geritten",
    english: "(To Ride a Horse)"
  },
  {
    word: "Rennen",
    perfekt: "Gerannt",
    english: "(To Run)"
  },
  {
    word: "Riechen",
    perfekt: "Gerochen",
    english: "(To Smell)"
  },
  {
    word: "Rinnen",
    perfekt: "Geronnen",
    english: "(To Run)"
  },
  {
    word: "Rufen",
    perfekt: "Gerufen",
    english: "(To Call)"
  },
  {
    word: "Schaffen",
    perfekt: "Geschaffen",
    english: "(To Create)"
  },
  {
    word: "Scheiden",
    perfekt: "Geschieden",
    english: "(To Divorce)"
  },
  {
    word: "Scheinen",
    perfekt: "Geschienen",
    english: "(To Shine)"
  },
  {
    word: "Schieben",
    perfekt: "Geschoben",
    english: "(To Push)"
  },
  {
    word: "Schie&szlig;en",
    perfekt: "Geschossen",
    english: "(To Shoot)"
  },
  {
    word: "Schlagen",
    perfekt: "Geschlagen",
    english: "(To Beat)"
  },
  {
    word: "Schleichen",
    perfekt: "Geschlichen",
    english: "(To Shoot)"
  },
  {
    word: "Schlie&szlig;en",
    perfekt: "Geschlossen",
    english: "(To Close)"
  },
  {
    word: "Schmei&szlig;en",
    perfekt: "Geschmissen",
    english: "(To Throw)"
  },
  {
    word: "Schmiezen",
    perfekt: "Geschmolzen",
    english: "(To Melt)"
  },
  {
    word: "Schneiden",
    perfekt: "Geschnitten",
    english: "(To Cut)"
  },
  {
    word: "Schreiben",
    perfekt: "Geschrieben",
    english: "(To Write)"
  },
  {
    word: "Schreien",
    perfekt: "Geschrien",
    english: "(To Scream)"
  },
  {
    word: "Schreiten",
    perfekt: "Geschritten",
    english: "(To Pace)"
  },
  {
    word: "Schweigen",
    perfekt: "Geschwiegen",
    english: "(To Silence)"
  },
  {
    word: "Schwimmen",
    perfekt: "Geschwommen",
    english: "(To Swim)"
  },
  {
    word: "Schwingen",
    perfekt: "Geschwungen",
    english: "(To Swing)"
  },
  {
    word: "Schw&ouml;ren",
    perfekt: "Geschworen",
    english: "(To Swear)"
  },
  {
    word: "Sehen",
    perfekt: "Gesehen",
    english: "(To See)"
  },
  {
    word: "Sein",
    perfekt: "Gewesen",
    english: "(To Be)"
  },
  {
    word: "Singen",
    perfekt: "Gesungen",
    english: "(To Sing)"
  },
  {
    word: "Sinken",
    perfekt: "Gesunken",
    english: "(To Decline)"
  },
  {
    word: "Sitzen",
    perfekt: "Gesessen",
    english: "(To Sit)"
  },
  {
    word: "Spinnen",
    perfekt: "Gesponnen",
    english: "(To Spin)"
  },
  {
    word: "Sprie&szlig;en",
    perfekt: "Gesprossen",
    english: "(To Sprout)"
  },
  {
    word: "Springen",
    perfekt: "Gesprungen",
    english: "(To Jump)"
  },
  {
    word: "Stechen",
    perfekt: "Gestochen",
    english: "(To Sting)"
  },
  {
    word: "Stehen",
    perfekt: "Gestanden",
    english: "(To Stand)"
  },
  {
    word: "Stehlen",
    perfekt: "Gestohlen",
    english: "(To Steal)"
  },
  {
    word: "Steigen",
    perfekt: "Gestiegen",
    english: "(To Climb)"
  },
  {
    word: "Sterben",
    perfekt: "Gestorben",
    english: "(To Die)"
  },
  {
    word: "Stinken",
    perfekt: "Gestunken",
    english: "(To Stink)"
  },
  {
    word: "Sto&szlig;en",
    perfekt: "Gesto&szlig;en",
    english: "(To Bump)"
  },
  {
    word: "Streichen",
    perfekt: "Gestrichen",
    english: "(To Brush)"
  },
  {
    word: "Streiten",
    perfekt: "Gestritten",
    english: "(To Fight)"
  },
  {
    word: "Tragen",
    perfekt: "Getragen",
    english: "(To Carry)"
  },
  {
    word: "Treffen",
    perfekt: "Getroffen",
    english: "(To Meet)"
  },
  {
    word: "Treiben",
    perfekt: "Getrieben",
    english: "(To Float)"
  },
  {
    word: "Treten",
    perfekt: "Getreten",
    english: "(To Step)"
  },
  {
    word: "Trinken",
    perfekt: "Getrunken",
    english: "(To Drink)"
  },
  {
    word: "Tun",
    perfekt: "Getan",
    english: "(To Do)"
  },
  {
    word: "Verderben",
    perfekt: "Verdorben",
    english: "(To Spoil)"
  },
  {
    word: "Vergessen",
    perfekt: "Vergessen",
    english: "(To Forget)"
  },
  {
    word: "Verlieren",
    perfekt: "Verloren",
    english: "(To Lose)"
  },
  {
    word: "Verschwinden",
    perfekt: "Verschwunden",
    english: "(To Disappear)"
  },
  {
    word: "Verzeihen",
    perfekt: "Verziehen",
    english: "(To Forgive)"
  },
  {
    word: "Waschen",
    perfekt: "Gewaschen",
    english: "(To Meet)"
  },
  {
    word: "Weichen",
    perfekt: "Gewichen",
    english: "(To Give Away)"
  },
  {
    word: "Werben",
    perfekt: "Geworben",
    english: "(To Advertise)"
  },
  {
    word: "Werden",
    perfekt: "Geworden",
    english: "(To Become)"
  },
  {
    word: "Werfen",
    perfekt: "Geworfen",
    english: "(To Throw)"
  },
  {
    word: "Wiegen",
    perfekt: "Geworgen",
    english: "(To Weigh)"
  },
  {
    word: "Winden",
    perfekt: "Gewunden",
    english: "(To Wind)"
  },
  {
    word: "Wissen",
    perfekt: "Gewusst",
    english: "(To Know)"
  },
  {
    word: "Ziehen",
    perfekt: "Gezogen",
    english: "(To Pull)"
  },
  {
    word: "Zwingen",
    perfekt: "Gezwungen",
    english: "(To Force)"
  }
];

shuffleCards(cards);