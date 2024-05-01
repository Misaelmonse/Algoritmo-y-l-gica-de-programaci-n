// 19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// Entrada: arregloNum = [20,30,15,5,6](leer)
// Proceso: arregloNum[0]>arregloNum[4]
// Salida: mostrar los arreglos

// Pseudocódigo:
// InicioAlgoritmo arreglo_numeros
//  definir number1, number2, number3, number4, number5 Como Caracter
//  number1=20; number2=30; number3=15; number4=5; number5=6
//  Escribir number1,",", number2, ",", number3, ",", number4, ",", number5
//  Si number1 > number5 entonces
//    Escribir "El primer elemento es mayor que el último elemento del arreglo."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function arreglo_numeros(){
    let arregloNum = [20,30,15,5,6]
    write("Dado el siguiente arreglo:")
    write(arregloNum)
    if (arregloNum[0]>arregloNum[4]){
        write("El primer elemento:", arregloNum[0],",", "es mayor que el último elemento del arreglo:", arregloNum[4])
    }
}

arreglo_numeros();