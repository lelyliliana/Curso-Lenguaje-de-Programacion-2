# Laboratorio 05: Construcción de la sección "Formación académica"

**Nivel:** Básico

**Duración estimada:** 30 minutos

**Requisitos previos:**

- Laboratorio 01: Estructura inicial del proyecto.
- Laboratorio 02: Sección "Sobre mí".
- Laboratorio 03: Menú de navegación.
- Laboratorio 04: Incorporación de imágenes.

**Concepto principal:**

Organizar información estructurada mediante tablas HTML.

---

# Objetivo

Incorporar la sección **Formación académica** al Proyecto Web Personal utilizando tablas HTML para presentar la información de manera organizada y comprensible.

---

# Descripción

Continuaremos desarrollando el **Proyecto Web Personal** iniciado en los laboratorios anteriores.

En esta práctica agregaremos una tabla para presentar la formación académica del autor del sitio. La información se organizará mediante filas, columnas, encabezados y secciones claramente definidas.

También se aplicarán buenas prácticas de accesibilidad utilizando elementos que faciliten la comprensión de la información presentada.

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
- ✅ Sección "Formación académica".

Próximamente se incorporarán:

- ⏳ Habilidades y tecnologías.
- ⏳ Formulario de contacto.
- ⏳ Contenido multimedia.
- ⏳ Elementos HTML avanzados.
- ⏳ Proyecto final.

---

# Competencia

Al finalizar este laboratorio el estudiante será capaz de organizar y presentar información tabular mediante los elementos semánticos disponibles en HTML.

---

# Conceptos trabajados

- `<table>`
- `<caption>`
- `<thead>`
- `<tbody>`
- `<tfoot>`
- `<tr>`
- `<th>`
- `<td>`
- `scope`
- `colspan`

---

# Elementos utilizados

| Elemento | Función |
|----------|---------|
| `<table>` | Contiene toda la tabla. |
| `<caption>` | Describe el propósito de la tabla. |
| `<thead>` | Agrupa el encabezado. |
| `<tbody>` | Agrupa los datos principales. |
| `<tfoot>` | Agrupa la información final. |
| `<tr>` | Define una fila. |
| `<th>` | Define una celda de encabezado. |
| `<td>` | Define una celda de datos. |
| `scope` | Indica la relación del encabezado con filas o columnas. |
| `colspan` | Permite que una celda ocupe varias columnas. |

---

# Ejemplo básico

```html
<table>
    <caption>Formación académica</caption>

    <thead>
        <tr>
            <th scope="col">Nivel</th>
            <th scope="col">Institución</th>
            <th scope="col">Año</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Pregrado</td>
            <td>Corporación Universitaria Remington</td>
            <td>En curso</td>
        </tr>
    </tbody>
</table>
```

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Continúa utilizando la estructura construida previamente.
2. Agrega la sección **Formación académica**.
3. Organiza la información en filas y columnas.
4. Define encabezados para cada columna.
5. Incorpora un título descriptivo mediante `<caption>`.
6. Aplica atributos que mejoran la accesibilidad de la tabla.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Quinta versión acumulativa del Proyecto Web Personal. |
| `img/` | Imágenes utilizadas en las secciones del proyecto. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `html/05-formacion-academica`.
2. Ejecute el archivo `index.html`.
3. Localice la sección **Formación académica**.
4. Observe cómo se organiza la información en filas y columnas.
5. Revise el código y analice la función de cada elemento.

---

# Buenas prácticas

- Utilizar `<caption>` para describir el propósito de la tabla.
- Usar `<th>` para las celdas de encabezado.
- Agregar `scope="col"` o `scope="row"` según corresponda.
- Separar el encabezado, el cuerpo y el pie mediante `<thead>`, `<tbody>` y `<tfoot>`.
- Utilizar tablas únicamente cuando los datos tengan una relación entre filas y columnas.
- Evitar utilizar tablas para organizar visualmente la página.
- No emplear atributos HTML de presentación como `border`, `bgcolor` o `align`.
- Reservar la apariencia visual de las tablas para el módulo de CSS.

---

# Reto

Personalice la tabla con información relacionada con su proyecto.

Puede incluir:

- Formación académica.
- Cursos realizados.
- Certificaciones.
- Experiencia laboral.
- Cronograma de actividades.
- Comparación de productos o servicios.

Agregue por lo menos tres filas de información.

---

# Resultado esperado

Al finalizar el laboratorio el Proyecto Web Personal contará con una tabla correctamente estructurada, legible y accesible para presentar información relacionada con la formación o experiencia del autor.

---

# Conclusiones

Las tablas permiten organizar datos relacionados mediante filas y columnas. Su uso adecuado facilita la lectura, comparación y comprensión de la información. Además, incorporar encabezados, títulos y atributos de accesibilidad mejora la experiencia de todos los usuarios.

---

# ¿Qué sigue?

En el siguiente laboratorio el Proyecto Web Personal incorporará una sección de **habilidades, tecnologías e intereses** mediante listas HTML.