# Laboratorio 11: Integración y publicación de una aplicación React

**Nivel:** Intermedio

**Duración estimada:** 120 minutos

**Requisitos previos:**

- Haber completado los laboratorios anteriores del módulo React.
- Comprender componentes, props, estado, eventos, listas, formularios, efectos y consumo de APIs.
- Tener funcionando el Proyecto Web Personal.
- Tener instalado Node.js y npm.
- Tener conexión a Internet para realizar la publicación.

**Concepto principal:**

Integrar los componentes construidos, mejorar la presentación, generar la versión de producción y publicar la aplicación React.

---

# Objetivo

Integrar todas las funcionalidades del Proyecto Web Personal, aplicar una presentación básica adaptable, generar la versión optimizada de producción y preparar la aplicación para su publicación.

---

# Introducción

Durante los laboratorios anteriores construimos progresivamente una aplicación React.

El proyecto cuenta ahora con:

- Componentes.
- Props.
- Estado.
- Eventos.
- Listas.
- Formularios.
- Efectos.
- Consumo de una API.
- Manejo de errores.
- Renderizado condicional.

En este laboratorio realizaremos la integración final.

También construiremos una versión de producción que pueda publicarse en Internet.

---

# La gran pregunta

> **¿Cómo integramos, verificamos y publicamos una aplicación React?**

---

# Evolución del proyecto

Hasta este momento contamos con:

- ✅ Entorno React con Vite.
- ✅ Componentes funcionales.
- ✅ Props.
- ✅ Estado y eventos.
- ✅ Listas y renderizado condicional.
- ✅ Formularios controlados.
- ✅ Efectos.
- ✅ Consumo de la API de GitHub.

Después de este laboratorio tendremos:

- ✅ Navegación interna.
- ✅ Identificadores de secciones.
- ✅ Presentación adaptable.
- ✅ Estilos integrados.
- ✅ Revisión mediante ESLint.
- ✅ Construcción de producción.
- ✅ Carpeta `dist`.
- ✅ Vista previa de producción.
- ✅ Proyecto listo para publicación.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de integrar una aplicación React, generar su versión de producción y publicarla mediante un servicio de alojamiento web.

---

# Preparación del laboratorio

Este laboratorio parte del proyecto anterior:

```text
react/10-consumo-api/proyecto-web-personal
```

La nueva versión estará en:

```text
react/11-integracion-publicacion/proyecto-web-personal
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
  10-consumo-api/proyecto-web-personal/ \
  11-integracion-publicacion/proyecto-web-personal/
```

---

# Paso 2. Entrar al proyecto

Ejecute:

```bash
cd 11-integracion-publicacion/proyecto-web-personal
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

Antes de realizar cambios, compruebe que la aplicación funciona igual que en el Laboratorio 10.

---

# Objetivos de la integración

Durante este laboratorio se realizarán los siguientes ajustes:

```text
Navegación
Identificadores
Clases CSS
Diseño adaptable
Mejora del formulario
Mejora del perfil de GitHub
Distribución de proyectos
Pie de página
Construcción de producción
Vista previa
Publicación
```

---

# Estructura final del proyecto

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

# Navegación interna

El componente `Header` incorpora enlaces hacia diferentes secciones:

```jsx
<nav aria-label="Navegación principal">

  <a href="#bienvenida">
    Bienvenida
  </a>

  <a href="#proyectos">
    Proyectos
  </a>

  <a href="#github">
    GitHub
  </a>

  <a href="#contacto">
    Contacto
  </a>

</nav>
```

Cada enlace utiliza un identificador.

---

# Identificadores de secciones

Las secciones reciben propiedades como:

```jsx
id="bienvenida"
```

```jsx
id="proyectos"
```

```jsx
id="github"
```

```jsx
id="contacto"
```

Los enlaces del encabezado apuntan a estos identificadores.

---

# Navegación accesible

El elemento:

```jsx
<nav aria-label="Navegación principal">
```

ofrece una descripción para tecnologías de asistencia.

---

# Nuevo componente Seccion

El componente recibe:

```text
idSeccion
titulo
contenido
```

Ejemplo:

```jsx
<Seccion
  idSeccion="bienvenida"
  titulo="Bienvenida"
  contenido="..."
/>
```

El identificador se aplica mediante:

```jsx
id={idSeccion}
```

---

# Contenedor general

La clase:

```text
contenedor
```

limita el ancho del contenido y lo centra.

Se utiliza en:

- Encabezado.
- Contenido principal.
- Pie de página.

---

# Cuadrícula de proyectos

La lista utiliza:

```jsx
<div className="cuadricula-proyectos">
```

Dentro se generan las tarjetas.

En pantallas grandes se muestran varias columnas.

En pantallas pequeñas se muestra una columna.

---

# Perfil de GitHub

El perfil se organiza mediante:

```jsx
<div className="perfil-github">
```

Esto permite ubicar:

```text
Avatar
Información
```

en una misma fila en pantallas grandes.

En dispositivos pequeños los elementos se muestran verticalmente.

---

# Formulario final

El formulario incorpora:

```text
required
```

en sus campos.

Esto agrega validación básica del navegador.

También se utilizan clases para:

- Campos.
- Etiquetas.
- Mensajes.
- Botones.

---

# Año dinámico

El componente `Footer` utiliza:

```jsx
const anioActual = new Date().getFullYear()
```

Después muestra:

```jsx
{curso} · {anioActual}
```

De esta manera el año se actualiza automáticamente.

---

# Enlace para volver al inicio

El pie de página incluye:

```jsx
<a href="#inicio">
  Volver al inicio
</a>
```

El encabezado contiene:

```jsx
id="inicio"
```

---

# Presentación mediante CSS

El archivo:

```text
src/index.css
```

contiene la presentación final.

Incluye:

- Variables generales.
- Tipografía.
- Colores.
- Encabezado.
- Navegación.
- Secciones.
- Tarjetas.
- Botones.
- Formulario.
- Perfil.
- Estados de conexión.
- Pie de página.
- Diseño adaptable.

---

# Diseño adaptable

Se utiliza:

```css
@media (max-width: 760px)
```

Dentro de esta regla se modifican:

- Cuadrícula de proyectos.
- Perfil de GitHub.
- Pie de página.

---

# Navegación suave

La regla:

```css
scroll-behavior: smooth;
```

permite desplazarse suavemente entre secciones.

---

# Scroll margin

La propiedad:

```css
scroll-margin-top: 20px;
```

evita que el encabezado de una sección quede demasiado cerca del borde al navegar.

---

# Accesibilidad visual

Se incluyen estilos para:

```text
:hover
:focus-visible
```

Esto mejora la navegación mediante teclado.

---

# Paso 5. Revisar el proyecto

Antes de generar la versión final, ejecute:

```bash
npm run lint
```

El comando debe finalizar sin errores.

---

# Paso 6. Generar la versión de producción

Ejecute:

```bash
npm run build
```

Vite analizará el proyecto y generará una versión optimizada.

---

# La carpeta dist

Después de ejecutar:

```bash
npm run build
```

se crea:

```text
dist
```

Esta carpeta contiene la versión lista para publicación.

Su estructura puede ser similar a:

```text
dist
├── assets
├── favicon.svg
├── icons.svg
└── index.html
```

---

# ¿Qué contiene dist?

La carpeta contiene:

- HTML optimizado.
- JavaScript empaquetado.
- CSS optimizado.
- Recursos estáticos.
- Archivos necesarios para producción.

---

# No modificar dist

La carpeta:

```text
dist
```

no debe editarse manualmente.

Cuando cambie el código fuente, debe generarse nuevamente mediante:

```bash
npm run build
```

---

# Paso 7. Vista previa de producción

Ejecute:

```bash
npm run preview
```

Vite mostrará una dirección similar a:

```text
http://localhost:4173/
```

Abra exactamente la dirección indicada.

---

# Diferencia entre dev y preview

## npm run dev

```text
Desarrollo
Actualización automática
Código fuente
```

## npm run preview

```text
Vista previa
Versión construida
Contenido de dist
```

---

# Verificación final

Compruebe:

- Navegación interna.
- Enlaces.
- Perfil de GitHub.
- Lista de proyectos.
- Contador.
- Estado de conexión.
- Formulario.
- Mensajes.
- Botón de regreso.
- Vista móvil.
- Vista de escritorio.
- Consola.
- ESLint.
- Construcción.
- Vista previa.

---

# Verificar enlaces internos

Pruebe:

```text
#bienvenida
#proyectos
#github
#contacto
#inicio
```

Cada enlace debe desplazar correctamente la página.

---

# Verificar la API

Compruebe:

- Estado de carga.
- Perfil recibido.
- Avatar.
- Enlace externo.
- Manejo de error.
- Conexión a Internet.

---

# Verificar el formulario

Pruebe:

- Campos vacíos.
- Correo inválido.
- Información correcta.
- Mensaje de éxito.
- Limpieza de campos.
- Escritura posterior.

---

# Verificar pantalla pequeña

Reduzca el ancho del navegador.

Compruebe:

- Navegación adaptable.
- Una sola columna de proyectos.
- Perfil vertical.
- Pie de página vertical.
- Campos legibles.
- Ausencia de desplazamiento horizontal.

---

# Publicación mediante Netlify

Una opción para publicar la aplicación es Netlify.

## Método mediante carpeta dist

1. Ejecute:

```bash
npm run build
```

2. Localice:

```text
dist
```

3. Ingrese a Netlify.
4. Seleccione la opción para desplegar manualmente.
5. Arrastre la carpeta `dist`.
6. Espere a que finalice la publicación.
7. Abra la dirección generada.

---

# Publicación mediante repositorio

También puede vincular un repositorio.

Configuración general:

```text
Build command:
npm run build

Publish directory:
dist
```

Netlify instalará las dependencias y generará la aplicación.

---

# Publicación mediante otros servicios

También pueden utilizarse:

- Vercel.
- Cloudflare Pages.
- GitHub Pages.
- Render.
- Firebase Hosting.

Cada plataforma puede requerir una configuración diferente.

---

# Variables y datos sensibles

Este proyecto consume una API pública sin autenticación.

No contiene:

- Contraseñas.
- Tokens.
- Claves privadas.
- Credenciales.

Nunca deben escribirse datos sensibles directamente dentro del código que se publica.

---

# Límites de APIs públicas

GitHub puede aplicar límites a las solicitudes sin autenticación.

La aplicación debe manejar posibles errores.

---

# Archivos modificados

Durante este laboratorio se modifican:

```text
src/components/Header.jsx
src/components/Seccion.jsx
src/components/ListaProyectos.jsx
src/components/TarjetaProyecto.jsx
src/components/Contador.jsx
src/components/EstadoConexion.jsx
src/components/PerfilGithub.jsx
src/components/FormularioContacto.jsx
src/components/Main.jsx
src/components/Footer.jsx
src/index.css
```

---

# Archivos generados

Se genera:

```text
dist
```

mediante:

```bash
npm run build
```

---

# Archivos que se conservan

```text
src/App.jsx
src/data/proyectos.js
src/main.jsx
index.html
package.json
package-lock.json
vite.config.js
eslint.config.js
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Copia el proyecto anterior.
2. Instala dependencias.
3. Ejecuta la aplicación.
4. Integra la navegación.
5. Agrega identificadores.
6. Organiza el contenido.
7. Aplica clases CSS.
8. Mejora las tarjetas.
9. Mejora el perfil.
10. Mejora el formulario.
11. Agrega diseño adaptable.
12. Ejecuta ESLint.
13. Genera `dist`.
14. Ejecuta la vista previa.
15. Verifica la versión final.
16. Publica la aplicación.

---

# Archivos del laboratorio

```text
11-integracion-publicacion
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
    ├── dist
    ├── index.html
    ├── package.json
    └── vite.config.js
```

La carpeta:

```text
node_modules
```

no debe subirse al repositorio.

La carpeta:

```text
dist
```

puede regenerarse mediante:

```bash
npm run build
```

---

# Errores frecuentes

## No ejecutar build

Sin:

```bash
npm run build
```

no se genera `dist`.

---

## Publicar la carpeta incorrecta

Debe publicarse:

```text
dist
```

No:

```text
src
```

ni:

```text
node_modules
```

---

## Ejecutar preview antes de build

Primero:

```bash
npm run build
```

Después:

```bash
npm run preview
```

---

## Enlaces que no funcionan

Verifique que:

```text
href="#github"
```

coincida con:

```text
id="github"
```

---

## No revisar la versión móvil

La aplicación debe probarse en diferentes anchos.

---

## API sin respuesta

Debe mostrarse el mensaje de error definido.

---

## Modificar dist

Los cambios deben realizarse en:

```text
src
```

Después se genera nuevamente `dist`.

---

## Subir node_modules

No debe incluirse en GitHub ni en la publicación.

---

# Buenas prácticas

- Ejecutar ESLint antes de construir.
- Probar todas las funcionalidades.
- Verificar enlaces.
- Revisar la consola.
- Probar estados de carga y error.
- Comprobar accesibilidad básica.
- Utilizar diseño adaptable.
- Generar una nueva versión después de cada cambio.
- No modificar `dist`.
- No publicar credenciales.
- Documentar el proyecto.
- Conservar una estructura organizada.

---

# Reto

Personalice la aplicación:

1. Cambie los textos.
2. Agregue sus proyectos.
3. Consulte su usuario de GitHub.
4. Modifique la paleta visual.
5. Agregue enlaces reales.
6. Incluya una fotografía.
7. Publique la aplicación.
8. Comparta la dirección.

Como reto adicional:

- Agregue una sección de habilidades.
- Agregue una sección de experiencia.
- Incluya iconos accesibles.
- Mejore el formulario.
- Utilice una API diferente.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Integrar una aplicación React.
- Organizar navegación interna.
- Aplicar clases CSS.
- Crear una interfaz adaptable.
- Verificar componentes.
- Ejecutar ESLint.
- Generar una versión de producción.
- Comprender la carpeta `dist`.
- Ejecutar una vista previa.
- Publicar la aplicación.
- Verificar el sitio publicado.

---

# Conclusiones

Durante este módulo se construyó progresivamente una aplicación React.

El proceso incluyó:

```text
Entorno
Estructura
JSX
Componentes
Props
Estado
Eventos
Listas
Formularios
Efectos
APIs
Publicación
```

La versión final integra todos estos conceptos dentro del Proyecto Web Personal.

Vite permite generar una versión optimizada mediante:

```bash
npm run build
```

La carpeta:

```text
dist
```

contiene la aplicación lista para publicación.

---

# Cierre del módulo

El estudiante cuenta ahora con una base sólida para continuar profundizando en:

- Enrutamiento.
- Hooks personalizados.
- Context API.
- Gestión de estado global.
- Pruebas.
- Autenticación.
- Backend.
- Bases de datos.
- Aplicaciones de mayor escala.