var inputNumber = parseInt(prompt('Dammi un numero e io farò il cubo di quello e dei numeri precedenti.'));

if (inputNumber <= 10) {
  for (var i = 1; i <= inputNumber; i++) {
    console.log(Math.pow(i, 3));
  }
}else {
  alert('NO CHE SE NO SCOPPIO!');
}
