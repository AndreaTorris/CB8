// //Sulla base della lezione di Lunedi, ricreare la funzione calcolatrice utilizzando le callbacks. Fate in modo che possa calcolare le quattro operazioni base matematiche ( + - * /) e che prenda non due ma tre valori numerici sui quali eseguire queste operazioni.
// //  In questo caso, potete aiutarvi con il codice della lezione.

const sum = (first, second, third) => first + second + third;
const sub = (first, second, third) => first - second - third;
const mult = (first, second, third) => first * second * third;
const split = (first, second, third) => first / second / third;

function calculator(fn) {
  let first = prompt("Inserisci il primo numero");
  let second = prompt("Inserisci il secondo numero");
  let third = prompt("Inserisci il terzo numero");

  return fn(parseInt(first), parseInt(second), parseInt(third));
}

console.log(calculator(sub));

// Creare un array di oggetti che simuli la lista del carrello di un e-commerce.
// Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine, e una descrizione.
// Processate il seguente array di oggetti con map e forEach, e scriverne in commento la differenza. Basta solo stamparne il contenuto.

let carrello = [
  {
    name: "primo oggetto",
    imageLink: "https://github.com/casiimir/CB8/blob/main/07-11-23/script.js",
    descrizione: "questo è il primo oggetto",
    id: 1,
  },

  {
    name: "secondo oggetto",
    imageLink: "https://github.com/casiimir/CB8/blob/main/07-11-23/script.js",
    descrizione: "questo è il secondo oggetto",
    id: 2,
  },

  {
    name: "terzo oggetto",
    imageLink: "https://github.com/casiimir/CB8/blob/main/07-11-23/script.js",
    descrizione: "questo è il terzo oggetto",
    id: 3,
  },
];

carrello.forEach((item) => console.log(item.name));

carrello.map((item) => console.log(item.id));

// la differenza fondamentale tra for each e map è che il primo serve solo ad iterare un array poichè non restituisce nulla
//mentre il secondo restituisce un nuovo array delle stesse dimensioni dell'originale che può essere manipolato
