# Laboratorio 03: Organización del contenido mediante el modelo de caja

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Contar con el Proyecto Web Personal desarrollado durante el módulo de HTML.

**Concepto principal:**

Comprender y aplicar el modelo de caja de CSS para organizar el espacio que ocupa cada elemento del documento.

---

# Objetivo

Aplicar el modelo de caja de CSS para controlar el tamaño y el espacio de los elementos que conforman el Proyecto Web Personal.

---

# Descripción

Hasta el laboratorio anterior el Proyecto Web Personal ya cuenta con una identidad visual básica mediante colores y tipografía.

Sin embargo, los elementos todavía aparecen muy juntos y el sitio resulta difícil de leer.

En este laboratorio aprenderemos que todos los elementos HTML se comportan como una caja y que podemos controlar el espacio que ocupan mediante propiedades como márgenes, rellenos y bordes.

Estos conceptos constituyen la base para construir diseños organizados y serán indispensables para trabajar posteriormente con Flexbox y Grid.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Hoja de estilos externa.
- ✅ Identidad visual.
- ✅ Paleta de colores.
- ✅ Tipografía.
- ✅ Variables CSS.

Después de este laboratorio contará con:

- ✅ Espacios internos organizados.
- ✅ Separación entre secciones.
- ✅ Bordes en imágenes y tablas.
- ✅ Distribución más limpia.
- ✅ Mejor legibilidad.

Próximamente construiremos:

- ⏳ Tarjetas.
- ⏳ Fondos.
- ⏳ Bordes redondeados.
- ⏳ Sombras.
- ⏳ Componentes reutilizables.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de controlar el espacio ocupado por los elementos HTML mediante las propiedades fundamentales del modelo de caja de CSS.

---

# Conceptos trabajados

- Modelo de caja.
- `margin`
- `padding`
- `border`
- `width`
- `box-sizing`

---

# El modelo de caja

Todos los elementos HTML se representan como una caja.

Cada caja está formada por cuatro partes:

```text
+----------------------------------+
|             Margin               |
|  +----------------------------+  |
|  |          Border            |  |
|  |  +----------------------+  |  |
|  |  |      Padding         |  |  |
|  |  |  +---------------+   |  |  |
|  |  |  |   Contenido   |   |  |  |
|  |  |  +---------------+   |  |  |
|  |  +----------------------+  |  |
|  +----------------------------+  |
+----------------------------------+
```

Comprender esta estructura permitirá controlar la distribución visual del sitio.

---

# Margin

El margen representa el espacio exterior de una caja.

```css
section {

    margin-bottom: 40px;

}
```

En este ejemplo se agrega espacio entre una sección y la siguiente.

---

# Padding

El relleno representa el espacio entre el contenido y el borde del elemento.

```css
body > header {
    padding: 30px;
}
```

Al aumentar el `padding`, el contenido deja de estar pegado al borde.

---

# Border

El borde rodea el contenido y el relleno.

```css
img {

    border: 3px solid var(--color-primario);

}
```

Los bordes permiten delimitar visualmente los elementos.

---

# Width

La propiedad `width` controla el ancho de un elemento.

```css
table {

    width: 100%;

}
```

En este caso la tabla ocupa todo el ancho disponible dentro de su contenedor.

---

# Box-sizing

Durante este laboratorio incorporaremos la siguiente regla general:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Esta regla elimina los márgenes y rellenos predeterminados del navegador y establece un cálculo de dimensiones más predecible mediante `border-box`.

Con esta configuración, el ancho y el alto de un elemento incluyen el contenido, el relleno y el borde, facilitando el diseño y evitando cálculos innecesarios.

Con esta configuración, el ancho y el alto de un elemento incluyen el contenido, el relleno y el borde, facilitando el diseño y evitando cálculos innecesarios.

---

# Hoja de estilos

Durante este laboratorio se incorporan propiedades como:

- `margin`
- `padding`
- `border`
- `width`
- `box-sizing`

Estas reglas mejoran la organización visual del Proyecto Web Personal sin modificar su estructura HTML.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Agrega un reset básico al documento.
2. Incorpora espacios internos mediante `padding`.
3. Separa las secciones utilizando `margin`.
4. Agrega bordes a diferentes elementos.
5. Ajusta el ancho de algunos componentes.
6. Observa cómo cambia la presentación del sitio.
7. Experimenta modificando los valores de cada propiedad.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Tercera versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con aplicación del modelo de caja. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/03-modelo-caja`.
2. Ejecute `index.html`.
3. Observe el espacio entre las secciones.
4. Identifique los cambios producidos por `padding`.
5. Modifique temporalmente algunos valores de `margin`.
6. Cambie el grosor de un borde.
7. Guarde los cambios y actualice el navegador.

---

# Buenas prácticas

- Utilizar `padding` para separar el contenido del borde.
- Utilizar `margin` para separar elementos entre sí.
- Evitar agregar espacios utilizando etiquetas HTML.
- Utilizar `box-sizing: border-box` para simplificar el cálculo de dimensiones.
- Mantener valores de espaciado consistentes en todo el sitio.
- Aplicar bordes únicamente cuando aporten claridad visual.

---

# Reto

Experimente modificando los valores del modelo de caja.

Puede realizar las siguientes pruebas:

1. Cambie el `padding` del encabezado.
2. Aumente y disminuya el `margin` entre las secciones.
3. Modifique el grosor del borde de las imágenes.
4. Cambie el ancho de la tabla.
5. Observe cómo cada modificación afecta la presentación del sitio.

Después de experimentar, restaure una configuración equilibrada.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal presentará una distribución más organizada gracias al uso adecuado de márgenes, rellenos, bordes y dimensiones.

El contenido será más legible, las secciones tendrán una separación adecuada y las imágenes y tablas estarán mejor delimitadas.

La transformación de las secciones en componentes visuales se realizará en el siguiente laboratorio.

---

# Conclusiones

El modelo de caja constituye uno de los conceptos fundamentales de CSS.

Comprender cómo se distribuyen el contenido, el relleno, el borde y el margen permite construir interfaces más limpias, organizadas y fáciles de mantener.

Estos conocimientos serán la base para utilizar herramientas de distribución más avanzadas como Flexbox y Grid.

---

# ¿Qué sigue?

Ahora que el Proyecto Web Personal tiene una distribución más organizada, en el siguiente laboratorio transformaremos sus secciones en componentes visuales más atractivos mediante el uso de:

- Fondos.
- Bordes redondeados.
- Sombras.
- Contenedores.
- Tarjetas (Cards).

El sitio comenzará a adquirir una apariencia mucho más cercana a la de una página web profesional.