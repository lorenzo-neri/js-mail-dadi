/*
- Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

- Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */ 


//GIOCO DEI DADI
//Generare un numero random da 1 a 6 per il giocatore
const playerDice = Math.floor((Math.random() * 6) + 1);
console.log(`Dado del giocatore = ${playerDice}`);
//Generare un numero random da 1 a 6 per il computer
const cpuDice = Math.floor((Math.random() * 6) + 1);
console.log(`Dado del computer = ${cpuDice}`);
//Stabilire il vincitore col punteggio più alto
if(playerDice > cpuDice){
    console.log('Hai vinto!');
} else if (playerDice === cpuDice) {
    console.log('Pareggio!');
} else {
    console.log('Hai perso!');
}