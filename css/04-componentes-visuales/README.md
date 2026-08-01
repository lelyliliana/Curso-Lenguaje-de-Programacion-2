# Laboratorio 04: Construcción de componentes visuales

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Contar con el Proyecto Web Personal desarrollado en el módulo de HTML.

**Concepto principal:**

Transformar las secciones del Proyecto Web Personal en componentes visuales reutilizables.

---

# Objetivo

Mejorar la presentación del Proyecto Web Personal mediante la construcción de componentes visuales utilizando fondos, bordes redondeados, sombras y contenedores.

---

# Descripción

Hasta el laboratorio anterior el Proyecto Web Personal cuenta con una identidad visual y una distribución organizada gracias al modelo de caja.

Sin embargo, cada sección continúa viéndose como un bloque sencillo.

En este laboratorio aprenderemos a construir **componentes visuales**, un patrón ampliamente utilizado en el desarrollo de interfaces modernas.

Cada sección del sitio se convertirá en una tarjeta (card), mejorando significativamente la organización y la apariencia del proyecto.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Hoja de estilos externa.
- ✅ Identidad visual.
- ✅ Modelo de caja.
- ✅ Espaciado organizado.

Después de este laboratorio contará con:

- ✅ Componentes visuales.
- ✅ Tarjetas (Cards).
- ✅ Contenedores centrados.
- ✅ Bordes redondeados.
- ✅ Sombras.
- ✅ Apariencia más profesional.

Próximamente construiremos:

- ⏳ Menú de navegación moderno.
- ⏳ Distribución mediante Flexbox.
- ⏳ Distribución mediante Grid.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de construir componentes visuales reutilizables mediante propiedades CSS relacionadas con fondos, bordes, sombras y contenedores.

---

# Conceptos trabajados

- `background-color`
- `border-radius`
- `box-shadow`
- `max-width`
- `margin: auto`
- Componentes visuales.
- Cards.

---

# ¿Qué es un componente visual?

Un componente visual es una parte de la interfaz que representa una unidad funcional y puede reutilizarse en diferentes partes del sitio.

Ejemplos de componentes son:

- Encabezado.
- Menú de navegación.
- Tarjeta de proyecto.
- Formulario.
- Pie de página.

Construir interfaces mediante componentes facilita el mantenimiento y la evolución del proyecto.

---

# ¿Qué es una card?

Una **card** o tarjeta es un componente visual utilizado para agrupar información relacionada dentro de un mismo contenedor.

Generalmente una tarjeta incluye:

- Fondo.
- Espaciado interno.
- Bordes.
- Esquinas redondeadas.
- Sombras.

Este patrón se utiliza ampliamente en aplicaciones web modernas.

---

# Fondo

El fondo permite diferenciar visualmente un componente.

Ejemplo:

```css
section {

    background-color: #fafafa;

}
```

---

# Bordes redondeados

La propiedad `border-radius` suaviza las esquinas de un elemento.

Ejemplo:

```css
border-radius: 12px;
```

Esto genera una apariencia más moderna.

---

# Sombras

Las sombras permiten separar visualmente un componente del fondo de la página.

Ejemplo:

```css
box-shadow: 0 4px 12px rgba(0, 0, 0, .10);
```

Las sombras deben utilizarse con moderación para evitar una apariencia sobrecargada.

---

# Contenedores

En este laboratorio el sitio dejará de ocupar todo el ancho del navegador.

Se utilizará:

```css
max-width: 1200px;

margin: auto;
```

Esto mantiene el contenido centrado y mejora la lectura en pantallas grandes.

---

# Hoja de estilos

Durante este laboratorio se incorporan propiedades como:

- `background-color`
- `border-radius`
- `box-shadow`
- `max-width`
- `margin: auto`

Estas reglas transforman el Proyecto Web Personal en una interfaz visualmente más organizada.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Centra el contenido principal del sitio.
2. Convierte las secciones en tarjetas.
3. Agrega fondos a los componentes.
4. Incorpora bordes redondeados.
5. Aplica sombras.
6. Observa la diferencia visual respecto al laboratorio anterior.
7. Analiza cómo pequeños cambios mejoran significativamente la apariencia del sitio.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Cuarta versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con componentes visuales. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/04-componentes-visuales`.
2. Ejecute `index.html`.
3. Observe la apariencia general del sitio.
4. Identifique las tarjetas creadas.
5. Modifique temporalmente el valor de `border-radius`.
6. Cambie el tamaño de la sombra.
7. Ajuste el ancho máximo del contenedor.
8. Guarde los cambios y actualice el navegador.

---

# Buenas prácticas

- Mantener una apariencia consistente en todos los componentes.
- Utilizar un mismo radio de borde para elementos similares.
- Aplicar sombras suaves.
- Evitar el uso excesivo de efectos visuales.
- Mantener una separación adecuada entre componentes.
- Reutilizar estilos siempre que sea posible.
- Diseñar pensando en la claridad del contenido.

---

# Reto

Mejore la apariencia del Proyecto Web Personal realizando algunas de las siguientes modificaciones:

1. Cambie el color de fondo de las tarjetas.
2. Modifique el radio de las esquinas.
3. Ajuste la intensidad de las sombras.
4. Cambie el ancho máximo del contenedor.
5. Cree una apariencia visual acorde con el tema de su proyecto.
6. Compare el resultado con la versión del laboratorio anterior.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal contará con una apariencia más moderna mediante el uso de componentes visuales reutilizables.

Las diferentes secciones estarán claramente diferenciadas y el contenido resultará más agradable de leer.

---

# Conclusiones

La mayoría de los sitios y aplicaciones web actuales organizan su contenido mediante componentes visuales.

Aprender a construir tarjetas y contenedores reutilizables facilita el desarrollo de interfaces consistentes y prepara al estudiante para trabajar posteriormente con frameworks como Bootstrap y bibliotecas basadas en componentes como React.

---

# ¿Qué sigue?

Ahora que el Proyecto Web Personal cuenta con componentes visuales, en el siguiente laboratorio aprenderemos a construir un **menú de navegación moderno**.

Aplicaremos nuevos estilos a los enlaces del menú para mejorar la experiencia del usuario y preparar el sitio para trabajar posteriormente con técnicas de distribución como Flexbox.