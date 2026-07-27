/*
==========================================
LABORATORIO 12
Formularios
==========================================
Objetivo:
Capturar y validar información ingresada
por el usuario mediante un formulario.
==========================================
*/

// Referencias HTML.

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const programa = document.getElementById("programa");
const semestre = document.getElementById("semestre");

const resultado = document.getElementById("resultado");

// Evento submit.

formulario.addEventListener("submit", registrarEstudiante);

/**
 * Procesa el formulario.
 */
function registrarEstudiante(evento) {

    evento.preventDefault();

    if (
        nombre.value.trim() === "" ||
        programa.value.trim() === "" ||
        semestre.value === ""
    ) {

        resultado.textContent =
            "Debe completar todos los campos.";

        return;

    }

    resultado.innerHTML = `
        <h3>Registro exitoso</h3>

        <p><strong>Nombre:</strong> ${nombre.value}</p>

        <p><strong>Programa:</strong> ${programa.value}</p>

        <p><strong>Semestre:</strong> ${semestre.value}</p>
    `;

    formulario.reset();

}