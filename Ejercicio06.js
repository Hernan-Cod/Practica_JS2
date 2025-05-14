/*
Ejercicio 6
Cambiar color de fondo
Hacer una página con un botón que, al hacer click, cambie el color de fondo del
body. Debe rotar entre varios colores (mínimo 3)
*/
let indice = 0

function cambiarColorFondo(){
    colores = ["red", "blue", "green", "yellow", "white"]
    document.body.style.backgroundColor = colores[indice]; 
    indice += 1
    if (indice == colores.length) {
        indice = 0
     }
}