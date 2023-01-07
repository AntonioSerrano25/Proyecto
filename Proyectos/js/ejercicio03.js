'use strict'

/*
Hacer un programa que te muestre todos los numeros entre 2 numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

document.write("<h1>Del "+numero1+" a "+numero2+"están estos numero: </h1>")

for(var i = numero1; i <= numero2; i++){
    document.write(i+"</br>");
}
