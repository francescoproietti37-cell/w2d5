// TERNARY OPERATOR operatore ternario
let myAge = 19 // dichiaro myAge con valore 19

// immaginate di dover dare un valore a una variabile a seguito di un controllo o una condizione
// you canEnter sarà una variabile con valore booleano
// il valore di you can enter va definito in base al valore di myAge
let youCanEnter = myAge >= 18 ? true : false // se myAge >= 18 allora true, altrimenti false
// i due punti significano altrimenti il ? significa allora

/* la domanda (condizione) significa se il numero è maggiore uguale di 19 la variabile youCan Enter deve 
essere true altrimanti false (?  significa fa la domanda) (: significa altrimenti ) */
// riassunto:“Se myAge è maggiore o uguale a 18, allora youCanEnter sarà true; altrimenti sarà false.”
console.log(youCanEnter) // stampa il valore (true)

// altro esempio
let possoGuidareMoto = false // booleano: non posso guidare moto
let possoGuidareAuto = true // booleano: posso guidare auto
let chePatenteHo = possoGuidareMoto === true ? "b" : "a" // se posso guidare moto → "b" altrimenti "a"
console.log(chePatenteHo) // stampa "a"
// la domanda è posso guidare le moto? se è vero ti becchi la patente b se è falso a
// si usa quando il valore della variabile DIPENDE da qualcosa (qui da possoGuidareMoto)

/* Un oggetto è un tipo di dato che raccoglie più informazioni (proprietà) sotto un unico nome.
Serve per rappresentare cose reali con tante caratteristiche.(dati persona,tipo di macchina,eccc)
Le informazioni dentro un oggetto si scrivono come coppie chiave: valore.
Chiave (o proprietà) = il “nome” dell’informazione.
un oggetto è c-ome un a cartellina di informazionoi  */
const student = {
  // definisco un oggetto student
  name: "aldo", // proprietà name con stringa
  eta: 22, // proprietà eta con numero
  halaWebcamattiva: true, // proprietà booleana
}
/* Quando programmi… (spiegazione teorica)
   QUESTO SOPRA è UN OGGETTO. e devono sempre avere le virgole */

// oggetto è comodo quando si vuole modellare un unica entità contentente tante caratteristiche(entità studente)
const myCat = {
  // definisco un oggetto myCat
  // qui dentro andrò a elencare  tutte le proprietà di myCat
  name: "nero", // proprietà stringa
  saNuotare: false, // proprietà booleana
  eta: 5, // proprietà numerica
}
console.log("console log oggetto intero", myCat) // loggo l’oggetto intero
// l'ordine in cui inseritele propietà non ha rilevanza.
// ma console log le mette in ordine alfabetico per facilitarci a ritrovare le cose.
/* come vedi l'oggetto serve quando… (spiegazione teorica) */
// MA COME FACCIO A ESTRAPOLARE 1 SOLA PROPRIETà? TECNICA DOT NOTATION si usa quasi sempre questa
// console log di un solo valore
console.log("il mio gatto si chiama ", myCat.name + " e ha", myCat.eta) // accedo con dot notation
// in alternativa per estrarre proprieta TECNICA SQUARE BRACKETS NOTATION []
console.log(("il mio gatto si chiama ", myCat["name"] + " e ha", myCat["eta"])) // accedo con bracket notation
/* perche complicarci la vita con square brackets? perche èpiu precisa in certe cose */

// COME MODIFICARE I VALORI DI UN OGGETTO
myCat.eta = 6 // aggiorno la proprietà eta a 6
/* hai modificato eta… (nota su const e riassegnazione) */
// ELIMINARE PROPRIETà
delete myCat.saNuotare // elimino la proprietà saNuotare
console.log(myCat) // verifico l’oggetto senza saNuotare
// AGGIUNGERE PROPIETà
myCat.salta = true // aggiungo nuova proprietà salta
console.log(myCat) // verifico l’oggetto aggiornato
// PUOI CAMBIARE VALORE DI UNA SCATOLA, MA NON LA SCATOLA!

let a = 5 // creo variabile primitiva a
let b = a // copio il valore di a in b
b = 10 // cambio b (non influisce su a)
console.log(a) // a resta 5 (copie per valore)


//con l'ogetto funziona diversamente 

let oggA = { alto: 5 } // creo oggetto oggA
let oggB = oggA // oggB riferisce lo stesso oggetto puntano ttti e 2 allo stesso
oggB.alto = 10 // modifico la proprietà alto tramite oggB
/* quindi cosi modifici anche ogga perche con oggetti funziona divrsamente  */
console.log(oggA) // vedo che oggA è cambiato (alto: 10)
// se provo ad accedere a una proprietà che non esiste esce undefined

// ARRAY è come una lista una fila un contenitore di piu elementi (lista di persone,lista di prodotti ecc)
//tiene insieme piu cose dello stesso tipo l'array contiene anche oggetti gli fa da contenitore
//immaggina una scatola l'array è la scatola i bigliettini sono gli oggetti con tutte le ifnormazioni per ogni cintenitoore
//Se vuoi descrivere una persona → usi un oggetto

//Se vuoi tante persone insieme → le metti in un array
// SENZA (ARRAY)
const namesObj = {
  // oggetto con tre proprietà
  primo: "nero", // chiave primo
  secondo: false, // chiave secondo
  terzo: 5, // chiave terzo
}

//ARRAY cosa ho nella lista ??
//OGGETTO descrivo ogni singola cosa





// CON (ARRAY)
const names = ["bianco", true, 35] // array con tre elementi eterogenei
console.log("names", names) // leggo l’array
// il numero che vedi… (spiegazione)
// COME FACCIO A ESTRAPOLARE 1 SOLA PROPEITà NEGLI ARRAY? con la posizione
// le posizioni negli array non partono da 1 ma da 0 (POSIZIONE)
names[0] // accedo al primo elemento (indice 0)
names[1] // accedo al secondo elemento (indice 1)
console.log(names[1]) // stampo l’elemento in posizione 1
// il primo elemento in un array avrà SEMPRE posizione 0
// l'ultimo elemento in un array avrà SEMPRE posizione lunghezza - 1

const dio = ["nero", false, 5] // array di 3 elementi
/* significa che dio ha lunghezza 3… (spiegazione) */
// COME SI ESTRAPOLA LA LUNGHEZZA…?
console.log(names.length) // stampo la lunghezza dell’array names
// se vuoi trovare l'ultimo elemento
console.log(names.length - 1) // calcolo l’indice dell’ultimo elemento

// INTERAGIAMO CON GLI ARRY
// aggiungere elemento DOPO con metodo PUSH
names.push("giada")        // aggiungo "giada" alla fine dell’array (in coda)

names.unshift("matteo")     // aggiungo "matteo" all’inizio dell’array (in testa)

names.unshift(1, 0, "mirko") // aggiungo più elementi (1, 0, "mirko") all’inizio, mantenendo l’ordine

names.pop()                 // rimuovo l’ultimo elemento dell’array

names.shift()               // rimuovo il primo elemento dell’array

names.splice(2, 1)          // rimuovo 1 elemento a partire dall’indice 2 (cioè l’elemento in posizione 2)


// ESERCIZIO… (spiegazione)
// SI POSSONO FARE ARRAY DI OGETTI. un array che contiene oggetti
/* Usi un array di oggetti… (spiegazione) */
const studenti = [
  // array di 3 oggetti studente
  {
    nome: "Luca", // proprietà nome
    eta: 21, // proprietà eta
    corsi: ["Matematica", "Fisica", "Programmazione"], // array di corsi
    indirizzo: {
      // oggetto indirizzo
      citta: "Milano",
      cap: "20100",
      via: "Via Roma 10",
    },
    esami: [
      // array di oggetti esame
      { materia: "Matematica", voto: 28 },
      { materia: "Fisica", voto: 30 },
      { materia: "Programmazione", voto: 27 },
    ],
  },
  {
    nome: "Giulia",
    eta: 23,
    corsi: ["Biologia", "Chimica", "Statistica"],
    indirizzo: {
      citta: "Torino",
      cap: "10100",
      via: "Corso Francia 45",
    },
    esami: [
      { materia: "Biologia", voto: 30 },
      { materia: "Chimica", voto: 26 },
      { materia: "Statistica", voto: 29 },
    ],
  },
  {
    nome: "Marco",
    eta: 22,
    corsi: ["Economia", "Marketing"],
    indirizzo: {
      citta: "Roma",
      cap: "00100",
      via: "Via Appia 88",
    },
    esami: [
      { materia: "Economia", voto: 25 },
      { materia: "Marketing", voto: 28 },
    ],
  },
]
console.log(studenti[0].nome) // prendo il nome del primo studente ("Luca")
/* studenti è un array… (spiegazione) */
// ad esempio se vuoi prendere età 22…
console.log(studenti[2].indirizzo.cap) // leggo il cap del terzo studente
// VUOI COME RISULTATO IL 30 IN FISICA?
console.log(studenti[0].esami[1].voto) // voto dell’esame 2 di Luca (Fisica → 30)
// aggiungo una materia a marco
studenti[2].corsi.push("design") // aggiungo "design" ai corsi di Marco

// INTRODUZIONE ALLA LOGICA CONDIZONALE … (spiegazione)
const myName = "Alessandro" // dichiaro myName

// voglio dare il benvenuto se l'utente si chiama stefano…
if (myName === "stefano") {
  // confronto myName con "stefano"
  console.log("Benvenuti") // eseguito solo se true
}
// questo blocco di codice è falso… (spiegazione)
if (myName === "Alessandro") console.log("accesso negato") // true → stampa

// altro esempio usiamo ELSE che significa ALTRIMENTI
const myAge2 = 20 // (rinominato per evitare doppia dichiarazione di myAge)
if (myAge2 >= 18) {
  // controllo età
  console.log("puoi entrare") // ramo vero
} else {
  console.log("sei troppo giovane non puoi entrare") // ramo falso
}

const andiamoAlparco = false // definisco booleano
if (andiamoAlparco === true) {
  // controllo se true
  console.log("biglietto") // ramo vero
} else {
  console.log("biglietto negato") // ramo falso
}
// if può esistere anche da solo
// else NON può esistere da solo.
// ultimo esempio
const belTempo = true // definisco booleano
const finitoIcompiti = false // definisco booleano
if (belTempo === true || finitoIcompiti === true) {
  // OR logico
  console.log("vado al mare") // se almeno uno è true
} else {
  console.log("non vado al mare") // se entrambi false
}
//JavaScript esegue prima le parentesi più interne, poi va verso l’esterno.
\n //significa vai a capo console.log("Ciao\nMondo");
//ChatGPT said:

// funzione di JavaScript (presente nel browser e in Node) che mostra dati in forma di tabella nella console.



// -----------------------------
// ESEMPIO DI console.table()
// -----------------------------

const persone = [
  { nome: "Luca", eta: 25 },
  { nome: "Sara", eta: 30 },
  { nome: "Marco", eta: 22 }
];

console.table(persone);


// -----------------------------
// ESEMPIO DI Object.assign()
// -----------------------------

const personaBase = { nome: "Luca", eta: 20 };
const nuoviDati = { eta: 25, città: "Roma" };

// Unisce i due oggetti
const personaAggiornata = Object.assign(personaBase, nuoviDati);

console.log("Persona aggiornata:", personaAggiornata);


// -----------------------------
// COPIA DI UN OGGETTO SENZA MODIFICARE L'ORIGINALE
// -----------------------------

const originale = { modello: "Fiat", anno: 2010 };

const copia = Object.assign({}, originale);

console.log("Originale:", originale);
console.log("Copia:", copia);



// -----------------------------
// DIFFERENZA: SPREAD OPERATOR (...)
// Metodo moderno per copiare/unire
// -----------------------------

const user = { nome: "Anna", ruolo: "Admin" };
const extra = { attivo: true };

const userCompleto = { ...user, ...extra };

console.log("User completo:", userCompleto);
