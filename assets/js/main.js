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
const playerDice = Math.floor((Math.random() * 6) + 1);  //potevo anche usare Math.ceil al posto di .floor e non sarebbe stato necessario mettere il + 1 in fondo
console.log(`Dado del giocatore = ${playerDice}`);

//Generare un numero random da 1 a 6 per il computer
const cpuDice = Math.floor((Math.random() * 6) + 1);
console.log(`Dado del computer = ${cpuDice}`);

const playerResult = document.querySelector('#player_dice');
const cpuResult = document.querySelector('#cpu_dice');
const finalResult = document.querySelector('#result');

playerResult.append('Dado del giocatore = ' + playerDice);
cpuResult.append('Dado del computer = ' + cpuDice);

//Stabilire il vincitore col punteggio più alto
if (playerDice > cpuDice) {
    console.log('Hai vinto!');
    finalResult.append('Hai vinto!😃');
} else if (playerDice === cpuDice) {
    console.log('Pareggio!');
    finalResult.append('Pareggio!🤝')
} else {
    console.log('Hai perso!');
    finalResult.append('Hai perso!😓')
}


//MAIL
//Creo lista di mail
const mailList = ['lorenzo21neri@gmail.com', 'ermes21@hotmail.it', 'anakin66skywalker@gmail.com', 'martymcfly88@hotmail.it', 'peterparker@gmail.com']

//Chiedere l'email utente
/* const userMail = prompt('Ciao, per favore, inserisci il tuo indirizzo email') */

//Controllare che sia in lista
/* for (let i = 0; i < mailList.length; i++) {  //<--con ciclo, più righe di codice

    const mail = mailList[i];

    //console.log(mailList);

    //console.log(mailList[i]);

    let finalResult = 'Email errata'

    if (userMail === mail) {
        finalResult = 'Email corretta'
        console.log(finalResult);
        i = mailList.length;

    } else {
        console.log(finalResult);
    }

    /* console.log(finalResult); */

//} */

/* if (mailList.includes(userMail)){      //<--senza ciclo, codice più pulito e risultato migliore
    console.log('Email corretta');
} else {
    console.log('Email errata');
} */

//Stampare un messaggio appropriato sull’esito del controllo