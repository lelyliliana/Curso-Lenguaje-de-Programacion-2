/*
==========================================
LABORATORIO 16
Proyecto integrador
Sistema de Gestión de Estudiantes
==========================================

Objetivo:
Integrar formularios, arrays, objetos, DOM,
eventos, funciones y Local Storage.
==========================================
*/

// Referencias al formulario.
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const programa = document.getElementById("programa");
const semestre = document.getElementById("semestre");
const correo = document.getElementById("correo");

// Referencias a la interfaz.
const busqueda = document.getElementById("busqueda");
const mensaje = document.getElementById("mensaje");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const resumen = document.getElementById("resumen");

// Recupera los estudiantes almacenados.
// Si no existen registros, inicia con un arreglo vacío.
let estudiantes =
    JSON.parse(localStorage.getItem("estudiantes")) || [];

// Eventos.
formulario.addEventListener("submit", registrarEstudiante);
busqueda.addEventListener("input", buscarEstudiantes);

// Muestra los registros al cargar la página.
mostrarEstudiantes(estudiantes);

/**
 * Registra un nuevo estudiante.
 *
 * @param {SubmitEvent} evento Evento enviado por el formulario.
 */
function registrarEstudiante(evento) {
    evento.preventDefault();

    if (
        nombre.value.trim() === "" ||
        programa.value.trim() === "" ||
        semestre.value === "" ||
        correo.value.trim() === ""
    ) {
        mensaje.textContent = "Debe completar todos los campos.";
        return;
    }

    const nuevoEstudiante = {
        id: Date.now(),
        nombre: nombre.value.trim(),
        programa: programa.value.trim(),
        semestre: Number(semestre.value),
        correo: correo.value.trim()
    };

    estudiantes.push(nuevoEstudiante);

    guardarEstudiantes();
    mostrarEstudiantes(estudiantes);

    formulario.reset();
    nombre.focus();

    mensaje.textContent = "Estudiante registrado correctamente.";
}

/**
 * Guarda el arreglo de estudiantes en Local Storage.
 */
function guardarEstudiantes() {
    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );
}

/**
 * Muestra un arreglo de estudiantes en la página.
 *
 * @param {Array} lista Arreglo que se mostrará.
 */
function mostrarEstudiantes(lista) {
    listaEstudiantes.innerHTML = "";

    if (lista.length === 0) {
        mensaje.textContent = "No hay estudiantes registrados.";
        actualizarResumen();
        return;
    }

    mensaje.textContent = "";

    lista.forEach(function (estudiante) {
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("estudiante");

        tarjeta.innerHTML = `
            <h3>${estudiante.nombre}</h3>

            <p>
                <strong>Programa:</strong>
                ${estudiante.programa}
            </p>

            <p>
                <strong>Semestre:</strong>
                ${estudiante.semestre}
            </p>

            <p>
                <strong>Correo:</strong>
                ${estudiante.correo}
            </p>

            <button
                type="button"
                class="boton-eliminar"
                data-id="${estudiante.id}"
            >
                Eliminar
            </button>
        `;

        listaEstudiantes.appendChild(tarjeta);
    });

    agregarEventosEliminar();
    actualizarResumen();
}

/**
 * Asigna el evento de eliminación a cada botón.
 */
function agregarEventosEliminar() {
    const botonesEliminar =
        document.querySelectorAll(".boton-eliminar");

    botonesEliminar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const id = Number(boton.dataset.id);

            eliminarEstudiante(id);
        });
    });
}

/**
 * Elimina un estudiante según su identificador.
 *
 * @param {number} id Identificador del estudiante.
 */
function eliminarEstudiante(id) {
    estudiantes = estudiantes.filter(function (estudiante) {
        return estudiante.id !== id;
    });

    guardarEstudiantes();
    mostrarEstudiantes(estudiantes);

    mensaje.textContent = "Estudiante eliminado correctamente.";
}

/**
 * Busca estudiantes por nombre o programa.
 */
function buscarEstudiantes() {
    const textoBusqueda =
        busqueda.value.trim().toLowerCase();

    const estudiantesFiltrados =
        estudiantes.filter(function (estudiante) {
            const nombreEstudiante =
                estudiante.nombre.toLowerCase();

            const programaEstudiante =
                estudiante.programa.toLowerCase();

            return (
                nombreEstudiante.includes(textoBusqueda) ||
                programaEstudiante.includes(textoBusqueda)
            );
        });

    mostrarEstudiantes(estudiantesFiltrados);
}

/**
 * Actualiza el total de estudiantes registrados.
 */
function actualizarResumen() {
    resumen.textContent =
        `Total de estudiantes: ${estudiantes.length}`;
}