/*
==========================================
LABORATORIO 04
Entrada y salida de datos
==========================================

Objetivo:
Capturar información mediante prompt(),
mostrar mensajes con alert() y confirm(),
y presentar los resultados en la página.
*/

// Referencias a los elementos del HTML.
const botonIniciar = document.getElementById("botonIniciar");
const botonLimpiar = document.getElementById("botonLimpiar");
const resultado = document.getElementById("resultado");

// Eventos.
botonIniciar.addEventListener("click", iniciarLaboratorio);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Inicia la interacción con el usuario.
 */
function iniciarLaboratorio() {
    const nombre = prompt("Ingrese su nombre:");
    const edad = prompt("Ingrese su edad:");

    if (nombre === null || edad === null) {
        resultado.textContent = "El usuario canceló la operación.";
        return;
    }

    if (nombre.trim() === "" || edad.trim() === "") {
        resultado.textContent = "Debe ingresar todos los datos solicitados.";
        return;
    }

    const continuar = confirm(
        `¿Desea mostrar la información de ${nombre}?`
    );

    if (!continuar) {
        resultado.textContent = "El usuario decidió no mostrar la información.";
        return;
    }

    alert("La información será mostrada en la página.");

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);

    resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Mensaje:</strong> Datos capturados correctamente.</p>
    `;
}

/**
 * Limpia el área de resultados.
 */
function limpiarResultado() {
    resultado.textContent =
        "Aquí aparecerá la información ingresada por el usuario.";
}