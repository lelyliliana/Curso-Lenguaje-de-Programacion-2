# Laboratorio 02: Construcción de la identidad visual

**Nivel:** Básico

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Contar con el Proyecto Web Personal desarrollado en HTML.
- Tener correctamente vinculado el archivo `style.css`.

**Concepto principal:**

Definir la identidad visual inicial del Proyecto Web Personal mediante colores, tipografía y estilos generales.

---

# Objetivo

Construir la primera versión visual del Proyecto Web Personal aplicando una paleta de colores, una tipografía coherente y reglas generales que mejoren la presentación del sitio.

---

# Descripción

En el laboratorio anterior se comprobó que el navegador puede cargar correctamente una hoja de estilos.

En este laboratorio comenzaremos a construir la identidad visual del sitio.

Se definirán:

- Los colores principales.
- La tipografía.
- La apariencia general.
- Los estilos básicos para títulos.
- Los enlaces.
- La presentación inicial de imágenes y contenido multimedia.

Además, se introducirán las **variables CSS**, una herramienta que facilita la reutilización y el mantenimiento de los estilos.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal cuenta con:

- ✅ Hoja de estilos vinculada.
- ✅ Estilos básicos de comprobación.

Después de este laboratorio contará con:

- ✅ Identidad visual inicial.
- ✅ Paleta de colores.
- ✅ Tipografía definida.
- ✅ Variables CSS.
- ✅ Mejor legibilidad.
- ✅ Apariencia consistente.

Próximamente trabajaremos:

- ⏳ Modelo de caja.
- ⏳ Espaciado.
- ⏳ Bordes.
- ⏳ Contenedores.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de definir la identidad visual básica de un sitio web mediante el uso de variables CSS, colores y tipografía.

---

# Conceptos trabajados

- Variables CSS.
- `:root`
- `font-family`
- `color`
- `background-color`
- `line-height`
- `text-decoration`
- `max-width`
- Reset básico.
- Herencia.

---

# ¿Qué es una identidad visual?

La identidad visual es el conjunto de características gráficas que permiten reconocer un sitio web.

Algunos de sus componentes son:

- Colores.
- Tipografía.
- Espaciado.
- Iconografía.
- Imágenes.
- Estilo general.

Durante este laboratorio construiremos una primera versión de esa identidad.

---

# Variables CSS

Las variables permiten almacenar valores que pueden reutilizarse en toda la hoja de estilos.

Ejemplo:

```css
:root {

    --color-primario: #1f3c5c;

    --color-secundario: #0056b3;

}
```

Posteriormente pueden utilizarse mediante la función:

```css
color: var(--color-primario);
```

Esto evita repetir el mismo valor en diferentes reglas y facilita realizar cambios futuros.

---

# Paleta de colores

La hoja de estilos utilizará inicialmente la siguiente paleta:

| Variable | Color | Uso |
|----------|--------|-----|
| `--color-primario` | Azul oscuro | Títulos principales. |
| `--color-secundario` | Azul | Enlaces. |
| `--color-fondo` | Gris claro | Fondo del sitio. |
| `--color-superficie` | Blanco | Encabezados y secciones. |
| `--color-texto` | Gris oscuro | Texto general. |

Esta paleta puede personalizarse posteriormente.

---

# Tipografía

El sitio utilizará inicialmente:

```css
body {

    font-family: Arial, sans-serif;

}
```

La propiedad `font-family` define la fuente principal utilizada por el documento.

El valor `sans-serif` actúa como alternativa cuando la fuente principal no está disponible.

---

# Altura de línea

Para mejorar la legibilidad se utilizará:

```css
body {

    line-height: 1.6;

}
```

Esta propiedad controla el espacio vertical entre líneas de texto.

Un valor adecuado facilita la lectura y evita que el contenido se perciba demasiado compacto.

---

# Enlaces

Inicialmente los enlaces utilizarán:

```css
a {

    color: var(--color-secundario);

    text-decoration: none;

}
```

Más adelante incorporaremos efectos visuales cuando el usuario interactúe con ellos.

---

# Imágenes y contenido multimedia

Las imágenes y los elementos multimedia compartirán una regla sencilla:

```css
img,
video,
audio {

    max-width: 100%;

}
```

Esto evita que un recurso visual exceda el ancho disponible en su contenedor.

---

# Reset básico

La hoja de estilos comenzará con un pequeño conjunto de reglas generales.

```css
* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}
```

Estas propiedades ayudan a obtener un comportamiento más uniforme entre navegadores.

Durante el siguiente laboratorio se estudiará con mayor profundidad el modelo de caja.

---

# Hoja de estilos

La hoja de estilos utilizada durante este laboratorio es:

```css
/* Reset básico */

* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}


/* Variables */

:root {

    --color-primario: #1f3c5c;

    --color-secundario: #0056b3;

    --color-fondo: #f4f4f4;

    --color-superficie: #ffffff;

    --color-texto: #222222;

}


/* Documento */

body {

    font-family: Arial, sans-serif;

    background-color: var(--color-fondo);

    color: var(--color-texto);

    line-height: 1.6;

}


/* Encabezado */

header {

    background-color: var(--color-superficie);

}


/* Contenido principal */

main {

    background-color: var(--color-superficie);

}


/* Títulos */

h1,
h2,
h3 {

    color: var(--color-primario);

}


/* Enlaces */

a {

    color: var(--color-secundario);

    text-decoration: none;

}


/* Recursos multimedia */

img,
video,
audio {

    max-width: 100%;

}


/* Pie de página */

footer {

    background-color: var(--color-superficie);

}
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Agrega variables CSS.
2. Define la paleta de colores.
3. Configura la tipografía del sitio.
4. Mejora la legibilidad mediante `line-height`.
5. Personaliza títulos y enlaces.
6. Configura imágenes y multimedia.
7. Aplica un reset básico.
8. Comprueba la nueva apariencia del sitio.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Segunda versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con identidad visual inicial. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/02-identidad-visual`.
2. Ejecute `index.html`.
3. Observe la nueva apariencia del sitio.
4. Modifique temporalmente alguno de los colores definidos en `:root`.
5. Guarde los cambios y actualice el navegador.
6. Compruebe cómo el cambio afecta a todos los elementos que utilizan esa variable.

---

# Buenas prácticas

- Definir los colores mediante variables CSS.
- Utilizar nombres descriptivos para las variables.
- Mantener una paleta de colores coherente.
- Definir una tipografía principal para todo el sitio.
- Evitar repetir valores de color en diferentes reglas.
- Organizar la hoja de estilos por secciones.
- Mantener la separación entre HTML y CSS.
- Aplicar estilos generales antes de los específicos.

---

# Reto

Personalice la identidad visual de su Proyecto Web Personal.

Puede realizar las siguientes modificaciones:

1. Definir una nueva paleta de colores.
2. Cambiar la tipografía principal.
3. Personalizar los colores de los títulos.
4. Modificar el color de los enlaces.
5. Ajustar la altura de línea.
6. Agregar una variable para el color del pie de página.
7. Crear una identidad visual acorde con el tema de su proyecto.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal contará con una identidad visual básica basada en una paleta de colores, una tipografía consistente y una hoja de estilos organizada mediante variables CSS.

---

# Conclusiones

La identidad visual es uno de los elementos que más influye en la percepción de un sitio web.

Utilizar variables CSS desde las primeras etapas del desarrollo facilita el mantenimiento del proyecto, mejora la organización del código y prepara al estudiante para trabajar con proyectos de mayor complejidad.

---

# ¿Qué sigue?

Ahora que el Proyecto Web Personal cuenta con una identidad visual básica, en el siguiente laboratorio aprenderemos a controlar el espacio que ocupa cada elemento mediante el **modelo de caja de CSS**.

Comprender el funcionamiento de márgenes, bordes, rellenos y dimensiones permitirá organizar el contenido de forma más limpia y profesional.