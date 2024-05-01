// 21.Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor.
// Entrada: NumeroMayor = [300,200,5000]
// Proceso:  Si NumeroMayor1 > NumeroMayor2 Y NumeroMayor1 > NumeroMayor3 Entonces
//             Escribir NumeroMayor1, " es el elemento mayor."
//           Sino Si NumeroMayor2 > NumeroMayor1 Y NumeroMayor2 > NumeroMayor3 Entonces
//             Escribir NumeroMayor2, " es el elemento mayor."
//           Sino
//             Escribir NumeroMayor3, " es el elemento mayor."
//           FinSi
// Salida: mostrar mensaje

// Pseudocodigo:
// InicioAlgoritmo ejercicio_21
//  definir NumeroMayor1, NumeroMayor2, NumeroMayor3 Como Entero
//  NumeroMayor1 <- 300
//  NumeroMayor2 <- 200
//  NumeroMayor3 <- 5000
//  Escribir NumeroMayor1, ",", NumeroMayor2, ",", NumeroMayor3
//  Si NumeroMayor1 > NumeroMayor2 Y NumeroMayor1 > NumeroMayor3 Entonces
//    Escribir NumeroMayor1, " es el elemento mayor."
//  Sino Si NumeroMayor2 > NumeroMayor1 Y NumeroMayor2 > NumeroMayor3 Entonces
//    Escribir NumeroMayor2, " es el elemento mayor."
//  Sino
//    Escribir NumeroMayor3, " es el elemento mayor."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function arreglo_mayor_menor(){
    let NumeroMayor = [200, 400, 1000];
    
    if (NumeroMayor[0] > NumeroMayor[1] && NumeroMayor[0] > NumeroMayor[2]){
        write(NumeroMayor[0], " es el elemento mayor.");
    }
    else if (NumeroMayor[1] > NumeroMayor[0] && NumeroMayor[1] > NumeroMayor[2]){
        write(NumeroMayor[1], " es el elemento mayor.");
    }
    else{
        write(NumeroMayor[2], " es el elemento mayor.");
    }
}

arreglo_mayor_menor();