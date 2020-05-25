var vocabWords, numVocabWords;
var flashcard = document.getElementById('flashcard');
var refreshBtn = document.getElementsByClassName('refresh')[0];
var enContent = document.getElementById('flashcard--content_en');
var esContent = document.getElementById('flashcard--content_es');

document.addEventListener('DOMContentLoaded', function(){
	
	$.getJSON("_shippables/_flashcards/sample", function(data) {
		vocabWords = data.feed.entry;
		numVocabWords = vocabWords.length;
		refresh();
	});
});

flashcard.addEventListener('click', function() {
	this.classList.toggle('flipped');
}, false);

refreshBtn.addEventListener('click', function(e) {
	e.stopPropagation();
	e.preventDefault();
	refresh();
}, false);
													
function refresh(){
	var randomNum = getRandomInt(0, numVocabWords);
	newWord = vocabWords[randomNum];

	enContent.textContent = newWord.gsx$en.$t;
	esContent.textContent = newWord.gsx$es.$t;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//https://spreadsheets.google.com/feeds/list/1drpkpwOh-omRcTLbr1EycVLNLBpvY5AySulIYdk9MKk/od6/public/values?alt=json
	// https://crossorigin.me/https://kaska.netlify.app/_shippables/sample.xml&callback=?