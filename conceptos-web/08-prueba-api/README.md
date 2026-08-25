# Laboratorio 08: ¿Cómo explorar una API antes de programarla?

**Nivel:** Básico

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?
- Laboratorio 02: Cliente y servidor.
- Laboratorio 03: ¿Cómo se comunican el cliente y el servidor?
- Laboratorio 04: ¿En qué formato viajan los datos?
- Laboratorio 05: ¿Cómo se comunican dos aplicaciones?
- Laboratorio 06: ¿Qué es realmente una API REST?

**Concepto principal:**

Explorar y comprender una API antes de consumirla desde una aplicación.

---

# Objetivo

Aprender a consultar una API, interpretar sus respuestas y comprender su funcionamiento antes de escribir código.

---

# Introducción

Hasta este momento hemos comprendido:

- Cómo aparece una página web.
- Cómo se comunican cliente y servidor.
- Qué es HTTP.
- Qué es JSON.
- Qué es una API REST.

Ahora surge una nueva pregunta.

> **¿Cómo puedo saber qué información devuelve una API sin programar?**

La respuesta consiste en utilizar herramientas que permitan enviar solicitudes HTTP y visualizar las respuestas.

---

# La gran pregunta

> **¿Cómo puedo probar una API antes de escribir una sola línea de código?**

---

# ¿Por qué probar una API?

Cuando un desarrollador comienza un proyecto normalmente necesita conocer:

- Qué información devuelve la API.
- Qué parámetros acepta.
- Qué métodos utiliza.
- Qué códigos de respuesta genera.
- Cómo está organizado el JSON.

Antes de programar resulta mucho más sencillo explorar la API.

---

# Herramientas utilizadas

Existen diferentes herramientas para realizar pruebas.

Entre las más conocidas se encuentran:

- Postman.
- Bruno.
- Insomnia.
- Thunder Client.

Todas cumplen el mismo propósito.

En este curso utilizaremos cualquiera de ellas para comprender el funcionamiento de una API.

El objetivo no es aprender una herramienta específica.

El objetivo es aprender a interpretar una API.

---

# Elementos que observaremos

Durante una consulta analizaremos:

- URL.
- Método HTTP.
- Parámetros.
- Encabezados.
- Código de respuesta.
- Tiempo de respuesta.
- Documento JSON.

---

# Ejemplo

Supongamos una API pública.

```text
GET

https://jsonplaceholder.typicode.com/users
```

La herramienta mostrará:

- Código 200.
- Encabezados.
- Tiempo de respuesta.
- Documento JSON.

---

# ¿Qué debemos analizar?

No basta con obtener una respuesta.

También debemos interpretar:

- ¿Qué representa cada objeto?
- ¿Qué propiedades contiene?
- ¿Qué tipo de dato posee cada propiedad?
- ¿Qué recurso consultamos?
- ¿Qué método utilizamos?

---

# Respuesta JSON

Una respuesta típica puede verse así:

```json
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "leanne@example.com"
    }
]
```

Debemos identificar:

- Objeto.
- Arreglo.
- Propiedades.
- Valores.

---

# Cambiando el recurso

Podemos consultar otro endpoint.

Por ejemplo:

```text
/users

/posts

/comments

/albums
```

Cada recurso devuelve información diferente.

---

# Cambiando el método

También podemos cambiar el método HTTP.

Por ejemplo:

```text
GET

POST

PUT

PATCH

DELETE
```

Cada uno produce un comportamiento diferente.

---

# Códigos de respuesta

Durante las pruebas debemos observar siempre el código HTTP.

Los más frecuentes son:

- 200 OK.
- 201 Created.
- 400 Bad Request.
- 401 Unauthorized.
- 403 Forbidden.
- 404 Not Found.
- 500 Internal Server Error.

---

# Antes de programar

Un desarrollador normalmente sigue este proceso:

```text
Leer documentación

↓

Explorar la API

↓

Analizar el JSON

↓

Comprender recursos

↓

Programar
```

No comienza escribiendo código.

Primero entiende cómo funciona el servicio.

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- Exploración de APIs.
- Documentación.
- Recursos.
- Endpoints.
- Métodos HTTP.
- Parámetros.
- Respuestas JSON.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Selecciona una API pública.
2. Consulta diferentes recursos.
3. Analiza el JSON recibido.
4. Interpreta los códigos HTTP.
5. Identifica los métodos disponibles.
6. Comprende la documentación de la API.

---

# Actividad propuesta

Utilice una API pública.

Por ejemplo:

- JSONPlaceholder.
- Open-Meteo.
- REST Countries.

Después responda:

- ¿Cuál fue el recurso consultado?
- ¿Qué método HTTP utilizó?
- ¿Qué código de respuesta recibió?
- ¿Qué información devolvió la API?
- ¿Qué propiedades contiene el JSON?

---

# Buenas prácticas

- Leer siempre la documentación.
- Explorar la API antes de programar.
- Analizar cuidadosamente el JSON.
- Comprender los recursos disponibles.
- Interpretar correctamente los códigos HTTP.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante será capaz de explorar una API, interpretar su respuesta y comprender cómo utilizarla posteriormente desde JavaScript y React.

---

# Conclusiones

Explorar una API antes de programar permite comprender su funcionamiento y reduce significativamente los errores durante el desarrollo.

Este proceso forma parte del trabajo cotidiano de cualquier desarrollador web.

---

# ¿Qué sigue?

Hasta este momento comprendemos cómo funciona la Web.

A partir del siguiente módulo comenzaremos a construir aplicaciones utilizando **React**.

Todo el conocimiento adquirido sobre:

- HTTP.
- JSON.
- REST.
- APIs.

será utilizado para consumir información real desde componentes React y construir aplicaciones web modernas.