// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.
const prompt = require("prompt-sync")({sigint:true})

let lado1 = parseInt(prompt('CM del lado a: '))
let lado2 = parseInt(prompt('CM del lado b: '))
let lado3 = parseInt(prompt('CM del lado c: '))

if (lado1 === lado2 && lado2 === lado3){
    console.log('Es equilátero');
}   else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log('Es isósceles');
}   else {
    console.log('Es escaleno');
}