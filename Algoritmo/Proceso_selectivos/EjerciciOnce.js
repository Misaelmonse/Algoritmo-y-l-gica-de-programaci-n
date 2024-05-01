// 11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Entrada: numero=0(leer), numero >= -9, numero <= 9
// Proceso:Si numero >= -9 y numero <= 9 entonces
//           Escribir numero, "es un número de un sólo dígito."
//         Sino
//           Escribir numero, "no es un número de un sólo dígito."
//         FinSi
// Salida: numero

// Pseudocodigo:
// InicioAlgoritmo digitos
//  Escribir "Escriba un número: "
//  Leer numero
//  Si numero >= -9 y numero <= 9 entonces
//    Escribir numero, "es un número de un sólo dígito."
//  Sino
//    Escribir numero, "no es un número de un sólo dígito."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function digitos(){
    let numero = parseInt(prompt("Digite un número: "))
    if (numero >= -9 && numero <= 9){
        write(numero,"es un número de un sólo dígito.")
    }
    else{
        write(numero,"no es de un número de un sólo dígito.")
    }
}

digitos();