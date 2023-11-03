// Esercizio 1
// Sulla base della lezione del giorno, scrivere una funzione che simuli il comportamento di un termometro.
//  Prende un solo argomento che rappresenta i gradi e restituisce uno dei seguenti valori: caldo - freddo - mite.

function Termometer(Degrees) {
  if (Degrees < 14) {
    return "Freddo";
  } else if (Degrees >= 14 && Degrees <= 25) {
    return "Mite";
  } else if (Degrees > 26) {
    return "Caldo";
  } else if (isNaN(Degrees)) {
    return "Inserisci i gradi";
  }
}

console.log(Termometer(75));

// Creare un oggetto che vi identifichi come persona, inserite quindi almeno 5 proprietà e 1 metodo al suo interno.
// Andate ad eseguire l'esecuzione del metodo all'interno del programma

const myPerson = {
  age: 31,
  name: "Andrea",
  surname: "Torrisi",
  "eyes-color": "marroni",
  altezza: 185,
  whoAreyou: function () {
    return (
      "Ciao, io sono " +
      this.name +
      " " +
      this.surname +
      " " +
      "ho ben " +
      this.age +
      " anni e gli occhi " +
      this["eyes-color"] +
      " e sono alto " +
      this.altezza / 100 +
      " metri."
    );
  },
};
const myDesc = myPerson.whoAreyou();
console.log(myDesc);

// Creare un array vuoto chiamato preferiti.
// Scrivere una funzione aggiungiAPreferiti che prende una stringa come parametro (che rappresenta l'oggetto del preferito, come il titolo di un film) e aggiunge quell'elemento all'array preferiti.
// Scrivere una funzione mostraPreferiti che stampa tutti gli elementi nell'array preferiti.
// Scrivere una funzione rimuoviDaPreferiti che prende una stringa come parametro e rimuove quell'elemento dall'array preferiti, se esiste.

let preferiti = [];

function aggiungiAPreferiti(movieTitle) {
  preferiti.push(movieTitle);
}

function mostraPreferiti() {
  for (let index = 0; index < preferiti.length; index++) {
    console.log(preferiti[index]);
  }
}

function rimuoviDaPreferiti(movieTitleToRemove) {
  let indexOfMovietoRemove = preferiti.indexOf(movieTitleToRemove);
  if (indexOfMovietoRemove !== -1) {
    preferiti.splice(indexOfMovietoRemove, 1);
  }
}

aggiungiAPreferiti("ciao");
aggiungiAPreferiti("belli");
aggiungiAPreferiti("come va?");

mostraPreferiti();

rimuoviDaPreferiti("ciao");

mostraPreferiti();
