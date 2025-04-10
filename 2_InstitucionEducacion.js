// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.
// Si es vespertino y la nota 6, no rinde examen, si es diurno no se exime y ambos deben tener más de 3.5 para no reprobar
const prompt = require("prompt-sync")({sigint: true});

let nota = parseFloat(prompt('Nota: '))
if (nota < 3.5) {
    console.log('Reprueba');
    return;
}
let carreraDiurna = parseInt(prompt('Ingrese 1 para diurno, 0 para vespertino: '))

if (carreraDiurna === 1) {
    if (nota >= 3.5)
        console.log('Rinde examen');
}
else if (carreraDiurna === 0){
        if (nota >= 6) {
            console.log('Se exime');
        } else if (nota >= 3.5) {
            console.log('Rinde examen');
        }
    }