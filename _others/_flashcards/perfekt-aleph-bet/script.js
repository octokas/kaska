var num = 0;
var shuffle = document.querySelector(".shuffle");
var alebet = document.querySelector(".aleph-order");
var button = document.querySelector("#card");
var eng = document.querySelector("#trans");
var instr = document.querySelector("#instr").innerHTML = "Please use either the <b><u>up</u></b> and <b><u>down</u></b> arrow keys, OR use the <b><u>left</u></b> and <b><u>right</u></b> arrow keys to continue through the deck, OR simply <b><u>click</u></b> through the cards.<br>";
var xtras = document.querySelector("#extras");
var tabs = document.querySelector("#tabs");


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
    xtras.textContent = "";
    tabs.innerHTML = "";
  }
});

button.addEventListener("click", function() {
  checkAnswer();
});

function checkAnswer() {
  button.classList.toggle("answer");
  button.classList.toggle("smaller");
  if (button.classList.contains("answer")) {
    button.innerHTML = cards[num].perfekt;
    eng.textContent = cards[num].romanized;
    xtras.innerHTML = cards[num].highlights;
    tabs.innerHTML = cards[num].tabular;
    num += 1;
  } else {
    button.innerHTML = cards[num].letter;
    eng.textContent = "";
    xtras.textContent = "";
    tabs.innerHTML = "";
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
  xtras.textContent = "";
  tabs.innerHTML = "";
  num = 0;
  button.textContent = cards[num].letter;
};

var cards = [
  {
    letter: "א",
    perfekt: "א Aleph",
    romanized: "(A as in Father)",
    value: 0,
    highlights: "We are to be joyful when worshipping HaShem. Think of this letter as the dancing A in <em><u>'Adonai</u>'</em>.",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-alef-%d7%90/">HT -> Aleph</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/multimedia/video_cdo/aid/705822/jewish/The-Aleph.htm">KabAlefBet -> Aleph</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/rerbKUIcGhs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: "https://youtu.be/rerbKUIcGhs"
  },
  {
    letter: "ב",
    perfekt: "ב Beyt/Beth",
    romanized: "(B as in boy)",
    value: 1,
    highlights: "In the game rock-paper-scissors-spock, this letter looks like the lizard; which is a favorite of most <em><u>boys</u></em>.",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/%d7%91/">HT -> Beyt/Beth</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/multimedia/video_cdo/aid/725011/jewish/The-Bet.htm">Chabad -> Beyt/Beth</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/YzjHjXe-2XU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: "https://youtu.be/YzjHjXe-2XU"
  },
  {
    letter: "ג",
    perfekt: "ג Gimal",
    romanized: "(G as in green)",
    value: 2,
    highlights: "There's no easy way to remember this letter is associated with Camel, if you are an English native... If, however, you are familiar with horses, you could look at it as the shoe of a camel.",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: "https://youtu.be/rerbKUIcGhs"
  },
  {
    letter: "ד",
    perfekt: "ד Dalet",
    romanized: "(D as in door)",
    value: 3,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-dalet-%d7%93/">HT -> Dalet</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ה",
    perfekt: "ה Hey",
    romanized: "(H as in high)",
    value: 4,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ו",
    perfekt: "ו Vav",
    romanized: "(V as in valid)",
    value: 5,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ז",
    perfekt: "ז Zayin",
    romanized: "(Z as in zoo)",
    value: 6,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ח",
    perfekt: "ח Chet",
    romanized: "(CH/H as in hole)",
    value: 7,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ט",
    perfekt: "ט Tet",
    romanized: "(T as in telephone)",
    value: 8,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "י",
    perfekt: "י Yod/Yud",
    romanized: "(Y as in yellow)",
    value: 9,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "כ",
    perfekt: "כ Kaph",
    romanized: "(K as in book)",
    value: 10,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ל",
    perfekt: "ל Lamed",
    romanized: "(L as in lemon)",
    value: 11,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "מ",
    perfekt: "מ Mem",
    romanized: "(M in mother)",
    value: 12,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "נ",
    perfekt: "נ Nun",
    romanized: "(N as in cotton)",
    value: 13,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ס",
    perfekt: "ס Samekh/Samech",
    romanized: "(S as in ski)",
    value: 14,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ע",
    perfekt: "ע Ayin",
    romanized: "(A as in America)",
    value: 15,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "פ",
    perfekt: "פ Pey",
    romanized: "(P as in pony)",
    value: 16,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "צ",
    perfekt: "צ Sadhe/Tsade",
    romanized: "(S/TZ/ZZ as pizza)",
    value: 17,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ק",
    perfekt: "ק Qoph/Quph",
    romanized: "(K as in pink)",
    value: 18,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ר",
    perfekt: "ר Resh",
    romanized: "(R as in room)",
    value: 19,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ש",
    perfekt: "ש Shin/Sin",
    romanized: "(SH as in sugar)",
    value: 20,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  },
  {
    letter: "ת",
    perfekt: "ת Tav",
    romanized: "(T as in team)",
    value: 21,
    highlights: "",
    tabular: '<br><br><h2 class="more-info">More Resources</h2><div class="rTable"><div class="rTableRow"><div class="rTableHead narrower">Graphics &amp; Visuals</div><div class="rTableHead wider">Videos &amp; Sounds</div></div><div class="rTableRow"><div class="rTableCell narrower"><img class="resource-image" src="images/gimel_picture.png" /><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://hebrewtoday.com/alphabet/the-letter-gimmel-%d7%92/">HT -> Gimal/Gimmel</a></span><br><span><a style="color:whitesmoke; text-decoration:underline;" href="https://www.chabad.org/kabbalah/article_cdo/aid/380533/jewish/The-Letter-Gimel.htm">Chabad -> Gimal/Gimmel</a></span></div><div class="rTableCell wider"><iframe class="video" src="https://www.youtube.com/embed/jrzzjdqrW6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>',
    seaseme: ""
  }
];

// sort the array by value on click
alebet.addEventListener("click", function() {
  alephOrder(cards);
});

// grab the cards array
var batch = cards;
console.log(batch); // full array

// define the value as the number key value and remove the other fancies
// see more on sorting object arrays below
// https://www.w3schools.com/Js/js_array_sort.asp
function alephOrder(b) {
  batch.sort(function(a, b){return a.value - b.value});
  button.classList.remove("answer");
  eng.textContent = "";
  xtras.textContent = "";
  tabs.innerHTML = "";
  num = 0;
  button.textContent = cards[num].letter;
};

//Visualize more learning extras
// var xtras = document.querySelector("a.option");

// function toggle(ele) {
//     var aleph = document.getElementById('xaleph');
//     var beth = document.getElementById('xbeth');
//     aleph.style.display = aleph.style.display == 'none' ? 'block' : 'none';
//     beth.style.display = beth.style.display == 'none' ? 'block' : 'none';
// };

//adding classes
function addClass(selector, myClass) {
  // get all elements that match our selector
  elements = document.querySelectorAll(selector);
  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.add(myClass);
  }
};

function removeClass(selector, myClass) {
  // get all elements that match our selector
  elements = document.querySelectorAll(selector);
  // remove class from all chosen elements
  for (var i=0; i<elements.length; i++) {
    elements[i].classList.remove(myClass);
  }
};
var fancy = ((button.innerHTML = cards[num].letter));
var smaller = ((button.innerHTML = cards[num].perfekt));
console.log(fancy);

addClass(fancy, "fancy");
addClass(smaller, "smaller");
shuffleCards(cards);
alephOrder(cards);
//addClass(fancy, "fancy");

// usage examples:
// removeClass('.class-selector', 'example-class');
// removeClass('#id-selector', 'example-class');
// usage examples:
// addClass('.class-selector', 'example-class');
// addClass('#id-selector', 'example-class');

// var xtras = document.querySelector("#extras");
// var selectXtras = document.querySelector("#options");
// var options = document.querySelectorAll('div.option');
// var select = Array.from(options);

// var aleph = document.querySelector("#select-extras");
// aleph.addEventListener("click", function() {
//   var alephi = document.querySelector('#aleph');
//   console.log(alephi.id);
// });

// selectXtras.addEventListener("click", function() {
//   select.forEach(element => console.log(element.id), true);
//   //console.log(select);
//   //if (!selectOpt.classList.contains('option')) return(console.log("sorry"));
// }, true);