/*
Ejercicio 2
Calcular Promedio
Escribir una función que tome un array de números y calcule el promedio.
*/ 

let numes = [5, 15, 30]

function calcularPromedio(array) {
        let aux = 0
            for (let i = 0; i < array.length; i++) {
                aux += array[i]
                //console.log(aux)
                //console.log(array[i])
            }
            //console.log(aux)
            //console.log(array.length)
            return (aux / array.length)
}

console.log(calcularPromedio(numes))