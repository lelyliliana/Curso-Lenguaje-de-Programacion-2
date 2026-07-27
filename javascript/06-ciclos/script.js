/*
==========================================
LABORATORIO 06
Ciclo for
==========================================
Objetivo:
Generar una secuencia de números utilizando
la estructura repetitiva for.
==========================================
*/

// Referencias a los elementos HTML.
const cantidad = document.getElementById("cantidad");

const botonGenerar = document.getElementById("generar");
const botonLimpiar = document.getElementById("limpiar");

const resultado = document.getElementById("resultado");

// Eventos.
botonGenerar.addEventListener("click", generarNumeros);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Genera una secuencia de números.
 */
function generarNumeros() {

    const total = Number(cantidad.value);

    if (cantidad.value === "") {
        resultado.textContent = "Debe ingresar una cantidad.";
        return;
    }

    let lista = "";

    for (let contador = 1; contador <= total; contador++) {

        lista += `<p>Número ${contador}</p>`;

    }

    resultado.innerHTML = lista;
}

/**
 * Limpia el formulario.
 */
function limpiarResultado() {

    cantidad.value = "";

    resultado.textContent = "Esperando datos...";

    cantidad.focus();

}