/*
Ejercicio 8
Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer
click en un botón.
*/
function cambiarTextoParrafo(){
    
    let parrafos = document.querySelectorAll('p')
    parrafos.forEach(p =>{
        p.textContent = "Saldrá "+Math.random()
    })

}

