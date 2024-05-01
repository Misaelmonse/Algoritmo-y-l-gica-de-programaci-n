// 10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Entrada: numero=0(leer), numero > 100
// Proceso:Si numero > 100 entonces
//           Escribir numero, "es mayor que 100."
//         Sino Si numero < 100 entonces
//           Escribir numero, "es menor que 100."
//         Sino Si numero == 100 entonces
//           Escribir numero "es igual a 100."
//         FinSi
//         Escribir "Gracias por su visita"
// Salida: mostrar numero

// Pseudocodigo:
// InicioALgoritmo mayor_menor100
//  Escribir "Por favor, ingrese un número: "
//  Leer numero
//  Si numero > 100 entonces
//    Escribir numero , "es mayor que 100."
//  Sino Si numero < 100 entonces
//    Escribir numero , "es menor que 100."
//  Sino Si numero == 100 entonces
//    Escribir numero , "es igual a 100."
//  FinSi
// Escribir "El proceso de verificación de número ha sido éxitosa."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function mayor_menor100(){
    let numero = Number(prompt("Por favor, ingrese un número: "))
    if(numero > 100){
        write(numero , "es mayor que 100.")
    }
    else if(numero < 100){
        write(numero , "es menor que 100.")
    }
    else if(numero == 100){
        write(numero , "es igual a 100.")
    }
    write("Gracias por su visita.")
}

mayor_menor100();