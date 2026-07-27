# Laboratorio 04: Entrada y salida de datos

**Nivel:** Básico

**Duración estimada:** 20 minutos

**Requisitos previos:**

- Variables
- Tipos de datos
- Operadores

**Concepto principal:**

Entrada y salida de datos mediante `prompt()`, `alert()`, `confirm()` y `console.log()`.

---

## Objetivo

Capturar información ingresada por el usuario y mostrar los resultados utilizando los principales mecanismos de entrada y salida disponibles en JavaScript.

## Descripción

Una aplicación necesita interactuar con el usuario para solicitar información, mostrar mensajes y presentar resultados.

En este laboratorio se utilizan las funciones incorporadas de JavaScript para establecer esa comunicación.

El estudiante podrá ingresar datos mediante ventanas emergentes y visualizar posteriormente los resultados tanto en la consola como en la página web.

## Conceptos trabajados

- `prompt()`
- `alert()`
- `confirm()`
- `console.log()`
- Variables
- Condicionales
- Funciones
- DOM
- Eventos

## Funciones utilizadas

| Función | Descripción |
|---------|-------------|
| `prompt()` | Solicita información al usuario. |
| `alert()` | Muestra un mensaje informativo. |
| `confirm()` | Solicita una respuesta de aceptación o cancelación. |
| `console.log()` | Envía información a la consola del navegador. |

## Ejemplo

```javascript
const nombre = prompt("Ingrese su nombre:");

alert("Bienvenido " + nombre);

console.log(nombre);

const continuar = confirm("¿Desea continuar?");
```

## Funcionamiento del laboratorio

1. El usuario presiona el botón **Iniciar laboratorio**.
2. JavaScript solicita el nombre mediante `prompt()`.
3. Solicita la edad.
4. Pregunta si desea mostrar la información mediante `confirm()`.
5. Presenta un mensaje utilizando `alert()`.
6. Muestra los datos dentro de la página.
7. Envía la información a la consola del navegador.

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Lógica desarrollada en JavaScript. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/entradaSalida`.
2. Ejecute el archivo `index.html`.
3. Presione **Iniciar laboratorio**.
4. Responda las preguntas.
5. Observe el resultado en la página y en la consola del navegador.

## Reto

Solicite también la ciudad y el correo electrónico del usuario y muéstrelos junto con la información ya capturada.

## Resultado esperado

El laboratorio debe capturar correctamente los datos ingresados por el usuario, solicitar confirmación antes de mostrarlos y presentar el resultado tanto en la página como en la consola del navegador.

## Conclusiones

La interacción con el usuario constituye uno de los pilares del desarrollo de aplicaciones. Mediante `prompt()`, `alert()`, `confirm()` y `console.log()` es posible establecer una comunicación básica entre el programa y el usuario, preparando el camino para el uso de formularios y componentes más avanzados en los siguientes laboratorios.