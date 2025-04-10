// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

let bolaColor = ['branco', "verde", 'amarela', 'azul', 'laranja'];
let color = Math.floor(Math.random() * bolaColor.length);
let porcentajeDescuento;

console.log('A cor da sua bolinha é: ' + bolaColor[color]);

switch (bolaColor[color]) {
    case ('branco'): 
    porcentajeDescuento = 0;
    console.log('Voce pega a bolinha branca');
    break;

    case ('verde'): 
    porcentajeDescuento = 0.1
    console.log('Voce pega a bolinha verde');
    break;

    case ('amarela'): 
    porcentajeDescuento = 0.25
    console.log('Voce pega a bolinha amarela');
    break;

    case ('azul'): 
    porcentajeDescuento = 0.5
    console.log('Voce pega a bolinha azul');
    break;

    case ('laranja') : 
    porcentajeDescuento = 1
    console.log('Voce pega a bolinha laranha');
    break;

    default:
        console.log('Näo tem bolinhas kkkkk');
    }

let pago = 6400
let descuento = porcentajeDescuento * pago;
let total = pago - descuento

console.log(total);