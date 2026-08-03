# Laboratorio 06: Estado y eventos en React

**Nivel:** Básico

**Duración estimada:** 75 minutos

**Requisitos previos:**

- Laboratorio 01: Entorno React con Vite.
- Laboratorio 02: Conociendo React.
- Laboratorio 03: JSX y primer componente.
- Laboratorio 04: Componentización del Proyecto Web Personal.
- Laboratorio 05: Reutilización de componentes mediante Props.
- Comprender el uso de componentes y props.
- Tener funcionando el Proyecto Web Personal.

**Concepto principal:**

Manejar información que cambia durante la ejecución de la aplicación mediante estado y eventos.

---

# Objetivo

Utilizar `useState` y eventos para crear una sección interactiva dentro del Proyecto Web Personal.

---

# Introducción

En el laboratorio anterior utilizamos props para enviar información desde componentes padres hacia componentes hijos.

Las props permiten personalizar los componentes, pero representan datos que el componente recibe y no debe modificar directamente.

Ahora necesitamos manejar información que pueda cambiar mientras el usuario interactúa con la aplicación.

Por ejemplo:

```text
Cantidad de interacciones
```

Cuando el usuario presiona un botón, el valor debe aumentar.

Cuando presiona otro botón, el valor debe regresar a cero.

Para resolver este problema utilizaremos:

```text
Estado
```

y:

```text
Eventos
```

---

# La gran pregunta

> **¿Cómo hacemos que una aplicación React responda a las acciones del usuario?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Proyecto organizado mediante componentes.
- ✅ Componentes reutilizables.
- ✅ Información enviada mediante props.
- ✅ Componente `Seccion`.
- ✅ Flujo de datos desde padres hacia hijos.

Después de este laboratorio tendremos:

- ✅ Estado local.
- ✅ Uso de `useState`.
- ✅ Eventos de clic.
- ✅ Funciones controladoras.
- ✅ Actualización automática de la interfaz.
- ✅ Componente interactivo `Contador`.

En el siguiente laboratorio utilizaremos arreglos y renderizado condicional para mostrar contenido dinámico.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de crear estado local mediante `useState`, responder a eventos y actualizar la interfaz de un componente React.

---

# ¿Qué es el estado?

El estado representa información que puede cambiar durante la ejecución de una aplicación.

Por ejemplo:

```text
Cantidad de interacciones: 0
```

Después de hacer clic:

```text
Cantidad de interacciones: 1
```

El valor cambia sin recargar completamente la página.

---

# Diferencia entre props y estado

| Props | Estado |
|------|--------|
| Se reciben desde otro componente. | Se administra dentro del componente. |
| Se consideran de solo lectura. | Puede actualizarse mediante una función. |
| Permiten personalizar componentes. | Permite almacenar información cambiante. |
| Fluyen desde el padre hacia el hijo. | Pertenece al componente que lo declara. |

---

# ¿Qué es useState?

`useState` es un Hook de React.

Permite crear una variable de estado y una función para actualizarla.

Ejemplo:

```jsx
const [cantidad, setCantidad] = useState(0)
```

Esta instrucción crea:

```text
cantidad
```

Valor actual del estado.

```text
setCantidad
```

Función que permite actualizarlo.

```text
0
```

Valor inicial.

---

# ¿Qué es un Hook?

Un Hook es una función especial de React.

Los Hooks permiten utilizar características como:

- Estado.
- Efectos.
- Referencias.
- Contexto.

En este laboratorio utilizaremos:

```jsx
useState
```

Los Hooks deben:

- Utilizarse dentro de componentes.
- Escribirse en el nivel principal del componente.
- No ejecutarse dentro de condicionales o ciclos.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/05-props/proyecto-web-personal
```

La nueva versión estará en:

```text
react/06-estado-eventos/proyecto-web-personal
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
  05-props/proyecto-web-personal/ \
  06-estado-eventos/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 06-estado-eventos/proyecto-web-personal
```

---

# Paso 3. Instalar dependencias

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

La aplicación debe mostrar la misma interfaz del Laboratorio 05 antes de agregar la interacción.

---

# Estructura inicial

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

# Estructura final

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

# Paso 5. Crear el componente Contador

Cree:

```text
src/components/Contador.jsx
```

Escriba:

```jsx
import { useState } from "react"

function Contador() {

  const [cantidad, setCantidad] = useState(0)

  function aumentarCantidad() {
    setCantidad((valorAnterior) => valorAnterior + 1)
  }

  function reiniciarCantidad() {
    setCantidad(0)
  }

  return (
    <section>

      <h2>
        Interacción con el proyecto
      </h2>

      <p>
        Cantidad de interacciones: {cantidad}
      </p>

      <button
        type="button"
        onClick={aumentarCantidad}
      >
        Interactuar
      </button>

      <button
        type="button"
        onClick={reiniciarCantidad}
      >
        Reiniciar
      </button>

    </section>
  )

}

export default Contador
```

---

# Importación de useState

La primera línea es:

```jsx
import { useState } from "react"
```

Esta instrucción importa el Hook desde React.

Sin esta importación no puede utilizarse:

```jsx
useState()
```

---

# Creación del estado

```jsx
const [cantidad, setCantidad] = useState(0)
```

La estructura general es:

```jsx
const [estado, funcionActualizadora] = useState(valorInicial)
```

En este ejemplo:

```text
Estado:
cantidad
```

```text
Función actualizadora:
setCantidad
```

```text
Valor inicial:
0
```

---

# Mostrar el estado

El valor se muestra dentro de JSX mediante llaves:

```jsx
<p>
  Cantidad de interacciones: {cantidad}
</p>
```

Cuando `cantidad` cambia, React actualiza automáticamente esta parte de la interfaz.

---

# Función para aumentar

```jsx
function aumentarCantidad() {
  setCantidad((valorAnterior) => valorAnterior + 1)
}
```

Esta función recibe el valor anterior y retorna el nuevo valor.

Ejemplo:

```text
0 → 1
1 → 2
2 → 3
```

Utilizar el valor anterior es una práctica recomendada cuando el nuevo estado depende del estado previo.

---

# Función para reiniciar

```jsx
function reiniciarCantidad() {
  setCantidad(0)
}
```

Esta función establece nuevamente el valor en:

```text
0
```

---

# ¿Qué es un evento?

Un evento representa una acción realizada por el usuario.

Algunos ejemplos son:

- Hacer clic.
- Escribir.
- Enviar un formulario.
- Mover el cursor.
- Cambiar una opción.
- Presionar una tecla.

En este laboratorio utilizamos:

```text
click
```

---

# El evento onClick

En JSX, el evento de clic se escribe:

```jsx
onClick
```

Ejemplo:

```jsx
<button
  type="button"
  onClick={aumentarCantidad}
>
  Interactuar
</button>
```

Cuando el usuario hace clic, React ejecuta:

```text
aumentarCantidad
```

---

# No ejecutar la función directamente

Correcto:

```jsx
onClick={aumentarCantidad}
```

Incorrecto:

```jsx
onClick={aumentarCantidad()}
```

En la forma correcta se entrega la referencia de la función.

En la forma incorrecta la función se ejecutaría durante el renderizado.

---

# Funciones controladoras

Las funciones que responden a eventos también pueden llamarse:

```text
manejadores de eventos
```

o:

```text
funciones controladoras
```

En este laboratorio son:

```text
aumentarCantidad
reiniciarCantidad
```

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

      <Contador />

    </main>
  )

}

export default Main
```

---

# Importación de Contador

```jsx
import Contador from "./Contador"
```

Después se utiliza mediante:

```jsx
<Contador />
```

---

# Flujo del componente

La interacción funciona así:

```text
Usuario hace clic
        ↓
onClick ejecuta una función
        ↓
setCantidad actualiza el estado
        ↓
React vuelve a renderizar
        ↓
La interfaz muestra el nuevo valor
```

---

# Renderizado

React ejecuta nuevamente el componente cuando su estado cambia.

Esto no significa que toda la página se recargue.

React actualiza la parte necesaria de la interfaz.

---

# Inmutabilidad

El estado no debe modificarse directamente.

Incorrecto:

```jsx
cantidad = cantidad + 1
```

Correcto:

```jsx
setCantidad((valorAnterior) => valorAnterior + 1)
```

React necesita conocer el cambio mediante la función actualizadora.

---

# El valor inicial

El estado se crea con:

```jsx
useState(0)
```

Por eso, al abrir la aplicación aparece:

```text
Cantidad de interacciones: 0
```

Cada vez que se recarga completamente la página, el componente vuelve a iniciar con ese valor.

---

# Estado local

El estado pertenece al componente:

```text
Contador
```

Otros componentes no tienen acceso directo a:

```text
cantidad
```

Por eso se denomina:

```text
estado local
```

---

# Archivos modificados

Durante este laboratorio se modifica:

```text
src/components/Main.jsx
```

y se crea:

```text
src/components/Contador.jsx
```

---

# Archivos que no se modifican

```text
src/App.jsx
src/components/Header.jsx
src/components/Footer.jsx
src/components/Seccion.jsx
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

Compruebe:

1. El valor comienza en cero.
2. El botón **Interactuar** aumenta el valor.
3. Cada clic aumenta una unidad.
4. El botón **Reiniciar** devuelve el valor a cero.
5. La página no se recarga.
6. La consola no muestra errores.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Crea `Contador.jsx`.
5. Importa `useState`.
6. Declara un estado local.
7. Muestra el estado dentro de JSX.
8. Crea una función para aumentar.
9. Crea una función para reiniciar.
10. Asocia funciones al evento `onClick`.
11. Integra `Contador` en `Main`.
12. Comprueba la actualización automática.
13. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
06-estado-eventos
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Contador.jsx
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

## No importar useState

Incorrecto:

```jsx
const [cantidad, setCantidad] = useState(0)
```

sin la importación.

Correcto:

```jsx
import { useState } from "react"
```

---

## Escribir useState con minúscula incorrecta

Incorrecto:

```jsx
usestate
```

Correcto:

```jsx
useState
```

---

## Modificar el estado directamente

Incorrecto:

```jsx
cantidad++
```

Correcto:

```jsx
setCantidad((valorAnterior) => valorAnterior + 1)
```

---

## Ejecutar la función dentro de onClick

Incorrecto:

```jsx
onClick={aumentarCantidad()}
```

Correcto:

```jsx
onClick={aumentarCantidad}
```

---

## Escribir onclick

Incorrecto:

```jsx
onclick
```

Correcto:

```jsx
onClick
```

Los eventos en JSX utilizan notación camelCase.

---

## Crear el Hook fuera del componente

`useState` debe utilizarse dentro del componente.

---

## Crear el Hook dentro de una condición

Los Hooks deben ejecutarse siempre en el mismo orden.

No deben colocarse dentro de:

- `if`.
- Ciclos.
- Funciones internas.
- Condiciones.

---

## No importar Contador en Main

Debe incluirse:

```jsx
import Contador from "./Contador"
```

---

# Buenas prácticas

- Importar los Hooks al inicio del archivo.
- Utilizar nombres descriptivos.
- Nombrar las funciones según su acción.
- Actualizar el estado mediante su función.
- Utilizar el valor anterior cuando sea necesario.
- No modificar el estado directamente.
- Mantener el estado cerca del componente que lo utiliza.
- Separar la lógica en funciones controladoras.
- Utilizar `type="button"`.
- Ejecutar ESLint.
- Probar todos los botones.

---

# Reto

Agregue un tercer botón:

```text
Disminuir
```

Debe reducir el valor una unidad.

Cree una función:

```jsx
function disminuirCantidad() {
  setCantidad((valorAnterior) => valorAnterior - 1)
}
```

Después agregue el botón:

```jsx
<button
  type="button"
  onClick={disminuirCantidad}
>
  Disminuir
</button>
```

Como reto adicional, evite que el valor sea menor que cero.

Puede utilizar:

```jsx
setCantidad((valorAnterior) =>
  valorAnterior > 0
    ? valorAnterior - 1
    : 0
)
```

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es el estado.
- Diferenciar props y estado.
- Importar `useState`.
- Crear estado local.
- Mostrar estado dentro de JSX.
- Actualizar el estado correctamente.
- Comprender qué es un evento.
- Utilizar `onClick`.
- Crear funciones controladoras.
- Comprender el renderizado automático.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

El estado permite almacenar información que cambia durante la ejecución.

`useState` devuelve:

```text
Valor actual
Función actualizadora
```

Los eventos permiten responder a las acciones del usuario.

En este laboratorio, el Proyecto Web Personal dejó de ser únicamente informativo y comenzó a ser interactivo.

El flujo principal fue:

```text
Evento
    ↓
Función
    ↓
Actualización del estado
    ↓
Nuevo renderizado
```

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo mostramos varios elementos a partir de una colección de datos?**

Aprenderemos a utilizar:

- Arreglos.
- `map()`.
- Propiedad `key`.
- Renderizado de listas.
- Condiciones dentro de JSX.
- Operador ternario.
- Renderizado condicional.

El Proyecto Web Personal comenzará a generar contenido a partir de datos organizados.