var userInput;

do {
  userInput = prompt('Inserisci un numero di 4 cifre e io le sommerò tra loro.');
} while (userInput.length !== 4);

var somma = 0;

for (var i = 0; i < userInput.length; i++) {
  somma += parseInt(userInput[i]);
}

alert(somma);
