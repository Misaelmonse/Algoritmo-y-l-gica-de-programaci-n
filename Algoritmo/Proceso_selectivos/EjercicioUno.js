const prompt = require('prompt-sync')();
const read = console.log;


// 1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Entrada: numero=0(leer)
// Proceso: si numero > 10 entonces
//            Escribir numero, "es mayor que 10."
//           sino
//            Escribir numero, "es menor que 10."
//          FinSi
// Salida: Mostrar si el número es mayor o menor que 10.

// Pseudocodigo
// InicioAlgoritmo mayor_menor
//  Escribir "Hola, escribe un número:"
//  Leer numero
//  Si numero > 10 Entonces
//    Escribir numeero, " es mayor que 10."
//  Sino
//    Escribir numero "es menor que 10."
//  FinSi
// FinAlgoritmo


function mayor_menor() {
const numero = parseFloat(prompt( "Hola, ingresa un número:"));

if (numero > 10) {
    read(numero ," es mayor que 10.");
}

else {
    read(numero, "es menor que 10.");
}
}
 
mayor_menor();