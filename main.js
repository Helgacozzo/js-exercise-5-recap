// 1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

function invertiParola(){
    let parolaInvertita = ' ';
    let  parola = prompt('scrivi una parola');
    for(let i = parola.length - 1; i >= 0; i--){
        parolaInvertita += parola[i];
    }
    alert(parolaInvertita);
}
invertiParola();