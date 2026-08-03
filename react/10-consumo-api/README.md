# Laboratorio 10: Consumo de una API con React

**Nivel:** Intermedio

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
- Laboratorio 09: Efectos con `useEffect`.
- Comprender el uso de `useState`.
- Comprender el uso de `useEffect`.
- Comprender estados de carga y renderizado condicional.
- Tener conexión a Internet.

**Concepto principal:**

Obtener información desde una API pública y mostrarla dentro de una aplicación React.

---

# Objetivo

Consumir la API pública de GitHub mediante `fetch`, administrar estados de carga y error, y mostrar la información obtenida dentro del Proyecto Web Personal.

---

# Introducción

Hasta este momento, la información mostrada por el Proyecto Web Personal proviene de:

- Variables.
- Props.
- Estado local.
- Arreglos definidos dentro del proyecto.
- Formularios administrados por React.

Ahora incorporaremos información externa.

Utilizaremos la API pública de GitHub para obtener datos reales de un perfil.

La aplicación mostrará:

- Avatar.
- Nombre.
- Usuario.
- Cantidad de repositorios públicos.
- Cantidad de seguidores.
- Enlace al perfil.

---

# La gran pregunta

> **¿Cómo obtenemos información desde Internet y la mostramos dentro de una aplicación React?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Componentes.
- ✅ Props.
- ✅ Estado.
- ✅ Eventos.
- ✅ Listas.
- ✅ Formularios.
- ✅ Efectos.
- ✅ Sincronización con el navegador.

Después de este laboratorio tendremos:

- ✅ Consumo de una API.
- ✅ Solicitudes mediante `fetch`.
- ✅ Funciones asíncronas.
- ✅ Uso de `async` y `await`.
- ✅ Transformación de respuestas JSON.
- ✅ Estado de carga.
- ✅ Manejo de errores.
- ✅ Renderizado de datos externos.
- ✅ Integración con la API de GitHub.

En el siguiente laboratorio integraremos y prepararemos el proyecto para publicación.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de consumir una API pública, procesar una respuesta JSON y mostrar los datos obtenidos dentro de componentes React.

---

# ¿Qué es una API?

API significa:

```text
Application Programming Interface
```

Una API permite que diferentes aplicaciones intercambien información.

En este laboratorio utilizaremos:

```text
https://api.github.com/users/octocat
```

Esta dirección devuelve información pública sobre un usuario de GitHub.

---

# Observar primero la respuesta

Antes de programar, abra en el navegador:

```text
https://api.github.com/users/octocat
```

La respuesta contiene datos en formato JSON.

Entre las propiedades más importantes aparecen:

```text
login
name
avatar_url
html_url
public_repos
followers
```

---

# ¿Qué es JSON?

JSON significa:

```text
JavaScript Object Notation
```

Es un formato utilizado para representar datos estructurados.

Ejemplo:

```json
{
  "login": "octocat",
  "name": "The Octocat",
  "public_repos": 8,
  "followers": 23531
}
```

Los valores pueden cambiar con el tiempo porque provienen de un servicio real.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/09-efectos/proyecto-web-personal
```

La nueva versión estará en:

```text
react/10-consumo-api/proyecto-web-personal
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
  09-efectos/proyecto-web-personal/ \
  10-consumo-api/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 10-consumo-api/proyecto-web-personal
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

La aplicación debe verse igual que en el Laboratorio 09 antes de realizar los cambios.

---

# Estructura inicial

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
│   ├── PerfilGithub.jsx
│   ├── Seccion.jsx
│   └── TarjetaProyecto.jsx
├── data
│   └── proyectos.js
├── App.jsx
├── index.css
└── main.jsx
```

---

# Paso 5. Crear PerfilGithub.jsx

Cree:

```text
src/components/PerfilGithub.jsx
```

Escriba:

```jsx
import { useEffect, useState } from "react"

function PerfilGithub() {

  const [perfil, setPerfil] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    async function obtenerPerfil() {

      try {

        setCargando(true)
        setError(false)

        const respuesta = await fetch(
          "https://api.github.com/users/octocat"
        )

        if (!respuesta.ok) {
          throw new Error("No fue posible obtener el perfil")
        }

        const datos = await respuesta.json()

        setPerfil(datos)

      } catch (errorSolicitud) {

        console.error(errorSolicitud)
        setError(true)

      } finally {

        setCargando(false)

      }

    }

    obtenerPerfil()

  }, [])

  if (cargando) {

    return (
      <section>

        <h2>
          Perfil de GitHub
        </h2>

        <p>
          Cargando información...
        </p>

      </section>
    )

  }

  if (error) {

    return (
      <section>

        <h2>
          Perfil de GitHub
        </h2>

        <p>
          No fue posible obtener la información.
        </p>

      </section>
    )

  }

  return (
    <section>

      <h2>
        Perfil de GitHub
      </h2>

      <img
        src={perfil.avatar_url}
        alt={`Avatar de ${perfil.login}`}
        width="150"
        height="150"
      />

      <h3>
        {perfil.name || perfil.login}
      </h3>

      <p>
        Usuario: {perfil.login}
      </p>

      <p>
        Repositorios públicos: {perfil.public_repos}
      </p>

      <p>
        Seguidores: {perfil.followers}
      </p>

      <a
        href={perfil.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil en GitHub
      </a>

    </section>
  )

}

export default PerfilGithub
```

---

# Estados del componente

El componente utiliza tres estados.

## perfil

```jsx
const [perfil, setPerfil] = useState(null)
```

Almacenará la información obtenida desde GitHub.

Valor inicial:

```text
null
```

---

## cargando

```jsx
const [cargando, setCargando] = useState(true)
```

Indica si la solicitud sigue ejecutándose.

Valor inicial:

```text
true
```

---

## error

```jsx
const [error, setError] = useState(false)
```

Indica si ocurrió un problema durante la solicitud.

Valor inicial:

```text
false
```

---

# Ejecutar la consulta al montar

La solicitud se realiza dentro de:

```jsx
useEffect(() => {

}, [])
```

El arreglo vacío indica que se ejecutará cuando el componente aparezca.

---

# Función asíncrona

Dentro del efecto se crea:

```jsx
async function obtenerPerfil() {
```

La palabra:

```javascript
async
```

permite utilizar:

```javascript
await
```

dentro de la función.

---

# Realizar la solicitud

```jsx
const respuesta = await fetch(
  "https://api.github.com/users/octocat"
)
```

`fetch` realiza una solicitud HTTP.

`await` espera la respuesta antes de continuar.

---

# Verificar la respuesta

```jsx
if (!respuesta.ok) {
  throw new Error("No fue posible obtener el perfil")
}
```

La propiedad:

```javascript
respuesta.ok
```

indica si la respuesta fue exitosa.

Si no lo fue, se genera un error.

---

# Convertir a JSON

```jsx
const datos = await respuesta.json()
```

La respuesta HTTP debe transformarse a un objeto JavaScript.

---

# Guardar la información

```jsx
setPerfil(datos)
```

Después de esta instrucción, `perfil` contiene las propiedades recibidas desde GitHub.

---

# Manejo de errores

La estructura:

```jsx
try {

} catch (errorSolicitud) {

} finally {

}
```

permite controlar distintos resultados.

---

## try

Contiene las instrucciones que pueden fallar.

---

## catch

Se ejecuta cuando ocurre un error.

```jsx
console.error(errorSolicitud)
setError(true)
```

---

## finally

Se ejecuta tanto si la solicitud fue exitosa como si falló.

```jsx
setCargando(false)
```

---

# Estado de carga

Mientras:

```text
cargando = true
```

el componente retorna:

```jsx
<p>
  Cargando información...
</p>
```

Este mensaje puede aparecer por un instante mientras llega la respuesta.

---

# Estado de error

Cuando:

```text
error = true
```

el componente muestra:

```jsx
<p>
  No fue posible obtener la información.
</p>
```

---

# Estado exitoso

Cuando la información llega correctamente, se renderizan los datos del perfil.

---

# Mostrar el avatar

```jsx
<img
  src={perfil.avatar_url}
  alt={`Avatar de ${perfil.login}`}
  width="150"
  height="150"
/>
```

La imagen se obtiene directamente desde la propiedad:

```text
avatar_url
```

---

# Nombre alternativo

```jsx
{perfil.name || perfil.login}
```

Si `name` contiene un valor, se muestra.

Si no existe, se utiliza:

```text
login
```

---

# Datos mostrados

```jsx
Usuario: {perfil.login}
```

```jsx
Repositorios públicos: {perfil.public_repos}
```

```jsx
Seguidores: {perfil.followers}
```

---

# Enlace externo

```jsx
<a
  href={perfil.html_url}
  target="_blank"
  rel="noreferrer"
>
  Ver perfil en GitHub
</a>
```

`target="_blank"` abre una pestaña nueva.

`rel="noreferrer"` aplica una medida de seguridad y privacidad.

---

# Paso 6. Actualizar Main.jsx

Abra:

```text
src/components/Main.jsx
```

Agregue la importación:

```jsx
import PerfilGithub from "./PerfilGithub"
```

Luego utilice:

```jsx
<PerfilGithub />
```

después de la lista de proyectos.

El archivo completo debe conservar los demás componentes ya construidos.

---

# Flujo completo de la solicitud

```text
Componente aparece
        ↓
useEffect
        ↓
obtenerPerfil()
        ↓
fetch()
        ↓
Respuesta HTTP
        ↓
respuesta.json()
        ↓
setPerfil(datos)
        ↓
React renderiza el perfil
```

---

# Flujo de carga

```text
cargando = true
        ↓
Mostrar "Cargando información..."
        ↓
Finaliza la solicitud
        ↓
cargando = false
```

---

# Flujo de error

```text
Ocurre un problema
        ↓
catch
        ↓
error = true
        ↓
Mostrar mensaje de error
```

---

# Archivos creados

Durante este laboratorio se crea:

```text
src/components/PerfilGithub.jsx
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
src/components/Contador.jsx
src/components/EstadoConexion.jsx
src/components/Footer.jsx
src/components/FormularioContacto.jsx
src/components/Header.jsx
src/components/ListaProyectos.jsx
src/components/Seccion.jsx
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

1. Aparece el título **Perfil de GitHub**.
2. Durante la carga puede aparecer el mensaje correspondiente.
3. Se muestra el avatar.
4. Se muestra el nombre.
5. Se muestra el usuario.
6. Se muestra la cantidad de repositorios.
7. Se muestra la cantidad de seguidores.
8. El enlace abre GitHub.
9. La consola no muestra errores.
10. ESLint finaliza correctamente.

---

# Probar el estado de error

Cambie temporalmente la URL por una dirección inválida:

```text
https://api.github.com/users/usuario-que-no-existe-123456789
```

La aplicación debe mostrar:

```text
No fue posible obtener la información.
```

Después restaure:

```text
https://api.github.com/users/octocat
```

---

# Cambiar el usuario

Puede reemplazar:

```text
octocat
```

por otro nombre de usuario público de GitHub.

Ejemplo:

```text
https://api.github.com/users/NOMBRE_USUARIO
```

La interfaz se actualizará con los datos del perfil consultado.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala las dependencias.
3. Ejecuta la aplicación.
4. Observa la respuesta JSON de GitHub.
5. Crea `PerfilGithub`.
6. Declara estados de datos, carga y error.
7. Ejecuta una solicitud dentro de `useEffect`.
8. Utiliza `async` y `await`.
9. Verifica la respuesta.
10. Convierte la respuesta a JSON.
11. Guarda los datos en estado.
12. Maneja errores.
13. Muestra carga, error o información.
14. Integra el componente en `Main`.
15. Ejecuta ESLint.

---

# Archivos del laboratorio

```text
10-consumo-api
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
    │   │   ├── PerfilGithub.jsx
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

## No importar los Hooks

Debe incluirse:

```jsx
import { useEffect, useState } from "react"
```

---

## Ejecutar fetch fuera del efecto

La consulta debe ejecutarse en un momento controlado.

En este laboratorio se ejecuta dentro de `useEffect`.

---

## No usar await

Sin `await`, la función puede continuar antes de recibir los datos.

---

## No convertir la respuesta

Debe ejecutarse:

```jsx
await respuesta.json()
```

---

## No comprobar respuesta.ok

Una respuesta HTTP con error no siempre provoca automáticamente una excepción.

Debe comprobarse:

```jsx
if (!respuesta.ok)
```

---

## Acceder a perfil antes de recibirlo

Mientras `perfil` es `null`, no deben consultarse propiedades como:

```jsx
perfil.login
```

Por eso primero se controlan los estados de carga y error.

---

## No finalizar la carga

Debe ejecutarse:

```jsx
setCargando(false)
```

preferiblemente dentro de `finally`.

---

## URL incorrecta

La URL debe corresponder a un endpoint válido.

---

## Depender permanentemente de Internet

Las APIs externas pueden:

- No responder.
- Cambiar.
- Aplicar límites.
- Devolver errores.

Por eso siempre debe existir manejo de errores.

---

# Buenas prácticas

- Observar primero el JSON.
- Guardar la URL en un lugar identificable.
- Administrar carga y error.
- Comprobar `respuesta.ok`.
- Utilizar `try`, `catch` y `finally`.
- No acceder a datos antes de recibirlos.
- Mostrar retroalimentación al usuario.
- Utilizar textos alternativos en imágenes.
- Proteger enlaces externos.
- Ejecutar ESLint.
- Probar respuestas exitosas y fallidas.
- No incluir datos sensibles en solicitudes públicas.

---

# Reto

Cambie el componente para consultar su propio usuario de GitHub.

Después agregue:

```text
Ubicación
Biografía
Personas seguidas
```

Utilice las propiedades:

```text
location
bio
following
```

Considere que algunas propiedades pueden contener:

```text
null
```

Utilice un valor alternativo cuando no exista información.

Como reto adicional, convierta el nombre de usuario en una prop:

```jsx
<PerfilGithub usuario="octocat" />
```

y construya la URL con ese valor.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es una API.
- Reconocer una respuesta JSON.
- Utilizar `fetch`.
- Utilizar `async` y `await`.
- Ejecutar solicitudes dentro de `useEffect`.
- Administrar datos, carga y error.
- Validar respuestas HTTP.
- Convertir respuestas a JSON.
- Mostrar información externa.
- Manejar errores de conexión.
- Verificar el proyecto mediante ESLint.

---

# Conclusiones

Una API permite obtener información desde un servicio externo.

En este laboratorio utilizamos la API pública de GitHub para mostrar datos reales dentro del Proyecto Web Personal.

El proceso general fue:

```text
Solicitar
    ↓
Esperar
    ↓
Validar
    ↓
Convertir
    ↓
Guardar
    ↓
Mostrar
```

React administró tres estados principales:

```text
Cargando
Error
Datos recibidos
```

El proyecto ahora puede integrar información proveniente de Internet.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una última pregunta:

> **¿Cómo integramos, verificamos y publicamos una aplicación React?**

Trabajaremos:

- Revisión general del proyecto.
- Organización final.
- Mejora básica de estilos.
- Construcción de producción.
- Carpeta `dist`.
- Vista previa.
- Publicación.
- Verificación de enlaces.
- Documentación final.