// 15. Dado un arreglo de 5 elementos, cambios los valores el primer y último elemento entre sí.
// Entrada: arregloElementos = ["Misael", "Jeimmy", "José", "Emily", "Jonnathan"](leer), arregloMover = ["", "", "", "", ""](proceso)
// Proceso: arregloMover = [arregloNombre[4]+", "+ arregloNombre[1]+ ", "+ arreglo[2]+", "+ arregloNombre[3]+", "+arregloNombre[5]]
// Salida: arregloMover

// Pseudocodigo:
// InicioAlgoritmo arreglo_nombre
//  Dimension mombre1, nombre2, nombre3, nombre4, nombre5 Como Caracter
//  nombre1="Misael"; nombre2="Jeimmy"; nombre3="José"; nombre4="Emily"; nombre5="Jonnathan"
//  Escribir nombre1,", ", nombre2,", ", nombre3,", ", nombre4,", ", nombre5
//  Escribir "Cambiando los valores del primer y último elemento entre sí, el arreglo va a asignarse de esta forma. "
//  Escribir nombre5,", ", nombre2,", ", nombre3,", ", nombre4,", ", nombre1
// FinAlgoritmo


const write = console.log;

function arreglo_nombre(){
    let arregloElementos = ["Misael", "Jeimmy", "José", "Emily", "Jonnathan"];
    let arregloMover = ["", "", "", "", ""];
    write ("Dado el arreglo: ", arregloElementos);
    write ("Se cambiará el primer y último elemento entre sí: ");
    arregloMover = [arregloElementos[4]+ ", "+arregloElementos[1]+", "+arregloElementos[2]+", "+arregloElementos[3]+", "+arregloElementos[5]];
    write(arregloMover)
}

arreglo_nombre();