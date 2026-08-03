# Laboratorio 04: Construcción de componentes visuales

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Contar con la versión completa del Proyecto Web Personal.

**Concepto principal:**

Transformar las principales secciones del Proyecto Web Personal en componentes visuales reutilizables.

---

# Objetivo

Mejorar la presentación del Proyecto Web Personal mediante la creación de tarjetas, contenedores centrados, fondos, bordes redondeados y sombras.

---

# Descripción

Hasta el laboratorio anterior, el Proyecto Web Personal cuenta con una identidad visual básica y una organización más clara mediante el modelo de caja.

Sin embargo, las secciones todavía conservan una apariencia sencilla.

En este laboratorio se incorporará el concepto de **componente visual**. Las principales secciones del sitio se identificarán mediante la clase:

```html
class="card"
```

Esta clase permitirá aplicar una misma apariencia a diferentes elementos sin repetir las reglas CSS.

También se limitará el ancho máximo del contenido, se centrará el sitio dentro del navegador y se utilizarán fondos, bordes redondeados y sombras para mejorar la presentación general.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Hoja de estilos externa.
- ✅ Identidad visual.
- ✅ Paleta de colores.
- ✅ Tipografía.
- ✅ Variables CSS.
- ✅ Modelo de caja.
- ✅ Márgenes y rellenos.
- ✅ Bordes en imágenes y tablas.

Después de este laboratorio contará con:

- ✅ Contenedores centrados.
- ✅ Ancho máximo del contenido.
- ✅ Componentes visuales reutilizables.
- ✅ Tarjetas.
- ✅ Fondos diferenciados.
- ✅ Bordes redondeados.
- ✅ Sombras suaves.
- ✅ Apariencia más organizada.

Próximamente se incorporarán:

- ⏳ Menú de navegación moderno.
- ⏳ Estados visuales para enlaces.
- ⏳ Distribución mediante Flexbox.
- ⏳ Distribución mediante Grid.
- ⏳ Diseño adaptable.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de construir componentes visuales reutilizables mediante clases CSS y propiedades relacionadas con fondos, bordes, dimensiones y sombras.

---

# Conceptos trabajados

- Clases CSS.
- Selector de clase.
- Componentes visuales.
- Tarjetas.
- `max-width`
- `margin: auto`
- `background-color`
- `border`
- `border-radius`
- `box-shadow`
- Selectores hijos.
- Reutilización de estilos.

---

# ¿Qué es un componente visual?

Un componente visual es una parte de la interfaz que agrupa información relacionada y mantiene una apariencia definida.

Algunos ejemplos son:

- Encabezado.
- Menú de navegación.
- Tarjeta de proyecto.
- Galería.
- Formulario.
- Pie de página.

En este laboratorio, las principales secciones del sitio se convertirán en tarjetas.

---

# ¿Qué es una tarjeta?

Una tarjeta o **card** es un contenedor visual utilizado para presentar información relacionada.

Normalmente incluye:

- Un fondo.
- Espaciado interno.
- Un borde.
- Esquinas redondeadas.
- Separación respecto a otros componentes.

En algunos casos también puede incluir sombras.

---

# La clase card

En el documento HTML se agrega la clase:

```html
<section class="card" id="sobre-mi">
```

La misma clase puede utilizarse en diferentes elementos:

```html
<section class="card" id="habilidades">
```

```html
<section class="card" id="proyectos">
```

```html
<article class="card">
```

En CSS se seleccionan mediante:

```css
.card {
    background-color: #fafafa;
    border: 1px solid var(--color-borde);
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
}
```

Todas las etiquetas que tengan `class="card"` recibirán la misma apariencia.

---

# Selector de clase

Los selectores de clase comienzan con un punto.

```css
.card {
    background-color: #fafafa;
}
```

El punto indica que `card` es el nombre de una clase CSS.

Una clase puede aplicarse a varios elementos del documento.

Esto permite reutilizar estilos y evitar reglas repetidas.

---

# Contenedores principales

El encabezado, el contenido principal y el pie de página utilizan:

```css
body > header,
main,
body > footer {
    max-width: 1200px;
    margin: 30px auto;
}
```

Esta regla limita el ancho máximo y centra los contenedores.

---

# Max-width

La propiedad `max-width` establece el ancho máximo que puede alcanzar un elemento.

```css
max-width: 1200px;
```

Esto evita que el contenido se extienda excesivamente en pantallas grandes.

El elemento puede ocupar un ancho menor cuando la pantalla no dispone de suficiente espacio.

---

# Margin auto

La declaración:

```css
margin: 30px auto;
```

aplica:

- `30px` de margen superior e inferior.
- `auto` en los márgenes laterales.

Los márgenes laterales automáticos permiten centrar horizontalmente un elemento que tiene un ancho limitado.

---

# Fondos

Los contenedores principales utilizan:

```css
background-color: var(--color-superficie);
```

Las tarjetas utilizan:

```css
background-color: #fafafa;
```

La diferencia entre los colores permite distinguir visualmente las superficies del sitio.

---

# Bordes

Las tarjetas incorporan:

```css
border: 1px solid var(--color-borde);
```

La propiedad `border` está compuesta por:

- Grosor.
- Estilo.
- Color.

En este caso:

| Parte | Valor |
|-------|-------|
| Grosor | `1px` |
| Estilo | `solid` |
| Color | `var(--color-borde)` |

---

# Bordes redondeados

La propiedad `border-radius` redondea las esquinas.

```css
border-radius: 10px;
```

Los contenedores principales utilizan:

```css
border-radius: 12px;
```

Mantener valores similares ayuda a conservar una apariencia consistente.

---

# Sombras

Los contenedores principales utilizan:

```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
```

Los valores representan:

| Valor | Función |
|-------|---------|
| `0` | Desplazamiento horizontal. |
| `4px` | Desplazamiento vertical. |
| `12px` | Difuminado. |
| `rgba(...)` | Color y transparencia. |

La sombra permite separar visualmente el componente del fondo.

Debe utilizarse con moderación.

---

# Encabezado y pie principales

El documento contiene un encabezado y un pie de página principales, pero también un encabezado y un pie dentro del artículo **Estado del proyecto**.

Para aplicar estilos únicamente a los elementos principales se utiliza:

```css
body > header
```

y:

```css
body > footer
```

El símbolo `>` selecciona un hijo directo.

De esta forma, los estilos principales no afectan automáticamente a los elementos internos del artículo.

---

# Encabezado y pie internos

Los encabezados y pies ubicados dentro de un artículo se restablecen mediante:

```css
article > header,
article > footer {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
}
```

Esta regla evita que los elementos internos adquieran la misma apariencia del encabezado y el pie principales.

---

# Hoja de estilos del laboratorio

```css
/* =======================================================
   RESET
======================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =======================================================
   VARIABLES
======================================================= */

:root {
    --color-primario: #1f3c5c;
    --color-secundario: #0056b3;
    --color-fondo: #f4f4f4;
    --color-superficie: #ffffff;
    --color-texto: #222222;
    --color-borde: #dddddd;
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
   CONTENEDOR PRINCIPAL
======================================================= */

body > header,
main,
body > footer {
    max-width: 1200px;
    margin: 30px auto;
}


/* =======================================================
   ENCABEZADO
======================================================= */

body > header {
    background-color: var(--color-superficie);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}


/* =======================================================
   NAVEGACIÓN
======================================================= */

nav {
    margin-top: 20px;
}

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
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}


/* =======================================================
   TÍTULOS
======================================================= */

h1,
h2,
h3 {
    color: var(--color-primario);
    margin-bottom: 15px;
}


/* =======================================================
   PÁRRAFOS
======================================================= */

p {
    margin-bottom: 15px;
}


/* =======================================================
   COMPONENTES (CARDS)
======================================================= */

.card {
    background-color: #fafafa;
    border: 1px solid var(--color-borde);
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
}


/* =======================================================
   TABLAS
======================================================= */

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

caption {
    font-weight: bold;
    margin-bottom: 10px;
}

th,
td {
    border: 1px solid var(--color-borde);
    padding: 12px;
    text-align: left;
}


/* =======================================================
   LISTAS
======================================================= */

ul,
ol,
dl {
    margin-left: 25px;
    margin-bottom: 20px;
}

li {
    margin-bottom: 8px;
}

dt {
    font-weight: bold;
    margin-top: 12px;
}

dd {
    margin-left: 20px;
}


/* =======================================================
   FORMULARIOS
======================================================= */

form {
    margin-top: 20px;
}

label {
    display: inline-block;
    margin-bottom: 6px;
}

input,
textarea,
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font: inherit;
}

textarea {
    resize: vertical;
}


/* =======================================================
   BOTONES
======================================================= */

button {
    padding: 12px 20px;
    cursor: pointer;
}


/* =======================================================
   IMÁGENES Y MULTIMEDIA
======================================================= */

img,
video,
audio {
    max-width: 100%;
}

img {
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
}

video,
audio {
    margin-top: 15px;
}


/* =======================================================
   ELEMENTOS AVANZADOS
======================================================= */

details {
    margin-bottom: 15px;
}

summary {
    cursor: pointer;
    font-weight: bold;
}

progress,
meter {
    width: 100%;
    margin-top: 10px;
}


/* =======================================================
   ENCABEZADO Y PIE INTERNOS DE ARTÍCULOS
======================================================= */

article > header,
article > footer {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
}


/* =======================================================
   PIE DE PÁGINA
======================================================= */

body > footer {
    background-color: var(--color-superficie);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10);
}


/* =======================================================
   SEPARADORES
======================================================= */

hr {
    margin: 30px 0;
}
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Conserva la estructura HTML desarrollada anteriormente.
2. Agrega la clase `card` a las principales secciones.
3. Limita el ancho máximo del sitio.
4. Centra los contenedores principales.
5. Aplica fondos diferenciados.
6. Agrega bordes a las tarjetas.
7. Redondea las esquinas.
8. Incorpora sombras suaves.
9. Comprueba la reutilización de la clase `.card`.
10. Diferencia los encabezados y pies principales de los internos.

---

# Archivos

| Archivo o carpeta | Descripción |
|-------------------|-------------|
| `index.html` | Cuarta versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con componentes visuales. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/04-componentes-visuales`.
2. Ejecute el archivo `index.html`.
3. Observe el ancho máximo de los contenedores.
4. Verifique que el sitio esté centrado.
5. Identifique las secciones que utilizan la clase `.card`.
6. Observe los fondos, bordes y esquinas redondeadas.
7. Revise las sombras del encabezado, del contenido principal y del pie.
8. Modifique temporalmente el valor de `border-radius`.
9. Cambie la intensidad de `box-shadow`.
10. Guarde los cambios y actualice el navegador.

---

# Buenas prácticas

- Utilizar clases para estilos reutilizables.
- Evitar repetir las mismas reglas CSS.
- Mantener consistencia entre componentes similares.
- Utilizar bordes y sombras con moderación.
- Mantener valores similares de `border-radius`.
- Limitar el ancho del contenido para mejorar la lectura.
- Centrar los contenedores mediante márgenes automáticos.
- Utilizar selectores específicos cuando existan elementos anidados.
- Evitar aplicar estilos generales que afecten componentes internos.
- Diseñar pensando en la claridad del contenido.

---

# Reto

Personalice los componentes visuales del Proyecto Web Personal.

Puede realizar las siguientes modificaciones:

1. Cambiar el color de fondo de las tarjetas.
2. Modificar el color de los bordes.
3. Cambiar el radio de las esquinas.
4. Ajustar la intensidad de las sombras.
5. Modificar el ancho máximo del sitio.
6. Crear una variante de tarjeta mediante otra clase.
7. Aplicar la clase a una sección adicional.
8. Verificar que los encabezados internos no reciban estilos incorrectos.

Después de experimentar, restaure una apariencia equilibrada y coherente.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal deberá:

- Conservar la estructura HTML acumulativa.
- Presentar el contenido dentro de contenedores centrados.
- Tener un ancho máximo controlado.
- Utilizar componentes visuales reutilizables.
- Mostrar las principales secciones como tarjetas.
- Incorporar fondos, bordes redondeados y sombras.
- Mantener estilos diferenciados para encabezados y pies internos.
- Estar preparado para mejorar el menú de navegación.

---

# Conclusiones

Los componentes visuales permiten organizar el contenido de manera clara y consistente.

La utilización de clases CSS facilita la reutilización de estilos y evita repetir reglas para cada elemento.

Las propiedades `max-width`, `margin: auto`, `border-radius` y `box-shadow` permiten construir una interfaz más moderna sin modificar el significado del contenido HTML.

El uso de selectores específicos también permite controlar correctamente elementos anidados, como los encabezados y pies ubicados dentro de artículos.

---

# ¿Qué sigue?

En el siguiente laboratorio se mejorará el menú de navegación.

Se incorporarán:

- Botones visuales.
- Espaciado interno.
- Colores de fondo.
- Estados `:hover`, `:visited` y `:active`.
- Transiciones.
- Efectos de interacción.

El menú comenzará a ofrecer una experiencia de usuario más clara e intuitiva.