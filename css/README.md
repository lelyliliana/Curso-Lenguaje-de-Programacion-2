# Módulo de CSS

## Presentación

En este módulo se continuará desarrollando el **Proyecto Web Personal** iniciado durante el módulo de HTML.

El sitio ya cuenta con:

- Estructura semántica.
- Navegación interna.
- Información personal.
- Habilidades e intereses.
- Formación académica.
- Sección de proyectos.
- Galería de imágenes.
- Contenido multimedia.
- Preguntas frecuentes.
- Información complementaria.
- Estado del proyecto.
- Formulario de contacto.
- Primera versión publicada mediante HTML.

Durante este módulo no se construirá un sitio nuevo.

Cada laboratorio aplicará estilos sobre la estructura HTML existente hasta transformar progresivamente su presentación visual.

El documento HTML se mantendrá estable en la mayor parte del módulo. Solo se incorporarán algunas clases o contenedores cuando sean necesarios para aplicar técnicas específicas como componentes visuales, Flexbox o Grid.

---

# Objetivo del módulo

Diseñar la presentación visual del Proyecto Web Personal mediante CSS, aplicando principios de identidad visual, organización, reutilización, distribución y adaptación a diferentes tamaños de pantalla.

---

# Metodología

El módulo está organizado mediante laboratorios progresivos.

Cada laboratorio parte de la versión desarrollada anteriormente y conserva todos los avances realizados.

La evolución será la siguiente:

```text
HTML sin estilos
        ↓
Vinculación de CSS
        ↓
Identidad visual
        ↓
Modelo de caja
        ↓
Componentes visuales
        ↓
Menú de navegación
        ↓
Distribución de proyectos con Flexbox
        ↓
Galería organizada con Grid
        ↓
Diseño visual de formularios
        ↓
Diseño adaptable
        ↓
Revisión y publicación
```

El estudiante no debe comenzar nuevamente el proyecto en cada laboratorio.

Cada carpeta representa una nueva versión acumulativa del mismo sitio web.

---

# Laboratorios

| Laboratorio | Producto o mejora |
|-------------|-------------------|
| 01 | Vinculación de la hoja de estilos externa. |
| 02 | Construcción de la identidad visual mediante colores, tipografía y variables CSS. |
| 03 | Aplicación del modelo de caja. |
| 04 | Construcción de componentes visuales reutilizables. |
| 05 | Diseño del menú de navegación. |
| 06 | Organización de las tarjetas de proyectos mediante Flexbox. |
| 07 | Organización de la galería mediante CSS Grid. |
| 08 | Diseño visual del formulario. |
| 09 | Adaptación del sitio a diferentes tamaños de pantalla. |
| 10 | Revisión y publicación de la versión final con CSS. |

---

# Competencia general

Al finalizar el módulo, el estudiante será capaz de diseñar la presentación visual de un sitio web mediante CSS, aplicando principios de identidad visual, organización, reutilización, distribución, adaptación y separación de responsabilidades.

---

# Separación de responsabilidades

Durante el desarrollo del proyecto se mantendrá la siguiente organización:

| Tecnología | Responsabilidad |
|------------|-----------------|
| HTML | Estructura y significado del contenido. |
| CSS | Apariencia y distribución visual. |
| JavaScript | Comportamiento e interacción. |

El código CSS se almacenará en un archivo externo llamado:

```text
style.css
```

Este archivo se vinculará desde el documento HTML mediante:

```html
<link rel="stylesheet" href="style.css">
```

---

# Evolución del documento HTML

La estructura HTML final del módulo anterior se reutiliza como base para todos los laboratorios de CSS.

Sin embargo, algunos temas requieren pequeños ajustes estructurales.

## Laboratorio 04

Se agrega la clase:

```html
class="card"
```

a las principales secciones y al artículo de estado del proyecto.

## Laboratorio 05

Se eliminan los separadores verticales `|` del menú, porque la separación se controlará mediante CSS.

## Laboratorio 06

Se agrega:

```html
<div class="contenedor-proyectos">
```

para organizar las tarjetas mediante Flexbox.

## Laboratorio 07

Se agrega:

```html
<div class="contenedor-galeria">
```

para organizar las imágenes mediante Grid.

A partir del Laboratorio 07, el documento HTML se mantiene sin cambios y la evolución continúa únicamente en `style.css`.

---

# Organización del módulo

```text
css
├── README.md
├── 01-vincular-css
├── 02-identidad-visual
├── 03-modelo-caja
├── 04-componentes-visuales
├── 05-menu-navegacion
├── 06-flexbox
├── 07-grid
├── 08-formularios
├── 09-diseno-responsive
└── 10-publicacion-web
```

---

# Estructura de cada laboratorio

Cada laboratorio contiene:

```text
README.md
index.html
style.css
img/
multimedia/
```

La estructura general es:

```text
laboratorio

├── README.md
├── index.html
├── style.css
├── img
│   ├── foto-perfil.jpg
│   ├── galeria-1.jpg
│   ├── galeria-2.jpg
│   ├── galeria-3.jpg
│   ├── imagen-principal.jpg
│   ├── proyecto-1.jpg
│   ├── proyecto-2.jpg
│   └── proyecto-3.jpg
│
└── multimedia
    ├── bienvenida.mp3
    └── presentacion.mp4
```

El archivo `README.md` explica:

- El propósito del laboratorio.
- La evolución del proyecto.
- Los conceptos trabajados.
- Los cambios realizados en HTML y CSS.
- El funcionamiento del código.
- Las buenas prácticas.
- El reto.
- El resultado esperado.
- El siguiente paso.

---

# Proyecto acumulativo

Cada laboratorio representa una nueva versión del mismo proyecto.

```text
01-vincular-css
        ↓
02-identidad-visual
        ↓
03-modelo-caja
        ↓
04-componentes-visuales
        ↓
05-menu-navegacion
        ↓
06-flexbox
        ↓
07-grid
        ↓
08-formularios
        ↓
09-diseno-responsive
        ↓
10-publicacion-web
```

Por ejemplo, el Laboratorio 06 debe conservar:

- La vinculación de CSS.
- La identidad visual.
- El modelo de caja.
- Los componentes visuales.
- El menú de navegación.

Además, debe incorporar la distribución de los proyectos mediante Flexbox.

---

# Temas desarrollados

Durante el módulo se trabajarán los siguientes conceptos:

- Vinculación de hojas de estilos externas.
- Selectores.
- Propiedades y valores.
- Variables CSS.
- Colores.
- Tipografía.
- Contraste.
- Modelo de caja.
- Márgenes.
- Rellenos.
- Bordes.
- Fondos.
- Bordes redondeados.
- Sombras.
- Componentes reutilizables.
- Pseudo-clases.
- Transiciones.
- Transformaciones.
- Flexbox.
- Grid.
- Formularios.
- Estados de foco.
- Media Queries.
- Diseño adaptable.

---

# Buenas prácticas generales

Durante todos los laboratorios se recomienda:

- Mantener HTML y CSS en archivos separados.
- Utilizar nombres de clases descriptivos.
- Evitar estilos en línea.
- Utilizar variables CSS para valores repetidos.
- Organizar la hoja de estilos por secciones.
- Reutilizar reglas mediante clases.
- Mantener una indentación uniforme.
- Evitar propiedades duplicadas.
- Utilizar selectores específicos cuando existan elementos anidados.
- Aplicar Flexbox y Grid únicamente en los contenedores que lo requieren.
- Comprobar el resultado en diferentes tamaños de pantalla.
- Mantener un contraste adecuado.
- Conservar indicadores visuales de interacción y foco.
- Evitar modificar innecesariamente la estructura HTML.
- Agregar comentarios únicamente cuando aporten claridad.

---

# Resultado esperado

Al finalizar este módulo, el Proyecto Web Personal contará con:

- Hoja de estilos externa.
- Identidad visual.
- Paleta de colores coherente.
- Tipografía legible.
- Espaciado organizado.
- Componentes reutilizables.
- Tarjetas.
- Contenedores centrados.
- Menú de navegación interactivo.
- Proyectos distribuidos mediante Flexbox.
- Galería organizada mediante Grid.
- Formularios visualmente consistentes.
- Estados de foco.
- Diseño adaptable para computadores, tabletas y teléfonos.
- Versión final publicada en internet.

---

# Publicación

Al finalizar el módulo se publicará una nueva versión del sitio mediante GitHub y Netlify.

Esta versión conservará la estructura HTML desarrollada previamente e incorporará todos los estilos CSS construidos durante los laboratorios.

Antes de publicar se deberá comprobar:

- El funcionamiento de los enlaces.
- La carga de imágenes.
- La reproducción de audio y video.
- El comportamiento de Flexbox.
- La organización de Grid.
- La apariencia del formulario.
- La adaptación a diferentes tamaños de pantalla.
- La correcta organización de archivos y carpetas.

---

# ¿Qué sigue?

Después de completar el módulo de CSS, el mismo Proyecto Web Personal continuará evolucionando mediante JavaScript.

JavaScript permitirá incorporar:

- Variables.
- Tipos de datos.
- Operadores.
- Condicionales.
- Ciclos.
- Funciones.
- Arrays.
- Objetos.
- Manipulación del DOM.
- Eventos.
- Validación de formularios.
- Almacenamiento local.
- Consumo de APIs.
- Contenido dinámico.

El proyecto conservará su estructura HTML y su diseño CSS, pero comenzará a incorporar comportamiento e interacción.