const prompt = require('prompt-sync')();
const write = console.log

// 4. Pedir al usuario un número y mostrar su doble
// Entrada: Ingresar numero, numero(leer), doble(calcular)
// Proceso: doble = numero * 2
// Salida: Mostrar el doble del numero ingresado
//
// Pseudocodigo:
// InicioAlgoritmo dobledeunumero
//  Escribir "Ingrese un numero:"
//  Leer numero
//  doble = numero * 2
//  Escribir "El doble de ", numero , "es:" doble
// FinAlgoritmo
//

function dobledeunumero(){
    let numero = Number(prompt("Ingrese un numero:"));
    let doble = numero *2;
    write("El doble de ",numero , "es:", doble);
}
dobledeunumero();