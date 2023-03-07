'use strict';

// ------------------ FUNCTIONS ------------------
// Funzione Randomica
function randomNumber(min , max){
    let random = Math.floor(Math.random() * ((max + 1) - min) )+ min;
    return random;
}
// Facciamo scomparire i numeri dopo 29 secondi
setTimeout(function(){
    screenHtml.innerHTML = ``;
}, 29000);

// funzione che dopo 30 sec fa apparire il prompt dove devi indovinare i numeri
setTimeout(function(){
    // Ciclo che si ripeterà 5 volte
    for(let i=0; i < 5; i++){
       let userNumber = Number(prompt('Scrivi i numeri visti in precedenza e prova ad indovinare'))
       console.log(userNumber)
       userN.push(userNumber);

        // Condizione se il numero è incluso, aumenti di 1 il contatore e inserisci il contenuto dentro array
       if(numeri.includes(userNumber)){
        verNumbers.push(userNumber);
    }
    }
    if(userN.length>0){
        alert(`Numeri Azzeccati ${verNumbers}`)
    }else{
        alert('non hai indovinato nessun numero , ritenta')
    }
},30000)

// ------------------ FUNCTIONS ------------------


// Selezioniamo l'elemento Html
const screenHtml = document.getElementById('numbers');

//lista numeri random
let numeri=[];
//lista numeri utente
let userN = [];
//Array numeri corretti
let verNumbers = [];

// Ciclo For numeri random
for (let i = 0; i < 5; i++) {
    //genero un numero casuale
    const number = randomNumber(1, 100);
    if (!numeri.includes(number)){
       numeri.push(number);
    }
}
console.log(numeri);

// Mostriamo nel Dom i numeri
screenHtml.innerHTML = `Memorizza questi numeri : ${numeri}`;
