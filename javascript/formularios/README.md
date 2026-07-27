# Laboratorio 12: Formularios

**Nivel:** Intermedio

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Variables
- Funciones
- DOM
- Eventos

**Concepto principal:**

Capturar, validar y procesar información mediante formularios HTML utilizando JavaScript.

---

## Objetivo

Aprender a trabajar con formularios HTML, capturar la información ingresada por el usuario y validarla antes de procesarla.

## Descripción

Los formularios constituyen uno de los elementos más utilizados en las aplicaciones web. Permiten registrar usuarios, iniciar sesión, realizar compras, diligenciar encuestas y capturar cualquier tipo de información.

En este laboratorio se desarrolla un formulario de registro de estudiantes donde se valida que todos los campos sean diligenciados antes de mostrar la información.

---

## Conceptos trabajados

- Formularios HTML
- Evento `submit`
- `preventDefault()`
- Validación de datos
- Funciones
- Eventos
- DOM

---

## Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `addEventListener()` | Asocia eventos al formulario. |
| `preventDefault()` | Evita que el formulario recargue la página. |
| `reset()` | Limpia todos los campos del formulario. |

---

## Ejemplo

```javascript
formulario.addEventListener("submit", registrarEstudiante);

function registrarEstudiante(evento){

    evento.preventDefault();

}
```

---

## Funcionamiento del laboratorio

1. El usuario completa el formulario.
2. Presiona **Registrar**.
3. JavaScript captura el evento `submit`.
4. Se evita el envío tradicional mediante `preventDefault()`.
5. Se valida que todos los campos estén completos.
6. La información se presenta en la página.

---

## Flujo del formulario

```text
Usuario

↓

Completa formulario

↓

Evento submit

↓

Validación

↓

Datos correctos

↓

Mostrar información
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Formulario HTML. |
| `style.css` | Diseño del laboratorio. |
| `script.js` | Validación y procesamiento del formulario. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/formularios`.
2. Ejecute `index.html`.
3. Complete todos los campos.
4. Presione **Registrar**.
5. Observe la información mostrada.

---

## Reto

Amplíe el formulario agregando:

- Correo electrónico.
- Teléfono.
- Ciudad.
- Fecha de nacimiento.

Valide que ningún campo quede vacío antes de procesar el formulario.

---

## Resultado esperado

El laboratorio debe validar correctamente la información ingresada por el usuario y mostrar el registro únicamente cuando todos los datos sean válidos.

---

## Conclusiones

Los formularios representan el principal mecanismo de interacción entre el usuario y una aplicación web. Una adecuada validación permite mejorar la experiencia del usuario y garantizar la calidad de la información antes de ser almacenada o enviada a un servidor.