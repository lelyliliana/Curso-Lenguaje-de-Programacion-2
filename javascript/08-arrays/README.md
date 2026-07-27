# Laboratorio 08: Arrays

**Nivel:** Básico

**Duración estimada:** 30 minutos

**Requisitos previos:**

- Variables
- Funciones
- Ciclos
- Condicionales

**Concepto principal:**

Almacenar y recorrer colecciones de datos mediante arreglos.

---

## Objetivo

Aprender a crear, modificar y recorrer arreglos (arrays) utilizando JavaScript para almacenar múltiples elementos en una única variable.

## Descripción

Un arreglo es una estructura de datos que permite almacenar varios elementos dentro de una misma variable.

En este laboratorio se construye una pequeña lista de estudiantes donde el usuario puede registrar nombres y posteriormente visualizar todos los elementos almacenados.

## Conceptos trabajados

- Arrays
- Método `push()`
- Propiedad `length`
- Ciclo `for`
- Funciones
- Eventos
- DOM
- `innerHTML`

## Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `push()` | Agrega un elemento al final del arreglo. |
| `length` | Devuelve la cantidad de elementos almacenados. |

## Ejemplo

```javascript
const estudiantes = [];

estudiantes.push("María");
estudiantes.push("Carlos");
estudiantes.push("Ana");

console.log(estudiantes);
```

Resultado:

```text
["María", "Carlos", "Ana"]
```

## Funcionamiento del laboratorio

1. El usuario escribe el nombre de un estudiante.
2. Presiona **Agregar**.
3. JavaScript almacena el nombre dentro del arreglo.
4. Al presionar **Mostrar lista**, el programa recorre el arreglo utilizando un ciclo `for`.
5. Cada estudiante se presenta como un elemento de una lista ordenada.

## Representación del arreglo

```text
estudiantes

┌────────────┐
│ María      │
├────────────┤
│ Carlos     │
├────────────┤
│ Ana        │
└────────────┘
```

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Lógica implementada con arreglos. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/arrays`.
2. Ejecute `index.html`.
3. Ingrese un nombre.
4. Presione **Agregar**.
5. Registre varios estudiantes.
6. Presione **Mostrar lista**.

## Reto

Implemente nuevas funcionalidades utilizando métodos de los arreglos:

- Eliminar el último estudiante (`pop()`).
- Agregar un estudiante al inicio (`unshift()`).
- Eliminar el primero (`shift()`).
- Ordenar alfabéticamente (`sort()`).

## Resultado esperado

El laboratorio debe almacenar correctamente los nombres dentro de un arreglo y mostrarlos posteriormente en una lista ordenada.

## Conclusiones

Los arreglos permiten administrar colecciones de datos de manera sencilla y eficiente. Constituyen una de las estructuras más utilizadas en el desarrollo de aplicaciones, ya que facilitan el almacenamiento y procesamiento de grandes cantidades de información mediante ciclos y funciones.