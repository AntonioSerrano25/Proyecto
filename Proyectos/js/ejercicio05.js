'use strict'

/*
Muestre todos los numero divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Introduce un numero",1));

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisor: "+ i);

    }
}