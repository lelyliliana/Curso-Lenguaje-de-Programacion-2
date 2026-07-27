# Laboratorio 06: Ciclos `for`

**Nivel:** Básico

**Duración estimada:** 25 minutos

**Requisitos previos:**

- Variables
- Tipos de datos
- Operadores
- Condicionales

**Concepto principal:**

Repetir instrucciones mediante la estructura `for`.

---

## Objetivo

Comprender el funcionamiento de los ciclos utilizando la estructura `for` para ejecutar un conjunto de instrucciones un número determinado de veces.

## Descripción

Los ciclos permiten automatizar tareas repetitivas. En lugar de escribir la misma instrucción muchas veces, un ciclo ejecuta el mismo bloque de código mientras se cumpla una condición.

En este laboratorio el usuario indica cuántos números desea generar y JavaScript construye automáticamente la secuencia utilizando un ciclo `for`.

## Conceptos trabajados

- Ciclos
- `for`
- Variables contador
- Condiciones
- Incremento
- Funciones
- Eventos
- DOM

## Sintaxis

```javascript
for (inicialización; condición; incremento) {

    // Instrucciones

}
```

## Ejemplo

```javascript
for (let contador = 1; contador <= 5; contador++) {

    console.log(contador);

}
```

Resultado:

```
1
2
3
4
5
```

## Funcionamiento del laboratorio

1. El usuario ingresa una cantidad.
2. Presiona el botón **Generar**.
3. JavaScript inicia el ciclo `for`.
4. El contador aumenta en cada iteración.
5. Cada número generado se agrega al resultado.
6. Finaliza cuando se cumple la condición de salida.

## Componentes del ciclo

| Elemento | Función |
|----------|---------|
| Inicialización | Define el valor inicial del contador. |
| Condición | Determina cuántas veces se ejecutará el ciclo. |
| Incremento | Modifica el contador en cada repetición. |

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos del laboratorio. |
| `script.js` | Implementación del ciclo `for`. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/ciclos`.
2. Ejecute `index.html`.
3. Escriba una cantidad.
4. Presione **Generar**.
5. Observe la secuencia creada por JavaScript.

## Reto

Modifique el programa para generar:

- Solo números pares.
- Solo números impares.
- La tabla de multiplicar del número ingresado.
- Los primeros números múltiplos de cinco.

## Resultado esperado

El laboratorio debe generar correctamente la cantidad de números solicitada utilizando un ciclo `for`.

## Conclusiones

Los ciclos son una de las estructuras fundamentales de cualquier lenguaje de programación. Permiten automatizar procesos repetitivos, reducir la cantidad de código escrito y facilitar la solución de problemas que requieren ejecutar una misma acción varias veces.