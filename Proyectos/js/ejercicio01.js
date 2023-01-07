'use strict'
/*
programa que nos diga que numero es mayor o menor o si son iguales si los numero no son un numero o son menores
o iguales a cero nos lo vuelva a pedir
*/
var numero1 = parseInt(prompt(" Introduce el primer numero,",0));
var numero2 = parseInt(prompt("introduce el segundo numero,",0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = prompt(" Introduce el primer numero,",0);
    numero2 = prompt("introduce el segundo numero,",0);
}

console.log(numero1, numero2);

if(numero1 == numero2){
    alert("Los dos numeros son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: "+ numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert("El numero menor es: "+ numero1);
}else{
    alert("Introduce numeros correctos");
}