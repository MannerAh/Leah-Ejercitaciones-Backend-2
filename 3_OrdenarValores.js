// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

let a = 30
let b = 87
let c = 15

if (a < b && a < c){
    console.log('a, ');
    if (b < c){
        console.log('b, c');
    } else {
            console.log('c, b');
        }
}   else if (b < a && b < c){
    console.log('b, ');
    if (a < c){
        console.log('a, c');
    } else {
        console.log('c, a');
    }
}   else if (c < a && c < b){
    console.log('c, ');
    if (a < b){
        console.log('a, b');
    } else {
        console.log('b, a');
    }
}