/*
==========================================
LABORATORIO 03
Operadores aritméticos
==========================================
Objetivo:
Aplicar los operadores de suma, resta,
multiplicación, división y módulo.
==========================================
*/

// Referencias a los elementos HTML.

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const botonModulo = document.getElementById("modulo");

const resultado = document.getElementById("resultado");

// Eventos.

botonSumar.addEventListener("click", function () {
    calcular("+");
});

botonRestar.addEventListener("click", function () {
    calcular("-");
});

botonMultiplicar.addEventListener("click", function () {
    calcular("*");
});

botonDividir.addEventListener("click", function () {
    calcular("/");
});

botonModulo.addEventListener("click", function () {
    calcular("%");
});

/**
 * Realiza una operación aritmética con los valores ingresados.
 *
 * @param {string} operador Operador que se aplicará.
 */
function calcular(operador) {
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    let resultadoOperacion;

    if (numero1.value === "" || numero2.value === "") {
        resultado.textContent = "Debe ingresar los dos números.";
        return;
    }

    switch (operador) {
        case "+":
            resultadoOperacion = valor1 + valor2;
            break;

        case "-":
            resultadoOperacion = valor1 - valor2;
            break;

        case "*":
            resultadoOperacion = valor1 * valor2;
            break;

        case "/":
            if (valor2 === 0) {
                resultado.textContent = "No es posible dividir entre cero.";
                return;
            }

            resultadoOperacion = valor1 / valor2;
            break;

        case "%":
            if (valor2 === 0) {
                resultado.textContent =
                    "No es posible calcular el módulo con divisor cero.";
                return;
            }

            resultadoOperacion = valor1 % valor2;
            break;

        default:
            resultado.textContent = "Operación no reconocida.";
            return;
    }

    resultado.innerHTML = `
        <p><strong>Primer número:</strong> ${valor1}</p>
        <p><strong>Operador:</strong> ${operador}</p>
        <p><strong>Segundo número:</strong> ${valor2}</p>
        <p><strong>Resultado:</strong> ${resultadoOperacion}</p>
    `;
}