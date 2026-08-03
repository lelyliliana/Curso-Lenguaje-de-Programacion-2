# Laboratorio 01: ¿Por qué necesitamos React?

**Nivel:** Básico

**Duración estimada:** 60 minutos

**Requisitos previos:**

- Haber completado los módulos de HTML, CSS y JavaScript.
- Comprender la estructura general del Proyecto Web Personal.
- Tener disponible una terminal.
- Tener instalado Visual Studio Code o un editor equivalente.
- Tener una conexión a Internet para descargar las dependencias.

**Concepto principal:**

Comprender qué problema resuelve React y preparar un proyecto inicial mediante Vite.

---

# Objetivo

Comprender por qué React facilita la construcción de interfaces reutilizables y crear correctamente un proyecto inicial de React mediante Vite, comprobando su funcionamiento antes de comenzar la transformación del Proyecto Web Personal.

---

# Introducción

Hasta este momento desarrollamos el Proyecto Web Personal utilizando:

- HTML.
- CSS.
- JavaScript.

El sitio ya cuenta con:

- Estructura semántica.
- Navegación.
- Identidad visual.
- Diseño adaptable.
- Formularios.
- Interacción.
- Contenido multimedia.

Entonces surge una pregunta válida:

> **Si el proyecto ya funciona con HTML, CSS y JavaScript, por qué necesitamos React?**

React permite construir interfaces mediante pequeñas piezas reutilizables llamadas **componentes**.

En lugar de mantener toda la interfaz dentro de un único documento grande, podemos dividirla en partes independientes.

Por ejemplo:

```text
App
├── Header
├── Navegacion
├── SobreMi
├── Habilidades
├── Proyectos
├── Galeria
├── Contacto
└── Footer
```

Durante los dos primeros laboratorios conoceremos el entorno y la estructura básica de React.

A partir del Laboratorio 03 comenzaremos a reconstruir progresivamente el Proyecto Web Personal utilizando React.

---

# La gran pregunta

> **¿Qué problema intenta resolver React y cómo preparamos el entorno necesario para utilizarlo?**

---

# Evolución del proyecto

Hasta este momento el Proyecto Web Personal cuenta con:

- ✅ Estructura HTML.
- ✅ Presentación mediante CSS.
- ✅ Comportamiento mediante JavaScript.
- ✅ Formularios e interacción.
- ✅ Publicación web.

En este laboratorio prepararemos:

- ✅ Node.js y npm.
- ✅ Un proyecto React.
- ✅ El entorno de desarrollo mediante Vite.
- ✅ ESLint para revisar el código.
- ✅ El servidor local de desarrollo.

Todavía no modificaremos el ejemplo generado por Vite.

Primero comprobaremos que el entorno funciona correctamente.

---

# Competencia

Al finalizar este laboratorio, el estudiante será capaz de explicar de manera general qué problema resuelve React y crear, instalar, ejecutar y detener un proyecto React generado mediante Vite.

---

# El problema del código repetido

Supongamos que el sitio debe mostrar un proyecto.

Cada proyecto contiene:

```text
Imagen
Título
Descripción
Tecnologías
Botón
```

Si necesitamos tres proyectos, podríamos repetir el mismo bloque tres veces.

Pero si necesitamos cincuenta proyectos, el documento crecería demasiado y sería difícil de mantener.

Además, cualquier modificación tendría que repetirse en todos los bloques.

React propone otra estrategia:

```text
Crear un componente
        ↓
Reutilizarlo
        ↓
Enviar información diferente
```

Este enfoque permite construir interfaces más organizadas y fáciles de mantener.

---

# ¿Qué es un componente?

Un componente es una parte reutilizable de una interfaz.

Algunos ejemplos son:

- Encabezado.
- Menú.
- Tarjeta de proyecto.
- Galería.
- Formulario.
- Pie de página.

Un componente puede utilizarse varias veces sin copiar toda su estructura manualmente.

En este laboratorio conoceremos solamente el concepto.

La creación y organización de componentes se estudiará progresivamente en los siguientes laboratorios.

---

# ¿Qué es React?

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario mediante componentes.

React no reemplaza:

- HTML.
- CSS.
- JavaScript.

React utiliza estos conocimientos y propone una forma diferente de organizar, reutilizar y actualizar la interfaz.

---

# ¿Qué es Vite?

Vite es una herramienta que prepara el entorno necesario para desarrollar aplicaciones web modernas.

Permite:

- Crear la estructura inicial del proyecto.
- Instalar React.
- Ejecutar un servidor de desarrollo.
- Actualizar automáticamente la aplicación al guardar cambios.
- Revisar el código mediante herramientas como ESLint.
- Generar una versión optimizada para publicación.

---

# ¿Qué son Node.js y npm?

## Node.js

Node.js permite ejecutar JavaScript fuera del navegador.

En este curso se utiliza para ejecutar herramientas de desarrollo como Vite.

## npm

npm es el administrador de paquetes incluido con Node.js.

Permite:

- Instalar dependencias.
- Ejecutar scripts.
- Administrar las bibliotecas del proyecto.
- Recuperar las dependencias cuando se descarga el repositorio.

---

# Antes de comenzar

Abra una terminal y verifique la versión de Node.js:

```bash
node --version
```

También verifique npm:

```bash
npm --version
```

Los comandos deben mostrar versiones instaladas.

Se recomienda utilizar la versión **LTS más reciente de Node.js** que sea compatible con las herramientas actuales del proyecto.

Si el sistema indica que el comando no existe o Vite muestra una advertencia de incompatibilidad, deberá instalarse o actualizarse Node.js antes de continuar.

---

# Uso de NVM

NVM permite instalar y administrar diferentes versiones de Node.js.

Su uso es recomendable porque evita depender únicamente de la versión instalada globalmente en el sistema.

Para verificar si NVM está disponible, ejecute:

```bash
command -v nvm
```

Si el comando devuelve:

```text
nvm
```

la herramienta está disponible.

Para instalar la versión LTS más reciente puede utilizarse:

```bash
nvm install --lts
```

Para verificar la versión activa:

```bash
node --version
```

La instalación de NVM puede variar según el sistema operativo.

Consulte siempre la documentación oficial cuando necesite instalarlo.

---

# Creación del proyecto

Ubíquese dentro de la carpeta:

```text
react/01-entorno-react-vite
```

Desde la raíz del repositorio puede ejecutar:

```bash
cd react/01-entorno-react-vite
```

Compruebe la ubicación:

```bash
pwd
```

La ruta debe terminar en:

```text
react/01-entorno-react-vite
```

---

# Paso 1. Ejecutar el creador de Vite

Ejecute:

```bash
npm create vite@latest
```

La primera vez puede aparecer una pregunta similar a:

```text
Need to install the following packages:
create-vite@...
Ok to proceed? (y)
```

Escriba:

```text
y
```

y presione **Enter**.

---

# Paso 2. Escribir el nombre del proyecto

Vite mostrará:

```text
Project name:
```

Escriba:

```text
proyecto-web-react
```

Presione **Enter**.

El nombre debe escribirse:

- En minúsculas.
- Sin espacios.
- Sin tildes.
- Sin caracteres especiales.
- Separando palabras mediante guiones.

---

# Paso 3. Seleccionar el framework

Vite mostrará una lista similar a:

```text
Select a framework:
│  Vanilla
│  Vue
│  React
│  Preact
│  Lit
│  Svelte
│  Solid
│  Qwik
```

Utilice las flechas del teclado hasta seleccionar:

```text
React
```

Después presione **Enter**.

## Selección correcta

```text
React
```

## No seleccionar

```text
Vanilla
Vue
Preact
Svelte
Solid
Qwik
```

**Vanilla** crea un proyecto de JavaScript sin React.

---

# Paso 4. Seleccionar la variante

Vite mostrará opciones similares a:

```text
Select a variant:
│  TypeScript
│  TypeScript + React Compiler
│  JavaScript
│  JavaScript + React Compiler
```

Seleccione:

```text
JavaScript
```

Después presione **Enter**.

## Selección correcta

```text
JavaScript
```

## No seleccionar

```text
TypeScript
TypeScript + React Compiler
JavaScript + React Compiler
```

En este curso utilizaremos JavaScript porque corresponde a los conocimientos desarrollados en el módulo anterior.

TypeScript y React Compiler no serán utilizados en esta primera aproximación a React.

---

# Paso 5. Seleccionar el linter

Vite mostrará una pregunta similar a:

```text
Which linter to use?
│  ESLint
│  None
```

Seleccione:

```text
ESLint
```

Después presione **Enter**.

ESLint permitirá:

- Detectar errores comunes.
- Revisar el uso de los Hooks.
- Identificar variables sin utilizar.
- Mantener una estructura de código consistente.
- Revisar archivos JavaScript y JSX.

## Selección correcta

```text
ESLint
```

## No seleccionar

```text
None
```

---

# Paso 6. Responder preguntas adicionales

Dependiendo de la versión de Vite, pueden aparecer preguntas adicionales.

Por ejemplo:

```text
Use rolldown-vite (Experimental)?
```

Si aparece una opción experimental, seleccione:

```text
No
```

No utilizaremos opciones experimentales durante el curso.

Las preguntas pueden cambiar según la versión de Vite instalada.

---

# Paso 7. Decidir la instalación automática

Vite puede mostrar:

```text
Install with npm and start now?
```

Seleccione:

```text
No
```

Realizaremos la instalación manualmente para comprender los comandos utilizados.

---

# Resumen de las selecciones

Durante la creación debe seleccionarse:

```text
Project name:
proyecto-web-react

Framework:
React

Variant:
JavaScript

Linter:
ESLint

Install with npm and start now?
No
```

Si aparece una opción experimental:

```text
No
```

Las preguntas pueden variar ligeramente según la versión de Vite, pero las decisiones fundamentales son:

```text
React
JavaScript
ESLint
No utilizar opciones experimentales
No realizar la instalación automática
```

---

# Paso 8. Verificar la creación

Al finalizar, Vite mostrará un mensaje similar a:

```text
Scaffolding project in .../proyecto-web-react...

Done. Now run:

cd proyecto-web-react
npm install
npm run dev
```

Esto indica que la estructura inicial fue creada correctamente.

---

# Paso 9. Entrar al proyecto

Ejecute:

```bash
cd proyecto-web-react
```

Compruebe la ubicación:

```bash
pwd
```

La ruta debe terminar en:

```text
react/01-entorno-react-vite/proyecto-web-react
```

---

# Paso 10. Instalar las dependencias

Ejecute:

```bash
npm install
```

Este comando lee:

```text
package.json
```

y descarga las dependencias necesarias.

Después de la instalación aparecerá:

```text
node_modules
```

La terminal debe finalizar sin errores críticos.

Puede mostrar mensajes relacionados con:

- Paquetes instalados.
- Paquetes que buscan financiación.
- Vulnerabilidades encontradas.

Un resultado esperado puede indicar:

```text
found 0 vulnerabilities
```

---

# Advertencias de compatibilidad

Durante `npm install` puede aparecer:

```text
npm warn EBADENGINE Unsupported engine
```

Este mensaje indica que la versión activa de Node.js no cumple los requisitos de alguna dependencia.

No se recomienda ignorarlo.

En ese caso:

1. Verifique la versión actual:

```bash
node --version
```

2. Actualice Node.js a una versión LTS compatible.

3. Ejecute nuevamente:

```bash
npm install
```

La instalación debe completarse sin advertencias de incompatibilidad.

---

# Paso 11. Ejecutar el servidor

Ejecute:

```bash
npm run dev
```

La terminal mostrará información similar a:

```text
VITE ready

Local:
http://localhost:5173/
```

Abra la dirección indicada en el navegador.

Debe aparecer la aplicación inicial generada por React y Vite.

La apariencia puede cambiar según la versión utilizada.

Lo importante es comprobar que:

- La página cargue.
- No aparezcan errores.
- El servidor permanezca activo.
- La terminal muestre la dirección local.

---

# Hot Module Replacement

Mientras el servidor está activo, Vite puede actualizar automáticamente la página cuando se modifica un archivo.

Esta característica se conoce como:

```text
Hot Module Replacement
```

o:

```text
HMR
```

En este laboratorio no modificaremos todavía la aplicación, pero utilizaremos esta característica en los siguientes.

---

# Paso 12. Detener el servidor

Para detener el servidor, regrese a la terminal y presione:

```text
Ctrl + C
```

El símbolo:

```text
^C
```

puede aparecer en la terminal.

Esto no representa un error.

Indica que el servidor fue detenido manualmente.

Si el navegador continúa abierto después de detenerlo, puede mostrar:

```text
ERR_CONNECTION_REFUSED
```

Para volver a iniciar la aplicación, ejecute nuevamente:

```bash
npm run dev
```

---

# Paso 13. Abrir el proyecto en Visual Studio Code

Desde la carpeta `proyecto-web-react`, ejecute:

```bash
code .
```

El punto representa la carpeta actual.

Visual Studio Code abrirá el proyecto completo.

---

# Estructura inicial

Después de crear el proyecto se observará una estructura semejante a:

```text
proyecto-web-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── icons.svg
├── src
│   ├── assets
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

La estructura exacta puede variar según la versión de Vite.

En este laboratorio no modificaremos sus archivos.

El análisis detallado de la estructura se realizará en el Laboratorio 02.

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

Puede contener miles de archivos.

No debe:

- Editarse manualmente.
- Copiarse entre laboratorios.
- Subirse a GitHub.
- Revisarse archivo por archivo.

Puede recuperarse ejecutando:

```bash
npm install
```

---

# El archivo package.json

El archivo:

```text
package.json
```

contiene:

- Nombre del proyecto.
- Scripts disponibles.
- Dependencias.
- Dependencias de desarrollo.
- Configuración básica.

En este laboratorio solo necesitamos reconocer que este archivo permite a npm administrar el proyecto.

Su contenido se estudiará con mayor detalle en el Laboratorio 02.

---

# Scripts principales

El archivo `package.json` incluye diferentes scripts.

## Ejecutar el servidor de desarrollo

```bash
npm run dev
```

## Generar la versión de producción

```bash
npm run build
```

## Revisar el código con ESLint

```bash
npm run lint
```

## Revisar localmente la versión construida

```bash
npm run preview
```

En este laboratorio utilizaremos principalmente:

```bash
npm run dev
```

---

# No subir node_modules

La carpeta:

```text
node_modules
```

puede contener una gran cantidad de archivos y ocupar bastante espacio.

No debe subirse al repositorio.

Vite genera un archivo:

```text
.gitignore
```

que normalmente excluye esta carpeta.

Las dependencias pueden recuperarse posteriormente mediante:

```bash
npm install
```

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Comprende qué problema busca resolver React.
2. Reconoce el concepto general de componente.
3. Comprueba la instalación de Node.js.
4. Comprueba la instalación de npm.
5. Ejecuta el creador de proyectos de Vite.
6. Define el nombre del proyecto.
7. Selecciona React.
8. Selecciona JavaScript.
9. Selecciona ESLint.
10. Rechaza opciones experimentales cuando aparecen.
11. Decide realizar la instalación manual.
12. Entra a la carpeta del proyecto.
13. Instala las dependencias.
14. Ejecuta el servidor de desarrollo.
15. Abre la aplicación en el navegador.
16. Detiene correctamente el servidor.
17. Abre el proyecto en Visual Studio Code.

---

# Archivos del laboratorio

La carpeta tendrá esta estructura:

```text
01-entorno-react-vite
├── README.md
└── proyecto-web-react
```

Dentro de:

```text
proyecto-web-react
```

estará la aplicación original generada por Vite.

Esta aplicación debe conservarse sin modificaciones.

---

# Cómo ejecutar nuevamente el proyecto

Desde la raíz del repositorio:

```bash
cd react/01-entorno-react-vite/proyecto-web-react
```

Después ejecute:

```bash
npm run dev
```

No es necesario ejecutar `npm install` cada vez.

Solo se requiere nuevamente cuando:

- Se descarga el proyecto en otro computador.
- Se elimina `node_modules`.
- Se agregan nuevas dependencias.
- Se modifica `package.json`.
- Se copia el proyecto sin la carpeta `node_modules`.

---

# Cómo copiar el proyecto sin node_modules

Cuando necesite copiar un proyecto a otro laboratorio, no copie `node_modules`.

En Linux puede utilizar:

```bash
rsync -av \
  --exclude node_modules \
  carpeta-origen/ \
  carpeta-destino/
```

Después, dentro de la nueva copia, ejecute:

```bash
npm install
```

Esto evita duplicar miles de archivos innecesarios.

---

# Errores frecuentes

## Se seleccionó Vanilla

El proyecto no tendrá React.

Debe eliminarse y crearse nuevamente seleccionando:

```text
React
```

---

## Se seleccionó TypeScript

Los archivos tendrán extensiones como:

```text
.ts
.tsx
```

Para este curso debe seleccionarse:

```text
JavaScript
```

---

## Se seleccionó None como linter

El proyecto no contará con la configuración de ESLint utilizada durante el curso.

Se recomienda crear nuevamente el proyecto seleccionando:

```text
ESLint
```

---

## Se seleccionó una opción experimental

El proyecto puede utilizar una configuración distinta a la planteada en el curso.

Se recomienda trabajar con las opciones estables.

---

## Se ejecutó npm run dev fuera del proyecto

Puede aparecer un error relacionado con la ausencia de:

```text
package.json
```

Primero debe ingresar a:

```bash
cd proyecto-web-react
```

---

## Node.js es incompatible

Vite o ESLint pueden mostrar advertencias relacionadas con la versión de Node.js.

Debe actualizarse a una versión LTS compatible.

---

## El puerto 5173 está ocupado

Vite puede seleccionar automáticamente otro puerto, por ejemplo:

```text
http://localhost:5174/
```

Debe abrirse exactamente la dirección indicada en la terminal.

---

## Se cerró o detuvo la terminal

Al cerrar la terminal o presionar:

```text
Ctrl + C
```

también se detiene el servidor.

Debe volver a ejecutar:

```bash
npm run dev
```

---

## El navegador muestra ERR_CONNECTION_REFUSED

Esto suele indicar que el servidor fue detenido.

Ejecute nuevamente:

```bash
npm run dev
```

y actualice la página.

---

## Se ejecutó cd desde una ubicación diferente

Una ruta relativa depende de la carpeta actual.

Antes de ejecutar comandos, compruebe:

```bash
pwd
```

No copie el texto del prompt de la terminal.

Copie únicamente el comando.

---

## Se copió node_modules

La copia ocupará espacio innecesario.

Elimine `node_modules` de la copia y ejecute:

```bash
npm install
```

dentro del nuevo proyecto.

---

# Buenas prácticas

- Utilizar la versión LTS de Node.js.
- Verificar las versiones antes de comenzar.
- Utilizar nombres de carpetas en minúsculas.
- Evitar espacios, tildes y caracteres especiales.
- Seleccionar React.
- Seleccionar JavaScript.
- Seleccionar ESLint.
- No utilizar opciones experimentales.
- Realizar manualmente `npm install`.
- Leer los mensajes mostrados por la terminal.
- Ejecutar los comandos dentro de la carpeta correcta.
- Comprobar la ubicación mediante `pwd`.
- No modificar `node_modules`.
- No subir `node_modules` a GitHub.
- Detener el servidor mediante `Ctrl + C`.
- Conservar el proyecto original de Vite como referencia.

---

# Reto

Realice las siguientes acciones:

1. Compruebe las versiones de Node.js y npm.
2. Cree el proyecto seleccionando React, JavaScript y ESLint.
3. Instale las dependencias.
4. Ejecute la aplicación.
5. Identifique la dirección local.
6. Abra el proyecto en Visual Studio Code.
7. Detenga el servidor.
8. Inícielo nuevamente.
9. Compruebe que la aplicación continúa funcionando.
10. Ejecute:

```bash
npm run lint
```

11. Verifique que el proyecto pueda revisarse mediante ESLint.

No modifique todavía los archivos de la aplicación.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender de manera general por qué React utiliza componentes.
- Tener una versión compatible de Node.js.
- Contar con npm disponible.
- Tener un proyecto React creado mediante Vite.
- Haber seleccionado React.
- Haber seleccionado JavaScript.
- Haber seleccionado ESLint.
- Tener instaladas las dependencias.
- Ejecutar correctamente el servidor de desarrollo.
- Abrir la aplicación inicial en el navegador.
- Saber detener y reiniciar el servidor.
- Abrir el proyecto en Visual Studio Code.
- Conservar la aplicación original de Vite sin modificaciones.

---

# Conclusiones

React permite construir interfaces mediante componentes reutilizables.

Vite facilita la creación, ejecución, revisión y construcción de aplicaciones React.

Para este curso se utilizará la siguiente configuración:

```text
Framework: React
Variante: JavaScript
Linter: ESLint
```

También se evitarán opciones experimentales y se realizará la instalación manualmente.

En este laboratorio se preparó y comprobó el entorno necesario para comenzar a trabajar con React.

Todavía no se modificó la aplicación generada por Vite.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo inicia realmente una aplicación React y qué archivos intervienen en ese proceso?**

A partir de ella conoceremos:

- La estructura generada por Vite.
- `index.html`.
- El elemento `root`.
- `main.jsx`.
- `App.jsx`.
- `index.css`.
- `App.css`.
- Las carpetas `public` y `src/assets`.
- `package.json`.
- `vite.config.js`.
- `eslint.config.js`.
- El flujo completo de inicio de la aplicación.

En el Laboratorio 02 conservaremos y exploraremos la aplicación original de Vite sin modificarla.

La construcción del Proyecto Web Personal mediante JSX comenzará en el Laboratorio 03.