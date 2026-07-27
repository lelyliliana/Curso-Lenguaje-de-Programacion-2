# Laboratorio 01: Variables en JavaScript

## Objetivo

Comprender cómo declarar, utilizar y mostrar variables mediante las palabras reservadas `var`, `let` y `const`.

## Descripción

Este laboratorio presenta las tres formas disponibles para declarar variables en JavaScript.

Al presionar el botón **Mostrar variables**, la aplicación toma los valores almacenados y los presenta directamente en la página.

## Conceptos trabajados

- Declaración de variables.
- Uso de `var`.
- Uso de `let`.
- Uso de `const`.
- Reasignación de valores.
- Selección de elementos del DOM.
- Evento `click`.
- Uso de funciones.
- Presentación de resultados con `innerHTML`.

## Diferencias principales

| Declaración | ¿Puede cambiar su valor? | Alcance |
|---|---:|---|
| `var` | Sí | Función o global |
| `let` | Sí | Bloque |
| `const` | No puede reasignarse | Bloque |

Actualmente se recomienda utilizar principalmente `let` y `const`.

## Ejemplo

```javascript
var nombre = "María";
let edad = 20;
const universidad = "Uniremington";
```

La variable `edad` puede cambiar:

```javascript
edad = 21;
```

En cambio, una constante no puede recibir un valor diferente mediante una nueva asignación:

```javascript
const universidad = "Uniremington";

// Esto produciría un error:
// universidad = "Otra institución";
```

## Funcionamiento del laboratorio

1. JavaScript declara tres variables.
2. Se seleccionan el botón y el área de resultados.
3. El programa espera que el usuario presione el botón.
4. Se ejecuta la función `mostrarVariables()`.
5. Los valores se presentan en la página.
6. El botón **Limpiar** restablece el mensaje inicial.

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura del laboratorio. |
| `style.css` | Define la presentación visual. |
| `script.js` | Contiene la lógica desarrollada con JavaScript. |
| `README.md` | Explica el propósito y funcionamiento del laboratorio. |

## Cómo ejecutar el laboratorio

1. Descargue o clone el repositorio.
2. Abra la carpeta `javascript/variables`.
3. Abra el archivo `index.html` en un navegador.
4. Presione el botón **Mostrar variables**.
5. Modifique los valores en `script.js` y vuelva a probar.

## Reto

Agregue una variable llamada `ciudad` y muestre su contenido junto con los demás datos.

Ejemplo:

```javascript
let ciudad = "Medellín";
```

## Resultado esperado

La página debe mostrar los valores correspondientes al nombre, la edad, la universidad y cualquier variable adicional incorporada por el estudiante.