/*
==========================================
LABORATORIO 07
Funciones
==========================================
Objetivo:
Crear funciones reutilizables mediante
parámetros y retorno de valores.
==========================================
*/

// Referencias HTML.

const base = document.getElementById("base");
const altura = document.getElementById("altura");

const botonCalcular = document.getElementById("calcular");
const botonLimpiar = document.getElementById("limpiar");

const resultado = document.getElementById("resultado");

// Eventos.

botonCalcular.addEventListener("click", mostrarArea);
botonLimpiar.addEventListener("click", limpiarFormulario);

/**
 * Calcula el área de un rectángulo.
 *
 * @param {number} baseRectangulo
 * @param {number} alturaRectangulo
 * @returns {number}
 */
function calcularArea(baseRectangulo, alturaRectangulo) {
    return baseRectangulo * alturaRectangulo;
}

/**
 * Muestra el resultado en la página.
 */
function mostrarArea() {

    if (base.value === "" || altura.value === "") {

        resultado.textContent =
            "Debe ingresar todos los datos.";

        return;
    }

    const area = calcularArea(
        Number(base.value),
        Number(altura.value)
    );

    resultado.innerHTML = `
        <p><strong>Base:</strong> ${base.value}</p>
        <p><strong>Altura:</strong> ${altura.value}</p>
        <p><strong>Área:</strong> ${area}</p>
    `;
}

/**
 * Limpia el formulario.
 */
function limpiarFormulario() {

    base.value = "";
    altura.value = "";

    resultado.textContent = "Esperando datos...";

    base.focus();
}