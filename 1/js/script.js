alert('Ciao, dammi due numeri e decreterò il maggiore.');

do {
  var firstNumber = prompt('Primo numero!');
} while (isNaN(firstNumber));

do{
  var secondNumber = prompt('Secondo numero!');
} while (isNaN(firstNumber));

if (firstNumber < secondNumber) {
  alert('Il numero maggiore è il secondo: ' + secondNumber);
} else {
  alert('Il numero maggiore è il primo: ' + firstNumber);
}
