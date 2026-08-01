# Laboratorio 09: Incorporación de elementos HTML avanzados

**Nivel:** Intermedio

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Laboratorio 01: Creación de la estructura inicial del Proyecto Web.
- Laboratorio 02: Construcción de la sección "Sobre mí".
- Laboratorio 03: Construcción del menú de navegación.
- Laboratorio 04: Incorporación de imágenes.
- Laboratorio 05: Construcción de la sección "Formación académica".
- Laboratorio 06: Construcción de la sección "Habilidades e intereses".
- Laboratorio 07: Construcción de la sección "Contacto".
- Laboratorio 08: Presentación multimedia del Proyecto Web.

**Concepto principal:**

Incorporar elementos HTML avanzados que permitan enriquecer la estructura y el significado del contenido.

---

# Objetivo

Ampliar el Proyecto Web Personal mediante elementos HTML avanzados que aporten mayor información semántica y mejoren la organización del contenido.

---

# Descripción

En los laboratorios anteriores se construyó progresivamente el Proyecto Web Personal.

En esta práctica se incorporarán nuevos elementos HTML que permiten representar información complementaria sin modificar la estructura principal del sitio.

El proyecto incorporará:

- Información complementaria.
- Nivel de cumplimiento.
- Abreviaturas.
- Fragmentos de código.
- Combinaciones de teclas.
- Información de contacto estructurada.

Estos elementos mejoran la semántica del documento y preparan el proyecto para su publicación.

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
- ✅ Presentación multimedia.
- ✅ Preguntas frecuentes.
- ✅ Estado del proyecto.

Después de este laboratorio también contará con:

- ✅ Información complementaria.
- ✅ Nivel de cumplimiento.
- ✅ Abreviaturas.
- ✅ Fragmentos de código.
- ✅ Combinaciones de teclas.
- ✅ Información de contacto estructurada.

---

# Competencia

Al finalizar este laboratorio el estudiante será capaz de seleccionar y utilizar elementos HTML avanzados de acuerdo con el significado del contenido que desea representar.

---

# Conceptos trabajados

- `<meter>`
- `<abbr>`
- `<code>`
- `<kbd>`
- `<address>`
- `mailto:`

---

# Elementos utilizados

| Elemento | Función |
|----------|---------|
| `<meter>` | Representa una medida dentro de un rango conocido. |
| `<abbr>` | Representa una abreviatura o sigla. |
| `<code>` | Presenta fragmentos de código fuente. |
| `<kbd>` | Representa una combinación de teclas. |
| `<address>` | Presenta información de contacto del autor. |
| `mailto:` | Permite abrir el cliente de correo electrónico. |

---

# ¿Qué es el elemento meter?

El elemento `<meter>` representa una medida dentro de un rango conocido.

Ejemplo:

```html
<meter
    min="0"
    max="100"
    value="85">
</meter>
```

Puede utilizarse para representar:

- Nivel de cumplimiento.
- Nivel de batería.
- Cantidad disponible.
- Porcentaje de avance.
- Nivel de satisfacción.

---

# Abreviaturas

Las abreviaturas pueden representarse mediante `<abbr>`.

Ejemplo:

```html
<abbr title="HyperText Markup Language">
    HTML
</abbr>
```

Cuando el usuario coloca el cursor sobre la abreviatura, el navegador muestra su significado.

---

# Código fuente

Para representar código dentro del documento se utiliza:

```html
<code>
index.html
</code>
```

---

# Combinaciones de teclas

Las combinaciones de teclado pueden representarse mediante:

```html
<kbd>Ctrl</kbd>
+
<kbd>R</kbd>
```

---

# Información de contacto

La información de contacto puede organizarse mediante:

```html
<address>

Autor:
Nombre del estudiante

</address>
```

También puede incorporarse un enlace de correo:

```html
<a href="mailto:estudiante@ejemplo.com">
    estudiante@ejemplo.com
</a>
```

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Conserva todas las secciones desarrolladas anteriormente.
2. Agrega una nueva sección de información complementaria.
3. Incorpora un indicador mediante `<meter>`.
4. Utiliza abreviaturas.
5. Presenta fragmentos de código.
6. Representa combinaciones de teclas.
7. Organiza la información de contacto del autor.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Novena versión acumulativa del Proyecto Web Personal. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Imágenes utilizadas por el proyecto. |
| `multimedia/` | Recursos multimedia utilizados por el proyecto. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `html/09-html-avanzado`.
2. Ejecute `index.html`.
3. Revise la nueva sección "Información complementaria".
4. Observe el funcionamiento del elemento `<meter>`.
5. Coloque el cursor sobre las abreviaturas.
6. Revise los elementos `<code>`, `<kbd>` y `<address>`.

---

# Buenas prácticas

- Utilizar cada elemento de acuerdo con su significado.
- No utilizar `<code>` para texto común.
- Utilizar `<abbr>` únicamente cuando exista una abreviatura.
- Agregar información útil dentro del atributo `title`.
- Utilizar `<address>` únicamente para información de contacto.
- Utilizar `<meter>` solamente para representar medidas dentro de un rango conocido.

---

# Reto

Amplíe la sección "Información complementaria".

Puede incorporar:

- Más abreviaturas.
- Más indicadores mediante `<meter>`.
- Más combinaciones de teclado.
- Más fragmentos de código.
- Información adicional sobre el proyecto.

---

# Resultado esperado

Al finalizar el laboratorio el Proyecto Web Personal conservará todas las secciones desarrolladas anteriormente y contará además con una nueva sección de información complementaria utilizando elementos HTML avanzados.

---

# Conclusiones

HTML dispone de numerosos elementos especializados que permiten representar información de forma más precisa.

Utilizar estos elementos mejora la semántica del documento, facilita la comprensión del contenido y prepara el proyecto para etapas posteriores del desarrollo.

---

# ¿Qué sigue?

En el siguiente laboratorio realizaremos la revisión final del Proyecto Web Personal, verificaremos la estructura del sitio, organizaremos los archivos y prepararemos su publicación mediante GitHub y Netlify.