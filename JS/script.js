// CONSEGNA //

// Scrivi un programma che stampi i numeri da 1 a 100;
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz;
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz;

// FINE CONSEGNA //


// RACCOLTA DATI //

// Devono essere presenti i numeri da 1 a 100;
// I multipli di 3 devono essere rappresentati dalla parola "Fizz";
// I multipli di 5 devono essere rappresentati dalla parola "Buzz";
// I numeri che sono sia multipli di 3 e 5 devono essere rappresentati dalla parola "FizzBuzz";

// FINE RACCOLTA DATI //


// ESECUZIONE LOGICA //

/**
 * Impostare il ciclo di ripetizione, dove i numeri che dovranno essere visualizzati saranno da 1 a 100;
 * SE i numeri sono multipli sia di 3 che di 5 verrano visualizzati con la parola "FizzBuzz";
 * ALTRIMENTI SE ci sono solo numeri multipli di 3 verranno visualizzati con la parola "Fizz";
 * ALTRIMENTI SE ci sono solo numeri multipli di 5 verranno visualizzati con la parola "Buzz";
 * ALTRIMENTI verrano visualizzati solo come numeri;
 */

// FINE ESECUZIONE LOGICA //


// OUTPUT //
// I multipli sia di 3 che di 5 vengono stampati "FizzBuzz", I multipli di 3 vengono stampati "Fizz", I multipli di 5 vengono stampati "Buzz";



// ESECUZIONE LOGICA //

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");  
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i); 
    }
}