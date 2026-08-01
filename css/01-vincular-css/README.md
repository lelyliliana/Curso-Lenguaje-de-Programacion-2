# Laboratorio 01: Vinculación de la hoja de estilos

**Nivel:** Básico

**Duración estimada:** 30 minutos

**Requisitos previos:**

- Haber completado el módulo de HTML.
- Contar con la versión final del Proyecto Web Personal.
- Tener los archivos `index.html`, imágenes y recursos multimedia organizados.
- Conocer la estructura básica de un documento HTML.

**Concepto principal:**

Vincular una hoja de estilos externa a un documento HTML.

---

# Objetivo

Conectar correctamente un archivo CSS externo con el Proyecto Web Personal y comprobar que las reglas de estilo se aplican sobre el documento HTML.

---

# Descripción

En el módulo anterior se construyó la estructura completa del Proyecto Web Personal utilizando HTML.

Hasta este momento, el sitio cuenta con contenido, navegación, imágenes, tablas, formularios y elementos semánticos, pero su apariencia depende únicamente de los estilos predeterminados del navegador.

En este laboratorio se crea el archivo:

```text
style.css
```

y se vincula desde el documento HTML mediante la etiqueta:

```html
<link rel="stylesheet" href="style.css">
```

Esta conexión permitirá comenzar a modificar la presentación visual del sitio sin alterar el significado ni la estructura del contenido.

---

# Evolución del proyecto

El Proyecto Web Personal ya cuenta con:

- ✅ Estructura HTML5.
- ✅ Secciones organizadas semánticamente.
- ✅ Navegación interna.
- ✅ Imágenes y contenido multimedia.
- ✅ Formación académica.
- ✅ Habilidades e intereses.
- ✅ Proyectos.
- ✅ Formulario de contacto.
- ✅ Preguntas frecuentes.
- ✅ Publicación web.
- ✅ Hoja de estilos externa vinculada.

Próximamente se incorporarán:

- ⏳ Paleta de colores.
- ⏳ Tipografía.
- ⏳ Modelo de caja.
- ⏳ Espaciado.
- ⏳ Bordes y fondos.
- ⏳ Flexbox.
- ⏳ Grid.
- ⏳ Diseño adaptable.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de crear, vincular y comprobar el funcionamiento de una hoja de estilos externa en un documento HTML.

---

# Conceptos trabajados

- CSS.
- Hoja de estilos externa.
- `<link>`.
- `rel`.
- `href`.
- Selector.
- Propiedad.
- Valor.
- Regla CSS.
- Separación entre estructura y presentación.

---

# ¿Qué es CSS?

CSS significa:

```text
Cascading Style Sheets
```

En español:

```text
Hojas de Estilo en Cascada
```

CSS permite definir la apariencia visual de un documento HTML.

Puede utilizarse para modificar:

- Colores.
- Tipografías.
- Fondos.
- Bordes.
- Márgenes.
- Espaciado.
- Tamaños.
- Distribución.
- Posición.
- Adaptación a diferentes pantallas.

HTML organiza el contenido.

CSS define cómo se presenta ese contenido.

---

# Separación de responsabilidades

En el desarrollo web se recomienda mantener separadas las responsabilidades de cada tecnología.

| Tecnología | Responsabilidad |
|------------|-----------------|
| HTML | Estructura y significado del contenido. |
| CSS | Apariencia y distribución visual. |
| JavaScript | Comportamiento e interacción. |

Ejemplo:

```html
<h1>Proyecto Web Personal</h1>
```

HTML indica que el contenido es el título principal del documento.

```css
h1 {
    color: #1f3c5c;
}
```

CSS define el color visual de ese título.

La etiqueta HTML no necesita modificarse para cambiar su apariencia.

---

# Estructura del laboratorio

```text
01-vincular-css
│
├── README.md
├── index.html
├── style.css
├── img
│   ├── foto-perfil.jpg
│   ├── proyecto-1.jpg
│   └── proyecto-2.jpg
│
└── multimedia
    ├── presentacion.mp4
    └── bienvenida.mp3
```

El archivo `index.html` debe conservar la estructura desarrollada durante el módulo de HTML.

El archivo `style.css` contendrá las reglas visuales.

---

# Vinculación de CSS

La hoja de estilos se vincula dentro del elemento `<head>`.

```html
<link rel="stylesheet" href="style.css">
```

Esta etiqueta contiene dos atributos principales:

| Atributo | Función |
|----------|---------|
| `rel` | Indica la relación entre el documento HTML y el recurso vinculado. |
| `href` | Indica la ubicación del archivo CSS. |

En este caso:

```html
href="style.css"
```

indica que el archivo `style.css` se encuentra en la misma carpeta que `index.html`.

---

# Ubicación correcta de la etiqueta link

La etiqueta debe ubicarse dentro de `<head>`.

Ejemplo:

```html
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Proyecto Web Personal</title>

    <link rel="stylesheet" href="style.css">

</head>
```

No debe ubicarse dentro de `<body>`.

---

# Estructura de una regla CSS

Una regla CSS está compuesta por:

```css
selector {
    propiedad: valor;
}
```

Ejemplo:

```css
body {
    background-color: #f4f4f4;
}
```

En esta regla:

| Parte | Valor |
|-------|-------|
| Selector | `body` |
| Propiedad | `background-color` |
| Valor | `#f4f4f4` |

El selector identifica el elemento HTML que recibirá el estilo.

La propiedad indica qué característica se modificará.

El valor define el resultado aplicado.

---

# Hoja de estilos inicial

```css
/* Configuración general del documento */

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #222222;
}


/* Encabezado principal */

header {
    background-color: #ffffff;
}


/* Contenido principal */

main {
    background-color: #ffffff;
}


/* Títulos */

h1,
h2,
h3 {
    color: #1f3c5c;
}


/* Enlaces */

a {
    color: #0056b3;
}


/* Pie de página */

footer {
    background-color: #ffffff;
}
```

Estos estilos son iniciales.

Su propósito principal es demostrar que el archivo CSS se encuentra correctamente vinculado.

---

# Selectores utilizados

## Selector de elemento

Un selector de elemento aplica estilos a todas las etiquetas del mismo tipo.

```css
body {
    background-color: #f4f4f4;
}
```

La regla anterior se aplica al elemento `<body>`.

Otro ejemplo:

```css
a {
    color: #0056b3;
}
```

Esta regla se aplica a todos los enlaces del documento.

---

# Selector agrupado

Cuando varios elementos compartirán las mismas propiedades, pueden agruparse mediante comas.

```css
h1,
h2,
h3 {
    color: #1f3c5c;
}
```

Esta regla se aplica a:

- `<h1>`
- `<h2>`
- `<h3>`

Esto evita repetir la misma propiedad varias veces.

---

# Comentarios en CSS

Los comentarios se escriben de la siguiente manera:

```css
/* Este es un comentario */
```

Los comentarios no modifican el sitio.

Sirven para:

- Organizar la hoja de estilos.
- Separar secciones.
- Explicar decisiones importantes.
- Facilitar la lectura del código.

Deben utilizarse con moderación.

No es necesario comentar instrucciones que ya son evidentes.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia la versión final del Proyecto Web Personal.
2. Crea el archivo `style.css`.
3. Vincula la hoja de estilos desde `<head>`.
4. Agrega reglas CSS básicas.
5. Ejecuta el documento en el navegador.
6. Comprueba los cambios visuales.
7. Modifica temporalmente una propiedad para verificar la conexión.
8. Revisa la ubicación y el nombre de los archivos.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura completa del Proyecto Web Personal. |
| `style.css` | Primera hoja de estilos del proyecto. |
| `README.md` | Documentación del laboratorio. |
| `img` | Recursos gráficos utilizados por el sitio. |
| `multimedia` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/01-vincular-css`.
2. Verifique que `index.html` y `style.css` estén en la misma carpeta.
3. Abra `index.html` en el navegador.
4. Compruebe que el fondo general sea gris claro.
5. Verifique que los títulos aparezcan en azul oscuro.
6. Compruebe que los enlaces aparezcan en azul.
7. Cambie temporalmente el color de un título.
8. Actualice el navegador.
9. Confirme que el cambio sea visible.

---

# Prueba de conexión

Para comprobar rápidamente que CSS está conectado, puede modificar:

```css
body {
    background-color: yellow;
}
```

Si el fondo cambia, la vinculación funciona.

Después de comprobarlo, debe restaurarse el color original.

Esta prueba no forma parte del diseño final.

---

# Errores frecuentes

## Los estilos no aparecen

Revise que la etiqueta se encuentre dentro de `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

## El nombre del archivo no coincide

Los siguientes nombres pueden ser interpretados como diferentes:

```text
style.css
Style.css
styles.css
estilos.css
```

El valor de `href` debe coincidir exactamente con el nombre del archivo.

## La ruta es incorrecta

Si ambos archivos están en la misma carpeta, debe utilizarse:

```html
href="style.css"
```

Si el archivo CSS estuviera dentro de una carpeta llamada `css`, la ruta sería:

```html
href="css/style.css"
```

## El navegador muestra una versión anterior

Puede ser necesario actualizar la página.

En algunos casos, se recomienda realizar una recarga forzada del navegador.

## Falta un punto y coma

Ejemplo incorrecto:

```css
body {
    color: #222222
    background-color: #f4f4f4;
}
```

Ejemplo correcto:

```css
body {
    color: #222222;
    background-color: #f4f4f4;
}
```

## Falta una llave

Ejemplo incorrecto:

```css
h1 {
    color: #1f3c5c;
```

Ejemplo correcto:

```css
h1 {
    color: #1f3c5c;
}
```

---

# Buenas prácticas

- Mantener HTML y CSS en archivos separados.
- Utilizar nombres de archivos en minúsculas.
- Evitar espacios y tildes en los nombres.
- Vincular CSS desde `<head>`.
- Utilizar una indentación consistente.
- Escribir una propiedad por línea.
- Finalizar cada declaración con punto y coma.
- Agrupar selectores cuando compartan reglas.
- Organizar la hoja de estilos por secciones.
- Evitar estilos en línea.
- No utilizar etiquetas HTML para conseguir efectos visuales.
- Comprobar los cambios después de guardar los archivos.

---

# Reto

Realice las siguientes modificaciones:

1. Cambie el color de fondo de la página.
2. Cambie el color de los títulos.
3. Cambie el color de los enlaces.
4. Pruebe una tipografía genérica diferente.
5. Agregue un comentario para identificar cada sección del archivo CSS.
6. Compruebe cada cambio en el navegador.
7. Restaure una combinación visual legible antes de finalizar.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal deberá:

- Mantener su estructura HTML.
- Tener una hoja de estilos externa.
- Cargar correctamente el archivo `style.css`.
- Mostrar cambios visibles en el navegador.
- Mantener separadas la estructura y la presentación.
- Estar preparado para desarrollar una identidad visual.

---

# Conclusiones

La vinculación de una hoja de estilos externa es el primer paso para transformar visualmente un documento HTML.

Trabajar con archivos separados permite:

- Mantener el código organizado.
- Reutilizar estilos.
- Facilitar el mantenimiento.
- Modificar la apariencia sin alterar el contenido.
- Aplicar una misma hoja de estilos a diferentes páginas.

En este laboratorio se utilizaron estilos sencillos con el propósito de comprobar la conexión entre HTML y CSS.

La identidad visual del sitio será construida progresivamente durante los siguientes laboratorios.

---

# ¿Qué sigue?

En el siguiente laboratorio se definirá la identidad visual inicial del Proyecto Web Personal mediante:

- Colores.
- Tipografía.
- Tamaños de texto.
- Variables CSS.
- Contraste.
- Jerarquía visual.

El sitio comenzará a adquirir una apariencia coherente con el tema elegido por cada estudiante.