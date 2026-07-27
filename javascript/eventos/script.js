/*
==========================================
LABORATORIO 11
Eventos
==========================================
Objetivo:
Aprender a responder a diferentes eventos
generados por el usuario.
==========================================
*/

// Elementos HTML.

const nombre = document.getElementById("nombre");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

// Evento click.

boton.addEventListener("click", function () {

    resultado.innerHTML = `
        <p>
            Hola <strong>${nombre.value}</strong>.
        </p>
    `;

});

// Evento doble clic.

boton.addEventListener("dblclick", function () {

    resultado.innerHTML = `
        <p>
            Se detectó un doble clic.
        </p>
    `;

});

// Evento al escribir.

nombre.addEventListener("input", function () {

    resultado.innerHTML = `
        <p>
            Escribiendo...
        </p>

        <p>
            ${nombre.value}
        </p>
    `;

});

// Evento cuando el mouse entra.

boton.addEventListener("mouseover", function () {

    boton.textContent = "¡Haz clic!";

});

// Evento cuando el mouse sale.

boton.addEventListener("mouseout", function () {

    boton.textContent = "Interactuar";

});