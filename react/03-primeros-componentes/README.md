# Laboratorio 03: JSX y primer componente

**Nivel:** Básico

**Duración estimada:** 75 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Tener el proyecto generado por Vite funcionando correctamente.
- Comprender la estructura general del proyecto React.

**Concepto principal:**

Escribir la primera interfaz React utilizando JSX y comprender cómo un componente devuelve contenido al navegador.

---

# Objetivo

Construir el primer componente React del Proyecto Web Personal utilizando JSX, comprendiendo la estructura básica de un componente funcional.

---

# Introducción

En el laboratorio anterior conocimos la estructura del proyecto generado por Vite.

Aprendimos que:

- `index.html` carga `main.jsx`.
- `main.jsx` inicia React.
- `App.jsx` representa el componente principal.
- React renderiza el contenido dentro del elemento `root`.

Sin embargo, hasta este momento únicamente observamos la aplicación generada automáticamente.

En este laboratorio comenzaremos a construir nuestro propio proyecto.

Por primera vez escribiremos una interfaz utilizando React.

---

# La gran pregunta

> **¿Cómo escribimos nuestra primera interfaz utilizando React?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Proyecto React generado mediante Vite.
- ✅ Entorno correctamente configurado.
- ✅ Comprensión de la estructura del proyecto.
- ✅ Aplicación de ejemplo funcionando.

Después de este laboratorio tendremos:

- ✅ El primer componente React del Proyecto Web Personal.
- ✅ Una interfaz creada mediante JSX.
- ✅ El inicio del Proyecto Web Personal en React.

En el siguiente laboratorio comenzaremos a dividir la aplicación en componentes independientes.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de construir un componente funcional utilizando JSX y comprender cómo React genera la interfaz mostrada en el navegador.

---

# ¿Qué es JSX?

JSX significa:

```text
JavaScript XML
```

JSX permite escribir una sintaxis muy parecida a HTML dentro de JavaScript.

Por ejemplo:

```jsx
<h1>Proyecto Web Personal</h1>
```

Aunque se parece a HTML, realmente forma parte del código JavaScript.

---

# El componente App

Nuestro primer componente será:

```jsx
function App() {

  return (

    <>

      <header>

        <h1>
          Proyecto Web Personal
        </h1>

        <p>
          Primera versión del proyecto desarrollada con React.
        </p>

      </header>

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

      <footer>

        <p>
          Lenguaje de Programación II
        </p>

      </footer>

    </>

  )

}

export default App
```

Esta será la primera versión del Proyecto Web Personal.

---

# ¿Qué observamos?

Nuestro componente tiene cuatro partes importantes.

## La función

```jsx
function App() {

}
```

Representa el componente principal.

---

## El return

```jsx
return (

)
```

Todo lo que aparece dentro del `return` será mostrado en el navegador.

---

## JSX

Dentro del `return` escribimos etiquetas similares a HTML.

```jsx
<header>

<main>

<footer>
```

Estas etiquetas forman la interfaz del componente.

---

## Exportación

```jsx
export default App
```

Permite utilizar el componente desde otros archivos.

---

# Variables dentro de JSX

Podemos utilizar variables de JavaScript.

Por ejemplo:

```jsx
const nombreProyecto =
    "Proyecto Web Personal"

const curso =
    "Lenguaje de Programación II"
```

Y mostrarlas mediante:

```jsx
{nombreProyecto}

{curso}
```

Esto permite combinar JavaScript con JSX.

---

# Fragmentos

El componente utiliza:

```jsx
<>

</>
```

Esto se conoce como un **Fragmento**.

Permite devolver varios elementos sin agregar un contenedor adicional al documento.

---

# JSX no es HTML

Aunque la sintaxis es muy parecida, existen diferencias.

Por ejemplo:

En HTML:

```html
class
```

En React:

```jsx
className
```

En HTML:

```html
for
```

En React:

```jsx
htmlFor
```

Estas diferencias se estudiarán con mayor profundidad en los siguientes laboratorios.

---

# Limpieza del proyecto

En este laboratorio eliminamos el ejemplo generado por Vite.

También dejamos únicamente los estilos globales mínimos.

El archivo:

```text
src/index.css
```

queda así:

```css
* {

    box-sizing: border-box;

}

body {

    margin: 0;

    font-family: Arial, sans-serif;

}
```

No agregaremos todavía estilos visuales.

Nuestro objetivo es aprender React.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Copia el proyecto del laboratorio anterior.
2. Cambia el nombre del proyecto a `proyecto-web-personal`.
3. Actualiza el título del documento.
4. Reemplaza el contenido de `App.jsx`.
5. Escribe su primera interfaz utilizando JSX.
6. Utiliza variables dentro del componente.
7. Comprende el uso de `return`.
8. Comprende el uso de Fragmentos.
9. Ejecuta nuevamente la aplicación.
10. Comprueba el resultado en el navegador.
11. Verifica el proyecto mediante:

```bash
npm run lint
```

---

# Archivos modificados

Durante este laboratorio se modifican:

```text
package.json

package-lock.json

index.html

src/App.jsx

src/index.css
```

No se modifica:

```text
main.jsx
```

---

# Cómo ejecutar el laboratorio

Desde la carpeta del proyecto:

```bash
npm install
```

Después:

```bash
npm run dev
```

Abra la dirección mostrada por Vite.

---

# Buenas prácticas

- Utilizar nombres descriptivos para las variables.
- Mantener una indentación uniforme.
- Escribir componentes con inicial mayúscula.
- Mantener un único componente principal durante este laboratorio.
- No agregar estilos innecesarios.
- Verificar el proyecto mediante `npm run lint`.
- Guardar frecuentemente los cambios.

---

# Errores frecuentes

## El componente no retorna nada

Todo componente debe devolver una interfaz mediante:

```jsx
return (...)
```

---

## Se elimina export default

React no podrá importar el componente.

---

## Se escriben varias etiquetas sin un elemento raíz

React requiere una estructura correctamente agrupada.

En este laboratorio utilizamos Fragmentos.

---

## Se ejecuta npm run dev fuera del proyecto

Debe ejecutarse dentro de:

```text
proyecto-web-personal
```

---

## Se modifica main.jsx

Durante este laboratorio no debe modificarse.

Todo el trabajo se realiza en:

```text
App.jsx
```

---

# Reto

Realice las siguientes modificaciones:

1. Cambie el título principal.
2. Modifique el texto de bienvenida.
3. Cambie el nombre del curso.
4. Cree una nueva variable con su nombre.
5. Muestre esa variable utilizando JSX.

Compruebe que la aplicación continúa funcionando correctamente.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es JSX.
- Escribir su primer componente React.
- Comprender el uso de `return`.
- Utilizar Fragmentos.
- Mostrar variables dentro de JSX.
- Ejecutar correctamente la aplicación.
- Verificar el proyecto mediante ESLint.
- Contar con la primera versión del Proyecto Web Personal en React.

---

# Conclusiones

JSX permite construir interfaces utilizando una sintaxis muy parecida a HTML.

Un componente React es una función que devuelve una interfaz mediante `return`.

En este laboratorio nació la primera versión del Proyecto Web Personal utilizando React.

A partir de este momento el proyecto dejará de ser el ejemplo generado por Vite y comenzará a evolucionar progresivamente mediante componentes.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo dividimos una aplicación React en componentes reutilizables?**

Crearemos los primeros componentes del Proyecto Web Personal:

- `Header`
- `Main`
- `Footer`

Y aprenderemos cómo una aplicación React puede construirse a partir de múltiples componentes pequeños en lugar de un único archivo.