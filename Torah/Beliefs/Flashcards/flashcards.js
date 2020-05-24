let data = [
 {
   id: 1,
   topic: "G-D alone is one, only one.",
   reference : {
    book: "Deuteronomy",
    verse: "6:4",
    crossRefs: ["Jeremiah 10:1-11", "Jeremiah 10:10-16", "1 Kings 18:21"]
   },
   link: "sefaria.org/"
 },
 {
  id: 2,
  topic: "Truth can only come from G-D Himself.",
  reference : {
   book: "Deuteronomy",
   verse: "6:4",
   crossRefs: ["Jeremiah 10:1-11", "Jeremiah 10:10-16", "1 Kings 18:21"]
  },
  link: "sefaria.org/"
},
{
 id: 3,
 topic: "True peace of the soul only comes from G-D.",
 reference : {
  book: "Deuteronomy",
  verse: "6:4",
  crossRefs: ["Jeremiah 10:1-11", "Jeremiah 10:10-16", "1 Kings 18:21"]
 },
 link: "#"
},

]

let htmlStructure="";
let card = {
 n: '<span class="entry">',
 d: '<div class="card">',
 h: '<h5 class="card-header">',
 p: '<p class="card-text">',
 a: '<a href="#" class="btn btn-primary">',
};
let end = {
  n: '</span>',
  d: '</div>',
  h: '</h5>',
  p: '</p>',
  a: ' </a>'
};

data.forEach(function(element){
    htmlStructure += 
    `${card.d}${card.h}${card.n}${"#"}${element.id}${" "}${end.n}${element.topic}${end.h}${card.p} ${card.a}${element.reference.book}${element.reference.verse}${end.a}${end.p}${end.d}`

    let a = JSON.stringify(element.link);
    $('a[href^="#"]').each(function(){
     var hash = $(this).attr("href");
     var href = hash.replace("#", a);
     $(this).attr("href", a);
    });

});



$('#root').append(htmlStructure)