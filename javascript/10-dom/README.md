# Laboratorio 10: Manipulación del DOM

**Nivel:** Intermedio

**Duración estimada:** 35 minutos

**Requisitos previos:**

- Variables
- Funciones
- Objetos
- Eventos básicos

**Concepto principal:**

Manipular el contenido y la apariencia de una página web mediante el Document Object Model (DOM).

---

## Objetivo

Comprender cómo JavaScript puede acceder y modificar los elementos de una página HTML utilizando el Document Object Model (DOM).

## Descripción

El DOM (Document Object Model) representa una página HTML como una estructura de objetos que puede ser manipulada mediante JavaScript.

Gracias al DOM es posible cambiar textos, colores, tamaños, imágenes, estilos y prácticamente cualquier elemento visible de una página web sin necesidad de recargarla.

En este laboratorio se modifican diferentes elementos HTML utilizando JavaScript.

---

## Conceptos trabajados

- DOM
- `document.getElementById()`
- `textContent`
- `style`
- Eventos
- Funciones
- Manipulación dinámica del HTML

---

## Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `getElementById()` | Obtiene un elemento mediante su identificador. |
| `textContent` | Cambia el texto de un elemento HTML. |
| `style` | Modifica propiedades CSS desde JavaScript. |

---

## Ejemplo

```javascript
const titulo = document.getElementById("titulo");

titulo.textContent = "Nuevo título";

titulo.style.color = "blue";
```

---

## Funcionamiento del laboratorio

1. JavaScript obtiene los elementos HTML.
2. El usuario presiona uno de los botones.
3. Se ejecuta la función correspondiente.
4. El contenido del documento cambia inmediatamente.
5. También es posible modificar propiedades CSS desde JavaScript.

---

## Métodos del DOM utilizados

| Método | Función |
|---------|---------|
| `getElementById()` | Localiza un elemento HTML. |
| `textContent` | Cambia el contenido de texto. |
| `style.color` | Modifica el color del texto. |
| `style.fontSize` | Cambia el tamaño de la fuente. |

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Contiene la estructura del laboratorio. |
| `style.css` | Define el diseño visual. |
| `script.js` | Manipula el DOM utilizando JavaScript. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/dom`.
2. Ejecute el archivo `index.html`.
3. Presione **Cambiar texto**.
4. Presione **Cambiar color**.
5. Presione **Restablecer**.

Observe cómo JavaScript modifica la página sin recargar el navegador.

---

## Reto

Agregue nuevos botones que permitan:

- Cambiar el color de fondo.
- Cambiar el tipo de letra.
- Mostrar la fecha actual.
- Ocultar y mostrar el mensaje.
- Agregar una imagen dinámicamente.

---

## Resultado esperado

El laboratorio debe modificar correctamente el contenido y la apariencia de la página utilizando JavaScript y el DOM.

---

## Conclusiones

El DOM constituye el puente entre JavaScript y HTML. Gracias a él es posible crear aplicaciones web dinámicas e interactivas, ya que permite acceder y modificar cualquier elemento del documento mientras la página se encuentra en ejecución.