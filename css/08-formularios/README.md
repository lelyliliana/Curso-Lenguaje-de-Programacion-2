# Laboratorio 08: Diseño visual de formularios

**Nivel:** Intermedio

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Laboratorio 01: Vinculación de la hoja de estilos.
- Laboratorio 02: Construcción de la identidad visual.
- Laboratorio 03: Organización del contenido mediante el modelo de caja.
- Laboratorio 04: Construcción de componentes visuales.
- Laboratorio 05: Diseño del menú de navegación.
- Laboratorio 06: Organización de proyectos con Flexbox.
- Laboratorio 07: Organización de la galería mediante CSS Grid.
- Contar con la versión completa del Proyecto Web Personal.

**Concepto principal:**

Mejorar la apariencia y la experiencia de uso de los formularios mediante CSS.

---

# Objetivo

Aplicar estilos al formulario del Proyecto Web Personal para mejorar su legibilidad, consistencia y experiencia de uso.

---

# Descripción

Hasta este momento el Proyecto Web Personal cuenta con una estructura organizada y una distribución moderna mediante Flexbox y Grid.

Sin embargo, el formulario todavía presenta una apariencia muy básica.

En este laboratorio se mejorarán visualmente:

- Campos de texto.
- Áreas de texto.
- Listas desplegables.
- Casillas de verificación.
- Botones.

También se incorporarán efectos cuando un control recibe el foco del teclado, mejorando la accesibilidad y la experiencia del usuario.

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal incluye:

- ✅ Identidad visual.
- ✅ Modelo de caja.
- ✅ Componentes visuales.
- ✅ Menú moderno.
- ✅ Flexbox.
- ✅ Grid.

Después de este laboratorio contará con:

- ✅ Formulario moderno.
- ✅ Campos uniformes.
- ✅ Estados de foco.
- ✅ Botones consistentes.
- ✅ Mejor experiencia de usuario.

Próximamente se incorporarán:

- ⏳ Diseño adaptable.
- ⏳ Publicación final.

---

# Competencia

Al finalizar este laboratorio el estudiante será capaz de diseñar formularios modernos mediante CSS aplicando estilos consistentes y mejorando la interacción del usuario.

---

# Conceptos trabajados

- `border`
- `border-radius`
- `font`
- `font-weight`
- `outline`
- `box-shadow`
- `transition`
- `:focus`
- `min-height`
- `resize`

---

# ¿Por qué estilizar formularios?

Los formularios representan uno de los principales mecanismos de comunicación entre un usuario y un sitio web.

Una buena presentación facilita:

- La lectura.
- El diligenciamiento.
- La identificación de errores.
- La accesibilidad.
- La experiencia general del usuario.

---

# Controles del formulario

Durante este laboratorio se aplicarán estilos a:

- `<input>`
- `<textarea>`
- `<select>`
- `<button>`

Todos compartirán una apariencia consistente.

---

# Campos de entrada

Los controles utilizan:

```css
input,
textarea,
select {

    width: 100%;

    padding: 12px;

    border: 1px solid var(--color-borde);

    border-radius: 8px;

}
```

Esto genera una apariencia uniforme en todos los campos.

---

# Focus

Cuando un usuario selecciona un campo mediante el teclado o el mouse, dicho elemento recibe el foco.

El estado se representa mediante:

```css
input:focus,
textarea:focus,
select:focus {
    border-color: var(--color-secundario);
    box-shadow: 0 0 0 3px rgba(0,86,179,.15);
    outline: none;
}
```

El borde cambia de color y aparece una sombra suave.

---

# Outline

Los navegadores muestran un contorno predeterminado cuando un elemento recibe el foco.

En este laboratorio se reemplaza mediante:

```css
outline: none;
```

y se utiliza una sombra personalizada para mantener una apariencia consistente.

---

# Textarea

El área de texto incorpora:

```css
min-height: 140px;
```

Esto garantiza un espacio suficiente para escribir mensajes largos.

Además:

```css
resize: vertical;
```

permite modificar únicamente la altura del control.

---

# Botones

Los botones incorporan:

- Color.
- Bordes redondeados.
- Transiciones.
- Desplazamiento.
- Sombras.

Ejemplo:

```css
button:hover {

    background-color: var(--color-primario);

    transform: translateY(-2px);

}
```

---

# Botón de limpieza

El botón:

```html
<button type="reset">
```

utiliza un color diferente para distinguirlo del botón principal.

```css
button[type="reset"] {

    background-color: #5f6873;

}
```

---

# Transiciones

Las transiciones permiten que el cambio visual ocurra gradualmente.

```css
transition:
    background-color .3s,
    transform .2s,
    box-shadow .2s;
```

---

# Hoja de estilos incorporada

Durante este laboratorio se reemplaza completamente la sección correspondiente a formularios y botones de la hoja de estilos.

Las nuevas reglas incorporan:

- Espaciado uniforme.
- Bordes redondeados.
- Colores.
- Estados de foco.
- Botones modernos.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Conserva todos los estilos desarrollados anteriormente.
2. Mejora la apariencia del formulario.
3. Personaliza los campos de entrada.
4. Agrega estados de foco.
5. Mejora los botones.
6. Prueba el formulario utilizando teclado y mouse.
7. Verifica la consistencia visual.

---

# Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Octava versión del Proyecto Web con CSS. |
| `style.css` | Hoja de estilos con formularios modernos. |
| `README.md` | Documentación del laboratorio. |
| `img/` | Recursos gráficos utilizados por el sitio. |
| `multimedia/` | Archivos de audio y video. |

---

# Cómo ejecutar el laboratorio

1. Abra la carpeta `css/08-formularios`.
2. Ejecute `index.html`.
3. Localice la sección **Contacto**.
4. Seleccione cada campo del formulario.
5. Observe el efecto del foco.
6. Escriba información de prueba.
7. Utilice los botones.
8. Verifique la consistencia visual.

---

# Buenas prácticas

- Mantener todos los controles con la misma apariencia.
- Utilizar indicadores claros para el foco.
- No eliminar completamente la retroalimentación visual.
- Utilizar botones claramente diferenciados.
- Evitar colores excesivamente llamativos.
- Mantener una separación adecuada entre controles.

---

# Reto

Personalice el formulario.

Puede:

1. Cambiar los colores.
2. Modificar el radio de las esquinas.
3. Ajustar el grosor del borde.
4. Cambiar la intensidad de la sombra.
5. Personalizar el botón de limpieza.
6. Verificar la accesibilidad utilizando únicamente el teclado.

---

# Resultado esperado

Al finalizar el laboratorio el Proyecto Web Personal contará con un formulario moderno, consistente y preparado para ser utilizado por el usuario.

---

# Conclusiones

La apariencia de un formulario influye directamente en la experiencia del usuario.

Un diseño consistente facilita la captura de información, mejora la accesibilidad y prepara el sitio para incorporar posteriormente validaciones mediante JavaScript.

---

# ¿Qué sigue?

En el siguiente laboratorio adaptaremos todo el Proyecto Web Personal para diferentes tamaños de pantalla mediante **media queries**.

El sitio podrá visualizarse correctamente en:

- Computadores.
- Tabletas.
- Teléfonos móviles.