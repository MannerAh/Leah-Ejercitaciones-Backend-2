// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

const PromptSync = require("prompt-sync")

const prompt = require ("prompt-sync")({sigint:true})

let meses = {
    '1': 'Janeiro',
    '2': 'Fevereiro',
    '3': 'Março',
    '4': 'Abril',
    '5': 'Maio',
    '6': 'Junho',
    '7': 'Julho',
    '8': 'Agosto',
    '9': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro'}
    
    let mes = prompt('Ingrese o mes: ')
    if (mes < 1 || mes > 12){
        mesValido = false;
        console.log('Mês fora do intervalo');
    } else {
        mesValido = true;
        console.log('Válido')
    }
    
    let dia = prompt('Ingrese o día: ')
    if (dia < 1 || dia > 31){
        diaValido = false;
        console.log('Dia fora da faixa');
    } else {
        diaValido = true;
        console.log('Tá de bóa manito');
    }
    
    let ano = prompt('Ingrese o ano: ')
    if (ano < 2000){
        anoValido = false
        console.log('Ano inválido');
    } else {
        anoValido = true
        console.log('Ano correto');
    }

    if (mesValido == true && diaValido == true && anoValido && true){
        console.log(dia + ' de ' + meses[mes] + ' de ' + ano)
    }