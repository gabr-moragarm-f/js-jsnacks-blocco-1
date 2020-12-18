var whiteList = ['gino', 'paolo', 'luca', 'dario', 'kel'];

console.log(whiteList);

var inputNome = prompt('Prego fornisca il suo nome così verifico se è in lista.');

inputNome = inputNome.toLowerCase()

var invitato = false;

for (var i = 0; i < whiteList.length; i++) {
  if (whiteList[i] === inputNome) {
    alert('Benvenuto!');
    invitato = true;
  }
}

if (!invitato) {
  alert('Chi sei tu barbone!?');
}
