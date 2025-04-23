// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

/* 1. Pedir nombre y nota del estudiante 
2. Si la nota es 0 - 2.9 Desaprobado
3. Nota 3 - 5.9 Aprobado
4. Nota 6 - 8.9 Notable
5. Nota 9 - 10 Sobresaliente
6. Dar el nombre y la nota del estudiante*/


let listaNombres = ['Leandro', 'Miguel', 'Dario', 'Susanita', 'juan,,', 'Fau'];
let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
let nombre = listaNombres[indiceAleatorio];
console.log('Nombre del estudiante: ' + nombre);

let nota = Math.floor(Math.random() * 11);
console.log('Nota: '+ nota);

if (nota >= 0 && nota <= 2.9){
    calificación = 'Desaprobadísimo';
} else if (nota >= 3 && nota <= 5.9){
    calificación = 'Aprobaditx';
} else if (nota >=6 && nota <= 8.9){
    calificación = 'Bienayí';
} else if (nota >= 9 && nota <= 10){
    calificación = 'Espléndido';
} else {
    calificación = 'Tomatelá';
}

console.log(nombre + ', ' + calificación);