// 2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Entrada: edad=0(leer)
// Proceso:Leer edad
//         Si edad > 18 entonces
//          Escribir "Usted es mayor de edad."
//         Sino
//          Escribir "Usted es menor de edad."
//         FinSi
// Salida: edad

// Pseudocodigo:
// InicioALgoritmo edad
//  Escribir "Ingrese su edad:"
//   Leer edad
//  Si edad > 18 entonces
//   Escribir "Usted es mayor de edad."
//  Sino
//   Escribir "Usted es menor de edad."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const read = console.log

function edad_(){
    let edad = Number(prompt('Ingrese su edad:'));

    if(edad >= 18){
        read('Usted es mayor de edad.');
    }
    else{
        read('Usted es menor de edad.');
    }
}

edad_();