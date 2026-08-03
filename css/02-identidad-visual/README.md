# Laboratorio 02: Construcción de la identidad visual

**Nivel:** Básico

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Haber completado el Laboratorio 01.
- Tener vinculada correctamente la hoja `style.css`.
- Contar con la versión completa del Proyecto Web Personal.
- Comprender la estructura básica de una regla CSS.

**Concepto principal:**

Definir la identidad visual inicial del Proyecto Web Personal mediante colores, tipografía y variables CSS.

---

# Objetivo

Construir una identidad visual básica para el Proyecto Web Personal mediante una paleta de colores, una tipografía general y variables CSS reutilizables.

---

# Descripción

En el laboratorio anterior se vinculó correctamente una hoja de estilos externa con el documento HTML.

En esta práctica se comenzará a construir la identidad visual del sitio.

El estudiante definirá:

- Un color principal.
- Un color secundario.
- Un color de fondo.
- Un color para las superficies.
- Un color para el texto.
- Una tipografía general.
- Una altura de línea adecuada.

También se introducirán las variables CSS, que permiten almacenar valores reutilizables y mantener una apariencia consistente en todo el proyecto.

En este laboratorio todavía no se trabajará con márgenes, rellenos, bordes ni distribución avanzada. Estos conceptos serán estudiados en los siguientes laboratorios.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Estructura HTML completa.
- ✅ Hoja de estilos externa.
- ✅ Vinculación entre HTML y CSS.

Después de este laboratorio contará con:

- ✅ Paleta de colores.
- ✅ Tipografía general.
- ✅ Colores consistentes.
- ✅ Variables CSS.
- ✅ Mayor legibilidad.
- ✅ Identidad visual inicial.

Próximamente se incorporarán:

- ⏳ Modelo de caja.
- ⏳ Márgenes.
- ⏳ Rellenos.
- ⏳ Bordes.
- ⏳ Componentes visuales.
- ⏳ Flexbox.
- ⏳ Grid.
- ⏳ Diseño adaptable.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de definir y aplicar una identidad visual básica mediante variables CSS, colores y propiedades tipográficas.

---

# Conceptos trabajados

- `:root`
- Variables CSS.
- `var()`
- `font-family`
- `background-color`
- `color`
- `line-height`
- `text-decoration`
- `max-width`
- Paleta de colores.
- Contraste.
- Consistencia visual.

---

# ¿Qué es una identidad visual?

La identidad visual corresponde al conjunto de características gráficas que permiten reconocer un sitio web.

Puede incluir:

- Colores.
- Tipografías.
- Fondos.
- Estilo de títulos.
- Apariencia de enlaces.
- Organización visual.
- Imágenes.
- Iconos.

En este laboratorio se construirá una identidad visual básica mediante colores y tipografía.

---

# Paleta de colores

Una paleta de colores es un conjunto limitado de colores utilizados de forma consistente dentro de un sitio web.

En este proyecto se utilizarán inicialmente los siguientes colores:

```css
--color-primario: #1f3c5c;
--color-secundario: #0056b3;
--color-fondo: #f4f4f4;
--color-superficie: #ffffff;
--color-texto: #222222;
```

Cada color cumple una función específica.

| Variable | Uso |
|----------|-----|
| `--color-primario` | Títulos y elementos destacados. |
| `--color-secundario` | Enlaces y elementos interactivos. |
| `--color-fondo` | Fondo general de la página. |
| `--color-superficie` | Encabezado, contenido y pie de página. |
| `--color-texto` | Texto principal. |

---

# Variables CSS

Las variables CSS permiten almacenar valores reutilizables.

Se definen generalmente dentro de `:root`.

```css
:root {
    --color-primario: #1f3c5c;
    --color-secundario: #0056b3;
}
```

Después pueden utilizarse mediante la función `var()`.

```css
h1 {
    color: var(--color-primario);
}
```

Esto evita repetir constantemente los mismos valores.

---

# ¿Qué es :root?

El selector `:root` representa el elemento raíz del documento.

En un documento HTML corresponde al elemento `<html>`.

Se utiliza comúnmente para declarar variables globales.

```css
:root {
    --color-texto: #222222;
}
```

Estas variables pueden utilizarse en cualquier parte de la hoja de estilos.

---

# Hoja de estilos del laboratorio

```css
/* =======================================================
   VARIABLES
======================================================= */

:root {

    --color-primario: #1f3c5c;
    --color-secundario: #0056b3;

    --color-fondo: #f4f4f4;
    --color-superficie: #ffffff;

    --color-texto: #222222;

}


/* =======================================================
   ESTILOS GENERALES
======================================================= */

body {

    font-family: Arial, sans-serif;

    background-color: var(--color-fondo);

    color: var(--color-texto);

    line-height: 1.6;

}


/* =======================================================
   ENCABEZADO
======================================================= */

header {

    background-color: var(--color-superficie);

}


/* =======================================================
   NAVEGACIÓN
======================================================= */

nav a {

    color: var(--color-secundario);

    text-decoration: none;

}

nav a:hover {

    text-decoration: underline;

}


/* =======================================================
   CONTENIDO PRINCIPAL
======================================================= */

main {

    background-color: var(--color-superficie);

}


/* =======================================================
   TÍTULOS
======================================================= */

h1,
h2,
h3 {

    color: var(--color-primario);

}


/* =======================================================
   TEXTO
======================================================= */

p {

    color: var(--color-texto);

}


/* =======================================================
   TABLAS
======================================================= */

table {

    width: 100%;

}


/* =======================================================
   FORMULARIOS
======================================================= */

input,
textarea,
select,
button {

    font: inherit;

}


/* =======================================================
   IMÁGENES Y MULTIMEDIA
======================================================= */

img,
video,
audio {

    max-width: 100%;

}


/* =======================================================
   PIE DE PÁGINA
======================================================= */

footer {

    background-color: var(--color-superficie);

}
```

---

# Estilos generales

La regla principal del documento es:

```css
body {
    font-family: Arial, sans-serif;
    background-color: var(--color-fondo);
    color: var(--color-texto);
    line-height: 1.6;
}
```

Esta regla establece:

- La familia tipográfica.
- El fondo general.
- El color principal del texto.
- La separación entre líneas.

---

# Tipografía

La propiedad `font-family` define la tipografía del documento.

```css
font-family: Arial, sans-serif;
```

El navegador intentará utilizar Arial.

Si no está disponible, utilizará una tipografía genérica sin serifas.

---

# Altura de línea

La propiedad `line-height` controla el espacio vertical entre las líneas de texto.

```css
line-height: 1.6;
```

Una separación adecuada mejora la legibilidad.

---

# Colores de fondo

El fondo general se define mediante:

```css
background-color: var(--color-fondo);
```

El encabezado, el contenido principal y el pie de página utilizan:

```css
background-color: var(--color-superficie);
```

En esta etapa no se han incorporado márgenes ni rellenos, por lo que las superficies todavía no se presentan como componentes visuales independientes.

---

# Títulos

Los títulos utilizan el color principal.

```css
h1,
h2,
h3 {
    color: var(--color-primario);
}
```

El selector agrupado evita repetir la misma propiedad para cada nivel de encabezado.

---

# Enlaces

Los enlaces utilizan el color secundario.

```css
nav a {
    color: var(--color-secundario);
    text-decoration: none;
}
```

La propiedad:

```css
text-decoration: none;
```

elimina el subrayado predeterminado.

Cuando el usuario pasa el cursor sobre un enlace, el subrayado vuelve a aparecer.

```css
nav a:hover {
    text-decoration: underline;
}
```

Este cambio ayuda a comunicar que el elemento es interactivo.

---

# Herencia tipográfica

Los controles de formulario pueden utilizar la misma tipografía del documento mediante:

```css
input,
textarea,
select,
button {
    font: inherit;
}
```

La propiedad `inherit` permite heredar el estilo tipográfico del elemento padre.

---

# Imágenes y multimedia

La siguiente regla evita que las imágenes, los videos y los audios superen el ancho disponible:

```css
img,
video,
audio {
    max-width: 100%;
}
```

Esto ayuda a prevenir desbordamientos horizontales.

El diseño adaptable completo se desarrollará posteriormente.

---

# Tablas

La tabla utiliza:

```css
table {
    width: 100%;
}
```

Esto permite que ocupe el ancho disponible dentro de su contenedor.

En este laboratorio todavía no se aplican bordes, rellenos ni estilos a las celdas.

---

# Contraste

El contraste permite diferenciar correctamente el texto del fondo.

En este proyecto se utiliza:

```css
--color-fondo: #f4f4f4;
--color-superficie: #ffffff;
--color-texto: #222222;
```

El texto oscuro sobre fondos claros favorece la lectura.

Al personalizar la paleta, el estudiante debe verificar que los colores mantengan un contraste suficiente.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Conserva la estructura HTML del Proyecto Web Personal.
2. Define una paleta de colores.
3. Declara variables dentro de `:root`.
4. Aplica el color de fondo general.
5. Define el color de las superficies.
6. Aplica una tipografía general.
7. Modifica el color de los títulos.
8. Personaliza los enlaces.
9. Comprueba el comportamiento de `:hover`.
10. Verifica que las imágenes y la multimedia no desborden su contenedor.

---

# Archivos

| Archivo o carpeta | Descripción |
|-------------------|-------------|
| `index.html` | Estructura completa del Proyecto Web Personal. |
| `style.css` | Hoja de estilos con la identidad visual inicial. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/02-identidad-visual`.
2. Verifique que `index.html` y `style.css` se encuentren en la misma carpeta.
3. Ejecute `index.html` en el navegador.
4. Compruebe que el fondo general sea gris claro.
5. Verifique que el encabezado, el contenido y el pie utilicen fondo blanco.
6. Observe que los títulos aparezcan en azul oscuro.
7. Compruebe que los enlaces utilicen el color azul secundario.
8. Pase el cursor sobre los enlaces.
9. Observe el subrayado generado mediante `:hover`.
10. Cambie temporalmente una variable y verifique cómo afecta el sitio.

---

# Buenas prácticas

- Definir una paleta de colores limitada.
- Utilizar variables CSS para valores repetidos.
- Mantener un buen contraste.
- Evitar utilizar demasiados colores.
- Utilizar nombres descriptivos para las variables.
- Mantener una tipografía legible.
- Aplicar los colores de forma consistente.
- Separar la estructura HTML de la apariencia visual.
- No utilizar estilos en línea.
- No introducir todavía márgenes, rellenos o bordes que pertenecen al siguiente laboratorio.

---

# Reto

Personalice la identidad visual del Proyecto Web Personal.

Debe:

1. Cambiar el color principal.
2. Cambiar el color secundario.
3. Definir un color de fondo.
4. Definir un color para las superficies.
5. Cambiar la tipografía general.
6. Verificar el contraste.
7. Comprobar que los enlaces sean fáciles de identificar.
8. Mantener una apariencia consistente.

Evite utilizar colores aleatorios sin relación con el tema del proyecto.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal deberá:

- Conservar su estructura HTML.
- Contar con una paleta de colores.
- Utilizar variables CSS.
- Tener una tipografía general.
- Mostrar títulos y enlaces personalizados.
- Mantener una apariencia visual consistente.
- Estar preparado para incorporar el modelo de caja.

---

# Conclusiones

La identidad visual permite establecer una apariencia coherente para un sitio web.

Las variables CSS facilitan la reutilización de colores y permiten modificar la apariencia general desde un solo lugar.

La tipografía, los colores y el contraste deben seleccionarse de acuerdo con el tema del proyecto y con criterios de legibilidad.

En este laboratorio se definió la base visual del Proyecto Web Personal sin modificar todavía los espacios, bordes o dimensiones de los elementos.

---

# ¿Qué sigue?

En el siguiente laboratorio se trabajará el modelo de caja de CSS.

Se incorporarán:

- `margin`
- `padding`
- `border`
- `width`
- `box-sizing`

Estos conceptos permitirán controlar el espacio ocupado por los elementos y mejorar la organización visual del sitio.