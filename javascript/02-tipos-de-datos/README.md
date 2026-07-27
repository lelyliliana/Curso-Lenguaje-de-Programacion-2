# Laboratorio 02: Tipos de datos en JavaScript

## Objetivo

Identificar los principales tipos de datos utilizados en JavaScript mediante el operador `typeof`.

## Descripción

En JavaScript, cada variable almacena un tipo de dato determinado. Conocer estos tipos es fundamental para comprender cómo funciona el lenguaje y evitar errores durante el desarrollo de aplicaciones.

En este laboratorio se crean variables con diferentes tipos de datos y posteriormente se utiliza el operador `typeof` para identificar el tipo correspondiente a cada una.

## Conceptos trabajados

- Variables.
- Tipos de datos.
- Operador `typeof`.
- Valores numéricos.
- Cadenas de texto.
- Valores booleanos.
- Valores `undefined`.
- Manipulación del DOM.
- Eventos.
- Funciones.

## Tipos de datos utilizados

| Variable | Valor | Tipo |
|---|---|---|
| nombre | María | string |
| edad | 20 | number |
| activo | true | boolean |
| salario | 2500000 | number |
| ciudad | undefined | undefined |

## Ejemplo

```javascript
let nombre = "María";
let edad = 20;
let activo = true;
let salario = 2500000;
let ciudad;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof activo);
console.log(typeof salario);
console.log(typeof ciudad);
```

## Funcionamiento del laboratorio

1. Se crean varias variables con diferentes tipos de datos.
2. El usuario presiona el botón **Mostrar tipos de datos**.
3. JavaScript utiliza `typeof` para identificar el tipo de cada variable.
4. Los resultados se presentan en una tabla dentro de la página.
5. El botón **Limpiar** restablece el laboratorio.

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Estructura del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Lógica desarrollada con JavaScript. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/tiposDeDatos`.
2. Ejecute `index.html`.
3. Presione **Mostrar tipos de datos**.
4. Observe la tabla generada por JavaScript.

## Reto

Agregue las siguientes variables:

```javascript
let notas = [4.5, 3.8, 5.0];

let estudiante = {
    nombre: "Carlos",
    semestre: 4
};
```

Muestre el tipo de dato correspondiente utilizando `typeof`.

## Resultado esperado

El laboratorio debe mostrar una tabla con el nombre de la variable, su valor y el tipo de dato identificado mediante el operador `typeof`.