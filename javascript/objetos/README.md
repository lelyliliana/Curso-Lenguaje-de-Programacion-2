# Laboratorio 09: Objetos

**Nivel:** Básico

**Duración estimada:** 30 minutos

**Requisitos previos:**

- Variables
- Funciones
- Arrays

**Concepto principal:**

Representar información mediante objetos en JavaScript.

---

## Objetivo

Comprender cómo crear y utilizar objetos para agrupar información relacionada dentro de una única estructura de datos.

## Descripción

Un objeto permite representar entidades del mundo real mediante un conjunto de propiedades.

En este laboratorio se crea un objeto llamado **estudiante**, el cual almacena información como el nombre, el programa académico y el semestre.

Posteriormente, dicha información es presentada dinámicamente en la página utilizando JavaScript.

## Conceptos trabajados

- Objetos
- Propiedades
- Acceso mediante punto (`.`)
- Variables
- Funciones
- Eventos
- DOM
- Formularios

## Estructura de un objeto

```javascript
const estudiante = {

    nombre: "María",

    programa: "Ingeniería de Sistemas",

    semestre: 4

};
```

## Acceso a las propiedades

```javascript
console.log(estudiante.nombre);

console.log(estudiante.programa);

console.log(estudiante.semestre);
```

## Funcionamiento del laboratorio

1. El usuario ingresa la información del estudiante.
2. Presiona el botón **Crear objeto**.
3. JavaScript construye un objeto con los datos ingresados.
4. Se accede a cada propiedad utilizando la notación por punto.
5. La información se muestra en la página.

## Representación del objeto

```text
estudiante

├── nombre
├── programa
└── semestre
```

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Implementación del objeto. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/objetos`.
2. Ejecute `index.html`.
3. Complete los campos del formulario.
4. Presione **Crear objeto**.
5. Observe la información presentada.

## Reto

Amplíe el objeto agregando nuevas propiedades:

- correo
- edad
- ciudad
- promedio

Muestre toda la información en la página.

## Resultado esperado

El laboratorio debe crear correctamente un objeto utilizando la información ingresada por el usuario y presentar cada una de sus propiedades.

## Conclusiones

Los objetos permiten representar entidades complejas agrupando información relacionada en una única estructura. Son fundamentales en JavaScript y constituyen la base para el desarrollo de aplicaciones modernas, ya que facilitan la organización y manipulación de datos.