# Laboratorio 05: Reutilización de componentes mediante Props

**Nivel:** Básico

**Duración estimada:** 75 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Laboratorio 03: JSX y primer componente.
- Laboratorio 04: Componentización del Proyecto Web Personal.
- Tener funcionando el Proyecto Web Personal.
- Comprender cómo importar y utilizar componentes.

**Concepto principal:**

Enviar información desde un componente padre hacia componentes hijos mediante props.

---

# Objetivo

Utilizar props para personalizar componentes y reutilizar una misma estructura con información diferente dentro del Proyecto Web Personal.

---

# Introducción

En el laboratorio anterior dividimos la aplicación en varios componentes:

```text
App
├── Header
├── Main
└── Footer
```

Cada componente tenía una responsabilidad clara.

Sin embargo, la información todavía estaba escrita directamente dentro de cada archivo.

Por ejemplo, el título del proyecto se encontraba dentro de:

```text
Header.jsx
```

y el nombre del curso dentro de:

```text
Footer.jsx
```

Esta estructura funciona, pero limita la reutilización.

En este laboratorio aprenderemos a enviar información desde un componente hacia otro mediante props.

También crearemos un componente reutilizable llamado:

```text
Seccion
```

que podrá mostrar diferentes títulos y contenidos sin repetir su estructura.

---

# La gran pregunta

> **¿Cómo enviamos información diferente a un componente reutilizable?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Componentes independientes.
- ✅ `Header`.
- ✅ `Main`.
- ✅ `Footer`.
- ✅ Aplicación organizada desde `App`.
- ✅ Interfaz construida mediante JSX.

Después de este laboratorio tendremos:

- ✅ Componentes que reciben información.
- ✅ Uso de props.
- ✅ Componente reutilizable `Seccion`.
- ✅ Varias secciones creadas con la misma estructura.
- ✅ Menos código repetido.

En el siguiente laboratorio aprenderemos a manejar información que puede cambiar durante la ejecución mediante estado y eventos.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de enviar datos mediante props, recibirlos en un componente y reutilizar una misma estructura con información diferente.

---

# ¿Qué son las props?

Props es la forma abreviada de:

```text
properties
```

Las props permiten enviar información desde un componente padre hacia un componente hijo.

Ejemplo:

```jsx
<Header
  titulo="Proyecto Web Personal"
  descripcion="Primera versión del proyecto desarrollada con React."
/>
```

En este caso, `App` envía dos props al componente `Header`:

```text
titulo
descripcion
```

---

# Relación entre componentes

La comunicación puede representarse así:

```text
App
│
├── envia titulo y descripcion
│           ↓
│        Header
│
├── utiliza Main
│
└── envia curso
            ↓
          Footer
```

---

# Props en el componente Header

El componente recibe props mediante parámetros:

```jsx
function Header({ titulo, descripcion }) {
```

Esta sintaxis extrae directamente:

```text
titulo
descripcion
```

Después se muestran dentro de JSX:

```jsx
<h1>
  {titulo}
</h1>

<p>
  {descripcion}
</p>
```

---

# Desestructuración de props

También podría escribirse así:

```jsx
function Header(props) {
```

y utilizar:

```jsx
props.titulo
props.descripcion
```

Sin embargo, en este laboratorio utilizaremos desestructuración:

```jsx
function Header({ titulo, descripcion }) {
```

porque permite trabajar directamente con los nombres de las propiedades.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/04-componentizacion/proyecto-web-personal
```

La nueva versión estará en:

```text
react/05-props/proyecto-web-personal
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
  04-componentizacion/proyecto-web-personal/ \
  05-props/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 05-props/proyecto-web-personal
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

La página debe verse igual que en el Laboratorio 04 antes de comenzar los cambios.

---

# Estructura inicial

```text
src
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Main.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

# Estructura final

```text
src
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Main.jsx
│   └── Seccion.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

# Paso 5. Crear el componente Seccion

Cree:

```text
src/components/Seccion.jsx
```

Escriba:

```jsx
function Seccion({ titulo, contenido }) {

  return (
    <section>

      <h2>
        {titulo}
      </h2>

      <p>
        {contenido}
      </p>

    </section>
  )

}

export default Seccion
```

---

# ¿Por qué Seccion es reutilizable?

El componente contiene una estructura fija:

```text
section
├── h2
└── p
```

Pero recibe datos diferentes mediante:

```text
titulo
contenido
```

Eso permite reutilizarlo varias veces.

---

# Paso 6. Actualizar Header.jsx

Reemplace el contenido por:

```jsx
function Header({ titulo, descripcion }) {

  return (
    <header>

      <h1>
        {titulo}
      </h1>

      <p>
        {descripcion}
      </p>

    </header>
  )

}

export default Header
```

---

# Paso 7. Actualizar Main.jsx

Reemplace el contenido por:

```jsx
import Seccion from "./Seccion"

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

    </main>
  )

}

export default Main
```

---

# Reutilización del componente

El mismo componente se utiliza dos veces:

```jsx
<Seccion
  titulo="Bienvenida"
  contenido="..."
/>
```

y:

```jsx
<Seccion
  titulo="Objetivo del proyecto"
  contenido="..."
/>
```

La estructura es la misma.

Los datos cambian.

---

# Paso 8. Actualizar Footer.jsx

Reemplace el contenido por:

```jsx
function Footer({ curso }) {

  return (
    <footer>

      <p>
        {curso}
      </p>

    </footer>
  )

}

export default Footer
```

---

# Paso 9. Actualizar App.jsx

Reemplace el contenido por:

```jsx
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Header
        titulo="Proyecto Web Personal"
        descripcion="Primera versión del proyecto desarrollada con React."
      />

      <Main />

      <Footer
        curso="Lenguaje de Programación II"
      />

    </>
  )

}

export default App
```

---

# Componente padre y componente hijo

En este laboratorio:

```text
App
```

es padre de:

```text
Header
Main
Footer
```

`App` envía información a `Header` y `Footer`.

También:

```text
Main
```

es padre de:

```text
Seccion
```

`Main` envía información a cada instancia de `Seccion`.

---

# Flujo de datos

El flujo puede representarse así:

```text
App
├── Header
│   ├── titulo
│   └── descripcion
│
├── Main
│   ├── Seccion
│   │   ├── titulo
│   │   └── contenido
│   │
│   └── Seccion
│       ├── titulo
│       └── contenido
│
└── Footer
    └── curso
```

---

# Las props son de solo lectura

Un componente recibe props, pero no debe modificarlas directamente.

Por ejemplo, `Header` puede mostrar:

```jsx
{titulo}
```

pero no debería intentar cambiar el valor recibido.

Las props representan información enviada desde el componente padre.

---

# Props de texto

En este laboratorio enviamos cadenas de texto:

```jsx
titulo="Proyecto Web Personal"
```

Las comillas indican que el valor es texto.

Más adelante también podremos enviar:

- Números.
- Booleanos.
- Arreglos.
- Objetos.
- Funciones.
- Componentes.

---

# Props y llaves

Cuando se envía una expresión de JavaScript se utilizan llaves.

Ejemplo:

```jsx
<Componente cantidad={5} />
```

En cambio, para texto puede utilizarse:

```jsx
<Componente titulo="Bienvenida" />
```

---

# Archivos que no se modifican

Durante este laboratorio no se modifica:

```text
src/main.jsx
src/index.css
index.html
package.json
package-lock.json
vite.config.js
eslint.config.js
```

Los cambios ocurren en:

```text
src/App.jsx
src/components/
```

---

# Verificación

Ejecute:

```bash
npm run lint
```

El comando debe finalizar sin errores.

Después ejecute:

```bash
npm run dev
```

Compruebe que aparezcan:

```text
Proyecto Web Personal

Bienvenida

Objetivo del proyecto

Lenguaje de Programación II
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Crea el componente `Seccion`.
5. Define props en `Header`.
6. Define props en `Footer`.
7. Envía props desde `App`.
8. Reutiliza `Seccion`.
9. Envía información diferente a cada instancia.
10. Comprende la relación padre-hijo.
11. Comprende el flujo de datos.
12. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
05-props
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Main.jsx
    │   │   └── Seccion.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

# Errores frecuentes

## No recibir las props

Incorrecto:

```jsx
function Header() {
```

Correcto:

```jsx
function Header({ titulo, descripcion }) {
```

---

## No utilizar llaves

Incorrecto:

```jsx
<h1>titulo</h1>
```

Correcto:

```jsx
<h1>{titulo}</h1>
```

---

## Escribir el nombre incorrecto

Si el padre envía:

```jsx
titulo="Proyecto Web Personal"
```

el hijo debe recibir:

```jsx
titulo
```

No:

```jsx
title
```

---

## No importar Seccion

`Main.jsx` debe incluir:

```jsx
import Seccion from "./Seccion"
```

---

## Escribir etiquetas con minúscula

Incorrecto:

```jsx
<seccion />
```

Correcto:

```jsx
<Seccion />
```

---

## Intentar modificar una prop

Las props deben considerarse de solo lectura.

No deben reasignarse dentro del componente.

---

# Buenas prácticas

- Utilizar nombres de props descriptivos.
- Mantener el flujo de datos desde el padre hacia el hijo.
- No modificar props directamente.
- Reutilizar componentes cuando la estructura se repita.
- Evitar duplicar JSX.
- Mantener una responsabilidad clara por componente.
- Utilizar desestructuración.
- Conservar una indentación uniforme.
- Ejecutar ESLint.
- No agregar lógica innecesaria.

---

# Reto

Agregue una tercera instancia de `Seccion`.

Debe mostrar:

```text
Próximos aprendizajes
```

y un texto relacionado con:

```text
Props, estado, eventos y consumo de APIs.
```

Después:

1. Compruebe que utiliza el mismo componente.
2. No copie la estructura interna de `Seccion`.
3. Ejecute `npm run lint`.
4. Verifique el resultado en el navegador.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué son las props.
- Enviar información desde un componente padre.
- Recibir información en un componente hijo.
- Utilizar props dentro de JSX.
- Reutilizar componentes.
- Evitar repetir estructuras.
- Comprender el flujo de datos.
- Mantener props como valores de solo lectura.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

Las props permiten enviar información desde un componente padre hacia un componente hijo.

Gracias a ellas, un componente puede reutilizarse con datos diferentes.

En este laboratorio, el componente:

```text
Seccion
```

se utilizó varias veces sin repetir su estructura interna.

También `Header` y `Footer` dejaron de depender de textos escritos directamente dentro de sus archivos.

La aplicación ahora tiene una estructura más flexible y reutilizable.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo manejamos información que cambia durante la ejecución?**

Aprenderemos a utilizar:

- `useState`.
- Estado local.
- Eventos.
- Funciones controladoras.
- Actualización de la interfaz.
- Botones interactivos.

El Proyecto Web Personal comenzará a responder a las acciones del usuario.