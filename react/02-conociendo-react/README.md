# Laboratorio 02: Conociendo React

**Nivel:** Básico

**Duración estimada:** 60 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Tener instalado Node.js, preferiblemente en su versión LTS.
- Tener instalado Visual Studio Code o un editor equivalente.
- Haber creado correctamente el proyecto mediante Vite.
- Haber instalado las dependencias mediante `npm install`.
- Haber ejecutado la aplicación con `npm run dev`.

**Concepto principal:**

Comprender la estructura del proyecto generado por Vite y conocer el papel que desempeña cada uno de sus archivos principales.

---

# Objetivo

Identificar los archivos y carpetas que conforman un proyecto React generado mediante Vite y comprender cómo inicia una aplicación React antes de comenzar a desarrollar componentes propios.

---

# Introducción

En el laboratorio anterior aprendimos a crear un proyecto React utilizando Vite.

Al ejecutarlo por primera vez aparece una aplicación completamente funcional.

Sin embargo, antes de comenzar a modificarla es importante comprender qué archivos fueron creados automáticamente y cuál es la función de cada uno.

En este laboratorio no construiremos una nueva aplicación.

Tampoco modificaremos el proyecto.

Nuestro objetivo será explorar la estructura generada por Vite para comprender cómo inicia una aplicación React.

---

# La gran pregunta

> **¿Cómo inicia realmente una aplicación React y qué archivos intervienen en ese proceso?**

---

# Evolución del proyecto

Hasta este momento hemos realizado:

- ✅ Instalación de Node.js.
- ✅ Instalación de Visual Studio Code.
- ✅ Creación del proyecto mediante Vite.
- ✅ Instalación de las dependencias con `npm install`.
- ✅ Ejecución de la aplicación mediante `npm run dev`.

En este laboratorio **no construiremos todavía el Proyecto Web Personal**.

Primero conoceremos el proyecto generado automáticamente por Vite.

Al finalizar este laboratorio comprenderemos:

- ✅ Cómo inicia una aplicación React.
- ✅ Qué función cumple cada archivo principal.
- ✅ Qué archivos modificaremos durante el curso.
- ✅ Qué archivos normalmente no será necesario modificar.

En el siguiente laboratorio comenzaremos a transformar este proyecto en el Proyecto Web Personal.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de identificar la estructura básica de un proyecto React generado mediante Vite y comprender el flujo de inicio de la aplicación antes de comenzar a desarrollar componentes propios.

---

# Estructura del proyecto

Después de crear el proyecto y ejecutar `npm install`, la estructura principal será similar a la siguiente:

```text
proyecto-web-react

├── node_modules
├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

La estructura exacta puede variar ligeramente según la versión de Vite utilizada.

No todos estos archivos serán modificados durante el curso.

En este laboratorio conoceremos principalmente aquellos que participan directamente en el funcionamiento de la aplicación.

---

# ¿Cómo inicia React?

Una aplicación React sigue un flujo general como el siguiente:

```text
index.html

        ↓

main.jsx

        ↓

App.jsx

        ↓

Navegador
```

Comprender este flujo permitirá entender posteriormente cómo React construye y actualiza la interfaz.

---

# Paso 1. Ejecutar la aplicación

Abra una terminal e ingrese a la carpeta del proyecto:

```bash
cd react/02-conociendo-react/proyecto-web-react
```

Si la carpeta `node_modules` no existe, instale las dependencias:

```bash
npm install
```

Ejecute el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abra esa dirección en el navegador.

Debe aparecer la aplicación de ejemplo generada por Vite.

Durante este laboratorio no eliminaremos ni modificaremos todavía esa interfaz.

---

# Paso 2. Abrir el proyecto en Visual Studio Code

Desde la carpeta del proyecto ejecute:

```bash
code .
```

En el explorador de archivos de Visual Studio Code podrá observar la estructura completa del proyecto.

---

# El archivo index.html

El archivo:

```text
index.html
```

se encuentra en la raíz del proyecto.

Su contenido es similar a:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>proyecto-web-react</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Aunque estamos trabajando con React, la aplicación continúa necesitando un documento HTML.

Sin embargo, este documento contiene muy poco contenido visible.

La parte más importante es:

```html
<div id="root"></div>
```

Este elemento comienza vacío.

React utilizará este contenedor para mostrar la aplicación.

También aparece:

```html
<script type="module" src="/src/main.jsx"></script>
```

Esta instrucción carga el archivo que inicia React:

```text
src/main.jsx
```

---

# El elemento root

El contenedor:

```html
<div id="root"></div>
```

puede entenderse como el espacio reservado para la aplicación.

Inicialmente se encuentra vacío.

Después, React introduce dentro de él la interfaz generada por los componentes.

El flujo puede representarse así:

```text
<div id="root">

        ↓

React renderiza la aplicación

        ↓

Interfaz visible
```

---

# El archivo main.jsx

El archivo:

```text
src/main.jsx
```

es el punto de entrada de React.

Su contenido es similar a:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Este archivo realiza varias tareas.

---

## Importar StrictMode

```jsx
import { StrictMode } from 'react'
```

`StrictMode` permite detectar algunos problemas durante el desarrollo.

No genera contenido visible por sí mismo.

---

## Importar createRoot

```jsx
import { createRoot } from 'react-dom/client'
```

`createRoot` permite que React controle un elemento del documento HTML.

---

## Importar los estilos generales

```jsx
import './index.css'
```

Esta línea carga los estilos globales de la aplicación.

---

## Importar App

```jsx
import App from './App.jsx'
```

Esta línea incorpora el componente principal de la aplicación.

---

## Buscar el elemento root

```jsx
document.getElementById('root')
```

JavaScript busca en `index.html` el elemento:

```html
<div id="root"></div>
```

---

## Crear la raíz de React

```jsx
createRoot(document.getElementById('root'))
```

React toma el control del elemento `root`.

---

## Renderizar App

```jsx
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

React muestra el componente:

```jsx
<App />
```

dentro del elemento `root`.

---

# Flujo entre index.html y main.jsx

La relación puede representarse así:

```text
index.html
│
├── contiene <div id="root"></div>
│
└── carga /src/main.jsx
          │
          ├── busca #root
          ├── crea la raíz de React
          └── renderiza <App />
```

---

# El archivo App.jsx

El archivo:

```text
src/App.jsx
```

contiene el componente principal de la aplicación.

La versión generada por Vite incluye:

- Imágenes.
- Logos.
- Enlaces.
- Un contador.
- Eventos.
- Estado.
- Elementos SVG.
- Contenido de ejemplo.

Su estructura general puede resumirse así:

```jsx
function App() {

  return (
    <>
      {/* Interfaz de ejemplo */}
    </>
  )

}

export default App
```

En este momento no es necesario comprender cada instrucción interna.

Lo importante es identificar tres elementos:

```text
function App()
```

Representa el componente principal.

```text
return
```

Indica qué interfaz devolverá el componente.

```text
export default App
```

Permite utilizar el componente desde otro archivo.

---

# Relación entre main.jsx y App.jsx

En `main.jsx` se importa:

```jsx
import App from './App.jsx'
```

Después se utiliza:

```jsx
<App />
```

Esto significa que:

```text
main.jsx
    ↓
utiliza App
    ↓
App.jsx
    ↓
devuelve la interfaz
```

---

# ¿Qué es App?

`App` es una función de JavaScript.

Sin embargo, React la utiliza como un componente.

Se escribe con inicial mayúscula:

```jsx
function App()
```

y se utiliza mediante una etiqueta:

```jsx
<App />
```

La explicación completa de los componentes y de JSX se realizará en el siguiente laboratorio.

---

# El archivo index.css

El archivo:

```text
src/index.css
```

contiene los estilos generales de la aplicación.

En la versión actual generada por Vite puede incluir:

- Variables CSS.
- Colores.
- Tipografías.
- Tema claro y oscuro.
- Estilos generales para el documento.
- Diseño del contenedor `root`.
- Estilos para títulos y párrafos.
- Media queries.

Este archivo es importado desde:

```text
main.jsx
```

mediante:

```jsx
import './index.css'
```

Por esta razón sus reglas pueden aplicarse a toda la aplicación.

---

# El archivo App.css

El archivo:

```text
src/App.css
```

contiene estilos relacionados con el componente `App`.

En el proyecto inicial puede incluir:

- Estilos del contador.
- Distribución de la interfaz.
- Posicionamiento de imágenes.
- Efectos al pasar el cursor.
- Diseño adaptable.
- Pseudoclases.
- Pseudoelementos.
- Reglas CSS anidadas.

Este archivo es importado desde:

```text
App.jsx
```

mediante:

```jsx
import './App.css'
```

---

# Diferencia entre index.css y App.css

| Archivo | Propósito |
|---------|-----------|
| `index.css` | Estilos generales de la aplicación. |
| `App.css` | Estilos relacionados con el componente `App`. |

Más adelante reorganizaremos los estilos del Proyecto Web Personal.

---

# La carpeta src

La carpeta:

```text
src
```

contiene el código fuente principal de la aplicación.

En ella se almacenarán posteriormente:

- Componentes.
- Hojas de estilos.
- Datos.
- Servicios.
- Funciones auxiliares.
- Recursos utilizados desde el código.

La mayor parte del trabajo de React se realizará dentro de esta carpeta.

---

# La carpeta assets

La carpeta:

```text
src/assets
```

contiene recursos utilizados por el código fuente.

En el proyecto inicial aparecen archivos como:

```text
hero.png
react.svg
vite.svg
```

Estos recursos se importan desde `App.jsx`.

Ejemplo:

```jsx
import reactLogo from './assets/react.svg'
```

Después pueden utilizarse dentro de JSX:

```jsx
<img
  src={reactLogo}
  alt="React logo"
/>
```

---

# La carpeta public

La carpeta:

```text
public
```

contiene archivos que Vite publica directamente.

En el proyecto inicial puede contener:

```text
favicon.svg
icons.svg
```

Estos archivos pueden utilizarse mediante rutas desde la raíz.

Ejemplo:

```html
<link
  rel="icon"
  type="image/svg+xml"
  href="/favicon.svg"
/>
```

En el Proyecto Web Personal utilizaremos esta carpeta para algunos recursos públicos, como imágenes o archivos multimedia.

---

# Diferencia entre public y assets

| Carpeta | Uso general |
|---------|-------------|
| `public` | Recursos accesibles directamente mediante una ruta pública. |
| `src/assets` | Recursos importados desde componentes o archivos JavaScript. |

Las dos carpetas pueden contener imágenes, pero se utilizan de manera diferente.

---

# La carpeta node_modules

La carpeta:

```text
node_modules
```

contiene las dependencias instaladas mediante:

```bash
npm install
```

Puede incluir una gran cantidad de archivos y carpetas.

No debe:

- Editarse manualmente.
- Copiarse entre laboratorios.
- Subirse al repositorio.
- Revisarse archivo por archivo.

Puede regenerarse en cualquier momento mediante:

```bash
npm install
```

---

# El archivo package.json

El archivo:

```text
package.json
```

describe el proyecto.

Una estructura similar a la generada actualmente es:

```json
{
  "name": "proyecto-web-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "...",
    "react-dom": "..."
  },
  "devDependencies": {
    "vite": "...",
    "eslint": "..."
  }
}
```

Las versiones exactas pueden variar.

---

## Nombre del proyecto

```json
"name": "proyecto-web-react"
```

Identifica el proyecto.

---

## Proyecto privado

```json
"private": true
```

Evita que el proyecto se publique accidentalmente como un paquete de npm.

---

## Módulos

```json
"type": "module"
```

Permite utilizar instrucciones como:

```javascript
import
```

y:

```javascript
export
```

---

## Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

Estos scripts permiten ejecutar diferentes tareas.

---

# Comandos principales

## Servidor de desarrollo

```bash
npm run dev
```

Ejecuta la aplicación durante el desarrollo.

---

## Construcción de producción

```bash
npm run build
```

Genera una versión optimizada para publicación.

---

## Revisión del código

```bash
npm run lint
```

Analiza el código mediante ESLint.

---

## Vista previa de producción

```bash
npm run preview
```

Permite revisar localmente la versión construida.

---

# Dependencias y dependencias de desarrollo

El archivo `package.json` separa:

```text
dependencies
```

y:

```text
devDependencies
```

## dependencies

Contiene bibliotecas necesarias para la aplicación.

Por ejemplo:

```text
react
react-dom
```

## devDependencies

Contiene herramientas utilizadas durante el desarrollo.

Por ejemplo:

```text
vite
eslint
plugin de React para Vite
```

---

# El archivo package-lock.json

El archivo:

```text
package-lock.json
```

registra las versiones exactas de las dependencias instaladas.

No debe editarse manualmente.

Ayuda a que diferentes computadores instalen versiones compatibles del proyecto.

---

# El archivo vite.config.js

El archivo:

```text
vite.config.js
```

contiene la configuración de Vite.

Su contenido es similar a:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

La instrucción:

```javascript
plugins: [react()]
```

activa el soporte de React dentro de Vite.

En este laboratorio no modificaremos esta configuración.

---

# El archivo eslint.config.js

El archivo:

```text
eslint.config.js
```

configura ESLint.

Su función es revisar los archivos JavaScript y JSX para detectar posibles problemas.

La configuración generada por Vite puede incluir reglas para:

- JavaScript.
- JSX.
- Hooks de React.
- Actualización rápida durante el desarrollo.
- Variables globales del navegador.

También puede excluir carpetas generadas, como:

```text
dist
```

En este laboratorio no modificaremos este archivo.

---

# El archivo .gitignore

El archivo:

```text
.gitignore
```

indica qué elementos no deben agregarse al repositorio.

Normalmente excluye:

```text
node_modules
dist
archivos locales
```

Esto evita subir archivos pesados o generados automáticamente.

---

# El README interno de Vite

Dentro del proyecto también aparece:

```text
README.md
```

Este archivo es generado por Vite y contiene información básica sobre el proyecto inicial.

No debe confundirse con el README del laboratorio:

```text
react/02-conociendo-react/README.md
```

El README del laboratorio contiene las instrucciones académicas.

El README interno pertenece al proyecto generado.

---

# Recorrido completo de la aplicación

El funcionamiento puede resumirse así:

```text
1. El navegador abre index.html.

2. index.html contiene <div id="root"></div>.

3. index.html carga src/main.jsx.

4. main.jsx importa React, los estilos y App.

5. main.jsx busca el elemento root.

6. React crea una raíz dentro de ese elemento.

7. React renderiza <App />.

8. App.jsx devuelve la interfaz.

9. Los archivos CSS definen la presentación.

10. El navegador muestra la aplicación.
```

---

# Representación gráfica

```text
index.html
│
├── <div id="root"></div>
│
└── /src/main.jsx
        │
        ├── index.css
        ├── App.jsx
        │     │
        │     ├── App.css
        │     └── assets
        │
        └── renderiza <App />
                │
                └── navegador
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Ejecuta la aplicación generada por Vite.
2. Abre el proyecto en Visual Studio Code.
3. Observa su estructura.
4. Identifica `index.html`.
5. Localiza el elemento `root`.
6. Identifica `main.jsx`.
7. Reconoce `App.jsx`.
8. Diferencia `index.css` y `App.css`.
9. Explora `public` y `src/assets`.
10. Revisa `package.json`.
11. Identifica los scripts disponibles.
12. Reconoce la configuración de Vite.
13. Reconoce la configuración de ESLint.
14. Comprende el flujo de inicio de React.
15. Conserva el proyecto original sin modificarlo.

---

# Archivos del laboratorio

La carpeta tendrá esta estructura:

```text
02-conociendo-react
├── README.md
└── proyecto-web-react
```

El proyecto debe conservar la aplicación original generada por Vite.

---

# Cómo ejecutar el laboratorio

Desde la raíz del repositorio:

```bash
cd react/02-conociendo-react/proyecto-web-react
```

Instale las dependencias cuando `node_modules` no exista:

```bash
npm install
```

Ejecute:

```bash
npm run dev
```

Abra la dirección mostrada en la terminal.

Para detener el servidor:

```text
Ctrl + C
```

---

# Actividad de exploración

Abra los siguientes archivos y responda:

## index.html

- ¿Cuál es el identificador del contenedor principal?
- ¿Qué archivo JavaScript se carga?
- ¿Cuál es el título inicial del documento?

## main.jsx

- ¿Qué componente se importa?
- ¿Qué archivo CSS se importa?
- ¿En qué elemento se renderiza la aplicación?

## App.jsx

- ¿Cómo se llama la función principal?
- ¿Qué instrucción devuelve la interfaz?
- ¿Cómo se exporta el componente?
- ¿Qué recursos se importan?

## package.json

- ¿Cuál es el nombre del proyecto?
- ¿Qué comando ejecuta el servidor?
- ¿Qué comando genera la versión final?
- ¿Qué bibliotecas aparecen como dependencias?
- ¿Qué herramientas aparecen como dependencias de desarrollo?

## Carpetas

- ¿Qué diferencia existe entre `public` y `src/assets`?
- ¿Para qué sirve `node_modules`?
- ¿Qué carpeta contiene el código fuente?

---

# Actividad gráfica

Elabore un diagrama que represente el flujo:

```text
index.html
        ↓
main.jsx
        ↓
App.jsx
        ↓
navegador
```

Agregue una explicación breve para cada elemento.

---

# Buenas prácticas

- Explorar la estructura antes de modificarla.
- No editar manualmente `node_modules`.
- No eliminar archivos sin comprender su función.
- No modificar `package-lock.json` manualmente.
- Mantener los nombres exactos de los archivos.
- Diferenciar mayúsculas y minúsculas.
- Leer los mensajes de la terminal.
- Revisar `package.json` antes de ejecutar scripts.
- Mantener el proyecto inicial como referencia.
- Detener el servidor mediante `Ctrl + C`.
- No subir `node_modules` al repositorio.

---

# Errores frecuentes

## Ejecutar npm run dev fuera del proyecto

El comando debe ejecutarse donde se encuentra:

```text
package.json
```

---

## Confundir el README del laboratorio con el del proyecto

Existen dos archivos distintos:

```text
react/02-conociendo-react/README.md
```

y:

```text
react/02-conociendo-react/proyecto-web-react/README.md
```

---

## Intentar abrir index.html directamente

En un proyecto Vite se recomienda ejecutar:

```bash
npm run dev
```

y abrir la dirección local mostrada.

---

## Editar node_modules

Esta carpeta contiene dependencias y puede regenerarse mediante:

```bash
npm install
```

---

## No encontrar el componente App

Debe estar ubicado en:

```text
src/App.jsx
```

---

## Confundir main.jsx con App.jsx

`main.jsx` inicia React.

`App.jsx` contiene el componente principal.

---

# Reto

Sin modificar los archivos, explique con sus propias palabras:

1. ¿Qué función cumple `index.html`?
2. ¿Qué función cumple `main.jsx`?
3. ¿Qué función cumple `App.jsx`?
4. ¿Dónde se encuentra el elemento `root`?
5. ¿Qué relación existe entre `root` y `<App />`?
6. ¿Qué diferencia existe entre `index.css` y `App.css`?
7. ¿Para qué sirve `package.json`?
8. ¿Por qué no debe editarse `node_modules`?

Después, represente el flujo de ejecución mediante un diagrama.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Reconocer la estructura de un proyecto React.
- Identificar los archivos principales.
- Comprender el papel de `index.html`.
- Comprender el papel de `main.jsx`.
- Comprender el papel de `App.jsx`.
- Reconocer el elemento `root`.
- Diferenciar estilos globales y estilos del componente.
- Diferenciar recursos públicos y recursos importados.
- Identificar los scripts de npm.
- Comprender el flujo de inicio de la aplicación.
- Conservar el ejemplo de Vite sin modificaciones.

---

# Conclusiones

Vite crea automáticamente la estructura necesaria para comenzar una aplicación React.

El navegador carga primero:

```text
index.html
```

Este documento carga:

```text
main.jsx
```

`main.jsx` busca el elemento:

```text
root
```

y renderiza:

```jsx
<App />
```

El componente `App`, definido en:

```text
App.jsx
```

devuelve la interfaz que finalmente se muestra en el navegador.

Comprender esta relación es fundamental antes de comenzar a crear componentes propios.

---

# ¿Qué sigue?

En el siguiente laboratorio comenzaremos a transformar el ejemplo de Vite en el **Proyecto Web Personal**.

Responderemos una nueva pregunta:

> **¿Cómo escribimos nuestra primera interfaz utilizando JSX?**

A partir de ella estudiaremos:

- El componente `App`.
- La instrucción `return`.
- JSX.
- Fragmentos.
- Etiquetas correctamente cerradas.
- Diferencias entre HTML y JSX.
- Expresiones de JavaScript.
- Exportación del componente.

El proyecto generado por Vite quedará conservado como referencia en este laboratorio, mientras que el Proyecto Web Personal comenzará a desarrollarse en una nueva versión.