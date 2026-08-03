# Laboratorio 07: Listas y renderizado condicional

**Nivel:** Básico

**Duración estimada:** 75 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Laboratorio 03: JSX y primer componente.
- Laboratorio 04: Componentización del Proyecto Web Personal.
- Laboratorio 05: Reutilización de componentes mediante Props.
- Laboratorio 06: Estado y eventos en React.
- Comprender el uso de componentes, props y estado.
- Tener funcionando el Proyecto Web Personal.

**Concepto principal:**

Generar componentes a partir de colecciones de datos y mostrar contenido según determinadas condiciones.

---

# Objetivo

Utilizar arreglos, el método `map()`, la propiedad `key` y el renderizado condicional para mostrar una lista de proyectos dentro del Proyecto Web Personal.

---

# Introducción

Hasta este momento hemos creado componentes de manera manual.

Por ejemplo:

```jsx
<Seccion
  titulo="Bienvenida"
  contenido="..."
/>
```

Si necesitáramos mostrar muchos proyectos, podríamos repetir varias veces un componente.

Sin embargo, esta solución produciría código repetido y sería difícil de mantener.

En este laboratorio almacenaremos la información de los proyectos dentro de un arreglo y utilizaremos React para generar automáticamente una tarjeta por cada elemento.

También mostraremos un mensaje diferente cuando el arreglo no contenga proyectos.

---

# La gran pregunta

> **¿Cómo mostramos varios componentes a partir de una colección de datos?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Componentes independientes.
- ✅ Props.
- ✅ Estado local.
- ✅ Eventos.
- ✅ Interacción mediante botones.
- ✅ Componente reutilizable `Seccion`.

Después de este laboratorio tendremos:

- ✅ Archivo de datos para los proyectos.
- ✅ Arreglo de objetos.
- ✅ Componente `TarjetaProyecto`.
- ✅ Componente `ListaProyectos`.
- ✅ Renderizado mediante `map()`.
- ✅ Uso de `key`.
- ✅ Renderizado condicional.
- ✅ Separación entre datos e interfaz.

En el siguiente laboratorio construiremos un formulario controlado.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de recorrer arreglos mediante `map()`, generar componentes dinámicamente y mostrar contenido según el estado de una colección.

---

# ¿Qué es una lista en React?

Una lista representa un conjunto de elementos que comparten una estructura similar.

Por ejemplo:

```text
Proyecto 1
Proyecto 2
Proyecto 3
```

Cada proyecto puede contener:

```text
Identificador
Título
Descripción
```

En lugar de escribir manualmente cada tarjeta, almacenaremos los datos en un arreglo.

---

# Arreglo de proyectos

El archivo:

```text
src/data/proyectos.js
```

contendrá:

```javascript
const proyectos = [
  {
    id: 1,
    titulo: "Portafolio personal",
    descripcion: "Sitio web para presentar información personal y proyectos."
  },
  {
    id: 2,
    titulo: "Aplicación de tareas",
    descripcion: "Herramienta sencilla para organizar actividades pendientes."
  },
  {
    id: 3,
    titulo: "Galería interactiva",
    descripcion: "Colección de imágenes presentada mediante componentes reutilizables."
  }
]

export default proyectos
```

Cada elemento es un objeto.

---

# Estructura de un proyecto

Cada proyecto contiene:

```javascript
{
  id: 1,
  titulo: "Portafolio personal",
  descripcion: "Sitio web para presentar información personal y proyectos."
}
```

## id

Identifica de manera única el proyecto.

## titulo

Contiene el nombre que se mostrará en la tarjeta.

## descripcion

Contiene la explicación del proyecto.

---

# Separación entre datos y componentes

Los datos estarán ubicados en:

```text
src/data/proyectos.js
```

La interfaz estará ubicada en:

```text
src/components
```

Esta separación permite:

- Modificar los datos sin cambiar la estructura visual.
- Reutilizar los componentes.
- Mantener el código organizado.
- Preparar el proyecto para consumir APIs posteriormente.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/06-estado-eventos/proyecto-web-personal
```

La nueva versión estará en:

```text
react/07-listas-condicionales/proyecto-web-personal
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
  06-estado-eventos/proyecto-web-personal/ \
  07-listas-condicionales/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 07-listas-condicionales/proyecto-web-personal
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

La interfaz debe verse igual que en el laboratorio anterior antes de realizar los cambios.

---

# Estructura inicial

```text
src
├── components
│   ├── Contador.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Main.jsx
│   └── Seccion.jsx
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

# Paso 5. Crear la carpeta data

Ejecute:

```bash
mkdir -p src/data
```

Esta carpeta almacenará información utilizada por los componentes.

---

# Paso 6. Crear proyectos.js

Cree:

```text
src/data/proyectos.js
```

Escriba:

```javascript
const proyectos = [
  {
    id: 1,
    titulo: "Portafolio personal",
    descripcion: "Sitio web para presentar información personal y proyectos."
  },
  {
    id: 2,
    titulo: "Aplicación de tareas",
    descripcion: "Herramienta sencilla para organizar actividades pendientes."
  },
  {
    id: 3,
    titulo: "Galería interactiva",
    descripcion: "Colección de imágenes presentada mediante componentes reutilizables."
  }
]

export default proyectos
```

---

# Exportación de los datos

La instrucción:

```javascript
export default proyectos
```

permite importar el arreglo desde otros archivos.

---

# Paso 7. Crear TarjetaProyecto.jsx

Cree:

```text
src/components/TarjetaProyecto.jsx
```

Escriba:

```jsx
function TarjetaProyecto({ titulo, descripcion }) {

  return (
    <article>

      <h3>
        {titulo}
      </h3>

      <p>
        {descripcion}
      </p>

    </article>
  )

}

export default TarjetaProyecto
```

---

# Responsabilidad de TarjetaProyecto

Este componente muestra un solo proyecto.

Recibe:

```text
titulo
descripcion
```

mediante props.

Su estructura se reutilizará para cada elemento del arreglo.

---

# Paso 8. Crear ListaProyectos.jsx

Cree:

```text
src/components/ListaProyectos.jsx
```

Escriba:

```jsx
import TarjetaProyecto from "./TarjetaProyecto"

function ListaProyectos({ proyectos }) {

  if (proyectos.length === 0) {

    return (
      <p>
        No hay proyectos disponibles.
      </p>
    )

  }

  return (
    <section>

      <h2>
        Proyectos
      </h2>

      {proyectos.map((proyecto) => (

        <TarjetaProyecto
          key={proyecto.id}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
        />

      ))}

    </section>
  )

}

export default ListaProyectos
```

---

# Recepción del arreglo

El componente recibe:

```jsx
function ListaProyectos({ proyectos }) {
```

La prop `proyectos` contendrá el arreglo completo.

---

# ¿Qué hace map()?

El método:

```javascript
map()
```

recorre un arreglo y devuelve un nuevo resultado por cada elemento.

En este laboratorio:

```jsx
proyectos.map((proyecto) => (
```

recorre cada proyecto.

Por cada objeto genera:

```jsx
<TarjetaProyecto />
```

---

# Flujo de map()

```text
Arreglo de proyectos
        ↓
map()
        ↓
Proyecto 1 → TarjetaProyecto
Proyecto 2 → TarjetaProyecto
Proyecto 3 → TarjetaProyecto
```

---

# Propiedad key

Cada elemento generado dentro de una lista debe tener una propiedad:

```jsx
key
```

En este caso:

```jsx
key={proyecto.id}
```

React utiliza `key` para identificar cada elemento.

La clave debe:

- Ser única dentro de la lista.
- Mantenerse estable.
- Estar asociada al elemento.

---

# ¿Por qué no utilizar el índice?

Podría escribirse:

```jsx
proyectos.map((proyecto, indice) => (
  <TarjetaProyecto
    key={indice}
  />
))
```

Sin embargo, utilizar el índice puede producir problemas cuando:

- Se eliminan elementos.
- Se agregan elementos.
- Se cambia el orden.

Es preferible utilizar:

```jsx
proyecto.id
```

---

# Envío de props a TarjetaProyecto

Cada proyecto envía:

```jsx
titulo={proyecto.titulo}
descripcion={proyecto.descripcion}
```

El componente recibe estos datos y los muestra.

---

# Renderizado condicional

Antes de mostrar la lista se verifica:

```jsx
if (proyectos.length === 0)
```

Si el arreglo está vacío, se retorna:

```jsx
<p>
  No hay proyectos disponibles.
</p>
```

Si contiene elementos, se muestran las tarjetas.

---

# ¿Qué es el renderizado condicional?

El renderizado condicional consiste en mostrar una interfaz u otra según una condición.

Ejemplo:

```text
Si hay proyectos:
    Mostrar lista

Si no hay proyectos:
    Mostrar mensaje
```

---

# Retorno anticipado

El código:

```jsx
if (proyectos.length === 0) {
  return (
    <p>
      No hay proyectos disponibles.
    </p>
  )
}
```

se conoce como retorno anticipado.

Evita procesar el resto del componente cuando la condición se cumple.

---

# Paso 9. Actualizar Main.jsx

Abra:

```text
src/components/Main.jsx
```

y reemplace su contenido por:

```jsx
import Seccion from "./Seccion"
import Contador from "./Contador"
import ListaProyectos from "./ListaProyectos"
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

    </main>
  )

}

export default Main
```

---

# Importación de datos

La instrucción:

```jsx
import proyectos from "../data/proyectos"
```

importa el arreglo desde la carpeta `data`.

La ruta utiliza:

```text
..
```

porque `Main.jsx` se encuentra dentro de:

```text
components
```

y debe regresar a:

```text
src
```

antes de entrar en:

```text
data
```

---

# Envío del arreglo

El arreglo se envía mediante:

```jsx
<ListaProyectos
  proyectos={proyectos}
/>
```

Se utilizan llaves porque el valor es una variable de JavaScript.

---

# Flujo completo de los datos

```text
proyectos.js
      ↓
Main.jsx
      ↓
ListaProyectos.jsx
      ↓
map()
      ↓
TarjetaProyecto.jsx
```

---

# Props de tipo arreglo

Hasta el momento enviamos texto mediante props.

Ahora enviamos un arreglo:

```jsx
proyectos={proyectos}
```

Las llaves indican que se envía una expresión de JavaScript.

---

# Probar el renderizado condicional

Para comprobar el mensaje de lista vacía, puede modificar temporalmente:

```javascript
const proyectos = []
```

La aplicación debe mostrar:

```text
No hay proyectos disponibles.
```

Después de comprobarlo, restaure el arreglo original.

---

# Archivos creados

Durante este laboratorio se crean:

```text
src/data/proyectos.js
src/components/TarjetaProyecto.jsx
src/components/ListaProyectos.jsx
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

El comando debe finalizar sin errores.

Después ejecute:

```bash
npm run dev
```

Compruebe que aparezcan:

```text
Proyectos

Portafolio personal

Aplicación de tareas

Galería interactiva
```

También verifique temporalmente el caso de arreglo vacío.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Crea la carpeta `data`.
5. Crea un arreglo de proyectos.
6. Exporta los datos.
7. Crea `TarjetaProyecto`.
8. Crea `ListaProyectos`.
9. Recibe un arreglo mediante props.
10. Recorre el arreglo con `map()`.
11. Utiliza `key`.
12. Genera una tarjeta por proyecto.
13. Implementa renderizado condicional.
14. Integra la lista dentro de `Main`.
15. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
07-listas-condicionales
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Contador.jsx
    │   │   ├── Footer.jsx
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

## No importar los datos

Debe incluirse:

```jsx
import proyectos from "../data/proyectos"
```

---

## Ruta incorrecta

Incorrecto:

```jsx
import proyectos from "./data/proyectos"
```

desde `Main.jsx`.

Correcto:

```jsx
import proyectos from "../data/proyectos"
```

---

## No retornar dentro de map()

Incorrecto:

```jsx
proyectos.map((proyecto) => {
  <TarjetaProyecto />
})
```

Correcto:

```jsx
proyectos.map((proyecto) => (
  <TarjetaProyecto />
))
```

---

## No utilizar key

React mostrará una advertencia si falta:

```jsx
key={proyecto.id}
```

---

## Repetir claves

Cada `id` debe ser único.

---

## Escribir map con mayúscula

Incorrecto:

```javascript
Map()
```

Correcto:

```javascript
map()
```

---

## No verificar el arreglo vacío

Si la colección está vacía, conviene informar al usuario.

---

## Escribir los proyectos directamente en JSX

Los datos deben mantenerse separados de los componentes.

---

# Buenas prácticas

- Separar datos y presentación.
- Utilizar identificadores únicos.
- Emplear `map()` para listas.
- Agregar `key` a cada elemento.
- Evitar utilizar el índice como clave.
- Crear componentes para estructuras repetidas.
- Implementar estados vacíos.
- Utilizar nombres descriptivos.
- Mantener rutas de importación claras.
- Ejecutar ESLint.
- Probar listas con datos y sin datos.

---

# Reto

Agregue un cuarto proyecto al arreglo.

Debe contener:

```text
id
titulo
descripcion
```

Después:

1. Compruebe que aparezca automáticamente.
2. No agregue manualmente otro `TarjetaProyecto`.
3. Verifique que el `id` sea único.
4. Ejecute `npm run lint`.

Como reto adicional, agregue una propiedad:

```text
tecnologia
```

y muéstrela dentro de `TarjetaProyecto`.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender cómo representar datos mediante arreglos.
- Crear arreglos de objetos.
- Separar datos y componentes.
- Utilizar `map()`.
- Generar componentes dinámicamente.
- Utilizar `key`.
- Enviar arreglos mediante props.
- Implementar renderizado condicional.
- Mostrar un mensaje para listas vacías.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

React permite generar componentes a partir de colecciones de datos.

El método:

```javascript
map()
```

recorre un arreglo y devuelve una interfaz por cada elemento.

La propiedad:

```jsx
key
```

permite que React identifique correctamente los componentes generados.

El renderizado condicional permite mostrar una interfaz diferente cuando no existen datos.

En este laboratorio, el Proyecto Web Personal comenzó a generar contenido dinámicamente a partir de un arreglo organizado.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo capturamos y administramos la información escrita por el usuario?**

Aprenderemos a utilizar:

- Formularios controlados.
- Estado para campos.
- Evento `onChange`.
- Evento `onSubmit`.
- Objeto `event`.
- Prevención del envío tradicional.
- Validación básica.
- Limpieza del formulario.

El Proyecto Web Personal incorporará un formulario de contacto administrado completamente por React.