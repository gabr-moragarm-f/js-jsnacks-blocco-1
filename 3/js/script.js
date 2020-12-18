alert('Ciao, dammi 5 numeri e io li sommerò tra loro.');

var choose = prompt('Digita 1 se vuoi il ciclo con "for". Digita 2 se vuoi il ciclo con "while"')

var inputNumber;

var sommaNumeri = 0;

if (choose === '1') {
  for (var i = 1; i <= 5 ; i++) {
    inputNumber = prompt('Numero ' + i);

    inputNumber = parseInt(inputNumber);

    sommaNumeri += inputNumber;

    console.log(sommaNumeri);
  }
}

if (choose === '2') {
  var i = 1;

  while (i <= 5) {
    inputNumber = prompt('Numero ' + i);

    inputNumber = parseInt(inputNumber);

    sommaNumeri += inputNumber;

    i++;

    console.log(sommaNumeri);
  }
}

alert('Il totale è '+ sommaNumeri);
