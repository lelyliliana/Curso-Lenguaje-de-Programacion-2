# Laboratorio 08: Presentación multimedia del Proyecto Web

**Nivel:** Básico

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Laboratorio 01: Creación de la estructura inicial del Proyecto Web.
- Laboratorio 02: Construcción de la sección "Sobre mí".
- Laboratorio 03: Construcción del menú de navegación.
- Laboratorio 04: Incorporación de imágenes.
- Laboratorio 05: Construcción de la sección "Formación académica".
- Laboratorio 06: Construcción de la sección "Habilidades e intereses".
- Laboratorio 07: Construcción de la sección "Contacto".

**Concepto principal:**

Incorporar contenido multimedia y elementos interactivos nativos de HTML al Proyecto Web Personal.

---

# Objetivo

Agregar una presentación en video, un mensaje de audio, preguntas frecuentes y un indicador de avance al Proyecto Web Personal, conservando todas las secciones desarrolladas anteriormente.

---

# Descripción

En este laboratorio continuaremos desarrollando el **Proyecto Web Personal** mediante la incorporación de recursos multimedia.

Se agregará:

- Un video de presentación.
- Un mensaje de bienvenida en audio.
- Una sección de preguntas frecuentes.
- Una fecha de actualización.
- Un indicador de avance del proyecto.

El sitio conservará las secciones construidas en los laboratorios anteriores y continuará creciendo de forma acumulativa.

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
- ✅ Presentación en video.
- ✅ Mensaje de audio.
- ✅ Preguntas frecuentes.
- ✅ Fecha de actualización.
- ✅ Indicador de avance.

Próximamente se incorporarán:

- ⏳ Elementos HTML avanzados.
- ⏳ Revisión final.
- ⏳ Publicación web.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de incorporar contenido multimedia y elementos interactivos nativos de HTML dentro de un sitio web correctamente organizado.

---

# Conceptos trabajados

- `<video>`
- `<audio>`
- `<source>`
- `controls`
- `<details>`
- `<summary>`
- `<article>`
- `<time>`
- `<progress>`
- `<small>`

---

# Elementos multimedia

## Video

El elemento `<video>` permite reproducir contenido audiovisual.

```html
<video controls width="600">

    <source
        src="multimedia/presentacion.mp4"
        type="video/mp4"
    >

    Su navegador no soporta la reproducción de video.

</video>
```

El atributo `controls` permite mostrar los controles de reproducción.

---

## Audio

El elemento `<audio>` permite reproducir archivos de sonido.

```html
<audio controls>

    <source
        src="multimedia/bienvenida.mp3"
        type="audio/mpeg"
    >

    Su navegador no soporta la reproducción de audio.

</audio>
```

---

# Archivos multimedia

Los recursos deben almacenarse dentro de una carpeta específica:

```text
multimedia
├── bienvenida.mp3
└── presentacion.mp4
```

Las rutas utilizadas en el documento son relativas:

```html
src="multimedia/presentacion.mp4"
```

```html
src="multimedia/bienvenida.mp3"
```

---

# Preguntas frecuentes

Los elementos `<details>` y `<summary>` permiten crear contenido desplegable sin utilizar JavaScript.

```html
<details>

    <summary>
        ¿Cuál es el propósito del sitio?
    </summary>

    <p>
        Presentar información sobre el autor y sus proyectos.
    </p>

</details>
```

---

# Fecha de actualización

El elemento `<time>` permite representar una fecha de manera semántica.

```html
<time datetime="2026-08-01">
    1 de agosto de 2026
</time>
```

El atributo `datetime` contiene una fecha que puede ser interpretada por navegadores y otras herramientas.

---

# Indicador de avance

El elemento `<progress>` representa el avance de una tarea.

```html
<label for="avance">
    Avance del Proyecto Web
</label>

<progress
    id="avance"
    value="80"
    max="100"
>
    80 %
</progress>
```

En este ejemplo:

- `value` representa el avance alcanzado.
- `max` representa el valor máximo posible.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Conserva las secciones desarrolladas anteriormente.
2. Incorpora un video de presentación.
3. Agrega un mensaje de audio.
4. Organiza los archivos dentro de la carpeta `multimedia`.
5. Construye una sección de preguntas frecuentes.
6. Representa la fecha de actualización mediante `<time>`.
7. Muestra el avance del proyecto mediante `<progress>`.
8. Verifica que todos los recursos se reproduzcan correctamente.

---

# Archivos

| Archivo o carpeta | Descripción |
|-------------------|-------------|
| `index.html` | Octava versión acumulativa del Proyecto Web Personal. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Imágenes utilizadas por el proyecto. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `html/08-presentacion-proyecto`.
2. Ejecute el archivo `index.html`.
3. Reproduzca el video.
4. Reproduzca el audio.
5. Abra y cierre las preguntas frecuentes.
6. Observe la fecha de actualización.
7. Revise el indicador de avance.
8. Compruebe que las demás secciones continúen funcionando.

---

# Buenas prácticas

- Mantener los archivos multimedia dentro de una carpeta específica.
- Utilizar nombres de archivos descriptivos.
- Evitar espacios y tildes en los nombres.
- Definir correctamente el tipo de cada archivo mediante `type`.
- Incluir un mensaje alternativo para navegadores incompatibles.
- Utilizar `<details>` para información complementaria.
- Agregar el atributo `datetime` al elemento `<time>`.
- Utilizar `<progress>` únicamente para representar el avance de una tarea.
- Evitar archivos multimedia excesivamente pesados.

---

# Reto

Personalice la presentación multimedia de su proyecto.

Debe:

1. Reemplazar el video de ejemplo por una presentación propia.
2. Reemplazar el audio por un mensaje relacionado con el sitio.
3. Agregar al menos tres preguntas frecuentes.
4. Actualizar la fecha de modificación.
5. Cambiar el porcentaje de avance.
6. Verificar que todas las rutas funcionen correctamente.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal conservará todas las secciones desarrolladas anteriormente y contará además con contenido multimedia, preguntas frecuentes, fecha de actualización e indicador de avance.

---

# Conclusiones

Los elementos multimedia permiten enriquecer la experiencia del usuario y presentar información mediante diferentes formatos.

HTML también incorpora elementos interactivos nativos, como `<details>` y `<progress>`, que permiten mejorar la organización y comprensión del contenido sin utilizar JavaScript.

En este laboratorio el Proyecto Web Personal continúa evolucionando sin eliminar los avances construidos previamente.

---

# ¿Qué sigue?

En el siguiente laboratorio se incorporarán elementos HTML avanzados y se realizará una revisión de la estructura semántica del proyecto antes de preparar su publicación final.