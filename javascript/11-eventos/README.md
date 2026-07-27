# Laboratorio 11: Eventos

**Nivel:** Intermedio

**Duración estimada:** 35 minutos

**Requisitos previos:**

- Variables
- Funciones
- DOM

**Concepto principal:**

Responder a las acciones realizadas por el usuario mediante eventos.

---

## Objetivo

Comprender cómo JavaScript puede detectar y responder a las diferentes acciones realizadas por el usuario sobre los elementos de una página web.

## Descripción

Los eventos permiten que una aplicación reaccione a las acciones del usuario, como hacer clic sobre un botón, escribir en una caja de texto, mover el mouse o presionar una tecla.

En este laboratorio se implementan varios eventos comunes para modificar dinámicamente el contenido de la página.

---

## Conceptos trabajados

- Eventos
- `addEventListener()`
- `click`
- `dblclick`
- `mouseover`
- `mouseout`
- `input`
- Funciones
- DOM

---

## Eventos utilizados

| Evento | Descripción |
|---------|-------------|
| `click` | Se ejecuta cuando el usuario hace clic sobre un elemento. |
| `dblclick` | Se ejecuta al realizar doble clic. |
| `mouseover` | Ocurre cuando el puntero entra sobre un elemento. |
| `mouseout` | Ocurre cuando el puntero sale del elemento. |
| `input` | Se ejecuta mientras el usuario escribe. |

---

## Ejemplo

```javascript
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    alert("Botón presionado");

});
```

---

## Funcionamiento del laboratorio

1. El usuario escribe su nombre.
2. JavaScript detecta cada carácter mediante el evento `input`.
3. Cuando el usuario hace clic sobre el botón, aparece un saludo personalizado.
4. Si realiza doble clic, se muestra un mensaje diferente.
5. Cuando mueve el mouse sobre el botón, el texto cambia automáticamente.

---

## Flujo del laboratorio

```text
Usuario

↓

Escribe

↓

Evento input

↓

Actualiza la página

↓

Hace clic

↓

Evento click

↓

Muestra el saludo
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Implementación de eventos. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/eventos`.
2. Ejecute `index.html`.
3. Escriba un nombre.
4. Realice un clic sobre el botón.
5. Pruebe un doble clic.
6. Pase el mouse sobre el botón.
7. Observe cómo JavaScript responde a cada evento.

---

## Reto

Implemente los siguientes eventos adicionales:

- `change`
- `focus`
- `blur`
- `keydown`
- `keyup`

Muestre un mensaje diferente para cada uno.

---

## Resultado esperado

El laboratorio debe responder correctamente a las diferentes acciones realizadas por el usuario y actualizar dinámicamente la interfaz.

---

## Conclusiones

Los eventos constituyen uno de los elementos fundamentales del desarrollo web moderno. Gracias a ellos, una aplicación puede reaccionar a las acciones del usuario, proporcionando interfaces dinámicas, intuitivas e interactivas.