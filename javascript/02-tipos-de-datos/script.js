/*
==========================================
LABORATORIO 02
Tipos de datos en JavaScript
==========================================
Objetivo:
Identificar los principales tipos de datos
utilizando el operador typeof.
==========================================
*/

// Declaración de variables con diferentes tipos de datos.

let nombre = "María";
let edad = 20;
let activo = true;
let salario = 2500000;
let ciudad;

// Referencias a los elementos HTML.

const botonMostrar = document.getElementById("botonMostrar");
const botonLimpiar = document.getElementById("botonLimpiar");
const resultado = document.getElementById("resultado");

// Eventos.

botonMostrar.addEventListener("click", mostrarTiposDatos);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Muestra los valores y sus tipos de datos.
 */
function mostrarTiposDatos() {

    resultado.innerHTML = `
        <table>
            <tr>
                <th>Variable</th>
                <th>Valor</th>
                <th>Tipo de dato</th>
            </tr>

            <tr>
                <td>nombre</td>
                <td>${nombre}</td>
                <td>${typeof nombre}</td>
            </tr>

            <tr>
                <td>edad</td>
                <td>${edad}</td>
                <td>${typeof edad}</td>
            </tr>

            <tr>
                <td>activo</td>
                <td>${activo}</td>
                <td>${typeof activo}</td>
            </tr>

            <tr>
                <td>salario</td>
                <td>${salario}</td>
                <td>${typeof salario}</td>
            </tr>

            <tr>
                <td>ciudad</td>
                <td>${ciudad}</td>
                <td>${typeof ciudad}</td>
            </tr>

        </table>
    `;
}

/**
 * Limpia el resultado.
 */
function limpiarResultado() {

    resultado.textContent =
        "Aquí aparecerán los tipos de datos identificados con JavaScript.";

}