# Módulo de React

## Presentación

En este módulo continuaremos desarrollando el **Proyecto Web Personal**, incorporando una de las bibliotecas más utilizadas para construir interfaces web modernas.

Hasta este momento el proyecto fue construido utilizando:

- HTML.
- CSS.
- JavaScript.

Durante este módulo no construiremos un proyecto diferente.

Transformaremos progresivamente el mismo Proyecto Web Personal en una aplicación React organizada mediante componentes reutilizables.

A lo largo de los laboratorios aprenderemos a dividir la interfaz, reutilizar componentes, administrar información dinámica y consumir datos desde Internet.

Finalmente construiremos una versión lista para publicación.

---

# Objetivo del módulo

Construir una aplicación React mediante componentes reutilizables, utilizando estado, eventos, efectos y consumo de APIs, hasta obtener una versión lista para producción del Proyecto Web Personal.

---

# Metodología

El módulo está organizado mediante laboratorios progresivos.

Cada laboratorio parte de la versión desarrollada anteriormente.

La evolución será la siguiente:

```text
Proyecto Web Personal
        ↓
Entorno React con Vite
        ↓
Conociendo React
        ↓
Primer componente con JSX
        ↓
Componentización
        ↓
Props
        ↓
Estado y eventos
        ↓
Listas y renderizado condicional
        ↓
Formularios controlados
        ↓
Efectos con useEffect
        ↓
Consumo de APIs
        ↓
Integración y publicación
```

Cada laboratorio conserva los avances realizados anteriormente.

---

# ¿Qué aprenderemos?

Durante este módulo estudiaremos:

- JSX.
- Componentes.
- Props.
- Estado.
- Eventos.
- Renderizado condicional.
- Listas.
- Formularios controlados.
- Hooks.
- `useState`.
- `useEffect`.
- Consumo de APIs.
- Publicación de aplicaciones React.

---

# Laboratorios

| Laboratorio | Producto o mejora |
|-------------|-------------------|
| 01 | Preparación del entorno React mediante Vite. |
| 02 | Comprensión de la estructura del proyecto React. |
| 03 | Construcción del primer componente mediante JSX. |
| 04 | Organización del proyecto mediante componentes. |
| 05 | Reutilización de componentes utilizando Props. |
| 06 | Incorporación de estado y eventos. |
| 07 | Generación dinámica de listas y renderizado condicional. |
| 08 | Construcción de formularios controlados. |
| 09 | Sincronización mediante `useEffect`. |
| 10 | Consumo de una API pública con React. |
| 11 | Integración, construcción y publicación de la aplicación. |

---

# Competencia general

Al finalizar el módulo, el estudiante será capaz de desarrollar aplicaciones React organizadas mediante componentes reutilizables, administrar estado, responder a eventos, consumir servicios web y publicar aplicaciones listas para producción.

---

# Evolución del Proyecto Web Personal

Durante este módulo el Proyecto Web Personal evolucionará de la siguiente manera:

```text
Proyecto construido con HTML, CSS y JavaScript
                    │
                    ▼
        Aplicación React inicial
                    │
                    ▼
      Componentes reutilizables
                    │
                    ▼
      Props y reutilización
                    │
                    ▼
      Estado y eventos
                    │
                    ▼
      Formularios y listas
                    │
                    ▼
      Consumo de datos externos
                    │
                    ▼
      Aplicación integrada
                    │
                    ▼
      Publicación
```

---

# Organización del proyecto

Durante todo el módulo se conservará la siguiente estructura:

```text
proyecto-web-personal

public/

src/
│
├── components/
├── data/
├── App.jsx
├── index.css
└── main.jsx

index.html
package.json
vite.config.js
```

Los componentes se irán agregando progresivamente durante los laboratorios.

---

# Tecnologías utilizadas

Durante este módulo utilizaremos:

- React.
- Vite.
- JSX.
- JavaScript.
- Node.js.
- npm.
- ESLint.
- Fetch API.
- GitHub API.

---

# Requisitos generales

Para desarrollar correctamente todos los laboratorios se recomienda:

- Utilizar la versión LTS más reciente de Node.js.
- Tener npm correctamente instalado.
- Utilizar Visual Studio Code.
- Trabajar desde una terminal.
- Ejecutar `npm install` después de copiar cada laboratorio.
- Ejecutar `npm run lint` antes de finalizar cada práctica.
- Verificar el funcionamiento mediante `npm run dev`.

---

# Buenas prácticas generales

Durante todos los laboratorios se recomienda:

- Crear componentes pequeños.
- Mantener una responsabilidad clara por componente.
- Evitar repetir código.
- Utilizar Props cuando un componente necesite recibir información.
- Utilizar Estado únicamente cuando la información pueda cambiar.
- Ejecutar ESLint frecuentemente.
- Mantener una estructura de carpetas organizada.
- No modificar archivos generados automáticamente sin comprender su función.
- Documentar los cambios realizados.

---

# Resultado esperado

Al finalizar este módulo, el Proyecto Web Personal contará con:

- Componentes reutilizables.
- Navegación organizada.
- Props.
- Estado local.
- Eventos.
- Formularios controlados.
- Listas dinámicas.
- Consumo de APIs.
- Integración completa.
- Diseño adaptable.
- Versión optimizada para producción.
- Publicación en Internet.

---

# Proyecto acumulativo

Cada laboratorio representa una nueva versión del mismo proyecto.

Por ejemplo:

```text
01-entorno-react-vite
        ↓
02-conociendo-react
        ↓
03-primeros-componentes
        ↓
04-componentizacion
```

El Laboratorio 04 conserva todas las mejoras desarrolladas en los laboratorios anteriores.

---

# Publicación

En el último laboratorio se generará la versión de producción mediante:

```bash
npm run build
```

Después se comprobará utilizando:

```bash
npm run preview
```

Finalmente la aplicación podrá publicarse mediante plataformas como:

- Netlify.
- Vercel.
- GitHub Pages.
- Cloudflare Pages.
- Render.

---

# ¿Qué sigue?

Después de completar este módulo, el estudiante contará con una base sólida para continuar aprendiendo temas más avanzados del ecosistema React, como:

- React Router.
- Context API.
- Hooks personalizados.
- Gestión global de estado.
- Autenticación.
- Consumo de APIs protegidas.
- Frameworks como Next.js.
- Desarrollo Full Stack.