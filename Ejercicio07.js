/*
Ejercicio 7
Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado en
un elemento div. Actualizar el texto del div al hacer click.
*/
let contador = 0

function incrementar(){
    contador +=1
    document.getElementById('Contador').textContent = contador
}

function decrementar(){
    contador -=1
    document.getElementById('Contador').textContent = contador
}
