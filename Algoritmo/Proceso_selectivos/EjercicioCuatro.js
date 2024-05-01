// 4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
// Entrada: numero=0(leer)
// Proceso: numero > 0
//          Si numero > 0 entonces
//            Escribir numero, "es positivo."
//          Si numero < 0 entonces
//            Escribir numero, "es negativo."
//          Sino
//            Escribir "El número ingresado es cero."
//          FinSi
//          Escribir "Gracias por verificar su numero"
// Salida: mostrar el mensaje

// Pseudocodigo:
// InicioAlgoritmo mayor_menor
//  Escribir "Ingresa el número:"
//  Leer numero
//  Si numero > 0 entonces
//    Escribir numero ,"es positivo."
//  Si numero < 0 entonces
//    Escribir numero ,"es negativo."
//  Sino
//    Escribir "El número ingresado es cero."
//  FinSi
//  Escribir "Gracias por verificar su número."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log;

function mayor_menor(){
    let numero = Number(prompt("Ingresa el número:"));
    if(numero > 0){
        write(numero ,"es positivo.");
    }
    else if(numero < 0){
        write(numero ,"es negativo");
    }
    else{
        write("El número ingresado es cero.");
    }
    write("Gracias por verificar su número.")
}
mayor_menor();