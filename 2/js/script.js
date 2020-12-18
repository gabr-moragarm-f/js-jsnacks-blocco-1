alert('Ciao, dammi due parole e scriverò prima la più corta e poi la più lunga.');

var firstWord = prompt('Prima parola!');

var secondWord = prompt('Seconda parola!');

if (firstWord.length < secondWord.length) {
  alert(firstWord + '  --  ' + secondWord);
}else if(firstWord.length > secondWord.length) {
  alert(secondWord + '  --  ' + firstWord);
} else {
  alert('Parità');
}
