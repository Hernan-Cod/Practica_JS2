/*
Ejercicio 5
Botón que muestra un mensaje
Crear una página con un botón. Al hacer click, debe aparecer un mensaje debajo
(como un saludo o bienvenida). El mensaje debe estar oculto inicialmente.
*/
function mostrar(){
    const elemento = document.getElementById("msjOculto");
    elemento.removeAttribute("hidden");
}