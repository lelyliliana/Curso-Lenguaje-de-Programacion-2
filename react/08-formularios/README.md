# Laboratorio 08: Formularios controlados en React

**Nivel:** Básico

**Duración estimada:** 90 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Laboratorio 03: JSX y primer componente.
- Laboratorio 04: Componentización del Proyecto Web Personal.
- Laboratorio 05: Reutilización de componentes mediante Props.
- Laboratorio 06: Estado y eventos en React.
- Laboratorio 07: Listas y renderizado condicional.
- Comprender el uso de `useState`.
- Comprender eventos como `onClick`.
- Tener funcionando el Proyecto Web Personal.

**Concepto principal:**

Administrar mediante React la información escrita por el usuario dentro de un formulario.

---

# Objetivo

Construir un formulario controlado utilizando estado, eventos, validación básica y limpieza de campos.

---

# Introducción

En los laboratorios anteriores utilizamos estado para almacenar información que cambia durante la ejecución.

También trabajamos con eventos como:

```jsx
onClick
```

Ahora utilizaremos esos conocimientos para construir un formulario de contacto.

En un formulario tradicional, el navegador administra directamente los valores de los campos.

En un formulario controlado, React almacena y administra esos valores mediante estado.

Esto permite:

- Conocer el contenido de cada campo.
- Validar la información.
- Mostrar mensajes.
- Limpiar el formulario.
- Evitar el envío tradicional de la página.

---

# La gran pregunta

> **¿Cómo capturamos y administramos con React la información escrita por el usuario?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Componentes reutilizables.
- ✅ Props.
- ✅ Estado local.
- ✅ Eventos.
- ✅ Listas generadas mediante `map()`.
- ✅ Renderizado condicional.
- ✅ Datos separados de la interfaz.

Después de este laboratorio tendremos:

- ✅ Formulario de contacto.
- ✅ Campos controlados.
- ✅ Estado almacenado en un objeto.
- ✅ Evento `onChange`.
- ✅ Evento `onSubmit`.
- ✅ Uso de `preventDefault()`.
- ✅ Validación básica.
- ✅ Limpieza de campos.
- ✅ Mensaje de confirmación.

En el siguiente laboratorio aprenderemos a ejecutar efectos mediante `useEffect`.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de construir formularios controlados, administrar sus campos mediante estado y responder al envío de información.

---

# ¿Qué es un formulario controlado?

Un formulario controlado es aquel cuyos campos reciben su valor desde el estado de React.

Por ejemplo:

```jsx
<input
  value={formulario.nombre}
/>
```

El valor visible del campo depende de:

```text
formulario.nombre
```

Cuando el usuario escribe, React actualiza el estado.

---

# Flujo de un campo controlado

```text
Usuario escribe
        ↓
Se ejecuta onChange
        ↓
Se actualiza el estado
        ↓
React vuelve a renderizar
        ↓
El campo muestra el nuevo valor
```

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/07-listas-condicionales/proyecto-web-personal
```

La nueva versión estará en:

```text
react/08-formularios/proyecto-web-personal
```

---

# Paso 1. Copiar el proyecto anterior

Desde la carpeta:

```text
react
```

ejecute:

```bash
rsync -av \
  --exclude node_modules \
  07-listas-condicionales/proyecto-web-personal/ \
  08-formularios/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 08-formularios/proyecto-web-personal
```

---

# Paso 3. Instalar las dependencias

Ejecute:

```bash
npm install
```

---

# Paso 4. Ejecutar la aplicación

Ejecute:

```bash
npm run dev
```

La página debe verse igual que en el Laboratorio 07 antes de realizar los cambios.

---

# Estructura inicial

```text
src
├── components
│   ├── Contador.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ListaProyectos.jsx
│   ├── Main.jsx
│   ├── Seccion.jsx
│   └── TarjetaProyecto.jsx
├── data
│   └── proyectos.js
├── App.jsx
├── index.css
└── main.jsx
```

---

# Estructura final

```text
src
├── components
│   ├── Contador.jsx
│   ├── Footer.jsx
│   ├── FormularioContacto.jsx
│   ├── Header.jsx
│   ├── ListaProyectos.jsx
│   ├── Main.jsx
│   ├── Seccion.jsx
│   └── TarjetaProyecto.jsx
├── data
│   └── proyectos.js
├── App.jsx
├── index.css
└── main.jsx
```

---

# Paso 5. Crear FormularioContacto.jsx

Cree:

```text
src/components/FormularioContacto.jsx
```

Escriba:

```jsx
import { useState } from "react"

function FormularioContacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  })

  const [enviado, setEnviado] = useState(false)

  function manejarCambio(evento) {

    const { name, value } = evento.target

    setFormulario((valoresAnteriores) => ({
      ...valoresAnteriores,
      [name]: value
    }))

    setEnviado(false)
  }

  function manejarEnvio(evento) {

    evento.preventDefault()

    if (
      formulario.nombre.trim() === "" ||
      formulario.correo.trim() === "" ||
      formulario.mensaje.trim() === ""
    ) {
      return
    }

    setEnviado(true)

    setFormulario({
      nombre: "",
      correo: "",
      mensaje: ""
    })
  }

  return (
    <section>

      <h2>
        Contacto
      </h2>

      <form onSubmit={manejarEnvio}>

        <div>

          <label htmlFor="nombre">
            Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formulario.nombre}
            onChange={manejarCambio}
          />

        </div>

        <div>

          <label htmlFor="correo">
            Correo electrónico
          </label>

          <input
            id="correo"
            name="correo"
            type="email"
            value={formulario.correo}
            onChange={manejarCambio}
          />

        </div>

        <div>

          <label htmlFor="mensaje">
            Mensaje
          </label>

          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
          />

        </div>

        <button type="submit">
          Enviar
        </button>

      </form>

      {enviado && (
        <p>
          El formulario fue enviado correctamente.
        </p>
      )}

    </section>
  )

}

export default FormularioContacto
```

---

# Estado del formulario

El formulario utiliza un objeto:

```jsx
const [formulario, setFormulario] = useState({
  nombre: "",
  correo: "",
  mensaje: ""
})
```

Este objeto almacena los tres campos.

Su estructura es:

```text
formulario
├── nombre
├── correo
└── mensaje
```

---

# Estado de confirmación

También se crea:

```jsx
const [enviado, setEnviado] = useState(false)
```

Este estado permite saber si el formulario fue enviado correctamente.

Valor inicial:

```text
false
```

Después del envío:

```text
true
```

---

# El evento onChange

Cada campo utiliza:

```jsx
onChange={manejarCambio}
```

Este evento se ejecuta cada vez que el usuario modifica el contenido.

---

# El objeto evento

La función recibe:

```jsx
evento
```

Este objeto contiene información sobre la acción realizada.

Por ejemplo:

```jsx
evento.target
```

representa el campo que originó el evento.

---

# Desestructuración del campo

```jsx
const { name, value } = evento.target
```

Esta instrucción obtiene:

```text
name
```

Nombre del campo.

```text
value
```

Contenido actual.

---

# Importancia de name

Cada campo tiene una propiedad:

```jsx
name
```

Ejemplo:

```jsx
name="nombre"
```

El valor debe coincidir con una propiedad del objeto de estado:

```javascript
nombre
```

Los otros campos utilizan:

```text
correo
mensaje
```

---

# Actualización del objeto

```jsx
setFormulario((valoresAnteriores) => ({
  ...valoresAnteriores,
  [name]: value
}))
```

Esta instrucción:

1. Conserva los valores anteriores.
2. Identifica el campo modificado.
3. Actualiza solamente esa propiedad.

---

# Operador de propagación

```javascript
...valoresAnteriores
```

Copia las propiedades existentes del objeto.

Sin esta instrucción podrían perderse los valores de los otros campos.

---

# Propiedad calculada

```javascript
[name]: value
```

Permite elegir dinámicamente la propiedad que debe actualizarse.

Si:

```text
name = "correo"
```

React actualiza:

```javascript
correo: value
```

---

# Vinculación mediante value

El campo de nombre utiliza:

```jsx
value={formulario.nombre}
```

El campo de correo:

```jsx
value={formulario.correo}
```

El mensaje:

```jsx
value={formulario.mensaje}
```

Esto convierte los campos en elementos controlados.

---

# Label y htmlFor

En HTML se utiliza:

```html
<label for="nombre">
```

En JSX se utiliza:

```jsx
<label htmlFor="nombre">
```

El valor debe coincidir con el `id` del campo:

```jsx
id="nombre"
```

---

# El evento onSubmit

El formulario contiene:

```jsx
<form onSubmit={manejarEnvio}>
```

Cuando el usuario presiona el botón de envío, React ejecuta:

```text
manejarEnvio
```

---

# Evitar el envío tradicional

```jsx
evento.preventDefault()
```

Evita que el navegador:

- Recargue la página.
- Intente enviar el formulario mediante el comportamiento tradicional.
- Pierda el estado de la aplicación.

---

# Validación básica

Antes de aceptar el envío se comprueba:

```jsx
if (
  formulario.nombre.trim() === "" ||
  formulario.correo.trim() === "" ||
  formulario.mensaje.trim() === ""
) {
  return
}
```

Si alguno está vacío, la función termina.

---

# ¿Qué hace trim()?

```javascript
trim()
```

elimina espacios al inicio y al final.

Así se evita aceptar valores como:

```text
"      "
```

---

# Operador lógico OR

```javascript
||
```

significa:

```text
O
```

La condición se cumple si:

- El nombre está vacío.
- O el correo está vacío.
- O el mensaje está vacío.

---

# Confirmación del envío

Cuando la validación es correcta:

```jsx
setEnviado(true)
```

Después React muestra:

```jsx
{enviado && (
  <p>
    El formulario fue enviado correctamente.
  </p>
)}
```

---

# Renderizado condicional con &&

La expresión:

```jsx
enviado && (...)
```

significa:

```text
Si enviado es verdadero:
    Mostrar contenido
```

Si es falso, no se muestra el mensaje.

---

# Limpieza del formulario

Después del envío se ejecuta:

```jsx
setFormulario({
  nombre: "",
  correo: "",
  mensaje: ""
})
```

Como cada campo obtiene su valor desde el estado, los campos quedan vacíos automáticamente.

---

# Ocultar el mensaje al escribir nuevamente

Dentro de `manejarCambio` aparece:

```jsx
setEnviado(false)
```

Cuando el usuario vuelve a escribir, el mensaje anterior desaparece.

---

# Paso 6. Actualizar Main.jsx

Abra:

```text
src/components/Main.jsx
```

y reemplace su contenido por:

```jsx
import Seccion from "./Seccion"
import Contador from "./Contador"
import ListaProyectos from "./ListaProyectos"
import FormularioContacto from "./FormularioContacto"
import proyectos from "../data/proyectos"

function Main() {

  return (
    <main>

      <Seccion
        titulo="Bienvenida"
        contenido="En este proyecto aprenderemos a construir interfaces mediante JSX y componentes de React."
      />

      <Seccion
        titulo="Objetivo del proyecto"
        contenido="Desarrollar progresivamente un sitio web personal utilizando componentes reutilizables."
      />

      <ListaProyectos
        proyectos={proyectos}
      />

      <Contador />

      <FormularioContacto />

    </main>
  )

}

export default Main
```

---

# Integración del formulario

Primero se importa:

```jsx
import FormularioContacto from "./FormularioContacto"
```

Después se utiliza:

```jsx
<FormularioContacto />
```

---

# Flujo completo del formulario

```text
Usuario escribe
        ↓
onChange
        ↓
manejarCambio
        ↓
setFormulario
        ↓
Estado actualizado
        ↓
Campo actualizado
```

Al enviar:

```text
Usuario presiona Enviar
        ↓
onSubmit
        ↓
manejarEnvio
        ↓
preventDefault()
        ↓
Validación
        ↓
Mensaje de confirmación
        ↓
Limpieza de campos
```

---

# Archivos creados

Durante este laboratorio se crea:

```text
src/components/FormularioContacto.jsx
```

---

# Archivo modificado

Se modifica:

```text
src/components/Main.jsx
```

---

# Archivos que no se modifican

```text
src/App.jsx
src/components/Header.jsx
src/components/Footer.jsx
src/components/Seccion.jsx
src/components/Contador.jsx
src/components/ListaProyectos.jsx
src/components/TarjetaProyecto.jsx
src/data/proyectos.js
src/main.jsx
src/index.css
index.html
package.json
package-lock.json
vite.config.js
eslint.config.js
```

---

# Verificación

Ejecute:

```bash
npm run lint
```

Después:

```bash
npm run dev
```

Compruebe:

1. Los tres campos permiten escribir.
2. Cada campo conserva su contenido.
3. El botón envía el formulario.
4. Los campos vacíos impiden el envío.
5. El envío correcto muestra un mensaje.
6. Los campos se limpian.
7. El mensaje desaparece al volver a escribir.
8. La página no se recarga.
9. La consola no muestra errores.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Crea `FormularioContacto`.
5. Declara un objeto como estado.
6. Vincula campos mediante `value`.
7. Utiliza `onChange`.
8. Actualiza propiedades calculadas.
9. Utiliza `onSubmit`.
10. Evita el envío tradicional.
11. Implementa validación básica.
12. Limpia los campos.
13. Muestra un mensaje condicional.
14. Integra el formulario en `Main`.
15. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
08-formularios
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Contador.jsx
    │   │   ├── Footer.jsx
    │   │   ├── FormularioContacto.jsx
    │   │   ├── Header.jsx
    │   │   ├── ListaProyectos.jsx
    │   │   ├── Main.jsx
    │   │   ├── Seccion.jsx
    │   │   └── TarjetaProyecto.jsx
    │   ├── data
    │   │   └── proyectos.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

# Errores frecuentes

## No importar useState

Debe incluirse:

```jsx
import { useState } from "react"
```

---

## No agregar value

Sin:

```jsx
value={formulario.nombre}
```

el campo no estará completamente controlado por React.

---

## No agregar onChange

Un campo con `value` pero sin `onChange` quedará bloqueado.

---

## El name no coincide

Incorrecto:

```jsx
name="email"
```

si el estado contiene:

```javascript
correo
```

Correcto:

```jsx
name="correo"
```

---

## No conservar los valores anteriores

Incorrecto:

```jsx
setFormulario({
  [name]: value
})
```

Esto eliminaría las demás propiedades.

Correcto:

```jsx
setFormulario((valoresAnteriores) => ({
  ...valoresAnteriores,
  [name]: value
}))
```

---

## No usar preventDefault

La página puede recargarse al enviar.

Debe utilizarse:

```jsx
evento.preventDefault()
```

---

## Escribir for en label

Incorrecto:

```jsx
<label for="nombre">
```

Correcto:

```jsx
<label htmlFor="nombre">
```

---

## No usar type submit

El botón de envío debe tener:

```jsx
type="submit"
```

---

## Ejecutar manejarEnvio manualmente

El formulario debe utilizar:

```jsx
onSubmit={manejarEnvio}
```

---

# Buenas prácticas

- Utilizar formularios controlados.
- Mantener nombres consistentes entre estado y campos.
- Asociar cada `label` con su campo.
- Utilizar `type="email"` para correos.
- Evitar modificar objetos directamente.
- Utilizar el operador de propagación.
- Prevenir el envío tradicional.
- Validar antes de procesar.
- Limpiar los campos después del envío.
- Mostrar retroalimentación al usuario.
- Ejecutar ESLint.
- Probar campos vacíos y completos.

---

# Reto

Agregue un nuevo campo:

```text
Asunto
```

Debe incluirse en el estado:

```javascript
asunto: ""
```

Cree:

```jsx
<label htmlFor="asunto">
  Asunto
</label>

<input
  id="asunto"
  name="asunto"
  type="text"
  value={formulario.asunto}
  onChange={manejarCambio}
/>
```

Después:

1. Inclúyalo en la validación.
2. Límpielo al enviar.
3. Compruebe que el formulario continúe funcionando.
4. Ejecute `npm run lint`.

Como reto adicional, muestre un mensaje de error cuando falte información.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es un formulario controlado.
- Administrar varios campos mediante un objeto.
- Utilizar `value`.
- Utilizar `onChange`.
- Utilizar `onSubmit`.
- Comprender el objeto evento.
- Utilizar `preventDefault()`.
- Actualizar propiedades calculadas.
- Conservar propiedades con propagación.
- Validar campos básicos.
- Limpiar el formulario.
- Mostrar mensajes condicionales.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

Los formularios controlados permiten que React administre la información escrita por el usuario.

Cada campo se conecta con el estado mediante:

```text
value
onChange
```

El evento:

```jsx
onSubmit
```

permite procesar el formulario desde React.

`preventDefault()` evita que el navegador recargue la página.

En este laboratorio, el Proyecto Web Personal incorporó un formulario de contacto completamente administrado por React.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo ejecutamos código cuando un componente aparece o cuando cambia un valor?**

Aprenderemos a utilizar:

- `useEffect`.
- Efectos secundarios.
- Arreglo de dependencias.
- Ejecución inicial.
- Actualización del título del documento.
- Limpieza de efectos.
- Relación entre estado y efectos.

El Proyecto Web Personal comenzará a sincronizarse con elementos externos al renderizado.