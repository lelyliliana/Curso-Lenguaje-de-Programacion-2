# Laboratorio 09: Diseño adaptable mediante Media Queries

**Nivel:** Intermedio

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Haber completado los laboratorios 01 al 08.
- Contar con el Proyecto Web Personal completamente estilizado.

**Concepto principal:**

Adaptar el Proyecto Web Personal a diferentes tamaños de pantalla utilizando **Media Queries**.

---

# Objetivo

Construir una versión adaptable del Proyecto Web Personal que pueda visualizarse correctamente en computadores, tabletas y teléfonos móviles.

---

# Descripción

Hasta este momento el Proyecto Web Personal presenta una apariencia organizada y moderna.

Sin embargo, el diseño todavía fue pensado principalmente para pantallas de escritorio.

En este laboratorio incorporaremos **Media Queries**, que permiten modificar determinadas reglas CSS dependiendo del tamaño de la pantalla.

El objetivo será mantener una buena experiencia de usuario en diferentes dispositivos.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Identidad visual.
- ✅ Modelo de caja.
- ✅ Componentes reutilizables.
- ✅ Menú moderno.
- ✅ Flexbox.
- ✅ Grid.
- ✅ Formularios modernos.

Después de este laboratorio contará con:

- ✅ Diseño adaptable.
- ✅ Menú vertical en móviles.
- ✅ Galería adaptable.
- ✅ Tarjetas reorganizadas.
- ✅ Multimedia adaptable.
- ✅ Tabla desplazable.

Próximamente se realizará la revisión y publicación del proyecto.

---

# Competencia

Al finalizar este laboratorio el estudiante será capaz de adaptar un sitio web a diferentes tamaños de pantalla mediante Media Queries.

---

# Conceptos trabajados

- `@media`
- `max-width`
- Diseño responsive
- Diseño móvil
- Diseño para tablet
- Adaptación de componentes

---

# ¿Qué es Responsive Design?

Un sitio responsive adapta automáticamente su presentación según el dispositivo donde se visualiza.

El mismo documento HTML puede verse correctamente en:

- Computadores.
- Tabletas.
- Teléfonos móviles.

Esto se consigue modificando únicamente la hoja de estilos.

---

# ¿Qué es una Media Query?

Una Media Query permite aplicar reglas CSS únicamente cuando se cumple una condición.

Ejemplo:

```css
@media (max-width: 600px) {

    body {
        font-size: .95rem;
    }

}
```

Estas reglas solo se aplican cuando el ancho de la pantalla es menor o igual a `600px`.

---

# Breakpoints utilizados

En este proyecto se utilizarán dos puntos de ruptura.

## Tabletas

```css
@media (max-width: 900px)
```

## Teléfonos móviles

```css
@media (max-width: 600px)
```

Cada uno adapta diferentes componentes.

---

# Adaptaciones para tablet

Cuando la pantalla sea menor de `900px`:

- Los contenedores reducen su ancho.
- Los proyectos pasan a una sola columna.
- La galería utiliza dos columnas.
- Las tablas pueden desplazarse horizontalmente.
- Video y audio ocupan todo el ancho disponible.

---

# Adaptaciones para móviles

Cuando la pantalla sea menor de `600px`:

- El menú pasa a ser vertical.
- Los botones ocupan todo el ancho.
- La galería muestra una sola columna.
- Las tarjetas reducen su relleno.
- Los títulos disminuyen su tamaño.

---

# Menú adaptable

En teléfonos móviles los enlaces pasan de:

```text
Inicio   Sobre mí   Proyectos
```

a:

```text
Inicio

Sobre mí

Proyectos

Galería

Contacto
```

Cada botón ocupa todo el ancho disponible.

---

# Galería adaptable

La galería cambia automáticamente.

### Escritorio

```text
🖼️ 🖼️ 🖼️
```

### Tableta

```text
🖼️ 🖼️

🖼️
```

### Móvil

```text
🖼️

🖼️

🖼️
```

---

# Tabla adaptable

Las tablas utilizan:

```css
overflow-x: auto;
```

Cuando el espacio horizontal es insuficiente el usuario podrá desplazarse lateralmente.

---

# Multimedia adaptable

Video y audio utilizan:

```css
width: 100%;
```

De esta forma nunca sobresalen del contenedor.

---

# Hoja de estilos incorporada

Durante este laboratorio se agregan únicamente las Media Queries al final del archivo `style.css`.

Todo el diseño construido anteriormente se conserva.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Conserva todos los estilos desarrollados anteriormente.
2. Agrega dos Media Queries.
3. Reduce progresivamente el tamaño de la ventana.
4. Observa el comportamiento del menú.
5. Comprueba la reorganización de los proyectos.
6. Verifica la galería.
7. Comprueba la adaptación del formulario.
8. Analiza el comportamiento de la multimedia.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Novena versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con Media Queries. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Recursos multimedia utilizados por el sitio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/09-diseno-responsive`.
2. Ejecute `index.html`.
3. Reduzca lentamente el ancho de la ventana.
4. Observe el comportamiento de todos los componentes.
5. Pruebe el sitio utilizando el modo responsive del navegador.

---

# Buenas prácticas

- Diseñar primero para escritorio y luego adaptar.
- Utilizar pocos breakpoints.
- No ocultar contenido importante.
- Mantener botones fáciles de seleccionar.
- Verificar el sitio en diferentes tamaños de pantalla.

---

# Reto

Compruebe el comportamiento del sitio en:

- 1200 px.
- 900 px.
- 768 px.
- 600 px.
- 480 px.

Anote qué componentes cambian en cada tamaño.

---

# Resultado esperado

Al finalizar el laboratorio el Proyecto Web Personal podrá visualizarse correctamente en computadores, tabletas y teléfonos móviles.

---

# Conclusiones

Las Media Queries permiten reutilizar un mismo documento HTML para múltiples dispositivos.

El diseño adaptable constituye actualmente una característica fundamental del desarrollo web moderno.

---

# ¿Qué sigue?

En el siguiente laboratorio se realizará la revisión final del Proyecto Web Personal y su publicación mediante GitHub y Netlify.