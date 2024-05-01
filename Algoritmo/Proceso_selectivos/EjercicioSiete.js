// 7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.
// Entrada: nombre1=""(leer), nombre2=""(leer)
// Proceso:nombre1 <- ConvertirAMinusculas(nombre1)
//         nombre2 <- ConvertirAMinusculas(nombre2)
//         Si nombre1 == nombre2 entonces
//           Escribir "Los nombres insertados son iguales."
//         Sino Si nombre1 > nombre2 entonces
//           Escribir "El primer nombre es mayor alfabéticamente que el segundo nombre."
//         Sino Si nombre1 > nombre2 entonces
//           Escribir "El primer nombre es menos alfabéticamente que el segundo nombre."
//         FinSi
// Salida: mostrar mensaje

// Pseudocodigo:
// InicioALgoritmo identificar_
//  Escribir "Con su permiso, escriba el primer nombre: "
//  Leer nombre1
//  Escribir "Inserte el segundo nombre, Por favor: "
//  Leer nombre2
//  nombre1 <- ConvertirAMinusculas(nombre1)
//  nombre2 <- ConvertirAMinusculas(nombre2)
//  Si nombre1 == nombre2 entonces
//    Escribir "Los nombres insertados son iguales."
//  Sino Si nombre1 > nombre2 entonces
//    Escribir "El primer nombre es mayor alfabéticamente que el segundo nombre."
//  Sino Si nombre1 > nombre2 entonces
//    Escribir "El primer nombre es menos alfabéticamente que el segundo nombre."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function identificar_(){
    let nombre1 = prompt('Escriba el primer nombre')
    let nombre2 = prompt('Escriba el segundo nombre')
    nombre1 = nombre1.toLowerCase()
    nombre2 = nombre2.toLowerCase()
    if(nombre1 == nombre2){
        write('Los nombres ingresados son iguales.')
    }
    else if(nombre1 > nombre2){
        write("El primer nombre es mayor alfabéticamente que el segundo nombre.")
    }
    else if( nombre1 < nombre2){
        write("El primer nombre es menor alfabéticamente que el segundo nombre.")
    }
}

identificar_();