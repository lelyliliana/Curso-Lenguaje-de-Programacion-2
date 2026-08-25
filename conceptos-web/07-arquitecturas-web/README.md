# Laboratorio 07: Arquitecturas Web

**Nivel:** Básico

**Duración estimada:** 60 minutos

**Requisitos previos:**

- Comprender el modelo cliente-servidor.
- Reconocer una solicitud y una respuesta HTTP.
- Comprender qué es una API.
- Tener conocimientos básicos sobre HTML, CSS y JavaScript.

**Concepto principal:**

Comprender diferentes formas de organizar una aplicación web y reconocer dónde se encuentran la interfaz, la lógica y los servicios.

---

# Objetivo

Identificar algunas arquitecturas y enfoques utilizados en el desarrollo web, comprendiendo cómo se distribuyen las responsabilidades entre cliente, servidor y servicios.

---

# Introducción

Hasta este momento hemos estudiado cómo se comunican las aplicaciones web.

Sabemos que normalmente existe:

```text
Cliente
    ↓
Solicitud HTTP
    ↓
Servidor
    ↓
Respuesta HTTP
```

Sin embargo, no todas las aplicaciones web están organizadas de la misma manera.

En algunas aplicaciones el servidor construye prácticamente toda la interfaz.

En otras, gran parte de la interfaz se ejecuta en el navegador.

También existen sistemas divididos en múltiples servicios independientes.

Por eso, además de comprender cómo se comunican cliente y servidor, necesitamos conocer algunas formas comunes de organizar una aplicación web.

---

# La gran pregunta

> **¿Dónde se encuentran la interfaz, la lógica y los servicios dentro de una aplicación web?**

---

# Evolución de una aplicación web

Las aplicaciones web han evolucionado considerablemente.

Podemos representar de manera simplificada algunos enfoques:

```text
Aplicación tradicional
        ↓
Actualización parcial
        ↓
SPA
        ↓
Microservicios
        ↓
Serverless
```

Estos enfoques no representan necesariamente una secuencia obligatoria.

Son diferentes formas de organizar responsabilidades y construir aplicaciones.

---

# 1. Arquitectura tradicional o Legacy

En una aplicación web tradicional, gran parte del trabajo ocurre en el servidor.

El flujo puede ser:

```text
Navegador
    ↓
Solicitud
    ↓
Servidor
    ↓
Genera HTML
    ↓
Navegador
```

El servidor puede encargarse de:

- Procesar la lógica.
- Consultar datos.
- Construir el HTML.
- Devolver una página completa.

---

# Ejemplo conceptual

```text
Usuario solicita:

/productos

        ↓

Servidor consulta los productos

        ↓

Servidor construye HTML

        ↓

Navegador recibe la página completa
```

En este enfoque, cada navegación puede implicar solicitar una nueva página al servidor.

---

# 2. Actualización parcial o Widgets

Posteriormente comenzaron a utilizarse técnicas que permitían actualizar solamente una parte de la página.

En lugar de volver a cargar todo el documento:

```text
Página completa
```

puede actualizarse únicamente:

```text
Una sección
Un listado
Un formulario
Un resultado
```

Esto mejora la experiencia del usuario.

---

# Ejemplo

Imagine una página que contiene:

```text
Encabezado

Lista de productos

Carrito

Pie de página
```

Si el usuario agrega un producto al carrito, no es necesario volver a cargar toda la página.

Puede actualizarse solamente:

```text
Carrito
```

---

# 3. SPA - Single Page Application

SPA significa:

```text
Single Page Application
```

En este enfoque gran parte de la interfaz se ejecuta en el navegador.

Tecnologías como:

- React.
- Vue.
- Angular.

permiten construir este tipo de aplicaciones.

---

# Flujo general de una SPA

```text
Navegador
    ↓
Aplicación JavaScript
    ↓
Solicitud HTTP
    ↓
API
    ↓
JSON
    ↓
Aplicación actualiza la interfaz
```

El servidor puede devolver principalmente datos en lugar de páginas HTML completas.

---

# Ejemplo

Una aplicación React podría realizar:

```text
GET /productos
```

La API devuelve:

```json
[
  {
    "id": 1,
    "nombre": "Teclado"
  },
  {
    "id": 2,
    "nombre": "Mouse"
  }
]
```

React recibe estos datos y decide cómo mostrarlos.

---

# Relación con este curso

Este concepto será especialmente importante en la Unidad 3.

Durante el módulo de React construiremos una aplicación en la que:

```text
React
    ↓
Cliente
    ↓
Solicitud HTTP
    ↓
API
    ↓
Datos
```

Por eso los conceptos estudiados en esta unidad serán necesarios más adelante.

---

# 4. Microservicios

En una arquitectura de microservicios, una aplicación puede dividirse en varios servicios pequeños y especializados.

Por ejemplo:

```text
Aplicación
├── Servicio de usuarios
├── Servicio de productos
├── Servicio de pagos
└── Servicio de notificaciones
```

Cada servicio puede tener una responsabilidad específica.

---

# Ejemplo conceptual

Una tienda virtual podría organizarse así:

```text
Frontend
   │
   ├── API de usuarios
   │
   ├── API de productos
   │
   ├── API de pedidos
   │
   └── API de pagos
```

Los servicios se comunican mediante diferentes mecanismos.

---

# Ventajas generales

Los microservicios pueden facilitar:

- Separación de responsabilidades.
- Desarrollo independiente.
- Escalabilidad.
- Actualización de servicios específicos.

Sin embargo, también aumentan la complejidad del sistema.

---

# 5. Serverless

Serverless significa literalmente:

```text
Sin servidor
```

pero esto no significa que no existan servidores.

Significa que el desarrollador no administra directamente gran parte de la infraestructura.

Un proveedor se encarga de ejecutar determinadas funciones.

---

# Ejemplo conceptual

```text
Usuario
    ↓
Aplicación
    ↓
Función en la nube
    ↓
Base de datos
```

La función puede ejecutarse únicamente cuando recibe una solicitud.

---

# Ejemplos de plataformas

Algunos servicios que permiten trabajar con este enfoque son:

- AWS Lambda.
- Azure Functions.
- Google Cloud Functions.
- Cloudflare Workers.

---

# Comparación general

| Enfoque | Interfaz | Lógica |
|---------|----------|--------|
| Tradicional | Generada principalmente por el servidor | Servidor |
| Actualización parcial | Navegador + servidor | Compartida |
| SPA | Principalmente navegador | Cliente + API |
| Microservicios | Puede variar | Varios servicios |
| Serverless | Puede variar | Funciones administradas |

Esta comparación es una simplificación.

Las aplicaciones reales pueden combinar varios enfoques.

---

# No se trata de memorizar nombres

El objetivo principal de este laboratorio no es memorizar definiciones.

Cuando observe una aplicación, pregúntese:

```text
¿Dónde está la interfaz?

¿Dónde está la lógica?

¿Dónde están los datos?

¿Quién realiza la solicitud?

¿Quién responde?

¿Cómo se comunican los componentes?
```

Estas preguntas permiten comprender mejor la arquitectura de un sistema.

---

# Ejemplo práctico

Dentro de este laboratorio encontrará:

```text
ejemplo-practico
```

La estructura es:

```text
ejemplo-practico
├── README.md
└── diagramas
    ├── 01-legacy.md
    ├── 02-widgets.md
    ├── 03-spa.md
    ├── 04-microservicios.md
    └── 05-serverless.md
```

Los diagramas permiten comparar visualmente diferentes formas de organizar una aplicación.

---

# Cómo desarrollar el laboratorio

Primero revise:

```text
ejemplo-practico/README.md
```

Después explore los diagramas en este orden:

```text
01-legacy.md

02-widgets.md

03-spa.md

04-microservicios.md

05-serverless.md
```

No intente memorizar cada arquitectura.

Concéntrese en identificar:

- Cliente.
- Servidor.
- Interfaz.
- Servicios.
- Flujo de información.

---

# Preguntas para analizar

Mientras revisa los diagramas responda:

1. ¿Dónde se encuentra la interfaz?
2. ¿Quién genera el contenido?
3. ¿Existe una API?
4. ¿Cuántos servicios participan?
5. ¿Quién procesa la lógica?
6. ¿Cómo viajan los datos?
7. ¿Qué cambia entre una arquitectura tradicional y una SPA?

---

# Relación con React

Cuando trabajemos React tendremos una estructura similar a:

```text
React
    ↓
Cliente
    ↓
HTTP
    ↓
API
    ↓
JSON
```

React será responsable principalmente de construir y actualizar la interfaz.

La API será responsable de proporcionar información.

---

# Ejemplo de una SPA con React

```text
Usuario
    ↓
React
    ↓
fetch()
    ↓
API
    ↓
JSON
    ↓
React actualiza la interfaz
```

Este flujo aparecerá nuevamente durante la Unidad 3.

---

# Funcionamiento del laboratorio

Durante esta práctica, el estudiante:

1. Revisa el concepto de arquitectura web.
2. Analiza una arquitectura tradicional.
3. Observa la actualización parcial de interfaces.
4. Comprende qué es una SPA.
5. Identifica el papel de React dentro de una SPA.
6. Reconoce el concepto de microservicios.
7. Reconoce el concepto de serverless.
8. Compara las diferentes alternativas.
9. Analiza diagramas.
10. Relaciona las arquitecturas con cliente-servidor, HTTP y APIs.

---

# Archivos del laboratorio

```text
07-arquitecturas-web
├── README.md
└── ejemplo-practico
    ├── README.md
    └── diagramas
        ├── 01-legacy.md
        ├── 02-widgets.md
        ├── 03-spa.md
        ├── 04-microservicios.md
        └── 05-serverless.md
```

---

# Buenas prácticas

- Analizar responsabilidades antes de memorizar tecnologías.
- Identificar claramente cliente y servidor.
- Reconocer dónde se ejecuta la lógica.
- Comprender cómo viajan los datos.
- Comparar arquitecturas mediante diagramas.
- Relacionar arquitectura con necesidades reales.
- Evitar asumir que existe una única arquitectura correcta.

---

# Reto

Seleccione una aplicación web que utilice frecuentemente.

Por ejemplo:

- Moodle.
- Netflix.
- Gmail.
- Una tienda virtual.
- Una plataforma bancaria.

Intente representar de manera sencilla:

```text
Usuario
    ↓
Cliente
    ↓
Servicios
    ↓
Datos
```

Después responda:

1. ¿Dónde cree que se encuentra la interfaz?
2. ¿Qué solicitudes podría realizar el cliente?
3. ¿Qué datos podrían viajar?
4. ¿Cree que utiliza una API?
5. ¿Podría tener varios servicios?

No es necesario conocer la arquitectura real de la plataforma.

El objetivo es practicar el análisis arquitectónico.

---

# Resultado esperado

Al finalizar el laboratorio, el estudiante deberá:

- Comprender qué es una arquitectura web.
- Diferenciar cliente y servidor dentro de diferentes enfoques.
- Reconocer una aplicación tradicional.
- Comprender el concepto de SPA.
- Relacionar React con las SPA.
- Reconocer microservicios.
- Comprender de forma general el enfoque serverless.
- Analizar diagramas de arquitectura.
- Identificar cómo se distribuyen responsabilidades.

---

# Conclusiones

Una aplicación web puede organizarse de diferentes maneras.

No existe una única arquitectura válida para todos los proyectos.

La decisión depende de factores como:

- Tamaño del sistema.
- Cantidad de usuarios.
- Complejidad.
- Escalabilidad.
- Tecnologías utilizadas.
- Necesidades del proyecto.

Durante este curso trabajaremos principalmente con una aplicación FrontEnd desarrollada progresivamente hasta llegar a React.

Por eso será especialmente importante comprender el modelo:

```text
Cliente
    ↓
API
    ↓
Datos
```

---

# ¿Qué sigue?

En el siguiente laboratorio aprenderemos a realizar pruebas básicas sobre una API.

Trabajaremos con:

```text
Solicitudes HTTP
Métodos
Respuestas
JSON
Códigos de estado
```

y conectaremos todos los conceptos estudiados durante esta unidad.