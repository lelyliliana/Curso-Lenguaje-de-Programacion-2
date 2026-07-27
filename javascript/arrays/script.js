/*
==========================================
LABORATORIO 08
Arrays
==========================================
Objetivo:
Aprender a crear y recorrer arreglos.
==========================================
*/

// Arreglo de estudiantes.
const estudiantes = [];

// Referencias HTML.
const nombre = document.getElementById("nombre");

const botonAgregar = document.getElementById("agregar");
const botonMostrar = document.getElementById("mostrar");
const botonLimpiar = document.getElementById("limpiar");

const resultado = document.getElementById("resultado");

// Eventos.
botonAgregar.addEventListener("click", agregarEstudiante);
botonMostrar.addEventListener("click", mostrarEstudiantes);
botonLimpiar.addEventListener("click", limpiarFormulario);

/**
 * Agrega un estudiante al arreglo.
 */
function agregarEstudiante() {

    if (nombre.value.trim() === "") {

        alert("Debe ingresar un nombre.");

        return;
    }

    estudiantes.push(nombre.value.trim());

    nombre.value = "";

    nombre.focus();
}

/**
 * Muestra el contenido del arreglo.
 */
function mostrarEstudiantes() {

    if (estudiantes.length === 0) {

        resultado.textContent =
            "No hay estudiantes registrados.";

        return;
    }

    let lista = "<ol>";

    for (let i = 0; i < estudiantes.length; i++) {

        lista += `<li>${estudiantes[i]}</li>`;

    }

    lista += "</ol>";

    resultado.innerHTML = lista;
}

/**
 * Limpia el formulario.
 */
function limpiarFormulario() {

    nombre.value = "";

    resultado.textContent =
        "No hay estudiantes registrados.";

    nombre.focus();
}