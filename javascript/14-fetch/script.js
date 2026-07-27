/*
==========================================
LABORATORIO 14
Fetch
==========================================
Objetivo:
Consumir información desde una API utilizando
la función fetch().
==========================================
*/

// Referencias HTML.

const botonConsultar = document.getElementById("botonConsultar");
const botonLimpiar = document.getElementById("botonLimpiar");

const resultado = document.getElementById("resultado");

// Eventos.

botonConsultar.addEventListener("click", consultarUsuarios);
botonLimpiar.addEventListener("click", limpiarResultado);

/**
 * Consulta usuarios desde una API pública.
 */
async function consultarUsuarios() {

    resultado.innerHTML = "Consultando información...";

    try {

        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!respuesta.ok) {

            throw new Error("No fue posible obtener la información.");

        }

        const usuarios = await respuesta.json();

        let html = "";

        usuarios.forEach(function(usuario){

            html += `
                <div class="usuario">

                    <h3>${usuario.name}</h3>

                    <p>
                        <strong>Correo:</strong>
                        ${usuario.email}
                    </p>

                    <p>
                        <strong>Ciudad:</strong>
                        ${usuario.address.city}
                    </p>

                    <hr>

                </div>
            `;

        });

        resultado.innerHTML = html;

    }

    catch(error){

        resultado.innerHTML = `
            <p>
                Error:
                ${error.message}
            </p>
        `;

    }

}

/**
 * Limpia el resultado.
 */
function limpiarResultado(){

    resultado.textContent =
        "Esperando la consulta...";

}