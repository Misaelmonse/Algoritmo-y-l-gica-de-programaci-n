// 20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// Entrada: arregloDigitos = [2,5,7,9,10](Leer)
// Proceso: arregloDigitos[0]%2==0
//          arregloDigitos[4]%2==1
// Salida: mostrar los arreglos


// Pseudocodigo:
// InicioAlgoritmo arreglo_par_impar
//  Definir number1, number2, number3, number4, number5 Como Entero
//  number1=2; number2=5; number3=7; number4=9; number=10
//  Escribir "[", number1,"," ", number2, ", ", number3, ", ", number4, ", ", number5 "]"
//  Escribir number1, " es un número par."
//  Escribir number5, " es número impar."
// FinAlgoritmo

const write = console.log;

function arreglo_par_impar(){
    let arregloDigitos = [5,10,9,13,21];
    
    write("Dado el siguiente arreglo:");
    write(arregloDigitos);

    if (arregloDigitos[0] % 2 === 0){
        write(arregloDigitos[0], " es número par.");
    } else {
        write(arregloDigitos[0], " es número impar.");
    }

    if (arregloDigitos[4] % 2 === 0){
        write(arregloDigitos[4], " es número par.");
    } else {
        write(arregloDigitos[4], " es número impar.");
    }
}

arreglo_par_impar();