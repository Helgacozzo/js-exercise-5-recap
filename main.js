// 1. Crea una funzione che crea la versione girata di una parola.
// Chiedi all'utente una parola e mostra la versione girata della parola.

// function invertiParola(){
//     let parolaInvertita = ' ';
//     let  parola = prompt('scrivi una parola');
//     for(let i = parola.length - 1; i >= 0; i--){
//         parolaInvertita += parola[i];
//     }
//     alert(parolaInvertita);
// }
// invertiParola();



// 2. Crea una funzione che concatena una lista di stringhe.
// Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

// function listaStringhe(){
//     let stringa = ' ';
//     let numStringhe = prompt('quante stringhe vuoi concatenare?');
//     for(let i = 0; i < numStringhe; i++){
//         stringheConcatenate = prompt('inserisci la stringa');
//         stringa += stringheConcatenate;
//     }
//      alert(stringa);
// }

// listaStringhe();



// 3. Crea una funzione che calcola il doppio di un numero.
// Quindi chiedi all'utente 10 numeri. 
// Per ogni numero, mostra all'utente il doppio, usando la funzione.

// function numeroDoppio() {
//     let numero = Number(prompt("Inserisci un numero:"));
//     let doppioNumero = numero * 2;
//     alert(`Il doppio è ${doppioNumero}`);
// }

// for (let i = 0; i < 10; i++) {
//     numeroDoppio();
// }



// 4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. 
// Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
// Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, 
// ovvero ogni lettera dell'alfabeto.

// function stringa(testo, maiuscola) {
//     if (maiuscola) {
//       return testo.toUpperCase();
//     } else {
//       return testo.toLowerCase();
//     }
//   }
  
//   function arrayVuoto() {
//     let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  
//     for (var i = 0; i < alfabeto.length; i++) {
//       let carattere = alfabeto[i];
//       let maiuscola = Math.floor(Math.random() * 2);
//       let stringaTrasformata = stringa(testo, maiuscola);
//       arrayVuoto.push(stringaTrasformata);
//     }
//   }

//    arrayVuoto();


// 5. Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente). Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
// Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto. Altrimenti, mostragli che ha perso.
  
//   function gioco() {
//     let lancio = Math.floor(Math.random() * 2) === 0;
//     let numeroLanci = parseInt(prompt("Quanti lanci di moneta vuoi fare?"));
//     let scelta = prompt("Scegli testa o croce?");
//     let vincita = 0;
  
//     for (var i = 0; i < numeroLanci; i++) {
//         var risultato = lancio;
//         if ((risultato === 0 && scelta === "testa") || (risultato === 1 && scelta === "croce")) {
//           vincita++;
//         }
//     }
  
//     if (vincita > numeroLanci / 2) {
//       alert("Hai vinto!");
//     } else {
//       alert("Hai perso!");
//     }
//   }
  
//   gioco();



// 6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). 
// Quindi simula un lancio per il computer e un lancio per l'utente.
// Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.



// 7. Crea una funzione che simula un lancio della roulette (deve ritornare un numero casuale tra 0 e 36).
// Quindi chiedi all'utente se vuole puntare su un numero o su pari/dispari. 
// Quindi esegui un lancio della roulette e fagli sapere se ha vinto.



// 8. Il casinò:
// Chiedi all'utente a quale gioco vuole giocare tra lancio della moneta, lancio dei dadi e roulette. 
// Quindi esegui una delle funzioni che avevi già preparato per i precedenti esercizi.



// 6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). 
// Quindi simula un lancio per il computer e un lancio per l'utente.
// Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.

  
//   function gioco() {
//     let dado = Math.floor(Math.random() * 6) + 1;
//     let computer = dado;
//     let giocatore = dado;
  
//     alert("Il risultato del computer è: " + computer);
//     alert("Il tuo risultato è: " + giocatore);
  
//     if (computer === giocatore) {
//       alert("Pareggio!");
//     } else if (computer > giocatore) {
//       alert("Hai perso!");
//     } else {
//       alert("Hai vinto!");
//     }
//   }
  
//   gioco();



//9. Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. 
// Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
//BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.


// function zoo(){
//     let animali = ['gorilla', 'giraffa', 'panda', 'leone']
//     let domanda = prompt('quale animale vuoi vedere?')
    
//     if(animali.indexOf(domanda)){
//         alert(`Puoi vedere l'animale!`);
//     } else{
//         alert(`L'animale non c'è!`);
//     } 
// }
//  zoo();



// 10. Crea una funzione che ordina una lista di numeri dal più piccolo al più grande. 
// Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. 
// Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.

// function listaNumeri(){
//     let lista = [];
//     let quantiNumeri = prompt('quanti numeri vuoi inserire');

//     for(let i = 0; i < quantiNumeri; i++){
//       let risultato = qualiNumeri = prompt('quali numeri vuoi inserire?');
//       lista.push(risultato);
//     }

//     alert(lista);
// }

// listaNumeri();


// 11. Crea una funzione che ordina una lista di numeri. In base a uno dei parametri, 
// viene ordinata dal più piccolo al più grande o viceversa. 
// Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. 
// Infine, chiedi all'utente se li vuole visualizzare in ordine crescente o decrescente. 
// Mostra all'utente la lista di numeri ordinata nel modo in cui ha chiesto.

