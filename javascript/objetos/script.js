/*
==========================================
LABORATORIO 09
Objetos
==========================================
Objetivo:
Crear y utilizar objetos para representar
información relacionada.
==========================================
*/

// Referencias HTML.

const nombre = document.getElementById("nombre");
const programa = document.getElementById("programa");
const semestre = document.getElementById("semestre");

const botonCrear = document.getElementById("crear");
const botonLimpiar = document.getElementById("limpiar");

const resultado = document.getElementById("resultado");

// Eventos.

botonCrear.addEventListener("click", crearObjeto);
botonLimpiar.addEventListener("click", limpiarFormulario);

/**
 * Crea un objeto estudiante y muestra su contenido.
 */
function crearObjeto() {

    if (
        nombre.value.trim() === "" ||
        programa.value.trim() === "" ||
        semestre.value === ""
    ) {

        resultado.textContent =
            "Debe completar todos los campos.";

        return;
    }

    const estudiante = {

        nombre: nombre.value,

        programa: programa.value,

        semestre: Number(semestre.value)

    };

    resultado.innerHTML = `
        <h3>Objeto estudiante</h3>

        <p><strong>Nombre:</strong> ${estudiante.nombre}</p>

        <p><strong>Programa:</strong> ${estudiante.programa}</p>

        <p><strong>Semestre:</strong> ${estudiante.semestre}</p>
    `;
}

/**
 * Limpia el formulario.
 */
function limpiarFormulario() {

    nombre.value = "";
    programa.value = "";
    semestre.value = "";

    resultado.textContent =
        "Esperando información...";

    nombre.focus();

}