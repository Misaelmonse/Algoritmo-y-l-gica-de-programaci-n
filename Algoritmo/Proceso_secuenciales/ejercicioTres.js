const read = require('prompt-sync')();
const write = console.log


// 3. Solicitar al usuario dos numeros y mostrar su suma.
// Entrada: numero1=""(leer), numero2=""(leer),suma(proceso)
// Proceso: suma = numero1+numero2
// Salida: suma

// pseudocodigo:
// InicioAlgoritmo_ejercicio_2
//  Escribir "Hola, ingrese el primer numero:"
//  Leer numero1
//  Escribir "Ahora ingrese el segundo numero:"
//  Leer numero2
//  suma = numero1 + numero2
//  Escribir "La suma de los dos numeros es:", suma
// FinAlgoritmo


function sumadenumeros(){
    numero1 = parseFloat(read("Ingrese el primer numero:"));
    numero2 = parseFloat(read("Ingrese el segundo numero:"));
    suma = numero1 + numero2
    write("La suma de los dos números es:", suma);
}
sumadenumeros();