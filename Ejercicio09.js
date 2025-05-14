/*
Ejercicio 9
Mostrar/Ocultar texto
Incluir un párrafo visible y un botón que permita ocultarlo o mostrarlo según su
estado actual. El texto del botón debe cambiar entre “Mostrar” y “Ocultar”.
*/
function mostrarOcultarParrafo(){
    
    const pAux = document.getElementById("parrafo9");
    const btnAux = document.getElementById("btnMostrarOcultar");
    // elementoAux.style.display = "none";
 
 
    if (pAux.style.display === "none") {
    pAux.style.display = "block"
    btnAux.textContent = "Ocultar"
  } else {
    pAux.style.display = "none"
    btnAux.textContent = "Mostrar";
  }

}


