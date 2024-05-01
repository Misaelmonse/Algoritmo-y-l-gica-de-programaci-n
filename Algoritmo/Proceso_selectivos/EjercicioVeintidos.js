// 22.Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Entrada: arregloSumaElementos = [10,3,5,2,9]
// Proceso: arregloSumaElementos = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
// Salida: suma_total

// Pseudocódigo:
// InicioAlgoritmo suma_elementos
//  Definir num1, num2, num3, num4, num5, Total Entero
//  num1=10; num2=3; num3=5; num4=2; num5=9; suma_total=0
//  Escribir num1,", ", num2,", ", num3,", ", num4,", ", num5
//  total = num1+num2+num3+num4+num5
//  Escribir "Dado el siguiente arreglo:"
//  Escribir "[", num1,", ", num2,", ", num3,", ", num4,", ", num5, "]"
//  Escribir "La suma de estos elementos es: ", suma_total
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log;

function suma_elementos(){
    let arregloSumaElementos = [10,3,5,2,9], suma_total = 0
    suma_total = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
    write("Dado el siguiente arreglo:")
    write(arregloSumaElementos)
    write("La suma de los elementos ingresados es: ", suma_total )
}

suma_elementos();