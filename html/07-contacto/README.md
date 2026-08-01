# Laboratorio 07: Construcción de la sección "Contacto"

**Nivel:** Básico

**Duración estimada:** 35 minutos

**Requisitos previos:**

- Laboratorio 01: Creación de la estructura inicial del Proyecto Web.
- Laboratorio 02: Construcción de la sección "Sobre mí".
- Laboratorio 03: Construcción del menú de navegación.
- Laboratorio 04: Incorporación de imágenes.
- Laboratorio 05: Construcción de la sección "Formación académica".
- Laboratorio 06: Construcción de la sección "Habilidades e intereses".

**Concepto principal:**

Construir formularios HTML correctamente estructurados.

---

# Objetivo

Incorporar una sección de contacto al Proyecto Web Personal utilizando formularios HTML y aplicando buenas prácticas de accesibilidad.

---

# Descripción

Todo sitio web necesita un mecanismo que permita establecer comunicación con sus visitantes.

En este laboratorio continuaremos desarrollando el **Proyecto Web Personal** agregando un formulario de contacto.

Durante esta práctica aprenderemos a utilizar los principales controles de formulario disponibles en HTML y a relacionarlos correctamente mediante etiquetas `<label>`.

En este laboratorio el formulario únicamente será construido; su funcionamiento y validación serán implementados posteriormente utilizando JavaScript.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Estructura HTML5.
- ✅ Información del proyecto.
- ✅ Sección "Sobre mí".
- ✅ Menú de navegación.
- ✅ Imagen principal.
- ✅ Fotografía de presentación.
- ✅ Sección de proyectos.
- ✅ Galería de imágenes.
- ✅ Formación académica.
- ✅ Habilidades e intereses.
- ✅ Formulario de contacto.

Próximamente incorporaremos:

- ⏳ Presentación multimedia.
- ⏳ Elementos HTML avanzados.
- ⏳ Publicación final.

---

# Competencia

Al finalizar este laboratorio el estudiante será capaz de construir formularios HTML correctamente organizados utilizando controles apropiados para la captura de información.

---

# Conceptos trabajados

- `<form>`
- `<label>`
- `<input>`
- `<textarea>`
- `<button>`
- `type`
- `id`
- `name`
- `for`

---

# Controles utilizados

| Elemento | Función |
|----------|---------|
| `<form>` | Agrupa todos los controles del formulario. |
| `<label>` | Describe cada campo del formulario. |
| `<input>` | Permite capturar información del usuario. |
| `<textarea>` | Captura mensajes de varias líneas. |
| `<button>` | Ejecuta acciones del formulario. |

---

# Ejemplo

```html
<form>

    <label for="nombre">

        Nombre

    </label>

    <input
        type="text"
        id="nombre"
        name="nombre"
    >

</form>
```

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Agrega la sección **Contacto**.
2. Construye un formulario HTML.
3. Organiza los diferentes controles.
4. Relaciona cada control mediante su etiqueta `<label>`.
5. Prepara el formulario para ser validado posteriormente con JavaScript.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Séptima versión acumulativa del Proyecto Web Personal. |
| `img/` | Imágenes utilizadas por el proyecto. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `html/07-contacto`.
2. Ejecute el archivo `index.html`.
3. Complete los diferentes campos del formulario.
4. Observe la organización de cada control.
5. Analice la relación entre `label`, `for` e `id`.

---

# Buenas prácticas

- Todo control debe tener su etiqueta `<label>`.
- Utilizar identificadores únicos (`id`).
- Mantener nombres descriptivos (`name`).
- Seleccionar correctamente el tipo de cada campo (`text`, `email`, etc.).
- Organizar los controles de forma lógica.
- No utilizar tablas para construir formularios.

---

# Reto

Amplíe el formulario agregando:

- Teléfono.
- Ciudad.
- Fecha de nacimiento.
- Lista desplegable para seleccionar el motivo del contacto.
- Casilla para aceptar el tratamiento de datos personales.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal conservará todas las secciones desarrolladas anteriormente y contará además con un formulario de contacto correctamente estructurado y preparado para incorporar validaciones mediante JavaScript.

---

# Conclusiones

Los formularios constituyen uno de los principales mecanismos de interacción entre un usuario y un sitio web.

Una correcta estructura HTML facilita la captura de información y prepara el formulario para incorporar posteriormente validaciones, almacenamiento de datos y procesamiento mediante JavaScript.

Durante este laboratorio el Proyecto Web Personal continúa evolucionando sin perder las secciones desarrolladas en las prácticas anteriores.

---

# ¿Qué sigue?

En el siguiente laboratorio el Proyecto Web Personal incorporará contenido multimedia mediante los elementos HTML destinados a reproducir imágenes, audio y video, enriqueciendo la experiencia del usuario.