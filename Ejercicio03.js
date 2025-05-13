/*
Ejercicio 3
Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento.
*/

 let array = ['a','b','c','d','e']

 array.forEach((value, index) => {
    setTimeout(() => {
        console.log(value);
    }, 1000*index);
 });