// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, 
// con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.

const prompt = require('prompt-sync')({sigint:true})

let tipoEnfermedad = {
    1 : 125,
    2 : 116,
    3 : 120,
    4 : 132,
    5 : 138,
};

tipo = parseInt(prompt('Tipo de enfermedad del paciente: '));

if ((tipo >= 1 && tipo <= 5)){
    let costoDiario = tipoEnfermedad[tipo];
    let costoTotal = costoDiario * 365 *10;
    console.log('El costo total en los últimos 10 años fue de ' + costoTotal);
} else {
    console.log('Enfermedad inexistente');
}