# Laboratorio 07: Organización de la galería mediante CSS Grid

**Nivel:** Básico–intermedio

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Laboratorio 04: Construcción de componentes visuales.
- Laboratorio 05: Diseño del menú de navegación.
- Laboratorio 06: Organización de proyectos con Flexbox.
- Contar con la versión completa del Proyecto Web Personal.

**Concepto principal:**

Organizar la galería de imágenes utilizando CSS Grid.

---

# Objetivo

Construir una galería organizada mediante CSS Grid para distribuir las imágenes en filas y columnas de forma automática.

---

# Descripción

En el laboratorio anterior se utilizó **Flexbox** para distribuir las tarjetas de proyectos.

Flexbox resulta ideal para organizar elementos en una única dimensión (filas o columnas).

En este laboratorio conoceremos **CSS Grid**, un modelo de distribución diseñado para organizar elementos en dos dimensiones.

Grid permite controlar simultáneamente:

- Filas.
- Columnas.
- Separación entre elementos.
- Adaptación al espacio disponible.

La galería de imágenes será reorganizada mediante una cuadrícula flexible.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Identidad visual.
- ✅ Modelo de caja.
- ✅ Componentes reutilizables.
- ✅ Menú de navegación.
- ✅ Distribución mediante Flexbox.

Después de este laboratorio contará con:

- ✅ Galería organizada mediante Grid.
- ✅ Distribución automática en columnas.
- ✅ Mejor aprovechamiento del espacio.
- ✅ Diseño más limpio y ordenado.

Próximamente se incorporarán:

- ⏳ Formularios modernos.
- ⏳ Diseño adaptable.
- ⏳ Publicación final.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de organizar una galería de imágenes utilizando CSS Grid y comprender cuándo resulta más conveniente utilizar Grid en lugar de Flexbox.

---

# Conceptos trabajados

- CSS Grid.
- `display: grid`
- `grid-template-columns`
- `repeat()`
- `minmax()`
- `auto-fit`
- `gap`
- Distribución bidimensional.

---

# ¿Qué es CSS Grid?

CSS Grid es un modelo de distribución diseñado para organizar elementos mediante filas y columnas.

Permite construir:

- Galerías.
- Paneles.
- Tableros.
- Diseños complejos.
- Interfaces adaptables.

Mientras Flexbox organiza principalmente una dimensión, Grid organiza dos dimensiones simultáneamente.

---

# Cambio en el documento HTML

En este laboratorio se agrega un nuevo contenedor alrededor de la galería:

```html
<div class="contenedor-galeria">

    <figure>
        ...
    </figure>

    <figure>
        ...
    </figure>

    <figure>
        ...
    </figure>

</div>
```

Este contenedor será el encargado de activar Grid.

---

# Activación de Grid

La cuadrícula comienza con:

```css
.contenedor-galeria {

    display: grid;

}
```

Esta propiedad convierte el contenedor en una cuadrícula.

Todos sus hijos directos pasan a ser elementos de Grid.

---

# Columnas automáticas

La distribución se realiza mediante:

```css
grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));
```

Esta instrucción indica:

- Crear tantas columnas como sea posible.
- Cada columna tendrá un ancho mínimo de `220px`.
- Si existe espacio adicional, las columnas crecerán de forma proporcional.

---

# repeat()

La función:

```css
repeat()
```

permite evitar escribir varias veces la misma definición.

Por ejemplo:

```css
repeat(3, 1fr)
```

equivale a:

```css
1fr 1fr 1fr
```

---

# auto-fit

La palabra clave:

```css
auto-fit
```

permite que el navegador determine automáticamente cuántas columnas pueden mostrarse según el espacio disponible.

---

# minmax()

La función:

```css
minmax(220px, 1fr)
```

establece:

- tamaño mínimo;
- tamaño máximo.

Cada columna tendrá como mínimo `220px`.

Cuando exista espacio adicional podrá crecer hasta ocupar una fracción disponible.

---

# Gap

La separación entre imágenes se controla mediante:

```css
gap: 20px;
```

Esta propiedad crea un espacio uniforme entre filas y columnas.

---

# Márgenes de las figuras

Las figuras utilizan:

```css
.contenedor-galeria figure {

    margin: 0;

}
```

De esta forma la separación queda completamente controlada por Grid mediante `gap`.

---

# Diferencia entre Flexbox y Grid

| Flexbox | Grid |
|---------|------|
| Una dimensión. | Dos dimensiones. |
| Ideal para filas o columnas. | Ideal para cuadrículas. |
| Muy utilizado en menús y tarjetas. | Muy utilizado en galerías y paneles. |

En este proyecto:

- Flexbox organiza los proyectos.
- Grid organiza la galería.

---

# Hoja de estilos incorporada

```css
/* =======================================================
   GRID: GALERÍA
======================================================= */

.contenedor-galeria {

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 20px;

    margin-top: 20px;

}

.contenedor-galeria figure {

    margin: 0;

}
```

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Conserva todos los estilos desarrollados anteriormente.
2. Agrega el contenedor `.contenedor-galeria`.
3. Activa CSS Grid.
4. Define columnas automáticas.
5. Utiliza `repeat()`.
6. Utiliza `minmax()`.
7. Incorpora `gap`.
8. Comprueba cómo cambia la distribución al modificar el tamaño de la ventana.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Séptima versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con CSS Grid. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/07-grid`.
2. Ejecute `index.html`.
3. Localice la sección **Galería**.
4. Observe cómo las imágenes se organizan en columnas.
5. Reduzca progresivamente el ancho de la ventana.
6. Observe cómo Grid reorganiza automáticamente las imágenes.
7. Cambie temporalmente el valor de `220px`.
8. Modifique el valor de `gap`.
9. Guarde los cambios.
10. Actualice el navegador.

---

# Buenas prácticas

- Utilizar Grid cuando se trabaje con filas y columnas.
- Utilizar Flexbox para distribuciones de una dimensión.
- Utilizar `gap` para controlar la separación.
- Evitar definir anchos fijos innecesarios.
- Aprovechar `repeat()` para simplificar el código.
- Utilizar `minmax()` para lograr diseños flexibles.

---

# Reto

Experimente con la galería.

Puede:

1. Cambiar el tamaño mínimo de las columnas.
2. Modificar el `gap`.
3. Agregar nuevas imágenes.
4. Comparar el comportamiento con Flexbox.
5. Crear una cuadrícula de dos columnas fijas.
6. Restaurar posteriormente la configuración automática.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal contará con una galería organizada mediante CSS Grid, con una distribución automática en filas y columnas que aprovecha correctamente el espacio disponible.

---

# Conclusiones

CSS Grid constituye una de las herramientas más potentes para construir distribuciones bidimensionales.

Mientras Flexbox organiza componentes en una dimensión, Grid permite controlar simultáneamente filas y columnas.

En este laboratorio se utilizó Grid para organizar la galería de imágenes, logrando una distribución flexible y mucho más ordenada.

---

# ¿Qué sigue?

En el siguiente laboratorio mejoraremos visualmente los formularios del Proyecto Web Personal.

Se incorporarán:

- Campos más legibles.
- Estados de foco.
- Botones modernos.
- Controles visualmente consistentes.
- Mejor experiencia de usuario durante el ingreso de información.