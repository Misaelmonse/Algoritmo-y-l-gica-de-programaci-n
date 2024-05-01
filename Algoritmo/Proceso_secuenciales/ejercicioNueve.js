const read = require('prompt-sync')();
const write = console.log

// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Entrada: número=""(leer), numero(leer), Multiplicar del 1 al 10
// Proceso: Para i desde 1 hasta 10 hacer
//           producto = numero * i
//           Escribir numero, "x", i, "=", producto
//          Fin
// Salida: mostrar la multiplicación del numero digitado 

// Pseudocodigo:
// InicioAlgoritmo tabla1al10
//  Escribir "Bienvenido, ingresa un número:"
//  Leer numero
//  Para i desde 1 hasta 10 hacer
//   producto = numero * i
//   Escribir numero, "x", i, "=", producto
//  FinPara
// FinAlgoritmo

function tabla1al10() {
    let numero = parseFloat(prompt("Bienvenido, ingresa un número:"));
    for (let i = 1; i <= 10; i++) {
        let producto = numero * i;
        console.log(numero, "x", i, "=", producto);
    }
}

tabla1al10();