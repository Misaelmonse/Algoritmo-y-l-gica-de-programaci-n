const read = require('prompt-sync')();
const write = console.log

//1. Pedir al usuario su nombre y saludarlo
//Analisis de requerimiento
//Ent: nombre (Leer)
//Pro: Pedir nombre
//      Escribir "Hola,nombre"
//Sal: Mostra el mensaje

//Algoritmo 
//Algoritmo saludar
//Declarar nombre
//Escribir "Ingrese su nombre"
//leer nombre
//Escribir "Hola",nombre
//FinAlgoritmo

//Lenguaje Javascript
function saludar() {
let nombre= prompt("Ingrese su nombre")
write ("Hola ",nombre);
}
saludar();