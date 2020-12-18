var oddNumbers = [];

alert('Ora ti chiederò sei volte un numero e salverò solo i dispari.');

var inputNumber;

for (var i = 1; i <= 6; i++) {
  inputNumber = parseInt(prompt('Numero ' + i))

  if (inputNumber % 2 !== 0) {
    oddNumbers.push(inputNumber);
  }
}

console.log(oddNumbers);

alert(oddNumbers);
