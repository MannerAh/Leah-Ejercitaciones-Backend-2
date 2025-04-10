// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. 
// El número cero no es ni positivo ni negativo ni par ni impar.

const prompt = require("prompt-sync")({sigint: true});

var N = parseInt(prompt('Ingrese un número entero: '));
if (N === 0){
    console.log('No es ni positivo ni negativo ni par ni impar')
        }
    else if (N > 0){
        console.log('Es un número positivo');
    }   else {
        console.log('Es un número negativo');
    }

if (N === 0){
    console.log('No es par ni impar');
}
else if (N %= 0){
    console.log('Es par');
}   else {
    console.log('Es impar');
}