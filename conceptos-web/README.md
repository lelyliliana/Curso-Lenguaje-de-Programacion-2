# Módulo: Conceptos de Desarrollo Web

## Presentación

Este módulo corresponde a la **Unidad 1: Conceptos de desarrollo web** del curso **Lenguaje de Programación II**.

Antes de comenzar a construir interfaces con HTML, CSS, JavaScript y React, es importante comprender cómo funciona una aplicación web, cómo se comunican cliente y servidor, cómo viajan los datos y cómo pueden organizarse diferentes arquitecturas.

Durante esta unidad estudiaremos progresivamente los conceptos fundamentales que servirán como base para el resto del curso.

---

# Objetivo del módulo

Comprender los fundamentos del funcionamiento de las aplicaciones web, la comunicación mediante HTTP, el intercambio de datos mediante JSON y XML, el concepto de servicios web, las APIs REST y algunas arquitecturas web comunes.

---

# Competencia

Al finalizar este módulo, el estudiante será capaz de reconocer los principales elementos que intervienen en una aplicación web, interpretar solicitudes y respuestas HTTP, identificar formatos de intercambio de datos y analizar de manera básica diferentes arquitecturas web.

---

# Ruta de aprendizaje

La Unidad 1 seguirá la siguiente secuencia:

```text
Funcionamiento de la Web
        ↓
Cliente - Servidor
        ↓
HTTP
        ↓
JSON y XML
        ↓
Servicios Web
        ↓
REST API
        ↓
Arquitecturas Web
        ↓
Prueba de APIs
```

Los conceptos se desarrollan de manera progresiva.

Cada laboratorio se apoya en los conocimientos estudiados anteriormente.

---

# Laboratorios

| Laboratorio | Tema principal |
|-------------|----------------|
| 01 | Funcionamiento de la Web |
| 02 | Cliente y servidor |
| 03 | HTTP |
| 04 | JSON y XML |
| 05 | Servicios Web |
| 06 | REST API |
| 07 | Arquitecturas Web |
| 08 | Prueba de APIs |

---

# Laboratorio 01: Funcionamiento de la Web

En este laboratorio estudiaremos qué ocurre cuando un usuario accede a una aplicación web.

Analizaremos conceptos como:

- Internet.
- Navegador.
- Servidor.
- URL.
- DNS.
- Solicitudes.
- Respuestas.

La idea principal será comprender el flujo:

```text
Usuario
    ↓
Navegador
    ↓
Internet
    ↓
Servidor
    ↓
Respuesta
```

---

# Laboratorio 02: Cliente y servidor

En este laboratorio identificaremos claramente los dos actores principales de una aplicación web.

```text
Cliente
    ↓
Solicitud
    ↓
Servidor
    ↓
Respuesta
```

Estudiaremos:

- Qué es un cliente.
- Qué es un servidor.
- Qué responsabilidades tiene cada uno.
- Qué significa `localhost`.
- Qué es un puerto.
- Cómo ocurre la comunicación entre ambos.

Además, este laboratorio incluye un:

```text
ejemplo-practico
```

donde puede observarse una comunicación real entre un cliente y un servidor.

---

# Laboratorio 03: HTTP

HTTP es el protocolo utilizado para organizar gran parte de la comunicación en la Web.

Durante este laboratorio estudiaremos:

- Solicitudes HTTP.
- Respuestas HTTP.
- Métodos HTTP.
- Rutas.
- Headers.
- Body.
- Códigos de estado.

Algunos métodos comunes son:

```text
GET
POST
PUT
PATCH
DELETE
```

También se estudiarán códigos como:

```text
200
201
204
400
404
```

El laboratorio incluye un ejemplo práctico para realizar diferentes solicitudes HTTP.

---

# Laboratorio 04: JSON y XML

Las aplicaciones necesitan formatos para intercambiar información.

Durante este laboratorio compararemos dos formatos:

```text
JSON
XML
```

JSON es actualmente uno de los formatos más utilizados en APIs web.

Ejemplo:

```json
{
  "nombre": "Laura",
  "programa": "Ingeniería"
}
```

También analizaremos XML:

```xml
<estudiante>
  <nombre>Laura</nombre>
  <programa>Ingeniería</programa>
</estudiante>
```

El laboratorio incluye ejemplos válidos e inválidos de ambos formatos.

---

# Laboratorio 05: Servicios Web

En este laboratorio estudiaremos cómo diferentes aplicaciones pueden comunicarse mediante servicios.

Analizaremos conceptos como:

- Servicio Web.
- Cliente.
- Servidor.
- Solicitud.
- Respuesta.
- Intercambio de información.

El objetivo será comprender que un servicio permite que diferentes sistemas puedan intercambiar datos sin necesidad de compartir directamente su implementación interna.

---

# Laboratorio 06: REST API

En este laboratorio estudiaremos los fundamentos de REST.

Relacionaremos:

```text
Recurso
Método HTTP
Ruta
Respuesta
```

Ejemplo:

```text
GET /estudiantes
```

puede utilizarse para consultar estudiantes.

Mientras que:

```text
POST /estudiantes
```

puede utilizarse para crear un nuevo estudiante.

El objetivo será comprender cómo diseñar operaciones coherentes utilizando HTTP.

---

# Laboratorio 07: Arquitecturas Web

Una aplicación web puede organizarse de diferentes maneras.

Durante este laboratorio analizaremos algunos enfoques:

- Aplicaciones tradicionales.
- Actualización parcial.
- SPA.
- Microservicios.
- Serverless.

No se busca memorizar definiciones.

La idea será aprender a responder preguntas como:

```text
¿Dónde está la interfaz?

¿Dónde está la lógica?

¿Quién procesa la información?

¿Quién almacena los datos?

¿Cómo se comunican los servicios?
```

Este laboratorio incluye diagramas comparativos dentro de:

```text
ejemplo-practico/diagramas
```

---

# Laboratorio 08: Prueba de APIs

Después de estudiar los fundamentos, realizaremos pruebas sobre APIs.

Durante esta práctica se integrarán conceptos como:

- Métodos HTTP.
- URLs.
- Rutas.
- Headers.
- Body.
- JSON.
- Códigos de estado.

La idea será observar directamente cómo responde un servicio ante diferentes solicitudes.

---

# Relación con el curso

Los conceptos estudiados en esta unidad aparecerán nuevamente durante todo el curso.

## En JavaScript

Podremos realizar solicitudes mediante:

```javascript
fetch()
```

---

## En React

Podremos consumir información desde una API.

El flujo será:

```text
React
    ↓
Solicitud HTTP
    ↓
API
    ↓
JSON
    ↓
React actualiza la interfaz
```

Por eso la Unidad 1 representa la base conceptual para las unidades siguientes.

---

# Organización del módulo

La estructura es:

```text
conceptos-web
│
├── 01-funcionamiento-web
│   └── README.md
│
├── 02-cliente-servidor
│   ├── README.md
│   └── ejemplo-practico
│
├── 03-http
│   ├── README.md
│   └── ejemplo-practico
│
├── 04-json-xml
│   ├── README.md
│   └── ejemplo-practico
│
├── 05-servicios-web
│   └── README.md
│
├── 06-rest-api
│   └── README.md
│
├── 07-arquitecturas-web
│   ├── README.md
│   └── ejemplo-practico
│
├── 08-prueba-api
│   └── README.md
│
└── README.md
```

---

# Cómo utilizar este material

Se recomienda desarrollar los laboratorios en el orden propuesto.

Para cada laboratorio:

1. Lea primero el `README.md`.
2. Identifique el concepto principal.
3. Revise los ejemplos disponibles.
4. Ejecute las prácticas cuando corresponda.
5. Modifique los ejemplos.
6. Observe los cambios.
7. Registre dudas.

No se recomienda comenzar directamente copiando código.

La documentación explica el propósito de cada práctica.

---

# Metodología

Durante esta unidad utilizaremos:

- Explicaciones conceptuales.
- Diagramas.
- Ejemplos sencillos.
- Prácticas guiadas.
- Análisis de solicitudes y respuestas.
- Exploración de APIs.

La idea no es memorizar términos.

El objetivo es comprender cómo se relacionan entre sí.

---

# Preguntas guía

Al finalizar la unidad, el estudiante debería poder responder:

```text
¿Qué es un cliente?

¿Qué es un servidor?

¿Qué ocurre cuando escribo una URL?

¿Qué es HTTP?

¿Qué diferencia existe entre GET y POST?

¿Qué significa un código 404?

¿Qué es JSON?

¿Qué es XML?

¿Qué es un servicio web?

¿Qué es una API REST?

¿Qué significa SPA?

¿Dónde se encuentra React dentro de una arquitectura web?
```

---

# Resultado esperado

Al finalizar este módulo, el estudiante deberá:

- Comprender el funcionamiento general de la Web.
- Diferenciar cliente y servidor.
- Interpretar solicitudes HTTP.
- Reconocer métodos HTTP.
- Comprender códigos de estado.
- Diferenciar JSON y XML.
- Comprender qué es un servicio web.
- Reconocer una API REST.
- Identificar algunas arquitecturas web.
- Realizar pruebas básicas sobre APIs.
- Relacionar estos conceptos con JavaScript y React.

---

# ¿Qué sigue?

Después de completar esta unidad comenzaremos la:

```text
Unidad 2: Introducción a las interfaces de usuario web
```

Trabajaremos progresivamente con:

```text
HTML
    ↓
CSS
    ↓
JavaScript
```

y comenzaremos a construir el **Proyecto Web Personal** que continuará evolucionando durante el resto del curso.