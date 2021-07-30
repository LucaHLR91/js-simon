// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//GENERARE ARRAY DI 5 NUMERI CASUALI
const numeriDaIndovinare = 5;
const minNumRandom = 1;
const maxNumRandom = 100;

let rndNumbers = [];

while (rndNumbers.length < numeriDaIndovinare) {
    let newRandomNumber = getRndNumber(minNumRandom, maxNumRandom);
    if (!rndNumbers.includes(newRandomNumber)) {
        rndNumbers.push(newRandomNumber);
    }
    
}
console.log(rndNumbers);
alert(rndNumbers);


setTimeout(function() {
    let userNumbers = [];
    while (userNumbers.length < numeriDaIndovinare) {
        // RICHIEDERE I 5 NUMERI ALL'UTENTE
        let newUserNumber = parseInt(prompt('inserisci un numero'));
        if (userNumbers.includes(newUserNumber) == false); {
            userNumbers.push(newUserNumber);
        }
    }
    // VERIFICA DEI NUMERI INDOVINATI
    let indovinati = [];
    for(let i = 0; i < userNumbers.length; i++) {
        let userNumber = userNumbers[i];
        if (rndNumbers.includes(userNumber)) {
            indovinati.push(userNumber);
        }
    }

    alert('Hai indovinatio' + '' + indovinati.length + 'numeri');
    alert('I numeri sono' + indovinati);
}, 3000)

// FUNZIONI
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}
