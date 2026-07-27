/*
==========================================
LABORATORIO 05
Condicionales
==========================================

Objetivo:
Aprender a utilizar las estructuras
if, else if y else para tomar decisiones.
==========================================
*/

// Referencias a los elementos HTML.

const edad = document.getElementById("edad");

const botonVerificar = document.getElementById("verificar");
const botonLimpiar = document.getElementById("limpiar");

const resultado = document.getElementById("resultado");

// Eventos.

botonVerificar.addEventListener("click", verificarEdad);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Verifica la categoría de una persona según su edad.
 */
function verificarEdad() {

    const valorEdad = Number(edad.value);

    if (edad.value === "") {
        resultado.textContent = "Debe ingresar una edad.";
        return;
    }

    let categoria = "";

    if (valorEdad >= 0 && valorEdad <= 12) {

        categoria = "Niño";

    } else if (valorEdad <= 17) {

        categoria = "Adolescente";

    } else if (valorEdad <= 59) {

        categoria = "Adulto";

    } else {

        categoria = "Adulto mayor";

    }

    resultado.innerHTML = `
        <h3>Resultado</h3>

        <p><strong>Edad:</strong> ${valorEdad} años</p>

        <p><strong>Categoría:</strong> ${categoria}</p>
    `;
}

/**
 * Limpia el formulario y el resultado.
 */
function limpiarResultado() {

    edad.value = "";

    resultado.textContent = "Esperando datos...";

    edad.focus();

}