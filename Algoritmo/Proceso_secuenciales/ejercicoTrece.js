const read = require('prompt-sync')();
const write = console.log

// 13. Dado un arreglo de 5 nombres y presentarlos todos.
// Entrada:Definir yo Como Cadena
// Proceso:Para i<-0 Hasta 4 Hacer
//          Escribir 'NOMBRES'
//          Leer yo
//          arreglo<-numero
//         FinPara
// Salida: mostrar mensaje

// Pseudocodigo:
// InicioAlgoritmo arreglonombres
//  Definir yo Como Cadena
//  Para i<-0 Hasta 4 Hacer
//   Escribir 'NOMBRES'
//   Leer yo
//   arreglo<-numero
//  FinPara
// FinAlgoritmo



function arreglosnombres(){
    const arreglo = []
    for (let i = 0; i < 5; i++) {
        const yo = prompt("Ingrese un nombre:");
        arreglo.push(yo)
    }
    console.log(arreglo)
}

arreglosnombres();