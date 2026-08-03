# Laboratorio 05: Diseño del menú de navegación

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Laboratorio 04: Construcción de componentes visuales.
- Contar con la versión completa del Proyecto Web Personal.

**Concepto principal:**

Diseñar un menú de navegación atractivo y mejorar la interacción con los enlaces mediante pseudo-clases y transiciones CSS.

---

# Objetivo

Mejorar la apariencia y el comportamiento del menú de navegación del Proyecto Web Personal mediante botones visuales, pseudo-clases, transiciones, desplazamientos y sombras.

---

# Descripción

Hasta el laboratorio anterior, el Proyecto Web Personal cuenta con una identidad visual definida, una distribución organizada y componentes reutilizables mediante la clase `.card`.

Sin embargo, los enlaces del menú todavía se presentan como texto sencillo.

En este laboratorio los enlaces se transformarán en botones visuales mediante:

- Colores de fondo.
- Espaciado interno.
- Bordes redondeados.
- Estados de interacción.
- Transiciones.
- Desplazamientos.
- Sombras.

Además, se eliminarán del HTML los separadores verticales `|`, porque el espacio entre los botones será controlado mediante CSS.

Estas mejoras permitirán ofrecer una navegación más clara, intuitiva y agradable.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Hoja de estilos externa.
- ✅ Identidad visual.
- ✅ Paleta de colores.
- ✅ Tipografía.
- ✅ Variables CSS.
- ✅ Modelo de caja.
- ✅ Componentes visuales reutilizables.
- ✅ Tarjetas.
- ✅ Contenedores centrados.
- ✅ Bordes redondeados.
- ✅ Sombras.

Después de este laboratorio contará con:

- ✅ Menú de navegación moderno.
- ✅ Enlaces con apariencia de botones.
- ✅ Colores de fondo.
- ✅ Espaciado interno.
- ✅ Estados `:hover`, `:visited` y `:active`.
- ✅ Transiciones suaves.
- ✅ Desplazamiento al pasar el cursor.
- ✅ Sombras durante la interacción.
- ✅ Mejor experiencia de usuario.

Próximamente se incorporarán:

- ⏳ Distribución de proyectos mediante Flexbox.
- ⏳ Galería organizada con Grid.
- ⏳ Formularios modernos.
- ⏳ Diseño adaptable.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de diseñar un menú de navegación utilizando estilos CSS, pseudo-clases, transformaciones y transiciones para mejorar la interacción del usuario.

---

# Conceptos trabajados

- `display`
- `margin`
- `padding`
- `color`
- `background-color`
- `text-decoration`
- `border-radius`
- `transition`
- `transform`
- `box-shadow`
- `:hover`
- `:visited`
- `:active`
- Experiencia de usuario.

---

# ¿Qué es un menú de navegación?

Un menú de navegación permite al usuario desplazarse entre las diferentes secciones de un sitio web.

Debe ser:

- Fácil de identificar.
- Visible.
- Consistente.
- Intuitivo.
- Fácil de utilizar.
- Visualmente diferenciado del contenido.

En este proyecto, el menú utiliza enlaces internos que conducen a las principales secciones de la misma página.

---

# Cambio en el documento HTML

En los laboratorios anteriores, los enlaces estaban separados mediante barras verticales:

```html
<a href="#inicio">Inicio</a> |
<a href="#sobre-mi">Sobre mí</a> |
<a href="#habilidades">Habilidades</a>
```

En este laboratorio se eliminan los separadores:

```html
<nav aria-label="Navegación principal">

    <a href="#inicio">Inicio</a>

    <a href="#sobre-mi">Sobre mí</a>

    <a href="#habilidades">Habilidades</a>

    <a href="#proyectos">Proyectos</a>

    <a href="#galeria">Galería</a>

    <a href="#formacion">Formación</a>

    <a href="#presentacion">Presentación</a>

    <a href="#preguntas">Preguntas frecuentes</a>

    <a href="#informacion-complementaria">
        Información complementaria
    </a>

    <a href="#contacto">Contacto</a>

</nav>
```

La separación visual será controlada mediante las propiedades `margin-right` y `margin-bottom`.

---

# Botones de navegación

Los enlaces se convierten en elementos con apariencia de botón.

```css
nav a {
    display: inline-block;

    margin-right: 8px;
    margin-bottom: 8px;
    padding: 10px 18px;

    color: #ffffff;
    background-color: var(--color-secundario);

    text-decoration: none;
    border-radius: 8px;
}
```

La propiedad:

```css
display: inline-block;
```

permite que el enlace conserve una distribución en línea, pero acepte dimensiones, márgenes y rellenos.

---

# Espaciado interno

La propiedad:

```css
padding: 10px 18px;
```

agrega:

- `10px` arriba y abajo.
- `18px` a la izquierda y a la derecha.

Esto aumenta el área seleccionable del enlace y facilita su uso.

---

# Separación entre botones

Los botones utilizan:

```css
margin-right: 8px;
margin-bottom: 8px;
```

Estas reglas permiten separar los enlaces horizontalmente y mantener espacio cuando el menú ocupa varias líneas.

---

# Color de fondo

Los enlaces utilizan el color secundario definido en las variables CSS:

```css
background-color: var(--color-secundario);
```

El texto se presenta en color blanco:

```css
color: #ffffff;
```

La combinación debe mantener un contraste suficiente para facilitar la lectura.

---

# Bordes redondeados

La propiedad:

```css
border-radius: 8px;
```

redondea las esquinas de cada botón.

Esto mantiene la coherencia con las tarjetas y los demás componentes visuales del proyecto.

---

# Pseudo-clases

Las pseudo-clases permiten modificar la apariencia de un elemento según el estado en el que se encuentre.

En este laboratorio se utilizan:

- `:visited`
- `:hover`
- `:active`

---

# Estado visited

La pseudo-clase `:visited` representa un enlace que ya fue visitado.

```css
nav a:visited {
    color: #ffffff;
}
```

En este proyecto se conserva el texto blanco para mantener una apariencia uniforme en todos los botones.

---

# Estado hover

La pseudo-clase `:hover` se activa cuando el usuario coloca el cursor sobre el enlace.

```css
nav a:hover {
    background-color: var(--color-primario);
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}
```

Durante este estado:

- El color de fondo cambia.
- El botón se desplaza ligeramente hacia arriba.
- Se agrega una sombra.

Estos cambios comunican al usuario que el elemento es interactivo.

---

# Transformación translateY

La declaración:

```css
transform: translateY(-2px);
```

desplaza el botón `2px` hacia arriba.

El valor negativo indica un movimiento vertical ascendente.

Este efecto debe utilizarse con moderación para evitar movimientos excesivos.

---

# Sombras durante la interacción

La propiedad:

```css
box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
```

agrega una sombra suave cuando el usuario pasa el cursor sobre el enlace.

La sombra refuerza visualmente la sensación de elevación del botón.

---

# Estado active

La pseudo-clase `:active` se activa durante el instante en que el usuario selecciona el enlace.

```css
nav a:active {
    transform: scale(0.98);
}
```

La función `scale()` reduce ligeramente el tamaño del botón y simula la sensación de presión.

---

# Transiciones

Las transiciones permiten que los cambios visuales ocurran de manera gradual.

```css
transition:
    background-color 0.3s,
    transform 0.2s,
    box-shadow 0.2s;
```

En este caso se animan tres propiedades:

| Propiedad | Duración |
|-----------|----------|
| `background-color` | `0.3s` |
| `transform` | `0.2s` |
| `box-shadow` | `0.2s` |

Esto evita cambios bruscos y mejora la experiencia visual.

---

# Experiencia de usuario

La experiencia de usuario o **UX** hace referencia a la manera en que una persona percibe e interactúa con un sitio web.

Un menú debe comunicar claramente:

- Qué elementos son interactivos.
- Dónde puede hacer clic el usuario.
- Qué ocurre al seleccionar un enlace.
- Cómo desplazarse entre las secciones.

Los cambios de color, las sombras y los movimientos discretos ayudan a comunicar esta información.

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
    margin-top: 25px;
}

nav a {
    display: inline-block;

    margin-right: 8px;
    margin-bottom: 8px;
    padding: 10px 18px;

    color: #ffffff;
    background-color: var(--color-secundario);

    text-decoration: none;
    border-radius: 8px;

    transition:
        background-color 0.3s,
        transform 0.2s,
        box-shadow 0.2s;
}

nav a:visited {
    color: #ffffff;
}

nav a:hover {
    background-color: var(--color-primario);
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

nav a:active {
    transform: scale(0.98);
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

1. Conserva los estilos desarrollados anteriormente.
2. Elimina del HTML los separadores `|` del menú.
3. Convierte los enlaces en elementos `inline-block`.
4. Aplica colores de fondo y texto.
5. Incorpora relleno y separación.
6. Agrega bordes redondeados.
7. Implementa los estados `:visited`, `:hover` y `:active`.
8. Incorpora transiciones.
9. Agrega desplazamiento vertical.
10. Aplica sombras durante la interacción.
11. Comprueba el funcionamiento de cada enlace.

---

# Archivos

| Archivo o carpeta | Descripción |
|-------------------|-------------|
| `index.html` | Quinta versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con el diseño del menú de navegación. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/05-menu-navegacion`.
2. Ejecute el archivo `index.html`.
3. Verifique que los enlaces aparezcan como botones.
4. Compruebe que no existan separadores `|`.
5. Pase el cursor sobre cada enlace.
6. Observe el cambio de color, el desplazamiento y la sombra.
7. Haga clic sostenido sobre un enlace para observar `:active`.
8. Visite varias secciones y compruebe el estado `:visited`.
9. Modifique temporalmente la duración de una transición.
10. Guarde los cambios y actualice el navegador.

---

# Buenas prácticas

- Mantener una apariencia uniforme en todos los botones.
- Utilizar colores con buen contraste.
- Conservar un área seleccionable suficientemente amplia.
- Aplicar transiciones discretas.
- Evitar movimientos excesivos.
- Utilizar sombras suaves.
- Mantener una separación adecuada entre enlaces.
- No depender únicamente del color para comunicar interacción.
- Evitar efectos que distraigan al usuario.
- Comprobar todos los enlaces del menú.

---

# Reto

Personalice el menú de navegación del Proyecto Web Personal.

Puede:

1. Cambiar los colores de fondo.
2. Ajustar el relleno.
3. Modificar el radio de las esquinas.
4. Cambiar la duración de las transiciones.
5. Modificar el desplazamiento de `translateY`.
6. Ajustar la intensidad de la sombra.
7. Crear un efecto alternativo para `:active`.
8. Adaptar el menú al tema visual de su proyecto.

Después de experimentar, conserve una apariencia clara y coherente.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal deberá:

- Conservar los componentes desarrollados anteriormente.
- Contar con un menú visualmente diferenciado.
- Presentar los enlaces como botones.
- Mostrar efectos en los estados de interacción.
- Incorporar transiciones suaves.
- Comunicar claramente qué elementos son seleccionables.
- Ofrecer una navegación más intuitiva.
- Estar preparado para organizar los proyectos mediante Flexbox.

---

# Conclusiones

El menú de navegación es uno de los principales componentes de interacción de un sitio web.

Las pseudo-clases permiten modificar la apariencia de los enlaces según las acciones del usuario.

Las transiciones, transformaciones y sombras permiten crear respuestas visuales sin utilizar JavaScript.

Estos efectos deben mantenerse discretos y consistentes para mejorar la experiencia de usuario sin distraer del contenido.

---

# ¿Qué sigue?

En el siguiente laboratorio se utilizará **Flexbox** para organizar las tarjetas de proyectos.

Se incorporarán:

- `display: flex`
- `flex-wrap`
- `gap`
- La propiedad abreviada `flex`
- Selectores descendientes.
- Distribución flexible de componentes.

Las tarjetas podrán ubicarse horizontalmente y adaptarse al espacio disponible.