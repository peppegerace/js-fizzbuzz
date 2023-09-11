// seleziono elemento contenitore
const boxesContainer = document.querySelector('.boxes');
// ciclo le operazioni di creazione
for (let i = 1; i <= 100; i++) {
  // creo un nuovo elemento
  const box = document.createElement('div');
  //  aggiungo una classe per l'elemento creato
  box.classList.add('box');
  // inserisco il valore all'interno dell'elemento creato
  box.append(i);
  // aggiungo l'elemento creato al contenitore
  boxesContainer.append(box);

  console.log(i)

  // aggiungo le conndizioni per i numeri divisibili per 3
  if (!(i % 3)) {
    box.classList.add('bg-fizz');
    box.innerHTML = 'fizz';
  }
  // aggiungo le conndizioni per i numeri divisibili per 5
  if (!(i % 5)) {
    box.classList.add('bg-buzz');
    box.innerHTML = 'buzz';
  }
  // aggiungo le conndizioni per i numeri divisibili per 3 e per 5
  if (!(i % 15)) {
    box.classList.add('bg-fizzbuzz');
    box.innerHTML = 'fizzbuzz';
  }

  console.log(box.innerHTML)
}

