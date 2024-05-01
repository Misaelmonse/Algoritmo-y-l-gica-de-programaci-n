const prompt = require('prompt-sync')();
const write = console.log

// 6.Pedir al usuario dos números y mostrar el resultado de multiplicarlos
// Entrada: numero1=""(leer), numero2=""(leer), resultado(proceso)
// Proceso: resultado = numero1 * numero2
//          Escribir "El resultado de la multiplicacion es ", resultado
// Salida: resultado

// Pseudocodigo:
// InicioAlgortimo multiplicacion
//  Escribir "Hola, ingresa el primer número:"
//  Leer numero1
//  Escribir "Ingresa el segundo numero:"
//  resultado = numero1 * numero2
//  Escribir "El resultado de la multiplicacion es ", resultado
// FinAlgoritmo


function multiplicacion(){
    numero1 = prompt("Hola, ingresa el primer número:");
    numero2 = prompt("Ingreas el segundo número:");
    resultado = numero1 * numero2
    write("El resultado de la multiplicacion es ", resultado)
}
multiplicacion();