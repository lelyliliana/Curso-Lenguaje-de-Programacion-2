# Laboratorio 09: Efectos con useEffect

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
- Laboratorio 08: Formularios controlados en React.
- Comprender el uso de `useState`.
- Comprender eventos y renderizado condicional.
- Tener funcionando el Proyecto Web Personal.

**Concepto principal:**

Ejecutar efectos secundarios cuando un componente aparece, cambia su estado o deja de utilizarse.

---

# Objetivo

Utilizar `useEffect` para sincronizar componentes de React con elementos externos, como el título del documento y los eventos de conexión del navegador.

---

# Introducción

Hasta este momento los componentes han generado interfaces y respondido a las acciones del usuario.

También hemos utilizado estado para almacenar información cambiante.

Sin embargo, algunas tareas no forman parte directamente del renderizado de la interfaz.

Por ejemplo:

- Cambiar el título de la pestaña.
- Escuchar eventos del navegador.
- Detectar si el dispositivo está conectado.
- Iniciar temporizadores.
- Consultar servicios externos.
- Suscribirse a eventos.
- Eliminar suscripciones cuando el componente deja de utilizarse.

Estas tareas se conocen como:

```text
Efectos secundarios
```

React permite administrarlas mediante el Hook:

```jsx
useEffect
```

---

# La gran pregunta

> **¿Cómo ejecutamos código cuando un componente aparece o cuando cambia un valor?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Componentes reutilizables.
- ✅ Props.
- ✅ Estado local.
- ✅ Eventos.
- ✅ Listas y renderizado condicional.
- ✅ Formularios controlados.
- ✅ Validación básica.
- ✅ Contenido dinámico.

Después de este laboratorio tendremos:

- ✅ Uso de `useEffect`.
- ✅ Sincronización con el título del documento.
- ✅ Dependencias de un efecto.
- ✅ Escucha de eventos del navegador.
- ✅ Detección del estado de conexión.
- ✅ Funciones de limpieza.
- ✅ Comprensión del montaje y desmontaje.

En el siguiente laboratorio utilizaremos efectos para consumir información desde una API.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de utilizar `useEffect` para sincronizar componentes con sistemas externos, controlar su ejecución y limpiar los recursos utilizados.

---

# ¿Qué es un efecto secundario?

Un efecto secundario es una operación que ocurre fuera del cálculo directo de la interfaz.

Algunos ejemplos son:

```text
Modificar document.title
Consultar una API
Registrar un evento del navegador
Iniciar un temporizador
Acceder al almacenamiento local
Manipular recursos externos
```

El componente puede continuar devolviendo JSX, pero además necesita sincronizarse con algo externo.

---

# ¿Qué es useEffect?

`useEffect` es un Hook de React.

Su estructura general es:

```jsx
useEffect(() => {

  // Código del efecto

}, [])
```

Recibe:

1. Una función.
2. Un arreglo de dependencias.

También puede retornar una función de limpieza.

---

# Importación de useEffect

Para utilizarlo debe importarse desde React:

```jsx
import { useEffect, useState } from "react"
```

En este laboratorio utilizaremos ambos Hooks:

```text
useState
useEffect
```

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/08-formularios/proyecto-web-personal
```

La nueva versión estará en:

```text
react/09-efectos/proyecto-web-personal
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
  08-formularios/proyecto-web-personal/ \
  09-efectos/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 09-efectos/proyecto-web-personal
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

La aplicación debe funcionar igual que en el Laboratorio 08 antes de realizar los cambios.

---

# Estructura inicial

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

# Estructura final

```text
src
├── components
│   ├── Contador.jsx
│   ├── EstadoConexion.jsx
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

# Primer efecto: cambiar el título del documento

Modificaremos el componente:

```text
src/components/Contador.jsx
```

para que el título de la pestaña muestre la cantidad de interacciones.

---

# Paso 5. Actualizar Contador.jsx

Reemplace el contenido por:

```jsx
import { useEffect, useState } from "react"

function Contador() {

  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {

    document.title = `Interacciones: ${cantidad}`

    return () => {
      document.title = "Proyecto Web Personal"
    }

  }, [cantidad])

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

# El efecto del contador

El efecto es:

```jsx
useEffect(() => {

  document.title = `Interacciones: ${cantidad}`

  return () => {
    document.title = "Proyecto Web Personal"
  }

}, [cantidad])
```

Este código sincroniza el título del documento con el estado:

```text
cantidad
```

---

# El arreglo de dependencias

Al final del efecto aparece:

```jsx
[cantidad]
```

Esto significa:

```text
Ejecutar el efecto cuando cambie cantidad
```

Ejemplo:

```text
cantidad = 0
Título: Interacciones: 0

cantidad = 1
Título: Interacciones: 1

cantidad = 2
Título: Interacciones: 2
```

---

# Uso de document.title

La instrucción:

```javascript
document.title
```

permite consultar o modificar el título de la pestaña del navegador.

En este caso:

```jsx
document.title = `Interacciones: ${cantidad}`
```

utiliza una plantilla literal para incorporar el valor actual.

---

# ¿Cuándo se ejecuta este efecto?

El efecto se ejecuta:

1. Cuando el componente aparece por primera vez.
2. Cada vez que cambia `cantidad`.

No se ejecuta por cualquier cambio de la aplicación.

Su dependencia es únicamente:

```text
cantidad
```

---

# Función de limpieza

El efecto retorna:

```jsx
return () => {
  document.title = "Proyecto Web Personal"
}
```

Esta función se utiliza para limpiar o restaurar el recurso administrado por el efecto.

En este caso restaura el título.

---

# ¿Cuándo se ejecuta la limpieza?

La función de limpieza puede ejecutarse:

- Antes de repetir el efecto.
- Cuando cambia una dependencia.
- Cuando el componente deja de mostrarse.
- Cuando el componente se desmonta.

---

# Segundo efecto: detectar la conexión

Crearemos un componente que escuche los eventos del navegador:

```text
online
offline
```

---

# Paso 6. Crear EstadoConexion.jsx

Cree:

```text
src/components/EstadoConexion.jsx
```

Escriba:

```jsx
import { useEffect, useState } from "react"

function EstadoConexion() {

  const [enLinea, setEnLinea] = useState(navigator.onLine)

  useEffect(() => {

    function manejarConexion() {
      setEnLinea(true)
    }

    function manejarDesconexion() {
      setEnLinea(false)
    }

    window.addEventListener("online", manejarConexion)
    window.addEventListener("offline", manejarDesconexion)

    return () => {
      window.removeEventListener("online", manejarConexion)
      window.removeEventListener("offline", manejarDesconexion)
    }

  }, [])

  return (
    <section>

      <h2>
        Estado de conexión
      </h2>

      <p>
        {enLinea
          ? "El dispositivo está conectado a Internet."
          : "El dispositivo está sin conexión."}
      </p>

    </section>
  )

}

export default EstadoConexion
```

---

# Estado inicial de la conexión

El estado se crea con:

```jsx
const [enLinea, setEnLinea] = useState(navigator.onLine)
```

La propiedad:

```javascript
navigator.onLine
```

devuelve un valor booleano:

```text
true
false
```

---

# Eventos online y offline

El navegador puede generar:

```text
online
```

cuando recupera la conexión, y:

```text
offline
```

cuando la pierde.

---

# Función manejarConexion

```jsx
function manejarConexion() {
  setEnLinea(true)
}
```

Actualiza el estado cuando se detecta conexión.

---

# Función manejarDesconexion

```jsx
function manejarDesconexion() {
  setEnLinea(false)
}
```

Actualiza el estado cuando el dispositivo queda sin conexión.

---

# Registrar eventos

Dentro del efecto se ejecuta:

```jsx
window.addEventListener("online", manejarConexion)
window.addEventListener("offline", manejarDesconexion)
```

Esto registra las funciones que responderán a los eventos.

---

# Arreglo de dependencias vacío

El efecto termina con:

```jsx
[]
```

Esto indica que el efecto se registra cuando el componente aparece.

No depende de ningún estado o prop.

---

# Limpieza de eventos

El efecto retorna:

```jsx
return () => {
  window.removeEventListener("online", manejarConexion)
  window.removeEventListener("offline", manejarDesconexion)
}
```

Esta limpieza elimina los eventos registrados.

---

# ¿Por qué es necesaria la limpieza?

Sin limpieza podrían quedar eventos registrados después de que el componente deje de utilizarse.

Esto puede producir:

- Ejecuciones duplicadas.
- Consumo innecesario de memoria.
- Comportamientos inesperados.
- Actualizaciones sobre componentes desmontados.

---

# Renderizado condicional

El mensaje se determina mediante un operador ternario:

```jsx
{enLinea
  ? "El dispositivo está conectado a Internet."
  : "El dispositivo está sin conexión."}
```

La estructura general es:

```javascript
condicion
  ? valorSiEsVerdadero
  : valorSiEsFalso
```

---

# Paso 7. Actualizar Main.jsx

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
import EstadoConexion from "./EstadoConexion"
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

      <EstadoConexion />

      <FormularioContacto />

    </main>
  )

}

export default Main
```

---

# Integración de EstadoConexion

Primero se importa:

```jsx
import EstadoConexion from "./EstadoConexion"
```

Después se utiliza:

```jsx
<EstadoConexion />
```

---

# Flujo del efecto del contador

```text
Usuario hace clic
        ↓
Se actualiza cantidad
        ↓
React renderiza nuevamente
        ↓
useEffect detecta el cambio
        ↓
document.title se actualiza
```

---

# Flujo del efecto de conexión

```text
Componente aparece
        ↓
useEffect registra eventos
        ↓
El navegador cambia de conexión
        ↓
Se ejecuta una función
        ↓
Se actualiza enLinea
        ↓
React muestra el nuevo mensaje
```

Cuando el componente desaparece:

```text
Función de limpieza
        ↓
Se eliminan los eventos
```

---

# Montaje

El montaje ocurre cuando un componente aparece por primera vez en la aplicación.

En `EstadoConexion`, durante el montaje se registran los eventos:

```text
online
offline
```

---

# Actualización

La actualización ocurre cuando cambian:

- El estado.
- Las props.
- Las dependencias de un efecto.

En `Contador`, el efecto se actualiza cuando cambia:

```text
cantidad
```

---

# Desmontaje

El desmontaje ocurre cuando el componente deja de formar parte de la interfaz.

En ese momento React ejecuta la limpieza del efecto.

---

# Formas básicas de useEffect

## Sin arreglo de dependencias

```jsx
useEffect(() => {
  // Efecto
})
```

Se ejecuta después de cada renderizado.

Debe utilizarse con cuidado.

---

## Con arreglo vacío

```jsx
useEffect(() => {
  // Efecto
}, [])
```

Se utiliza para un efecto que se configura al montar el componente.

---

## Con dependencias

```jsx
useEffect(() => {
  // Efecto
}, [cantidad])
```

Se ejecuta cuando cambia una dependencia.

---

# No utilizar useEffect para todo

`useEffect` no debe utilizarse para cálculos que pueden realizarse directamente durante el renderizado.

Por ejemplo, no es necesario crear un efecto para calcular:

```javascript
const doble = cantidad * 2
```

Los efectos se utilizan principalmente para sincronizarse con sistemas externos.

---

# Reglas de los Hooks

`useEffect` debe:

- Utilizarse dentro de un componente.
- Escribirse en el nivel principal.
- No colocarse dentro de condicionales.
- No colocarse dentro de ciclos.
- Mantener un orden constante.
- Declarar correctamente sus dependencias.

---

# Archivos creados

Durante este laboratorio se crea:

```text
src/components/EstadoConexion.jsx
```

---

# Archivos modificados

Se modifican:

```text
src/components/Contador.jsx
src/components/Main.jsx
```

---

# Archivos que no se modifican

```text
src/App.jsx
src/components/Header.jsx
src/components/Footer.jsx
src/components/Seccion.jsx
src/components/ListaProyectos.jsx
src/components/TarjetaProyecto.jsx
src/components/FormularioContacto.jsx
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

1. El título comienza con `Interacciones: 0`.
2. El botón **Interactuar** aumenta la cantidad.
3. El título de la pestaña se actualiza.
4. El botón **Reiniciar** devuelve el valor a cero.
5. Aparece el estado actual de conexión.
6. Al perder la conexión cambia el mensaje.
7. Al recuperar la conexión cambia nuevamente.
8. La consola no muestra errores.
9. ESLint finaliza correctamente.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Importa `useEffect`.
5. Sincroniza el título con el estado.
6. Define una dependencia.
7. Implementa una función de limpieza.
8. Crea `EstadoConexion`.
9. Consulta `navigator.onLine`.
10. Registra eventos del navegador.
11. Elimina eventos durante la limpieza.
12. Utiliza renderizado condicional.
13. Integra el componente en `Main`.
14. Comprueba conexión y desconexión.
15. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
09-efectos
├── README.md
└── proyecto-web-personal
    ├── public
    ├── src
    │   ├── components
    │   │   ├── Contador.jsx
    │   │   ├── EstadoConexion.jsx
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

## No importar useEffect

Debe incluirse:

```jsx
import { useEffect, useState } from "react"
```

---

## Omitir el arreglo de dependencias

El efecto puede ejecutarse después de cada renderizado.

Debe definirse según su propósito.

---

## Dependencia incorrecta

Si el efecto utiliza `cantidad`, debe declararse:

```jsx
[cantidad]
```

---

## Registrar eventos fuera del efecto

Los eventos relacionados con el ciclo de vida del componente deben registrarse dentro de `useEffect`.

---

## No eliminar los eventos

Debe utilizarse:

```jsx
removeEventListener
```

durante la limpieza.

---

## Utilizar funciones diferentes al eliminar el evento

La función utilizada en:

```jsx
removeEventListener
```

debe ser la misma registrada con:

```jsx
addEventListener
```

---

## Ejecutar el Hook dentro de una condición

Incorrecto:

```jsx
if (condicion) {
  useEffect(() => {
  }, [])
}
```

Los Hooks deben ejecutarse en el nivel principal.

---

## Crear un ciclo de actualizaciones

Un efecto que cambia constantemente una dependencia puede producir un ciclo infinito.

Debe revisarse cuidadosamente qué estados se actualizan dentro del efecto.

---

# Buenas prácticas

- Utilizar efectos únicamente cuando sean necesarios.
- Declarar todas las dependencias utilizadas.
- Mantener efectos con una responsabilidad clara.
- Limpiar eventos y suscripciones.
- Evitar ciclos de actualización.
- No modificar el estado directamente.
- Nombrar claramente las funciones.
- Separar efectos no relacionados.
- Ejecutar ESLint.
- Probar el montaje, la actualización y la limpieza.

---

# Reto

Cree un componente llamado:

```text
Reloj.jsx
```

Debe utilizar:

```jsx
useState
useEffect
setInterval
clearInterval
```

El componente mostrará la hora actual.

El efecto debe crear un intervalo que actualice la hora cada segundo.

La función de limpieza debe eliminarlo mediante:

```javascript
clearInterval()
```

Después:

1. Importe el componente en `Main.jsx`.
2. Muestre la hora actual.
3. Verifique que se actualice.
4. Compruebe que existe una función de limpieza.
5. Ejecute `npm run lint`.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es un efecto secundario.
- Importar `useEffect`.
- Crear efectos.
- Utilizar arreglos de dependencias.
- Diferenciar efecto inicial y efecto dependiente.
- Sincronizar el título del documento.
- Escuchar eventos del navegador.
- Crear funciones de limpieza.
- Comprender montaje, actualización y desmontaje.
- Evitar efectos innecesarios.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

`useEffect` permite sincronizar los componentes de React con sistemas externos.

En este laboratorio se utilizó para:

```text
Actualizar document.title
Escuchar eventos online y offline
Eliminar eventos al desmontar el componente
```

El arreglo de dependencias controla cuándo se ejecuta el efecto.

La función retornada permite limpiar los recursos utilizados.

El Proyecto Web Personal ahora responde no solo a eventos internos, sino también a cambios del navegador y del entorno.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo obtenemos información desde un servicio externo?**

Aprenderemos a utilizar:

- APIs.
- `fetch`.
- `async` y `await`.
- Estado de carga.
- Manejo de errores.
- `useEffect` para realizar solicitudes.
- Transformación de respuestas JSON.
- Renderizado de información externa.

El Proyecto Web Personal comenzará a consumir datos desde Internet.