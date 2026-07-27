/*
==========================================
LABORATORIO 10
DOM
==========================================
Objetivo:
Aprender a modificar el contenido de una
página utilizando JavaScript.
==========================================
*/

// Elementos del DOM.

const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

// Botones.

const botonTexto = document.getElementById("cambiarTexto");
const botonColor = document.getElementById("cambiarColor");
const botonRestablecer = document.getElementById("restablecer");

// Eventos.

botonTexto.addEventListener("click", cambiarTexto);
botonColor.addEventListener("click", cambiarColor);
botonRestablecer.addEventListener("click", restablecer);

/**
 * Cambia el texto del título y del párrafo.
 */
function cambiarTexto() {

    titulo.textContent =
        "El DOM ha sido modificado";

    mensaje.textContent =
        "JavaScript puede cambiar el contenido de una página.";

    resultado.textContent =
        "Se modificó el contenido utilizando textContent.";

}

/**
 * Cambia el color del título.
 */
function cambiarColor() {

    titulo.style.color = "#0d6efd";

    titulo.style.fontSize = "2.3rem";

    resultado.textContent =
        "Se modificaron propiedades CSS mediante JavaScript.";

}

/**
 * Restablece el estado inicial.
 */
function restablecer() {

    titulo.textContent =
        "Bienvenido al laboratorio";

    mensaje.textContent =
        "Este mensaje será modificado por JavaScript.";

    titulo.style.color = "#000";

    titulo.style.fontSize = "1.4rem";

    resultado.textContent =
        "Esperando acciones del usuario...";

}