# Laboratorio 05: Diseño del menú de navegación

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Laboratorio 04: Construcción de componentes visuales.
- Contar con el Proyecto Web Personal desarrollado durante el módulo de HTML.

**Concepto principal:**

Diseñar un menú de navegación atractivo y mejorar la interacción con los enlaces mediante pseudo-clases CSS.

---

# Objetivo

Mejorar la apariencia y el comportamiento del menú de navegación del Proyecto Web Personal aplicando estilos y efectos visuales que faciliten la interacción del usuario.

---

# Descripción

Hasta el laboratorio anterior el Proyecto Web Personal cuenta con una estructura organizada y componentes visuales que mejoran su presentación.

Sin embargo, el menú de navegación todavía conserva la apariencia predeterminada del navegador.

En este laboratorio aprenderemos a transformar los enlaces del menú en botones visuales, aplicando colores, espaciado, bordes redondeados y efectos cuando el usuario interactúa con ellos.

Estas mejoras permitirán ofrecer una experiencia de navegación más clara y agradable.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Hoja de estilos externa.
- ✅ Identidad visual.
- ✅ Modelo de caja.
- ✅ Componentes visuales.

Después de este laboratorio contará con:

- ✅ Menú de navegación moderno.
- ✅ Botones para navegación.
- ✅ Efectos visuales al interactuar.
- ✅ Mejor experiencia de usuario.

Próximamente construiremos:

- ⏳ Distribución mediante Flexbox.
- ⏳ Distribución mediante Grid.
- ⏳ Diseño adaptable.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de diseñar un menú de navegación utilizando estilos CSS y pseudo-clases para mejorar la interacción del usuario.

---

# Conceptos trabajados

- `display`
- `padding`
- `background-color`
- `color`
- `border-radius`
- `transition`
- `:hover`
- `:visited`
- `:active`

---

# ¿Qué es un menú de navegación?

Un menú de navegación permite al usuario desplazarse entre las diferentes secciones de un sitio web.

Debe ser:

- Fácil de identificar.
- Visible.
- Consistente.
- Intuitivo.
- Fácil de utilizar.

En este proyecto el menú conecta las principales secciones del sitio mediante enlaces internos.

---

# Botones de navegación

Los enlaces del menú dejarán de verse como texto subrayado y pasarán a presentarse como botones.

Ejemplo:

```css
nav a {

    display: inline-block;

    background-color: var(--color-secundario);

    color: white;

    text-decoration: none;

    padding: 10px 18px;

    border-radius: 8px;

}
```

Esto mejora la percepción visual y facilita identificar los elementos interactivos.

---

# Pseudo-clases

Las pseudo-clases permiten modificar la apariencia de un elemento según el estado en el que se encuentre.

---

## :hover

Se activa cuando el usuario coloca el cursor sobre un elemento.

```css
nav a:hover {

    background-color: var(--color-primario);

}
```

Este efecto comunica al usuario que el enlace puede seleccionarse.

---

## :visited

Representa un enlace que ya fue visitado.

```css
nav a:visited {

    color: white;

}
```

En este laboratorio mantenemos el mismo color para conservar la identidad visual del menú.

---

## :active

Representa el instante en que el usuario hace clic sobre el enlace.

```css
nav a:active {

    transform: scale(.98);

}
```

Este pequeño efecto simula la sensación de que el botón está siendo presionado.

---

# Transiciones

Las transiciones permiten que un cambio visual ocurra de forma gradual.

Ejemplo:

```css
transition: background-color .3s;
```

En lugar de cambiar el color de manera inmediata, el navegador realiza una transición suave.

---

# Experiencia de usuario (UX)

Un sitio web no solo debe verse bien.

También debe comunicar claramente qué elementos son interactivos.

Cuando un enlace cambia de color al pasar el cursor sobre él:

- El usuario identifica rápidamente que puede hacer clic.
- La navegación resulta más intuitiva.
- Se mejora la experiencia de uso del sitio.

Pequeños detalles como este hacen que una interfaz resulte más cómoda y profesional.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Personaliza el menú de navegación.
2. Convierte los enlaces en botones.
3. Aplica colores de fondo.
4. Incorpora bordes redondeados.
5. Agrega transiciones.
6. Implementa efectos para diferentes estados del enlace.
7. Comprueba el comportamiento del menú al interactuar con él.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Quinta versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con el diseño del menú de navegación. |
| `README.md` | Documentación del laboratorio. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/05-menu-navegacion`.
2. Ejecute `index.html`.
3. Observe el nuevo diseño del menú.
4. Pase el cursor sobre los enlaces.
5. Haga clic sobre cada opción.
6. Analice el comportamiento de los diferentes estados del enlace.

---

# Buenas prácticas

- Mantener una apariencia uniforme en todos los botones.
- Utilizar colores con buen contraste.
- No eliminar los efectos visuales de interacción.
- Aplicar transiciones discretas.
- Mantener un tamaño adecuado para facilitar la selección de los enlaces.
- Evitar cambios excesivos que distraigan al usuario.

---

# Reto

Personalice el menú de navegación del Proyecto Web Personal.

Puede realizar algunas de las siguientes modificaciones:

1. Cambiar los colores de los botones.
2. Ajustar el tamaño del relleno (`padding`).
3. Modificar el radio de las esquinas.
4. Cambiar la duración de la transición.
5. Incorporar un efecto diferente para `:hover`.
6. Adaptar el diseño del menú al tema de su proyecto.

---

# Resultado esperado

Al finalizar el laboratorio, el Proyecto Web Personal contará con un menú de navegación moderno, fácil de identificar y con efectos visuales que mejoran la interacción del usuario.

---

# Conclusiones

El menú de navegación constituye uno de los componentes más importantes de un sitio web.

Aplicar estilos y efectos visuales adecuados mejora la experiencia del usuario, facilita la exploración del contenido y aporta una apariencia más profesional al proyecto.

Las pseudo-clases permiten responder a las acciones del usuario sin necesidad de utilizar JavaScript.

---

# ¿Qué sigue?

Hasta este momento los componentes del sitio se distribuyen siguiendo el flujo normal del documento HTML.

En el siguiente laboratorio aprenderemos a utilizar **Flexbox** para organizar los elementos de forma más flexible y eficiente.

Aplicaremos esta técnica para distribuir componentes horizontal y verticalmente, creando diseños más modernos y adaptables.