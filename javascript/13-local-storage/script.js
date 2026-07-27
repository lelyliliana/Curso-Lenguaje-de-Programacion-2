/*
==========================================
LABORATORIO 13
Local Storage
==========================================
Objetivo:
Guardar y recuperar información utilizando
localStorage.
==========================================
*/

// Referencias HTML.

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const programa = document.getElementById("programa");
const semestre = document.getElementById("semestre");

const botonEliminar = document.getElementById("eliminar");

const resultado = document.getElementById("resultado");

// Eventos.

formulario.addEventListener("submit", guardarEstudiante);
botonEliminar.addEventListener("click", eliminarEstudiante);

// Al cargar la página intenta recuperar la información.
mostrarEstudiante();

/**
 * Guarda el estudiante en Local Storage.
 */
function guardarEstudiante(evento) {

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

    const estudiante = {

        nombre: nombre.value.trim(),

        programa: programa.value.trim(),

        semestre: Number(semestre.value)

    };

    localStorage.setItem(
        "estudiante",
        JSON.stringify(estudiante)
    );

    mostrarEstudiante();

    formulario.reset();

}

/**
 * Recupera la información almacenada.
 */
function mostrarEstudiante() {

    const datos = localStorage.getItem("estudiante");

    if (datos === null) {

        resultado.textContent =
            "No hay información almacenada.";

        return;
    }

    const estudiante = JSON.parse(datos);

    resultado.innerHTML = `
        <h3>Información almacenada</h3>

        <p><strong>Nombre:</strong> ${estudiante.nombre}</p>

        <p><strong>Programa:</strong> ${estudiante.programa}</p>

        <p><strong>Semestre:</strong> ${estudiante.semestre}</p>
    `;

}

/**
 * Elimina la información almacenada.
 */
function eliminarEstudiante() {

    localStorage.removeItem("estudiante");

    resultado.textContent =
        "No hay información almacenada.";

}