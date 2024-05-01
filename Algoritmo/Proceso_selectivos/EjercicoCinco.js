// 5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Entrada: num1=0(Leer), num2=0(Leer)
// Proceso: si num1 == num2 entonces
//             Escribir "Los números son iguales."
//          sino
//             Escribir "Los números son diferentes."
//          FinSi
//          Escribir "vuelva pronto."
// Salida: mostrar el resultado.

// Pseudocodigo:
// InicioALgoritmo igual_diferente
//  Escribir "Ingrese el primer numero:"
//  Leer num1
//  Escribir "ingrese el segundo número:"
//  Leer num2
//  Si num1 == num2 entonces
//    Escribir "Los números ingresados son iguales."
//  Sino
//    Escribir "Los números ingresados son diferentes."
//  FinSi
//  Escribir "Gracias por su visita"
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function igual_diferente(){
    let num1 = Number(prompt("Ingrese el primer numero"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    if(num1 == num2){
        write("Los números ingresados son iguales.")
    }
    else{
        write("Los números ingresados son diferentes.")
    }
    write("Gracias por su visita")
}

igual_diferente();