# Laboratorio 03: Operadores Aritméticos

## Objetivo

Aplicar los principales operadores aritméticos de JavaScript mediante una calculadora interactiva.

## Descripción

Los operadores aritméticos permiten realizar operaciones matemáticas entre dos o más valores.

En este laboratorio el estudiante ingresa dos números y selecciona la operación que desea realizar. El resultado se calcula mediante JavaScript y se muestra inmediatamente en la página.

## Conceptos trabajados

- Variables.
- Entrada de datos.
- Conversión de datos con `Number()`.
- Operadores aritméticos.
- Funciones.
- Eventos.
- Condicionales.
- `switch`.
- Manipulación del DOM.

## Operadores utilizados

| Operador | Descripción | Ejemplo |
|---|---|---|
| `+` | Suma | 8 + 5 |
| `-` | Resta | 8 - 5 |
| `*` | Multiplicación | 8 * 5 |
| `/` | División | 8 / 5 |
| `%` | Módulo | 8 % 5 |

## Ejemplo

```javascript
let numero1 = 20;
let numero2 = 6;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
```

## Funcionamiento del laboratorio

1. El usuario ingresa dos números.
2. Selecciona una operación.
3. JavaScript convierte los datos de texto a números mediante `Number()`.
4. Se ejecuta la operación correspondiente.
5. El resultado se presenta en la página.

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Interfaz de la calculadora. |
| `style.css` | Estilos del laboratorio. |
| `script.js` | Lógica de la calculadora. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/operadores`.
2. Ejecute el archivo `index.html`.
3. Ingrese dos números.
4. Presione uno de los botones de operación.
5. Observe el resultado obtenido.

## Reto

Agregue dos nuevas operaciones:

- Potencia (`**`)
- División entera

Investigue cómo implementarlas en JavaScript.

## Resultado esperado

El laboratorio debe mostrar correctamente el resultado de la operación seleccionada y controlar situaciones especiales, como la división entre cero.

## Conclusiones

Los operadores aritméticos constituyen la base para el desarrollo de aplicaciones que realizan cálculos. Además de aprender las operaciones matemáticas básicas, en este laboratorio se introdujo el uso de funciones, eventos y estructuras de decisión para resolver un problema práctico mediante JavaScript.