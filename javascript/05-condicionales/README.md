# Laboratorio 05: Condicionales

**Nivel:** Básico

**Duración estimada:** 25 minutos

**Requisitos previos:**

- Variables
- Tipos de datos
- Operadores
- Entrada y salida de datos

**Concepto principal:**

Tomar decisiones mediante las estructuras `if`, `else if` y `else`.

---

## Objetivo

Aprender a controlar el flujo de un programa mediante estructuras condicionales, permitiendo que JavaScript ejecute diferentes acciones dependiendo de una condición.

## Descripción

En la programación es frecuente tomar decisiones basadas en determinada información. Las estructuras condicionales permiten que un programa ejecute diferentes instrucciones según el resultado de una condición.

En este laboratorio el usuario ingresa una edad y el sistema determina la categoría correspondiente.

## Conceptos trabajados

- `if`
- `else if`
- `else`
- Operadores relacionales
- Operadores lógicos
- Variables
- Funciones
- Eventos
- DOM

## Estructuras utilizadas

| Estructura | Función |
|------------|---------|
| `if` | Ejecuta un bloque si la condición es verdadera. |
| `else if` | Evalúa una nueva condición. |
| `else` | Se ejecuta cuando ninguna condición anterior se cumple. |

## Ejemplo

```javascript
let edad = 20;

if (edad < 18) {

    console.log("Menor de edad");

} else {

    console.log("Mayor de edad");

}
```

## Funcionamiento del laboratorio

1. El usuario ingresa una edad.
2. Presiona el botón **Verificar**.
3. JavaScript evalúa la edad.
4. Determina la categoría correspondiente.
5. Presenta el resultado en la página.

## Clasificación utilizada

| Edad | Categoría |
|------:|-----------|
| 0 - 12 | Niño |
| 13 - 17 | Adolescente |
| 18 - 59 | Adulto |
| 60 o más | Adulto mayor |

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Lógica implementada con JavaScript. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/condicionales`.
2. Ejecute `index.html`.
3. Ingrese una edad.
4. Presione **Verificar**.
5. Observe la categoría obtenida.

## Reto

Amplíe el programa para clasificar también:

- Primera infancia.
- Juventud.
- Adulto joven.
- Adulto mayor.
- Persona longeva.

## Resultado esperado

El laboratorio debe clasificar correctamente la edad ingresada y mostrar el resultado correspondiente en la página.

## Conclusiones

Las estructuras condicionales permiten controlar el flujo de ejecución de un programa y constituyen uno de los fundamentos más importantes de cualquier lenguaje de programación. Gracias a ellas es posible desarrollar aplicaciones capaces de tomar decisiones de forma automática según la información proporcionada por el usuario.