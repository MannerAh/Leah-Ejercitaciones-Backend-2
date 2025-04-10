// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.

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
    
    
    let dia = parseInt(prompt('Ingrese o día: '))
    if (dia < 1 || dia > 31){
        diaValido = false;
        console.log('Dia fora da faixa');
    } else {
        diaValido = true;
        console.log('Tá de bóa manito');
    }
    //
    let mes = parseInt(prompt('Ingrese o mes: '))
    if (mes < 1 || mes > 12){
        mesValido = false;
        console.log('Mês fora do intervalo');
    } else {
        mesValido = true;
        console.log('Válido')
    }
    //
    let ano = parseInt(prompt('Ingrese o ano: '))
    if (ano < 2000){
        anoValido = false
        console.log('Ano inválido');
    } else {
        anoValido = true
        console.log('Ano correto');
    }
    //
    if (mesValido == true && diaValido == true && anoValido && true){
        console.log(dia + ' de ' + meses[mes] + ' de ' + ano)
    }

    //
if ((dia >= 21 && mes == 3) || (dia <= 20 && mes ==4)){
    console.log('Sos ariano');
} else if ((dia >= 21 && mes == 4) || (dia <= 21 && mes ==5)){
        console.log('Sos tauriano');
} else if ((dia >= 22 && mes == 5) || (dia <= 21 && mes ==6)){
        console.log('Sos gemiñano');
} else if ((dia >= 22 && mes == 6) || (dia <= 23 && mes ==7)){
    console.log('Sos cancerianou');
} else if ((dia >= 24 && mes == 7) || (dia <= 23 && mes ==8)){
    console.log('Sos leonino');
} else if ((dia >= 24 && mes == 8) || (dia <= 22 && mes ==9)){
    console.log('Virgo');
} else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes ==10)){
    console.log('Sos libra');
} else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes ==11)){
    console.log('Sos escropio');
} else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes ==12)){
    console.log('Sagitariano');
} else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes ==1)){
    console.log('Capricorñano');
} else if ((dia >= 20 && mes == 1) || (dia <= 19 && mes ==2)){
    console.log('Acuariano como mi vieja');
} else if ((dia >= 20 && mes == 2) || (dia <= 20 && mes ==3)){
    console.log('Pischiano');
}
