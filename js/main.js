// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//GENERARE ARRAY DI 5 NUMERI CASUALI
var rndNumbers = [];
let max = 100;
let min = 1;

for( var i = 0; i < 5; i++) {
    var number = Math.floor(Math.random() * (max - min) + min);
    rndNumbers.push(number);
}

console.log(rndNumbers);
alert(rndNumbers);