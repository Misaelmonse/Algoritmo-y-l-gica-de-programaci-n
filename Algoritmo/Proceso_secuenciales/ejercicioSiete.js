const prompt = require('prompt-sync')();
const write = console.log

 
 // 7. solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Entrada: temperatura en grados Celsius=""(leer), fahrenheit(calcular)
// Proceso: fahrenheit = (celsius * 9/5) + 32
//          Escribir "La temperatura de", celsius, "grados Celsius es igual a", fahrenheit, "grados Fahrenheit."
// Salida: Mostrar Fahrenheit

// Pseudocodigo:
// InicioAlgoritmo temperatura
//  Escribir "Por favor, ingresa la temperatura en grados Celsius:"
//  Leer celsius
//  fahrenheit = (celsius * 9/5) + 32
//  Escribir "La temperatura de", celsius, "grados Celsius es igual a", fahrenheit, "grados Fahrenheit."
// FinAlgoritmo


function temperatura() {
    celsius = parseInt(prompt("Por favor, ingresa la temperatura en grados Celsius:"));
    fahrenheit = (celsius * 9/5) + 32;
    write("La temperatura de", celsius, "grados Celsius es igual a", fahrenheit, "grados Fahrenheit.");
}
temperatura();