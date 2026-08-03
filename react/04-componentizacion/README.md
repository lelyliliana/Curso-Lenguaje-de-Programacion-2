# Laboratorio 04: Componentización del Proyecto Web Personal

**Nivel:** Básico

**Duración estimada:** 75 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Laboratorio 03: JSX y primer componente.
- Tener funcionando el Proyecto Web Personal.
- Comprender la estructura básica de `App.jsx`.
- Comprender el uso de `return`, JSX y fragmentos.

**Concepto principal:**

Dividir una interfaz construida en un único componente en varios componentes pequeños y organizados.

---

# Objetivo

Organizar el Proyecto Web Personal mediante componentes independientes para el encabezado, el contenido principal y el pie de página.

---

# Introducción

En el laboratorio anterior construimos la primera versión del Proyecto Web Personal utilizando un único componente:

```text
App
```

Dentro de `App.jsx` se encontraban:

- El encabezado.
- El contenido principal.
- El pie de página.

Aunque la aplicación funcionaba correctamente, todo el contenido estaba almacenado en un mismo archivo.

A medida que una aplicación crece, mantener toda la interfaz dentro de un solo componente dificulta:

- La lectura.
- El mantenimiento.
- La reutilización.
- La localización de errores.
- La incorporación de nuevas funcionalidades.

En este laboratorio dividiremos la interfaz en componentes independientes.

---

# La gran pregunta

> **¿Cómo dividimos una aplicación React en componentes pequeños y organizados?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Proyecto React configurado.
- ✅ Primera interfaz escrita con JSX.
- ✅ Componente principal `App`.
- ✅ Encabezado, contenido y pie de página dentro de un mismo archivo.

Después de este laboratorio tendremos:

- ✅ Carpeta para componentes.
- ✅ Componente `Header`.
- ✅ Componente `Main`.
- ✅ Componente `Footer`.
- ✅ `App.jsx` encargado de organizar los componentes.
- ✅ Una estructura más fácil de mantener.

En el siguiente laboratorio aprenderemos a enviar información a los componentes mediante props.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de crear, exportar, importar y utilizar componentes funcionales dentro de una aplicación React.

---

# ¿Qué es la componentización?

La componentización consiste en dividir una interfaz grande en partes más pequeñas.

Antes:

```text
App.jsx
├── header
├── main
└── footer
```

Después:

```text
App.jsx
├── Header
├── Main
└── Footer
```

Cada parte tendrá su propio archivo.

---

# ¿Por qué dividir la aplicación?

Dividir una aplicación en componentes permite:

- Organizar mejor el código.
- Identificar fácilmente cada parte de la interfaz.
- Reutilizar componentes.
- Evitar archivos demasiado extensos.
- Facilitar el mantenimiento.
- Trabajar de manera colaborativa.
- Preparar la aplicación para recibir datos dinámicos.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/03-primeros-componentes/proyecto-web-personal
```

La nueva versión estará en:

```text
react/04-componentizacion/proyecto-web-personal
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
  03-primeros-componentes/proyecto-web-personal/ \
  04-componentizacion/proyecto-web-personal/
```

Este comando copia el proyecto sin incluir:

```text
node_modules
```

---

# Paso 2. Entrar al nuevo proyecto

Ejecute:

```bash
cd 04-componentizacion/proyecto-web-personal
```

Compruebe la ubicación:

```bash
pwd
```

La ruta debe terminar en:

```text
react/04-componentizacion/proyecto-web-personal
```

---

# Paso 3. Instalar las dependencias

Ejecute:

```bash
npm install
```

Este comando reconstruye la carpeta:

```text
node_modules
```

utilizando la información almacenada en:

```text
package.json
package-lock.json
```

---

# Paso 4. Comprobar el proyecto copiado

Ejecute:

```bash
npm run dev
```

Abra la dirección mostrada por Vite.

La página debe verse igual que en el Laboratorio 03.

Esto confirma que la copia funciona correctamente antes de comenzar la componentización.

---

# Estructura inicial

Antes de realizar los cambios, la carpeta `src` contiene una estructura similar a:

```text
src
├── App.jsx
├── index.css
└── main.jsx
```

Todo el contenido de la interfaz se encuentra dentro de:

```text
App.jsx
```

---

# Estructura final

Al terminar el laboratorio, la carpeta `src` tendrá:

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

# Paso 5. Crear la carpeta components

Dentro de `src`, cree:

```text
components
```

Desde la terminal puede ejecutar:

```bash
mkdir -p src/components
```

Esta carpeta almacenará los componentes de la aplicación.

---

# Paso 6. Crear los archivos de componentes

Ejecute:

```bash
touch src/components/Header.jsx
touch src/components/Main.jsx
touch src/components/Footer.jsx
```

Los archivos creados serán:

```text
Header.jsx
Main.jsx
Footer.jsx
```

---

# El componente Header

Abra:

```text
src/components/Header.jsx
```

y escriba:

```jsx
function Header() {

  return (
    <header>

      <h1>
        Proyecto Web Personal
      </h1>

      <p>
        Primera versión del proyecto desarrollada con React.
      </p>

    </header>
  )

}

export default Header
```

---

# Funcionamiento de Header

El componente contiene:

```jsx
function Header()
```

Define la función del componente.

```jsx
return (...)
```

Devuelve la interfaz.

```jsx
<header>
```

Representa el encabezado semántico de la página.

```jsx
export default Header
```

Permite importar el componente desde otro archivo.

---

# El componente Main

Abra:

```text
src/components/Main.jsx
```

y escriba:

```jsx
function Main() {

  return (
    <main>

      <section>

        <h2>
          Bienvenida
        </h2>

        <p>
          En este proyecto aprenderemos a construir interfaces mediante JSX y componentes de React.
        </p>

      </section>

    </main>
  )

}

export default Main
```

---

# Funcionamiento de Main

El componente representa el contenido principal de la página.

Incluye:

```jsx
<main>
```

y una sección:

```jsx
<section>
```

Posteriormente este componente será dividido en componentes más específicos.

---

# El componente Footer

Abra:

```text
src/components/Footer.jsx
```

y escriba:

```jsx
function Footer() {

  return (
    <footer>

      <p>
        Lenguaje de Programación II
      </p>

    </footer>
  )

}

export default Footer
```

---

# Funcionamiento de Footer

El componente representa el pie de página.

Su contenido se encuentra separado del encabezado y del contenido principal.

---

# Paso 7. Actualizar App.jsx

Abra:

```text
src/App.jsx
```

y reemplace su contenido por:

```jsx
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Header />

      <Main />

      <Footer />

    </>
  )

}

export default App
```

---

# Importación de componentes

Antes de utilizar un componente debe importarse.

Ejemplo:

```jsx
import Header from "./components/Header"
```

Esta instrucción indica:

```text
Buscar Header
        ↓
Dentro de components
        ↓
Archivo Header.jsx
```

---

# Uso de componentes

Después de importarlos se utilizan mediante etiquetas:

```jsx
<Header />

<Main />

<Footer />
```

Los componentes deben comenzar con letra mayúscula.

React interpreta:

```jsx
<header>
```

como una etiqueta HTML.

React interpreta:

```jsx
<Header />
```

como un componente creado por el desarrollador.

---

# Componentes autocerrados

Los componentes que no contienen elementos escritos entre una etiqueta de apertura y cierre pueden utilizarse así:

```jsx
<Header />
```

Esto equivale conceptualmente a:

```jsx
<Header></Header>
```

La forma autocerrada es más breve.

---

# El nuevo papel de App.jsx

Antes, `App.jsx` contenía toda la interfaz.

Ahora su función principal es organizar los componentes:

```text
App
├── Header
├── Main
└── Footer
```

`App` continúa siendo el componente principal, pero delega partes de la interfaz a otros componentes.

---

# La interfaz no cambia

Después de dividir el código, la página debe verse igual que antes.

Esto es importante.

La componentización modifica:

```text
La organización interna del código
```

pero no necesariamente modifica:

```text
La apariencia de la aplicación
```

Antes:

```text
Un archivo con toda la interfaz
```

Después:

```text
Varios archivos organizados
```

El resultado visual se conserva.

---

# Relación entre los archivos

La aplicación funciona así:

```text
main.jsx
    ↓
App.jsx
    ├── Header.jsx
    ├── Main.jsx
    └── Footer.jsx
```

`main.jsx` renderiza:

```jsx
<App />
```

`App.jsx` renderiza:

```jsx
<Header />
<Main />
<Footer />
```

Cada componente devuelve una parte de la interfaz.

---

# Responsabilidad de cada componente

| Componente | Responsabilidad |
|------------|-----------------|
| `App` | Organizar la aplicación. |
| `Header` | Mostrar el encabezado. |
| `Main` | Mostrar el contenido principal. |
| `Footer` | Mostrar el pie de página. |

Cada componente debe tener una responsabilidad clara.

---

# Archivos que no se modifican

Durante este laboratorio no es necesario modificar:

```text
src/main.jsx
src/index.css
index.html
package.json
package-lock.json
vite.config.js
eslint.config.js
```

El cambio principal ocurre en:

```text
src/App.jsx
src/components/
```

---

# Verificación del proyecto

Ejecute:

```bash
npm run lint
```

El comando debe finalizar sin errores.

Después ejecute:

```bash
npm run dev
```

Compruebe que:

- El título se visualice.
- El texto introductorio aparezca.
- La sección de bienvenida aparezca.
- El pie de página aparezca.
- La consola no muestre errores.
- La interfaz sea igual a la del laboratorio anterior.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Comprueba la copia.
4. Crea la carpeta `components`.
5. Crea `Header.jsx`.
6. Crea `Main.jsx`.
7. Crea `Footer.jsx`.
8. Exporta cada componente.
9. Importa los componentes en `App.jsx`.
10. Utiliza componentes autocerrados.
11. Comprende el nuevo papel de `App`.
12. Comprueba que la interfaz no cambió.
13. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
04-componentizacion
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   └── Main.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

La carpeta `node_modules` se genera mediante:

```bash
npm install
```

y no debe subirse al repositorio.

---

# Errores frecuentes

## El componente comienza con minúscula

Incorrecto:

```jsx
function header() {
```

Correcto:

```jsx
function Header() {
```

Los componentes deben comenzar con mayúscula.

---

## No se exporta el componente

Si falta:

```jsx
export default Header
```

no podrá importarse correctamente desde `App.jsx`.

---

## La ruta de importación es incorrecta

Incorrecto:

```jsx
import Header from "./Header"
```

si el archivo se encuentra dentro de:

```text
components
```

Correcto:

```jsx
import Header from "./components/Header"
```

---

## Se utiliza una etiqueta con minúscula

Incorrecto:

```jsx
<header />
```

cuando se desea utilizar el componente `Header`.

Correcto:

```jsx
<Header />
```

---

## El nombre importado no coincide

Si se importa:

```jsx
import Header from "./components/Header"
```

debe utilizarse:

```jsx
<Header />
```

---

## Se elimina App

`App` continúa siendo el componente principal.

No debe reemplazarse directamente desde `main.jsx` por todos los componentes.

---

## Se modifica main.jsx

Durante este laboratorio no es necesario modificar:

```text
main.jsx
```

---

## Se copió node_modules

No es necesario copiar esta carpeta.

Debe regenerarse mediante:

```bash
npm install
```

---

# Buenas prácticas

- Crear una carpeta específica para componentes.
- Utilizar nombres descriptivos.
- Comenzar los componentes con mayúscula.
- Mantener una responsabilidad clara por componente.
- Exportar cada componente.
- Organizar las importaciones al comienzo del archivo.
- Utilizar rutas relativas correctas.
- Evitar componentes demasiado extensos.
- Mantener una indentación uniforme.
- Ejecutar ESLint antes de continuar.
- No modificar archivos que no participan en el laboratorio.

---

# Reto

Cree un nuevo componente llamado:

```text
Navegacion.jsx
```

Dentro de:

```text
src/components
```

El componente debe incluir:

```jsx
<nav>
  <a href="#inicio">
    Inicio
  </a>

  <a href="#proyectos">
    Proyectos
  </a>

  <a href="#contacto">
    Contacto
  </a>
</nav>
```

Después:

1. Expórtelo.
2. Impórtelo en `Header.jsx`.
3. Utilícelo dentro del encabezado.
4. Ejecute `npm run lint`.
5. Compruebe que los enlaces aparezcan.

Este reto es opcional y prepara la aplicación para una componentización más detallada.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es la componentización.
- Crear componentes funcionales.
- Exportar componentes.
- Importar componentes.
- Utilizar componentes dentro de JSX.
- Diferenciar etiquetas HTML y componentes.
- Organizar la aplicación desde `App.jsx`.
- Mantener la misma interfaz con una estructura interna diferente.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

La componentización permite dividir una aplicación en partes pequeñas y organizadas.

En lugar de conservar toda la interfaz dentro de `App.jsx`, ahora contamos con:

```text
Header
Main
Footer
```

Cada componente tiene una responsabilidad específica.

`App.jsx` se convierte en el componente encargado de organizar la aplicación.

Aunque la interfaz no cambió visualmente, el código ahora es más claro, escalable y fácil de mantener.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo enviamos información diferente a un componente reutilizable?**

Aprenderemos a utilizar:

- Props.
- Parámetros en componentes.
- Datos enviados desde componentes padres.
- Componentes reutilizables.
- Tarjetas de proyecto.
- Información dinámica.

El Proyecto Web Personal comenzará a mostrar contenido reutilizable sin repetir la misma estructura manualmente.