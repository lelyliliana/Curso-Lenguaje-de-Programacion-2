/*
==========================================
LABORATORIO 01
Variables en JavaScript
==========================================

Objetivo:
Comprender cómo declarar y utilizar variables
con var, let y const.
*/

// Variable declarada con var.
// Se conserva para mostrar que esta forma existe,
// aunque actualmente se recomienda usar let y const.
var nombre = "María";

// Variable declarada con let.
// Su valor puede cambiar durante la ejecución.
let edad = 20;

// Constante.
// Su valor no debe reasignarse.
const universidad = "Uniremington";

// Se obtienen los elementos del documento HTML.
const botonMostrar = document.getElementById("botonMostrar");
const resultado = document.getElementById("resultado");
const botonLimpiar = document.getElementById("botonLimpiar");

// Se ejecuta la función cuando el usuario presiona el botón.
botonMostrar.addEventListener("click", mostrarVariables);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Muestra en la página los valores almacenados
 * en las variables del laboratorio.
 */
function mostrarVariables() {
    resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Universidad:</strong> ${universidad}</p>
    `;
}

/**
 * Limpia el contenido del área de resultados.
 */
function limpiarResultado() {

    resultado.innerHTML =
        "Aquí aparecerán los datos generados con JavaScript.";

}