/*
Ejercicio 4
Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes.
*/

let resultado;

function restar(num1, num2){
    return resultado = num1-num2;
}

function sumar(num1, num2){
    return resultado = num1+num2;
}

function operaciones(num1, num2, callback){
    let resultadoCall=callback(num1, num2)
    console.log(`El resultado de la operacion es ${resultadoCall}`)
}

operaciones(10, 2, sumar)
operaciones(10, 2, restar)